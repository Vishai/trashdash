import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service junk removal including furniture, appliances, yard waste, construction debris, garage cleanouts, estate cleanouts, and commercial services.",
};

const residential = [
  { icon: "🛋️", title: "Furniture Removal", desc: "Couches, recliners, tables, chairs, desks, dressers, bed frames, mattresses, and more." },
  { icon: "🔌", title: "Appliance Removal", desc: "Refrigerators, washing machines, dryers, dishwashers, ovens, and other household appliances." },
  { icon: "🌿", title: "Yard Waste Removal", desc: "Branches, leaves, dirt, sod, landscaping debris, and green waste." },
  { icon: "🏠", title: "Garage & Basement Cleanouts", desc: "Full cleanout services for garages, basements, attics, and storage units." },
  { icon: "🏚️", title: "Estate Cleanouts", desc: "Compassionate and thorough estate cleanout services for families in transition." },
  { icon: "🛏️", title: "Mattress & Bulk Items", desc: "Mattresses, box springs, and other oversized items that are hard to move on your own." },
];

const commercial = [
  { icon: "🏢", title: "Office Cleanouts", desc: "Desks, cubicles, chairs, electronics, and general office junk." },
  { icon: "🏪", title: "Retail Junk Removal", desc: "Fixtures, displays, shelving, and excess inventory removal." },
  { icon: "🏘️", title: "Property Management", desc: "Tenant cleanouts, unit turnovers, and property maintenance debris." },
  { icon: "🏗️", title: "Construction Debris", desc: "Drywall, lumber, tile, flooring, cabinets, and renovation waste." },
];

const premium = [
  { icon: "⚡", title: "Same Day / Next Day Service", desc: "Need it gone fast? We offer same day and next day appointments." },
  { icon: "♻️", title: "Donation Drop-offs", desc: "Usable items are donated to local organizations whenever possible." },
  { icon: "🔨", title: "Light Demolition", desc: "Hot tubs, sheds, interior walls, flooring, cabinets, and more." },
];

function ServiceGrid({ items }: { items: { icon: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((s) => (
        <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <span className="text-4xl">{s.icon}</span>
          <h3 className="text-xl font-bold mt-3 text-brand-charcoal">{s.title}</h3>
          <p className="text-gray-500 mt-2">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
          <p className="mt-4 text-xl text-gray-300">
            No job too big or small - we do it all!
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-charcoal mb-8">Residential Services</h2>
          <ServiceGrid items={residential} />
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-charcoal mb-8">Commercial Services</h2>
          <ServiceGrid items={commercial} />
        </div>
      </section>

      {/* Premium */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-charcoal mb-8">Add-On &amp; Premium Services</h2>
          <ServiceGrid items={premium} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold">Not Sure What You Need?</h2>
          <p className="mt-3 text-lg text-green-100">Give us a call or request a free quote. We&apos;ll figure it out together.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-brand-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Get a Free Quote
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
