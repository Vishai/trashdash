"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

type Submission = {
  _id: string;
  formType: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  description: string;
  ref: string;
  createdAt: number;
  webhookStatus: string;
};

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    sent: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    pending: "bg-yellow-100 text-yellow-700",
    none: "bg-gray-100 text-gray-500",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[status] ?? colors.none}`}
    >
      {status}
    </span>
  );
}

function downloadCsv(submissions: Submission[]) {
  const headers = [
    "Date",
    "Form Type",
    "Name",
    "Phone",
    "Email",
    "Address",
    "Description",
    "Ref",
    "Webhook Status",
  ];
  const rows = submissions.map((s) => [
    new Date(s.createdAt).toLocaleString(),
    s.formType,
    s.name,
    s.phone,
    s.email ?? "",
    s.address,
    s.description,
    s.ref,
    s.webhookStatus,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((v) => `"${v.replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `trashdash-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function SubmissionsPage() {
  const submissions = useQuery(api.formSubmissions.list) as Submission[] | undefined;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const stats = useMemo(() => {
    if (!submissions) return null;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const thisMonth = submissions.filter((s) => s.createdAt >= monthStart);

    // Top ref
    const refCounts: Record<string, number> = {};
    for (const s of submissions) {
      if (s.ref) {
        refCounts[s.ref] = (refCounts[s.ref] || 0) + 1;
      }
    }
    const topRef = Object.entries(refCounts).sort((a, b) => b[1] - a[1])[0];

    const quotes = submissions.filter((s) => s.formType === "quote").length;
    const quickRequests = submissions.filter((s) => s.formType === "quick-request").length;

    return {
      total: submissions.length,
      thisMonth: thisMonth.length,
      topRef: topRef ? { slug: topRef[0], count: topRef[1] } : null,
      quotes,
      quickRequests,
    };
  }, [submissions]);

  if (submissions === undefined) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-charcoal text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">Form Submissions</h1>
              <p className="mt-2 text-gray-300">
                All quote and service requests with attribution data.
              </p>
            </div>
            <Link
              href="/tracking"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              &larr; Tracking Links
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">Total Submissions</p>
                <p className="text-3xl font-bold text-brand-charcoal">{stats.total}</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-3xl font-bold text-brand-charcoal">{stats.thisMonth}</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">Top Source</p>
                <p className="text-xl font-bold text-brand-charcoal">
                  {stats.topRef ? (
                    <>
                      {stats.topRef.slug}{" "}
                      <span className="text-sm font-normal text-gray-400">
                        ({stats.topRef.count})
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">By Type</p>
                <p className="text-sm font-semibold text-brand-charcoal mt-1">
                  {stats.quotes} quotes
                </p>
                <p className="text-sm font-semibold text-brand-charcoal">
                  {stats.quickRequests} quick requests
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => submissions.length > 0 && downloadCsv(submissions)}
              disabled={submissions.length === 0}
              className="text-sm px-4 py-2 rounded-lg border border-brand-green text-brand-green hover:bg-green-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Export CSV
            </button>
          </div>

          {/* Table */}
          {submissions.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No submissions yet.</p>
              <p className="mt-1">
                Submissions will appear here when customers use the quote or quick request forms.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left text-gray-500">
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Phone</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Source</th>
                      <th className="px-4 py-3 font-semibold">CRM</th>
                      <th className="px-4 py-3 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {submissions.map((s) => (
                      <SubmissionRow
                        key={s._id}
                        submission={s}
                        expanded={expandedId === s._id}
                        onToggle={() =>
                          setExpandedId(expandedId === s._id ? null : s._id)
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function SubmissionRow({
  submission: s,
  expanded,
  onToggle,
}: {
  submission: Submission;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        className="hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={onToggle}
      >
        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
          {new Date(s.createdAt).toLocaleDateString()}
        </td>
        <td className="px-4 py-3 font-medium text-brand-charcoal">{s.name}</td>
        <td className="px-4 py-3 text-gray-600">{s.phone}</td>
        <td className="px-4 py-3">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              s.formType === "quote"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {s.formType}
          </span>
        </td>
        <td className="px-4 py-3">
          {s.ref ? (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              {s.ref}
            </span>
          ) : (
            <span className="text-gray-400">direct</span>
          )}
        </td>
        <td className="px-4 py-3">
          <StatusBadge status={s.webhookStatus} />
        </td>
        <td className="px-4 py-3 text-gray-400">{expanded ? "▲" : "▼"}</td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan={7} className="px-4 py-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-brand-charcoal">Address</p>
                <p className="text-gray-600">{s.address}</p>
              </div>
              <div>
                <p className="font-semibold text-brand-charcoal">Email</p>
                <p className="text-gray-600">{s.email || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-semibold text-brand-charcoal">Description</p>
                <p className="text-gray-600">{s.description}</p>
              </div>
              <div>
                <p className="font-semibold text-brand-charcoal">Submitted</p>
                <p className="text-gray-600">
                  {new Date(s.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
