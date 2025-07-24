// src/app/services/page.tsx
'use client'; // This page uses client-side interactivity

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Removed: import { getPlaceholderImage } from '../../lib/utils'; // Adjust path if needed

// Removed: export const metadata block
// Metadata is now handled by the parent layout.tsx (Server Component)

export default function ServicesPage() {
  const services = [
    // UPDATED: image paths to your actual files in public/images/
    { name: 'Customized Curtains & Blinds', image: '/images/cust-curtains.jpg', description: 'Tailored window treatments designed to perfectly match your interior aesthetic and functional needs, offering style, privacy, and light control for your Lucknow home.' },
    { name: 'Modular Kitchen Design & Installation', image: '/images/kitchen.jpg', description: 'Innovative and ergonomic modular kitchen solutions crafted for modern living. We design and install kitchens that blend beauty with maximum efficiency in your Lucknow residence.' },
    { name: 'Sofa Repair & Upholstery Services', image: '/images/sofa.jpg', description: 'Expert repair and re-upholstery services to bring new life to your cherished sofas and seating. Preserve your furniture\'s comfort and durability with our skilled craftsmen in Lucknow.' },
    { name: 'Bespoke Mandir Design & Build', image: '/images/mandir.jpg', description: 'Custom mandir designs that blend traditional aesthetics with contemporary elegance, creating a serene and spiritual sacred space uniquely tailored for your home in Lucknow.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Services Hero/Intro Section - UPDATED COLOR */}
      <section className="relative bg-gradient-to-br from-neutral-700 to-neutral-900 text-white py-16 md:py-24 text-center overflow-hidden rounded-b-xl shadow-lg">
        <Image
          src="/images/mandir.jpg" // <-- Use your actual services hero image
          alt="Interior Design Services in Lucknow"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-30"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Our Professional Interior Design Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Bringing your dream interiors to life with bespoke design solutions and expert craftsmanship in Lucknow.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Tailored Solutions for Your Space
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative w-full h-64">
                <Image
                  src={service.image} // Now directly using the image path from services array
                  alt={`Service: ${service.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{service.description}</p>
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-md font-medium hover:bg-blue-700 transition duration-300 shadow-md">
                  Enquire About This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action for Free Consultation */}
      <section className="bg-teal-700 text-white py-16 md:py-24 text-center rounded-xl mx-4 my-16 shadow-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for a Personalized Design Consultation?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Let our experts guide you through the process of creating your ideal living or working space in Lucknow.
          </p>
          <Link href="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            Book Your Free Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
}
