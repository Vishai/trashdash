import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: "🛋️", title: "Furniture Removal", desc: "Couches, tables, chairs, mattresses, and more." },
  { icon: "🔌", title: "Appliance Removal", desc: "Refrigerators, washers, dryers, and other appliances." },
  { icon: "🌿", title: "Yard Waste", desc: "Branches, leaves, dirt, and landscaping debris." },
  { icon: "🏗️", title: "Construction Debris", desc: "Drywall, lumber, tile, and renovation waste." },
  { icon: "🏠", title: "Garage & Estate Cleanouts", desc: "Full cleanout services for any space." },
  { icon: "🏢", title: "Commercial Cleanouts", desc: "Office, retail, and property management cleanup." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-charcoal to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Junk Removal{" "}
                <span className="text-brand-green">Made Easy</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-gray-300 font-medium">
                Fast &bull; Affordable &bull; Reliable
              </p>
              <p className="mt-6 text-gray-300 text-lg max-w-lg">
                Same day &amp; next day service available. No job too big or small &mdash; we do it all!
                Serving Salt Lake City and surrounding areas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href="tel:8015052929"
                  className="border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  Call (801) 505-2929
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/mascot-white.png"
                alt="TrashDash Mascot"
                width={350}
                height={350}
                className="w-64 md:w-80 h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-charcoal">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mt-3 text-lg">
            We handle it all so you don&apos;t have to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="text-xl font-bold mt-3 text-brand-charcoal">{s.title}</h3>
                <p className="text-gray-500 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-brand-green font-bold hover:text-brand-green-dark transition-colors text-lg"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-charcoal">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { step: "1", title: "Request a Quote", desc: "Call, text, or fill out our online form for a free estimate." },
              { step: "2", title: "We Show Up", desc: "Our team arrives on time, ready to haul your junk away." },
              { step: "3", title: "Junk Gone!", desc: "We load, haul, and dispose of everything responsibly." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mt-4 text-brand-charcoal">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Clear the Clutter?</h2>
          <p className="mt-3 text-lg text-green-100">
            Free estimates &bull; Same day service &bull; No hidden fees
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:8015052929"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-brand-green transition-colors"
            >
              Call (801) 505-2929
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
