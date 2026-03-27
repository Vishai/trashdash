import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free junk removal estimate from TrashDash. Call (801) 505-2929 or fill out our form for fast, affordable service.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
