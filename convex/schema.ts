import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  trackingLinks: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_slug", ["slug"]),

  formSubmissions: defineTable({
    formType: v.string(),
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    address: v.string(),
    description: v.string(),
    ref: v.string(),
    createdAt: v.number(),
    webhookStatus: v.string(),
  }).index("by_ref", ["ref"]),
});
