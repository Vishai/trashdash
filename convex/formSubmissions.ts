import { query, mutation, internalAction, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    formType: v.string(),
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    address: v.string(),
    description: v.string(),
    ref: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("formSubmissions", {
      ...args,
      createdAt: Date.now(),
      webhookStatus: "pending",
    });
    await ctx.scheduler.runAfter(0, internal.formSubmissions.forwardToCrm, {
      submissionId: id,
    });
    return id;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("formSubmissions")
      .order("desc")
      .take(200);
  },
});

export const updateWebhookStatus = internalMutation({
  args: {
    id: v.id("formSubmissions"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { webhookStatus: args.status });
  },
});

export const forwardToCrm = internalAction({
  args: {
    submissionId: v.id("formSubmissions"),
  },
  handler: async (ctx, args) => {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (!webhookUrl) {
      await ctx.runMutation(internal.formSubmissions.updateWebhookStatus, {
        id: args.submissionId,
        status: "none",
      });
      return;
    }

    const submission = await ctx.runQuery(
      internal.formSubmissions.getById,
      { id: args.submissionId }
    );
    if (!submission) return;

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: submission.formType,
          name: submission.name,
          phone: submission.phone,
          email: submission.email ?? null,
          address: submission.address,
          description: submission.description,
          ref: submission.ref,
          submittedAt: new Date(submission.createdAt).toISOString(),
        }),
      });
      await ctx.runMutation(internal.formSubmissions.updateWebhookStatus, {
        id: args.submissionId,
        status: res.ok ? "sent" : "failed",
      });
    } catch {
      await ctx.runMutation(internal.formSubmissions.updateWebhookStatus, {
        id: args.submissionId,
        status: "failed",
      });
    }
  },
});

export const getById = internalQuery({
  args: { id: v.id("formSubmissions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
