// src/app/faqs/page.tsx
'use client'; // This page uses useState for accordion functionality

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component
import Link from 'next/link';   // Import Link component
// Removed 'type { Metadata } from 'next';' as it's no longer exported here.

// Removed: export const metadata block
// Metadata is now handled by the parent layout.tsx (Server Component)

// --- AccordionItem Component (Reusable) ---
interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode; // Allow ReactNode for richer content
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300 rounded-t-md"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-')}`}
        role="region"
        aria-labelledby={`faq-question-${question.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4 px-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// --- FAQsPage Component ---
export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of home decor products does Home Decor Lucknow offer?',
      answer: <>At Home Decor, Lucknow, we offer a diverse range of premium products including <strong>luxury bedsheets</strong>, <strong>custom blinds</strong>, <strong>elegant curtains</strong>, <strong>designer doormats</strong>, <strong>artisan carpets</strong>, <strong>artificial grass</strong>, <strong>dohars (AC comforters)</strong>, <strong>premium towels</strong>, <strong>sofa covers</strong>, <strong>cushion covers</strong>, <strong>masand covers</strong>, <strong>trendy wallpapers</strong>, <strong>center tables and covers</strong>, <strong>dining tables and covers</strong>, <strong>runners</strong>, <strong>mattresses</strong>, <strong>pillows and pillow covers</strong>, <strong>chair covers</strong>, <strong>sofa sets</strong>, and <strong>designer beds</strong>. We curate items to suit various styles and budgets for every home in Lucknow.</>
    },
    {
      question: 'Do you provide interior design services in Lucknow?',
      answer: <>Yes, absolutely! Home Decor offers comprehensive <strong>interior design services in Lucknow</strong>, Uttar Pradesh. Our expert team specializes in <strong>customized curtains and blinds</strong>, <strong>modular kitchen design and installation</strong>, <strong>sofa repair and upholstery</strong>, and <strong>bespoke mandir design and build</strong>. We provide personalized consultations to bring your vision to life.</>
    },
    {
      question: 'Where do you source your home decor products from?',
      answer: <>We pride ourselves on sourcing high-quality <strong>home decor products</strong> from reputable manufacturers and artisans <strong>from across India</strong>. Our network allows us to bring you unique and durable items, ensuring a diverse and exclusive collection for our clients in Lucknow.</>
    },
    {
      question: 'Do you offer home delivery for products in Lucknow?',
      answer: <>Yes, Home Decor provides convenient <strong>home delivery services</strong> for all our products within Lucknow and surrounding areas. Our team ensures your purchases are delivered safely and efficiently to your doorstep. Please inquire about delivery charges and timelines during your purchase.</>
    },
    {
      question: 'What is the address of your showroom in Lucknow?',
      answer: (
        <>
          You can visit our showroom at:
          <br /><br />
          <strong>Home Decor</strong><br />
          439, Kursi Hwy, Sector H,<br />
          Jankipuram, Lucknow, Uttar Pradesh 226021
          <br /><br />
          We look forward to welcoming you and helping you explore our collection!
        </>
      )
    },
    {
      question: 'Can I get customized curtains or blinds?',
      answer: <>Yes, <strong>customized curtains and blinds</strong> are one of our specialties. We offer a wide range of fabrics, styles, and finishes to perfectly match your interior decor and functional requirements. Our experts will take measurements and ensure a perfect fit for your windows in Lucknow.</>
    },
    {
      question: 'What is the process for a modular kitchen design consultation?',
      answer: <>Our <strong>modular kitchen design</strong> process begins with a free consultation at our Lucknow showroom or your home. We discuss your needs, preferences, and budget, then create a 3D design. Once approved, we handle the installation, ensuring a seamless and efficient transformation of your kitchen space.</>
    },
    {
      question: 'How do I book a sofa repair or upholstery service?',
      answer: <>To book <strong>sofa repair or upholstery services</strong> in Lucknow, simply contact us via phone or email, or visit our showroom. Our team will assess the condition of your sofa, discuss fabric options, and provide a detailed quote. We aim to restore your furniture to its former glory.</>
    },
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* FAQs Hero/Intro Section - UPDATED COLOR */}
      <section className="relative bg-gradient-to-br from-neutral-700 to-neutral-900 text-white py-16 md:py-24 text-center overflow-hidden rounded-b-xl shadow-lg">
        <Image
          src="/images/kitchen.jpg" // Unique image for this hero
          alt="Frequently Asked Questions about Home Decor Lucknow"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-30"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Find quick answers to common queries about our home decor products and interior design services in Lucknow.
          </p>
        </div>
      </section>

      {/* FAQs Content Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        {/* Call to Action - UPDATED COLOR */}
        <div className="text-center mt-12 p-6 bg-gray-100 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            If you couldn't find the answer you were looking for, don't hesitate to reach out to our friendly team.
          </p>
          <Link href="/contact" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us Directly
          </Link>
        </div>
      </section>
    </div>
  );
}
