// src/components/Footer.tsx
'use client'; // <-- ADD THIS LINE AT THE VERY TOP

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-12 mt-16 rounded-t-xl shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">

        {/* Column 1: Logo & About */}
        <div className="md:col-span-1">
          <Link href="/" className="text-3xl font-extrabold text-teal-400 hover:text-teal-300 transition duration-300 mb-4 inline-block">
            Home Decor
          </Link>
          <p className="text-sm leading-relaxed mt-2 max-w-xs md:max-w-none mx-auto md:mx-0">
            Your premier destination for exquisite home decor products and professional interior design services in Lucknow.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-teal-400 transition duration-300">Home</Link></li>
            <li><Link href="/products" className="hover:text-teal-400 transition duration-300">Products</Link></li>
            <li><Link href="/services" className="hover:text-teal-400 transition duration-300">Services</Link></li>
            <li><Link href="/faqs" className="hover:text-teal-400 transition duration-300">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:+919335199341"
                className="hover:text-teal-400 transition duration-300 flex items-center justify-center md:justify-start"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +91 93351 99341
              </a>
            </li>
            <li>
              <a
                href="tel:+919793239707"
                className="hover:text-teal-400 transition duration-300 flex items-center justify-center md:justify-start"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +91 97932 39707
              </a>
            </li>
            <li>
              <a
                href="mailto:homedecortedhipuliya@gmail.com"
                className="hover:text-teal-400 transition duration-300 flex items-center justify-center md:justify-start"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10z"
                  ></path>
                </svg>
                homedecortedhipuliya@gmail.com
              </a>
            </li>
            <li>
              <address className="not-italic text-sm leading-relaxed flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Shop no 1-2 Prabhu Plaza, Tedhi Puliya,<br />
                Sabji Mandi Red Light<br />
                Kursi Road, Lucknow, Uttar Pradesh 226021
              </address>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom section: Copyright and Legal Links */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} Home Decor. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
          <Link href="/privacy" className="hover:text-teal-400 transition duration-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-teal-400 transition duration-300">Terms of Service</Link>
          <Link href="/sitemap.xml" className="hover:text-teal-400 transition duration-300">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
