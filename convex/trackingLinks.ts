import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("trackingLinks").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("trackingLinks", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("trackingLinks"),
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const remove = mutation({
  args: { id: v.id("trackingLinks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
