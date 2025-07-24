// src/components/ProductModal.tsx
'use client'; // This component manages its own state for visibility/transitions

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductModalProps {
  product: {
    name: string;
    image: string;
    description: string;
    // Removed 'href: string;' from here because the 'View All Products' link
    // will now always point to '/products', not a dynamic product.href.
    // If you later implement individual product pages, you might re-add this
    // and use it for a "Go to Product Page" link.
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null; // Don't render if no product is provided

  return (
    // Modal Overlay - ensures it covers the whole screen
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4
                 transition-opacity duration-300 opacity-100"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      {/* Modal Content - relative for absolute positioning of close button */}
      <div
        className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm md:max-w-4xl lg:max-w-5xl mx-auto
                   transform transition-transform duration-300 scale-100
                   max-h-[90vh] overflow-y-auto" // Added max-h and overflow-y for scrollability
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Close Button - positioned absolutely within the modal content, with higher z-index */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200
                     focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Explore this product and many more at our showroom in Lucknow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" onClick={onClose} className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full text-md font-semibold shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105 text-center">
                Enquire About This Product
              </Link>
              {/* This Link will now always point to the main /products page */}
              <Link href="/products" onClick={onClose} className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-md font-semibold shadow-md hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 text-center">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
