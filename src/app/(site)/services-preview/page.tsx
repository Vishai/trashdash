import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Layout Preview",
  description: "Compare two service card layout options.",
};

const services = [
  { icon: "🛋️", title: "Furniture Removal", desc: "Couches, tables, chairs, mattresses, and more." },
  { icon: "🔌", title: "Appliance Removal", desc: "Refrigerators, washers, dryers, and other appliances." },
  { icon: "🌿", title: "Yard Waste", desc: "Branches, leaves, dirt, and landscaping debris." },
  { icon: "🏗️", title: "Construction Debris", desc: "Drywall, lumber, tile, and renovation waste." },
  { icon: "🏠", title: "Garage & Estate Cleanouts", desc: "Full cleanout services for any space." },
  { icon: "🏢", title: "Commercial Cleanouts", desc: "Office, retail, and property management cleanup." },
];

export default function ServicesPreviewPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Service Cards - Layout Comparison</h1>
          <p className="mt-3 text-lg text-gray-300">Pick which layout you prefer for the homepage service cards.</p>
        </div>
      </section>

      {/* Option A: Inline emoji + title */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="inline-block bg-brand-green text-white font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">Option A</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal mt-3">Inline - Emoji &amp; Title Side by Side</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">{s.title}</h3>
                </div>
                <p className="text-gray-500 mt-3">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <hr className="border-gray-300" />
      </div>

      {/* Option B: Centered (like About page) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="inline-block bg-brand-charcoal text-white font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">Option B</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal mt-3">Centered - Icon on Top</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="text-xl font-bold mt-3 text-brand-charcoal">{s.title}</h3>
                <p className="text-gray-500 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
