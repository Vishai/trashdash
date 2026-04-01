import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "TrashDash Junk Removal serves Salt Lake City and surrounding areas including West Valley City, Sandy, Draper, Murray, Taylorsville, and more.",
};

const areas = [
  "Salt Lake City",
  "West Valley City",
  "West Jordan",
  "Sandy",
  "Draper",
  "South Jordan",
  "Murray",
  "Midvale",
  "Taylorsville",
  "Cottonwood Heights",
  "Holladay",
  "Millcreek",
  "Riverton",
  "Herriman",
  "Magna",
  "Kearns",
  "Bountiful",
  "North Salt Lake",
  "Woods Cross",
  "Centerville",
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Service Area</h1>
          <p className="mt-4 text-xl text-gray-300">
            Proudly serving the Salt Lake City metro area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-brand-charcoal">Areas We Serve</h2>
            <p className="mt-4 text-gray-500 text-lg">
              We provide junk removal services throughout Salt Lake City and the surrounding
              communities. Don&apos;t see your area listed? Give us a call - we may still be
              able to help!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center font-semibold text-brand-charcoal"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-brand-charcoal">Don&apos;t See Your City?</h3>
            <p className="mt-2 text-gray-500">
              We&apos;re expanding our service area regularly. Contact us and we&apos;ll let you
              know if we can serve your location.
            </p>
            <div className="mt-4">
              <a
                href="tel:8015052929"
                className="text-brand-green font-bold text-lg hover:text-brand-green-dark transition-colors"
              >
                Call (801) 505-2929
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold">Need Junk Removal in Your Area?</h2>
          <p className="mt-3 text-lg text-green-100">Call or text us for a free estimate.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-brand-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Request a Quote
            </Link>
            <a href="tel:8015052929" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-brand-green transition-colors">
              Call (801) 505-2929
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
