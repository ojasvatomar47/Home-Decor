// src/components/Header.tsx
'use client'; // This component uses useState for menu toggle

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50 rounded-b-xl">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-3xl font-extrabold text-teal-700 hover:text-teal-900 transition duration-300">
          Home Decor
        </Link>

        {/* Mobile Menu Button (Hamburger) - visible only on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links - visible on medium and larger screens */}
        <ul className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-medium">
          <li>
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition duration-300 px-3 py-2 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-700 hover:text-teal-600 transition duration-300 px-3 py-2 rounded-md">
              Products
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 transition duration-300 px-3 py-2 rounded-md">
              Services
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="text-gray-700 hover:text-teal-600 transition duration-300 px-3 py-2 rounded-md">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition duration-300 px-3 py-2 rounded-md">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay/Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}>
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            // Prevent clicks inside the menu from closing it
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
                  aria-label="Close mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col space-y-4 text-xl font-medium">
                <li>
                  <Link href="/" onClick={closeMobileMenu} className="block text-gray-700 hover:text-teal-600 transition duration-300 py-2">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/products" onClick={closeMobileMenu} className="block text-gray-700 hover:text-teal-600 transition duration-300 py-2">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={closeMobileMenu} className="block text-gray-700 hover:text-teal-600 transition duration-300 py-2">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" onClick={closeMobileMenu} className="block text-gray-700 hover:text-teal-600 transition duration-300 py-2">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMobileMenu} className="block text-gray-700 hover:text-teal-600 transition duration-300 py-2">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
