// src/components/Footer.tsx
'use client'; // <-- ADD THIS LINE AT THE VERY TOP

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-12 mt-16 rounded-t-xl shadow-inner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10z"></path>
                  </svg>
                  homedecortedhipuliya@gmail.com
                </a>
              </li>
              <li>
                <address className="not-italic text-sm leading-relaxed flex items-start justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>
                    Shop no 1-2 Prabhu Plaza, Tedhi Puliya,<br />
                    Sabji Mandi Red Light<br />
                    Kursi Road, Lucknow, Uttar Pradesh 226021
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/homedecortedhipuliya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/homedecortp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.06 2H24l-8.46 9.68L24 22h-6.13l-5.04-6.23L6.48 22H2.34l8.89-10.42L2 2h6.27l4.68 5.83L20.06 2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/homedecortedhipulia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.919c-1.505 0-1.797.715-1.797 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.127c.73 0 1.325-.597 1.325-1.334V1.333C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://in.pinterest.com/homedecortedhipuliya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.19 2.59 7.78 6.23 9.22-.09-.78-.17-1.98.04-2.83.19-.81 1.26-5.15 1.26-5.15s-.32-.66-.32-1.64c0-1.53.89-2.68 1.99-2.68.94 0 1.4.71 1.4 1.56 0 .95-.6 2.38-.91 3.65-.26 1.08.54 1.96 1.61 1.96 1.93 0 3.43-2.03 3.43-4.96 0-2.6-1.87-4.39-4.5-4.39-3.07 0-4.87 2.3-4.87 4.69 0 .93.36 1.93.81 2.47.09.11.1.21.08.33-.08.29-.28 1.14-.32 1.3-.05.2-.18.25-.42.15-1.55-.63-2.52-2.6-2.52-4.18 0-3.41 2.48-6.55 7.4-6.55 3.88 0 6.9 2.77 6.9 6.47 0 3.86-2.43 6.96-5.81 6.96-1.18 0-2.29-.61-2.67-1.32l-.73 2.78c-.27 1.03-1.01 2.31-1.5 3.08.96.3 1.97.46 3.02.46 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
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
      </div>
    </footer>
  );
}