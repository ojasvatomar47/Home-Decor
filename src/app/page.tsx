// src/app/page.tsx
'use client'; // Added because this page now uses useState for the modal

import React, { useState } from 'react'; // Import useState
import Image from 'next/image'; // For optimized images
import Link from 'next/link';   // For client-side navigation

import ProductModal from '../components/ProductModal'; // Import the new ProductModal component

// Define the Product interface (should be consistent across files that use it)
interface Product {
  name: string;
  href: string;
  image: string;
  description: string;
}

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Fixed: Unexpected any

  const featuredProducts = [
    // UPDATED: image paths to your actual files in public/images/
    { name: 'Luxury Bedsheets', href: '/products', image: '/images/bedsheet.jpg', description: 'Indulge in supreme comfort and elegance with our curated collection of luxury bedsheets, perfect for a restful sanctuary.' },
    { name: 'Custom Blinds & Curtains', href: '/products', image: '/images/blinds.jpg', description: 'Tailored window solutions offering privacy, light control, and an exquisite touch to your interiors.' },
    { name: 'Artisan Carpets & Runners', href: '/products', image: '/images/carpets.jpg', description: 'Hand-knotted and premium quality carpets to add warmth, texture, and a foundation of style to any room.' },
    { name: 'Designer Sofa & Cushion Covers', href: '/products', image: '/images/sofa-cover.jpg', description: 'Refresh your living space with our range of stylish sofa and cushion covers, blending comfort with contemporary design.' },
  ];

  const whyChooseUsPoints = [
    { title: 'Local Expertise', icon: '📍', description: 'Deep understanding of Lucknow\'s design aesthetics and local preferences.' },
    { title: 'Personalized Service', icon: '🤝', description: 'Dedicated consultation and bespoke solutions tailored to your unique vision.' },
    { title: 'Premium Quality', icon: '✨', description: 'Curated selection of high-quality products and materials for lasting beauty.' },
    { title: 'Comprehensive Solutions', icon: '🛋️', description: 'From products to services, we offer everything to perfect your home.' },
  ];

  const openProductModal = (product: Product) => { // Fixed: Unexpected any
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden pt-20 md:pt-0">
        <Image
          src="/images/curtains.jpg"
          alt="Elegant interior design showcase by Home Decor Lucknow"
          fill
          style={{ objectFit: 'cover' }}
          className="blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-6 py-16 md:py-0 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in-down">
            Elevate Your Home with Exquisite Decor in Lucknow
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-md animate-fade-in-up">
            Home Decor: Lucknow&apos;s trusted destination for premium furnishings and tailored interior design services.
          </p> {/* Fixed: ' */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <Link href="/products" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              Explore Home Decor Products
            </Link>
            <Link href="/services" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              Discover Our Design Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Your Premier Home Decor Destination in Lucknow
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          At <strong>Home Decor, Lucknow</strong>, we are dedicated to transforming your living and working spaces into beautiful, functional, and personalized environments. Located conveniently on Kursi Highway, Jankipuram, we bring years of expertise in interior design and a meticulously curated selection of high-quality furnishings. From contemporary flair to traditional elegance, our team works closely with you to understand your vision and deliver exceptional results that elevate your everyday living.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Why Choose Home Decor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Discover Our Handpicked Home Decor Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={`Home Decor Product: ${product.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-1">{product.description}</p>
                <button
                  onClick={() => openProductModal(product)}
                  className="w-full inline-block text-center bg-teal-600 text-white px-5 py-2 rounded-full text-md font-medium hover:bg-teal-700 transition duration-300 shadow-md"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
            Browse All Home Decor Items
          </Link>
        </div>
      </section>

      {/* Call to Action for Services */}
      <section className="bg-neutral-800 text-white py-16 md:py-24 text-center rounded-xl mx-4 my-16 shadow-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Redefine Your Space in Lucknow?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            From custom designs to full renovations, our expert interior design services are tailored to bring your vision to life, right here in Lucknow.
          </p>
          <Link href="/services" className="inline-block bg-white text-neutral-800 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            Discover Our Interior Design Services
          </Link>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-yellow-50 rounded-xl shadow-inner mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Visit Our Showroom in Lucknow
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Experience the quality and artistry of our home decor products and discuss your design needs with our experts. We&apos;re conveniently located at:
        </p>
        <address className="not-italic text-xl font-semibold text-gray-800 mb-6">
          439, Kursi Hwy, Sector H,<br/>
          Jankipuram, Lucknow, Uttar Pradesh 226021
        </address>
        <p className="text-base text-gray-600 mb-8">
          <strong>Business Hours:</strong> Monday - Saturday, 10:00 AM - 7:00 PM <br/>
          (Closed on Sundays)
        </p>
        {/* <div className="w-full rounded-lg overflow-hidden shadow-md mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.118029013063!2d80.95378991499999!3d26.905429200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995700217a1dcf%3A0x31fa6573c35b4507!2sHome%20Decor%20Furnishing%20Store!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="md:h-80"
            style={{ objectFit: 'cover' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Home Decor Furnishing Store Location on Google Maps"
          ></iframe>
        </div> */}
        <div className="mt-8">
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Home+Decor+Furnishing+Store,+439,+Kursi+Hwy,+Sector+H,+Jankipuram,+Lucknow,+Uttar+Pradesh+226021"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Open in Google Maps
          </Link>
        </div>
      </section>

      {/* Testimonials/Client Showcase */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-gray-100 rounded-xl shadow-inner">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          What Our Lucknow Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="italic text-gray-700 mb-4">
              &quot;Home Decor in Lucknow truly transformed my apartment near Gomti Nagar! Their bedsheets are incredibly luxurious, and the advice for my living room setup was invaluable.&quot;
            </p>
            <p className="font-semibold text-gray-800">- Priya Sharma, Lucknow</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="italic text-gray-700 mb-4">
              &quot;The modular kitchen designed by Home Decor is a dream come true for our Jankipuram home. Functional, stylish, and perfect for our family. Highly recommended for interior design in Lucknow!&quot;
            </p>
            <p className="font-semibold text-gray-800">- Rahul Singh, Lucknow</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Product Modal Component */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </div>
  );
}
