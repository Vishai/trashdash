import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Getting rid of junk is easy with TrashDash. Request a quote, we show up, and your junk is gone. Free estimates, no hidden fees.",
};

const steps = [
  {
    num: "1",
    title: "Request a Quote",
    desc: "Call us at (801) 505-2929, send a text, or fill out our online form. Describe what you need removed and we\u2019ll give you a free, no-obligation estimate.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Schedule Your Pickup",
    desc: "We\u2019ll work with your schedule to find a convenient time. Same day and next day appointments are often available.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "We Show Up & Load",
    desc: "Our professional, uniformed team arrives on time. We do all the heavy lifting - you just point at what needs to go.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Responsible Disposal",
    desc: "We recycle, donate, and responsibly dispose of your items. Usable goods are donated to local organizations whenever possible.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">How It Works</h1>
          <p className="mt-4 text-xl text-gray-300">Four simple steps to a junk-free space.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center text-xl font-extrabold">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-charcoal">{step.title}</h2>
                  <p className="mt-2 text-gray-500 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-charcoal text-center">Transparent Pricing</h2>
          <p className="text-center text-gray-500 mt-3 text-lg">No surprise fees. No hidden charges.</p>
          <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-brand-charcoal text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Load Size</th>
                  <th className="px-6 py-4 font-bold">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-6 py-4">Minimum (single items)</td><td className="px-6 py-4 font-semibold"><span className="hidden sm:inline">$99 - $149</span><span className="sm:hidden">$99+</span></td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Small Load (1/8 truck)</td><td className="px-6 py-4 font-semibold"><span className="hidden sm:inline">$149 - $249</span><span className="sm:hidden">$149+</span></td></tr>
                <tr><td className="px-6 py-4">Medium Load (1/4 truck)</td><td className="px-6 py-4 font-semibold"><span className="hidden sm:inline">$249 - $399</span><span className="sm:hidden">$249+</span></td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Large Load (1/2 truck)</td><td className="px-6 py-4 font-semibold"><span className="hidden sm:inline">$399 - $699</span><span className="sm:hidden">$399+</span></td></tr>
                <tr><td className="px-6 py-4">Full Truck Load</td><td className="px-6 py-4 font-semibold">$699+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Final pricing depends on volume, weight, item type, and accessibility. Contact us for an exact quote.
          </p>
        </div>
      </section>

      <section className="bg-brand-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold">Ready to Get Started?</h2>
          <p className="mt-3 text-lg text-green-100">Free estimates &bull; No obligation</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-brand-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Request a Free Quote
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
