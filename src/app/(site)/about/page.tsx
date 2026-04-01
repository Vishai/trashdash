import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TrashDash Junk Removal is a locally owned and operated junk removal service in Salt Lake City. Fast, reliable, and eco-conscious.",
};

const values = [
  { icon: "🚀", title: "Fast Response", desc: "Quick scheduling and same day service when you need it most." },
  { icon: "💬", title: "Transparent Pricing", desc: "Clear, upfront pricing with no surprise fees or hidden charges." },
  { icon: "👕", title: "Professional Service", desc: "Uniformed, friendly team that treats your property with respect." },
  { icon: "♻️", title: "Eco-Conscious", desc: "We recycle and donate whenever possible to minimize landfill waste." },
  { icon: "⭐", title: "Customer First", desc: "Your satisfaction is our top priority. We go above and beyond." },
  { icon: "💪", title: "No Job Too Big or Small", desc: "From a single item to a full property cleanout, we handle it all." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About TrashDash</h1>
          <p className="mt-4 text-xl text-gray-300">Locally owned. Community focused.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <Image
                src="/images/mascot-black.png"
                alt="TrashDash Mascot"
                width={300}
                height={300}
                className="w-56 md:w-72 h-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-brand-charcoal">Our Story</h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                TrashDash Junk Removal was founded with a simple mission: help people reclaim
                their space quickly and stress-free. We know that dealing with junk can be
                overwhelming - whether it&apos;s a garage full of clutter, old furniture, or
                construction debris from a renovation project.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                That&apos;s why we built TrashDash around speed, professionalism, and responsible
                disposal. We&apos;re not just hauling junk - we&apos;re helping our neighbors
                in Salt Lake City and the surrounding areas live in cleaner, more comfortable spaces.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                As a locally owned and operated business, we take pride in serving our community
                with integrity. Every job matters to us, whether it&apos;s a single mattress or a
                full estate cleanout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-charcoal text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="text-xl font-bold mt-3 text-brand-charcoal">{v.title}</h3>
                <p className="text-gray-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold">Let Us Help You Clear the Clutter</h2>
          <p className="mt-3 text-lg text-green-100">Licensed &amp; insured &bull; Free estimates &bull; Locally owned</p>
          <div className="mt-6">
            <Link href="/quote" className="bg-white text-brand-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
