// src/app/contact/page.tsx
'use client'; // Still needed for Image and Link components from 'next'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Removed 'type { Metadata } from 'next';' as it's no longer exported here.

// Removed: import { getPlaceholderImage } from '../../lib/utils'; // Adjust path if needed

// Removed: export const metadata block
// Metadata is now handled by the parent layout.tsx (Server Component)

export default function ContactPage() {
  // No custom handleSubmit function or useState for form data needed for basic Netlify Forms.
  // Netlify automatically intercepts submissions when data-netlify="true" is present.

  return (
    <div className="bg-gray-50">
      {/* Contact Hero/Intro Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-16 md:py-24 text-center overflow-hidden rounded-b-xl shadow-lg">
        <Image
          src="/images/cust-curtains.jpg" // Assuming you have a contact-specific hero image
          alt="Contact Home Decor Lucknow"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-30"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Get in Touch with Home Decor
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            We'd love to hear from you! Reach out to our team in Lucknow for any inquiries about products, services, or consultations.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Send Us a Message
          </h2>
          {/* Netlify Forms integration: Add data-netlify="true" and a name attribute */}
          {/* Removed onSubmit handler as Netlify handles submission directly */}
          <form name="contact-form" method="POST" data-netlify="true" className="space-y-6">
            {/* IMPORTANT: Add a hidden input for form-name for Netlify to detect it correctly */}
            <input type="hidden" name="form-name" value="contact-form" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name" // 'name' attribute is crucial for form submission
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Full Name"
                required // Name is mandatory
              />
            </div>
            {/* Single field for Email ID / Phone Number */}
            <div>
              <label htmlFor="contact_info" className="block text-sm font-medium text-gray-700 mb-1">Your Email ID or Phone Number</label>
              <input
                type="text" // Generic text type for email or phone
                id="contact_info"
                name="contact_info" // Generic name to capture either email or phone
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="e.g., you@example.com or +91 9876543210"
                required // This single field is now mandatory
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="_subject" // Netlify recognizes _subject for email subject
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Regarding products, services, etc."
                required // Subject is mandatory
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message" // 'name' attribute is crucial
                rows={5}
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Tell us more about your needs..."
                required // Message is mandatory
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-md transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Our Details & Location
            </h2>
            <div className="space-y-6 text-gray-800">
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <address className="not-italic">
                  439, Kursi Hwy, Sector H,<br/>
                  Jankipuram, Lucknow, Uttar Pradesh 226021
                </address>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+919335199341" className="hover:underline">+91 93351 99341</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10z"></path></svg>
                <a href="mailto:info@yourdomain.com" className="hover:underline">info@yourdomain.com</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>Mon-Sun: 9:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.118029013063!2d80.95378991499999!3d26.905429200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995700217a1dcf%3A0x31fa6573c35b4507!2sHome%20Decor%20Furnishing%20Store!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin" // Replace with your actual embed URL
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false} // Set to false to prevent full screen for better UX on page
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Home Decor Furnishing Store Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
