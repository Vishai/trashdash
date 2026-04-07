"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";

const SITE_URL = "https://trashdash.com";

type TrackingLink = {
  _id: Id<"trackingLinks">;
  name: string;
  slug: string;
  category: string;
  notes?: string;
  createdAt: number;
};

function qrUrl(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(url)}`;
}

async function downloadQr(url: string, filename: string) {
  const res = await fetch(qrUrl(url));
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${filename}.png`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function TrackingPage() {
  const links = useQuery(api.trackingLinks.list);
  const addLink = useMutation(api.trackingLinks.add);
  const updateLink = useMutation(api.trackingLinks.update);
  const removeLink = useMutation(api.trackingLinks.remove);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<Id<"trackingLinks"> | null>(null);
  const [form, setForm] = useState({ name: "", slug: "", category: "", notes: "" });
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Derive unique categories from existing links
  const categories = useMemo(() => {
    if (!links) return [];
    const cats = [...new Set(links.map((l) => l.category))];
    cats.sort((a, b) => a.localeCompare(b));
    return cats;
  }, [links]);

  // Group links by category
  const grouped = useMemo(() => {
    if (!links) return {};
    const filtered =
      categoryFilter === "all" ? links : links.filter((l) => l.category === categoryFilter);
    const groups: Record<string, TrackingLink[]> = {};
    for (const link of filtered) {
      if (!groups[link.category]) groups[link.category] = [];
      groups[link.category].push(link);
    }
    // Sort within each group by name
    for (const cat of Object.keys(groups)) {
      groups[cat].sort((a, b) => a.name.localeCompare(b.name));
    }
    return groups;
  }, [links, categoryFilter]);

  function resetForm() {
    setForm({ name: "", slug: "", category: "", notes: "" });
    setShowForm(false);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const slug = form.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-");
    if (editingId) {
      await updateLink({
        id: editingId,
        name: form.name,
        slug,
        category: form.category,
        notes: form.notes || undefined,
      });
    } else {
      await addLink({
        name: form.name,
        slug,
        category: form.category,
        notes: form.notes || undefined,
      });
    }
    resetForm();
  }

  function startEdit(link: TrackingLink) {
    setForm({
      name: link.name,
      slug: link.slug,
      category: link.category,
      notes: link.notes ?? "",
    });
    setEditingId(link._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: Id<"trackingLinks">) {
    if (confirm("Delete this tracking link?")) {
      await removeLink({ id });
    }
  }

  if (links === undefined) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-charcoal text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Attribution Tracking Links</h1>
          <p className="mt-2 text-gray-300">
            Create and manage tracking links for crew referrals, campaigns, billboards, and more.
          </p>
          <Link
            href="/tracking/submissions"
            className="mt-4 inline-block text-sm bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg transition-colors"
          >
            View Submissions &rarr;
          </Link>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Add / Edit Form */}
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="mb-8 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              + New Tracking Link
            </button>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mb-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4"
            >
              <h2 className="text-xl font-bold text-brand-charcoal">
                {editingId ? "Edit Tracking Link" : "New Tracking Link"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    placeholder="e.g. Mike - Crew Referral"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Slug * <span className="font-normal text-gray-400">(used in ?ref=slug)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    placeholder="e.g. mike"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-1">
                  Category *
                </label>
                <input
                  type="text"
                  required
                  list="category-suggestions"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                  placeholder="e.g. Crew, Campaign, Billboard, Promotion"
                />
                <datalist id="category-suggestions">
                  {categories.map((cat) => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-1">
                  Notes <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none resize-vertical"
                  placeholder="Any extra context..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  {editingId ? "Save Changes" : "Create Link"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Category filter */}
          {categories.length > 1 && (
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  categoryFilter === "all"
                    ? "bg-brand-charcoal text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All ({links.length})
              </button>
              {categories.map((cat) => {
                const count = links.filter((l) => l.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      categoryFilter === cat
                        ? "bg-brand-charcoal text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Links grouped by category */}
          {links.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No tracking links yet.</p>
              <p className="mt-1">Click &quot;+ New Tracking Link&quot; to create your first one.</p>
            </div>
          ) : (
            Object.entries(grouped)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, catLinks]) => (
                <div key={category} className="mb-10">
                  <h2 className="text-2xl font-bold text-brand-charcoal mb-4">{category}</h2>
                  <div className="space-y-4">
                    {catLinks.map((link) => {
                      const quoteUrl = `${SITE_URL}/quote?ref=${link.slug}`;
                      const quickUrl = `${SITE_URL}/quick-request?ref=${link.slug}`;
                      return (
                        <div
                          key={link._id}
                          className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-bold text-brand-charcoal">
                                {link.name}{" "}
                                <span className="text-sm font-normal text-gray-400">
                                  (ref={link.slug})
                                </span>
                              </h3>
                              {link.notes && (
                                <p className="text-sm text-gray-500 mt-1">{link.notes}</p>
                              )}
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <button
                                onClick={() => startEdit(link)}
                                className="text-sm px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(link._id)}
                                className="text-sm px-3 py-1 rounded border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-brand-green mb-1 text-sm">
                                Quote Page
                              </h4>
                              <p className="text-xs text-gray-500 break-all">{quoteUrl}</p>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={qrUrl(quoteUrl)}
                                alt={`QR code for ${link.name} quote link`}
                                width={140}
                                height={140}
                                className="mt-2"
                              />
                              <button
                                onClick={() => downloadQr(quoteUrl, `${link.slug}-quote`)}
                                className="mt-2 text-xs px-3 py-1 rounded border border-brand-green text-brand-green hover:bg-green-50 transition-colors"
                              >
                                Download QR
                              </button>
                            </div>
                            <div>
                              <h4 className="font-semibold text-brand-green mb-1 text-sm">
                                Quick Request
                              </h4>
                              <p className="text-xs text-gray-500 break-all">{quickUrl}</p>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={qrUrl(quickUrl)}
                                alt={`QR code for ${link.name} quick request link`}
                                width={140}
                                height={140}
                                className="mt-2"
                              />
                              <button
                                onClick={() => downloadQr(quickUrl, `${link.slug}-quick-request`)}
                                className="mt-2 text-xs px-3 py-1 rounded border border-brand-green text-brand-green hover:bg-green-50 transition-colors"
                              >
                                Download QR
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
          )}
        </div>
      </section>
    </>
  );
}
