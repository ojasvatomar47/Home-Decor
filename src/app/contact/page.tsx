'use client'; // This directive is crucial for client-side rendering

import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 font-sans"> {/* Added font-sans for Inter font */}
      {/* Contact Hero/Intro Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-16 md:py-24 text-center overflow-hidden rounded-b-xl shadow-lg">
        <Image
          src="/images/cust-curtains.jpg"
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
            We&apos;d love to hear from you! Reach out to our team in Lucknow for any inquiries about products, services, or consultations.
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
          {/* Formspree integration: action points to your Formspree endpoint */}
          <form
            action="https://formspree.io/f/meozggbe" // Your Formspree endpoint
            method="POST" // Must be POST for Formspree
            className="space-y-6"
          >
            {/* Formspree handles spam protection, so no need for data-netlify-honeypot or hidden bot-field */}
            {/* Formspree also doesn't require a hidden 'form-name' input like Netlify */}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name" // Name attribute for Formspree to capture data
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Full Name"
                required
              />
            </div>

            <div>
              <label htmlFor="contact_info" className="block text-sm font-medium text-gray-700 mb-1">Your Email ID or Phone Number</label>
              <input
                type="text"
                id="contact_info"
                name="contact_info" // Name attribute for Formspree to capture data
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="e.g., you@example.com or +91 9876543210"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="_subject" // Formspree uses '_subject' for the email subject line
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Regarding products, services, etc."
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message" // Name attribute for Formspree to capture data
                rows={5}
                className="mt-1 block text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-4 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Tell us more about your needs..."
                required
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
                  Shop no 1-2 Prabhu Plaza, Tedhi Puliya,<br /> Sabji Mandi Red Light
                  Kursi Road, Lucknow, Uttar Pradesh 226021
                </address>
              </div>
              {/* New Email Address Entry */}
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:homedecortedhipuliya@gmail.com" className="hover:underline">homedecortedhipuliya@gmail.com</a> {/* Example email, replace with actual */}
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg
                  className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <a href="tel:+919335199341" className="hover:underline">
                    +91 93351 99341
                  </a>
                  <a href="tel:+919793239707" className="hover:underline">
                    +91 97932 39707
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>Thurs-Tue: 11:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14232.40850138361!2d80.955864!3d26.905513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzE5LjkiTiA4MMKwNTcnMjEuMSJF!5e0!3m2!1sen!2sin!4v1721845900000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
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
