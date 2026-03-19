import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-full.png"
              alt="TrashDash Junk Removal"
              width={200}
              height={64}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mt-2">
              Fast, affordable, and reliable junk removal in Salt Lake City and surrounding areas.
            </p>
            <p className="text-gray-300 text-sm mt-2">Locally Owned &amp; Operated</p>
            <p className="text-gray-300 text-sm">Licensed &amp; Insured</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-brand-green transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link href="/service-area" className="hover:text-brand-green transition-colors">Service Area</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:8015052929" className="hover:text-brand-green transition-colors">
                  (801) 505-2929
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Salt Lake City &amp; Surrounding Areas
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block text-sm uppercase"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TrashDash Junk Removal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
