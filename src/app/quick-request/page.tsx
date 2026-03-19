"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export default function QuickRequestPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with CRM/FSM system
    setSubmitted(true);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-charcoal to-gray-800 py-8 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Image
            src="/images/logo-full.png"
            alt="TrashDash Junk Removal"
            width={250}
            height={80}
            className="mx-auto h-16 w-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">&#10003;</div>
              <h2 className="text-2xl font-bold text-brand-green">Request Submitted!</h2>
              <p className="mt-2 text-gray-600">
                We&apos;ll be in touch shortly with your free estimate.
              </p>
              <a
                href="tel:8015052929"
                className="mt-6 inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Call Now: (801) 505-2929
              </a>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-extrabold text-brand-charcoal text-center">
                Quick Service Request
              </h1>
              <p className="text-gray-500 text-center mt-1 text-sm">
                Get a free estimate in minutes!
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="qr-name" className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="qr-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="qr-phone" className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="qr-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    placeholder="(801) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="qr-address" className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Service Address *
                  </label>
                  <input
                    type="text"
                    id="qr-address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    placeholder="123 Main St, Salt Lake City, UT"
                  />
                </div>

                <div>
                  <label htmlFor="qr-description" className="block text-sm font-semibold text-brand-charcoal mb-1">
                    What needs to go? *
                  </label>
                  <textarea
                    id="qr-description"
                    name="description"
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none resize-vertical"
                    placeholder="Old couch, broken appliance, yard debris..."
                  />
                </div>

                <div>
                  <label htmlFor="qr-photos" className="block text-sm font-semibold text-brand-charcoal mb-1">
                    Photo (optional)
                  </label>
                  <input
                    type="file"
                    id="qr-photos"
                    name="photos"
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-green file:text-white file:font-semibold file:cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-4 rounded-lg text-lg transition-colors"
                >
                  Get My Free Estimate
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">or call/text us directly</p>
                <a
                  href="tel:8015052929"
                  className="text-brand-green font-bold text-lg hover:text-brand-green-dark transition-colors"
                >
                  (801) 505-2929
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
