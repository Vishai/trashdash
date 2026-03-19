import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Service Request",
  description:
    "Quickly request junk removal service from TrashDash. Scan, submit, done. Free estimates.",
};

export default function QuickRequestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
