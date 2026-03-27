import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-charcoal to-gray-800 text-white px-4">
      <Image
        src="/images/mascot-white.png"
        alt="TrashDash Mascot"
        width={200}
        height={200}
        className="w-40 h-auto mb-8 opacity-80"
      />
      <h1 className="text-6xl md:text-8xl font-extrabold text-brand-green">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-3 text-lg text-center max-w-md">
        Looks like this page has already been hauled away! Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
        >
          Go Home
        </Link>
        <Link
          href="/quote"
          className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
        >
          Get a Free Quote
        </Link>
      </div>
      <a
        href="tel:8015052929"
        className="mt-6 text-brand-yellow hover:text-yellow-300 font-semibold transition-colors"
      >
        Or call us: (801) 505-2929
      </a>
    </div>
  );
}
