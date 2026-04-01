import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating mobile CTA — visible only on small screens */}
      <Link
        href="/quote"
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-brand-green hover:bg-brand-green-dark text-white font-bold w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-colors"
        aria-label="Get a free quote"
      >
        +
      </Link>
    </>
  );
}
