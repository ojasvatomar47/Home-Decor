// src/app/products/page.tsx
'use client'; // Added because this page now uses useState for the modal

import React, { useState } from 'react'; // Import useState
import Image from 'next/image';
import Link from 'next/link';
// Removed: import { getPlaceholderImage } from '../../lib/utils'; // Adjust path if needed
import ProductModal from '../../components/ProductModal'; // Import ProductModal

// Removed: export const metadata block
// Metadata is now handled by the parent layout.tsx (Server Component)

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // State to hold product data for modal

  const products = [
    // UPDATED: image paths to your actual files in public/images/
    { name: 'Luxury Bedsheets', image: '/images/bedsheet.jpg', description: 'Indulge in supreme comfort and elegance with our curated collection of luxury bedsheets, perfect for a restful sanctuary. Crafted from the finest materials, these bedsheets promise unparalleled softness and durability, transforming your bedroom into a haven of tranquility.' },
    { name: 'Blinds', image: '/images/blinds.jpg', description: 'Stylish and functional blinds for light control and privacy. Our range includes Venetian, vertical, roller, and Roman blinds, available in various materials and colors to complement any interior design theme. Perfect for modern homes in Lucknow.' },
    { name: 'Curtains', image: '/images/curtains.jpg', description: 'Elegant curtains to enhance the aesthetics of your windows. Choose from a vast selection of fabrics, patterns, and heading styles, including sheer, blackout, and thermal options. Our custom curtain services ensure a perfect fit for every window.' },
    { name: 'Doormats', image: '/images/doormat.jpeg', description: 'Make a stylish first impression with our welcoming and durable doormats, blending functionality with aesthetics. Designed to trap dirt and moisture, they keep your home clean while adding a touch of personality to your entryway.' },
    { name: 'Carpets', image: '/images/carpets.jpg', description: 'Add warmth, texture, and a foundation of style to any room with our hand-knotted and premium quality carpets. From traditional Persian designs to contemporary abstract patterns, our carpets elevate your living space with comfort and luxury.' },
    { name: 'Artificial Grass', image: '/images/grass.jpg', description: 'Create a vibrant, maintenance-free green space indoors or outdoors with our realistic artificial grass solutions. Perfect for balconies, terraces, or indoor decor, it offers the beauty of natural grass without the upkeep.' },
    { name: 'Dohar (AC Comforter)', image: '/images/dohar.jpg', description: 'Experience lightweight warmth and comfort with our soft dohars, ideal for air-conditioned environments. Made from breathable fabrics, these comforters provide just the right amount of warmth without feeling heavy, ensuring a comfortable sleep.' },
    { name: 'Towels', image: '/images/towel.jpeg', description: 'Wrap yourself in softness with our highly absorbent and luxurious towel sets, perfect for everyday indulgence. Crafted from premium cotton, our towels are soft, durable, and come in a range of colors to match your bathroom decor.' },
    { name: 'Sofa Cover', image: '/images/sofa-cover.jpg', description: 'Protect and refresh your sofa\'s look with our durable and fashionable sofa covers, available in various patterns and fabrics. An easy way to update your living room decor and extend the life of your furniture.' },
    { name: 'Cushion Cover', image: '/images/cushion-cover.jpg', description: 'Add a pop of color and personality to your living space with our diverse range of decorative cushion covers. Perfect for mixing and matching, they instantly uplift your sofa or bed with texture and style.' },
    { name: 'Masand Cover', image: '/images/load-cover.jpg', description: 'Custom-fitted covers for traditional Indian masand seating, combining cultural aesthetics with modern durability. Our masand covers are designed to protect and beautify your traditional seating arrangements.' },
    { name: 'Wallpaper', image: '/images/room-wallpaper.jpg', description: 'Transform your walls instantly with our extensive collection of wallpapers, from subtle textures to bold patterns. Easy to install and durable, our wallpapers offer a quick and effective way to refresh your interiors.' },
    { name: 'Center Table', image: '/images/center-table.jpg', description: 'Discover stylish center tables that become the focal point of your living room, complete with matching protective covers. Our designs range from contemporary minimalist to classic ornate, fitting any decor.' },
    { name: 'Dining Table', image: '/images/dining-table.jpg', description: 'Create memorable dining experiences with our elegant dining tables and coordinating covers, designed for every home. Choose from various sizes and materials to suit your family\'s needs and dining space.' },
    { name: 'Runner', image: '/images/bed-runner.jpg', description: 'Enhance your tables and hallways with our chic runners, adding a touch of sophistication and protecting surfaces. Available in a variety of materials and designs, they complement your existing decor beautifully.' },
    { name: 'Mattress', image: '/images/mattress.jpg', description: 'Invest in restful sleep with our range of comfortable and supportive mattresses, designed for ultimate relaxation. Explore options from memory foam to orthopedic, ensuring a perfect night\'s rest.' },
    { name: 'Pillow and Pillow Cover', image: '/images/pillow.jpeg', description: 'Find the perfect blend of support and softness with our pillows, complemented by a variety of stylish covers.' },
    { name: 'Chair Cover', image: '/images/chair-cover.jpg', description: 'Give your chairs a fresh new look and protect them from wear with our custom-fit chair covers.' },
    { name: 'Sofa', image: '/images/sofa.jpg', description: 'Browse our collection of comfortable and aesthetically pleasing sofa sets, with optional matching covers for longevity.' },
    { name: 'Bed', image: '/images/bed.jpeg', description: 'Craft your dream bedroom with our designer beds, offering a blend of luxurious comfort and contemporary style.' },
  ];

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50">
      {/* Products Hero/Intro Section */}
      <section className="relative bg-gradient-to-br from-teal-500 to-blue-600 text-white py-16 md:py-24 text-center overflow-hidden rounded-b-xl shadow-lg">
        <Image
          src="/images/sofa.jpg" // <-- Use your actual products hero image
          alt="Home Decor Products Collection"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-30"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Explore Our Exquisite Home Decor Collection
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Discover a world of premium furnishings and accessories designed to elevate every corner of your home in Lucknow.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Our Curated Selection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative w-full h-56">
                <Image
                  src={product.image} // Now directly using the image path from products array
                  alt={`Product: ${product.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                {/* Product Name: Truncate to 1 line */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                {/* Product Description: Truncate to 1 line */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-1">{product.description}</p>
                <button
                  onClick={() => openProductModal(product)}
                  className="w-full inline-block text-center bg-teal-600 text-white px-5 py-2 rounded-full text-md font-medium hover:bg-teal-700 transition duration-300 shadow-md"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action for Custom Orders/Consultation */}
      <section className="bg-neutral-800 text-white py-16 md:py-24 text-center rounded-xl mx-4 my-16 shadow-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We offer custom orders and personalized consultations to help you find or create the perfect piece for your home.
          </p>
          <Link href="/contact" className="inline-block bg-white text-neutral-800 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            Request a Custom Order
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
