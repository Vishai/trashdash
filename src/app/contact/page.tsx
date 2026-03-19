"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with CRM/FSM system
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300">
            Get a free, no-obligation estimate today.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-charcoal">Request a Free Quote</h2>
              <p className="mt-2 text-gray-500">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">&#10003;</div>
                  <h3 className="text-2xl font-bold text-brand-green">Request Submitted!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you! We&apos;ll be in touch shortly with your free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-charcoal mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                        placeholder="(801) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-brand-charcoal mb-1">
                      Service Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                      placeholder="123 Main St, Salt Lake City, UT"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-brand-charcoal mb-1">
                      What do you need removed? *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none resize-vertical"
                      placeholder="Describe the items you need removed..."
                    />
                  </div>

                  <div>
                    <label htmlFor="photos" className="block text-sm font-semibold text-brand-charcoal mb-1">
                      Photos (optional)
                    </label>
                    <input
                      type="file"
                      id="photos"
                      name="photos"
                      multiple
                      accept="image/*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-green file:text-white file:font-semibold file:cursor-pointer"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-brand-charcoal">Other Ways to Reach Us</h3>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-charcoal">Call or Text</h4>
                    <a
                      href="tel:8015052929"
                      className="text-brand-green text-xl font-bold hover:text-brand-green-dark transition-colors"
                    >
                      (801) 505-2929
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-charcoal">Service Area</h4>
                    <p className="text-gray-500">Salt Lake City &amp; Surrounding Areas</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-charcoal">Hours</h4>
                    <p className="text-gray-500">Monday &ndash; Saturday: 7:00 AM &ndash; 7:00 PM</p>
                    <p className="text-gray-500">Sunday: By appointment</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-brand-green rounded-xl text-white">
                  <h4 className="font-bold text-lg">Why Choose TrashDash?</h4>
                  <ul className="mt-3 space-y-2 text-green-100">
                    <li>&#10003; Free, no-obligation estimates</li>
                    <li>&#10003; Same day &amp; next day service</li>
                    <li>&#10003; Transparent, upfront pricing</li>
                    <li>&#10003; Licensed &amp; insured</li>
                    <li>&#10003; Eco-friendly disposal</li>
                    <li>&#10003; Locally owned &amp; operated</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
