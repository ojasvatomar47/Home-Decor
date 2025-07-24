// src/app/thank-you/page.tsx
'use client'; // Required for client-side components in Next.js App Router

import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg w-full">
        {/* Optional: Add a success icon or image */}
        {/* Make sure you have an image at public/images/success-icon.png or remove this */}
        {/* <Image
          src="/images/success-icon.png"
          alt="Success Icon"
          width={80}
          height={80}
          className="mx-auto mb-6"
        /> */}

        <h1 className="text-4xl font-bold text-teal-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your message has been successfully sent. We appreciate you reaching out and will get back to you as soon as possible.
        </p>
        <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
          Go back to Home
          <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>
    </div>
  );
}
