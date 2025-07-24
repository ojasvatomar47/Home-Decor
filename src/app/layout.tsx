// src/app/layout.tsx
import '../app/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Home Decor - Your Destination for Beautiful Interiors in Lucknow',
    template: '%s | Home Decor Lucknow',
  },
  description: 'Discover exquisite home decor products and professional interior design services in Lucknow, Uttar Pradesh. Transform your living spaces with our premium bedsheets, blinds, carpets, modular kitchens, and more.',
  keywords: [
    'home decor Lucknow', 'interior design Lucknow', 'furniture shop Lucknow',
    'bedsheets Lucknow', 'blinds Lucknow', 'curtains Lucknow', 'carpets Lucknow',
    'modular kitchen Lucknow', 'sofa repair Lucknow', 'mandir design Lucknow',
    'Lucknow home furnishings', 'Uttar Pradesh home decor', 'best interior design Lucknow'
  ],
  openGraph: {
    title: 'Home Decor - Your Destination for Beautiful Interiors in Lucknow',
    description: 'Discover exquisite home decor products and professional interior design services in Lucknow, Uttar Pradesh. Transform your living spaces with our premium bedsheets, blinds, carpets, modular kitchens, and more.',
    url: 'https://Decorlucknow.com',
    siteName: 'Home Decor Lucknow',
    images: [
      {
        url: 'https://Decorlucknow.com/images/home-decor-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Decor Lucknow - Elegant Interiors',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Decor - Your Destination for Beautiful Interiors in Lucknow',
    description: 'Discover exquisite home decor products and professional interior design services in Lucknow, Uttar Pradesh.',
    images: ['https://Decorlucknow.com/images/home-decor-twitter.jpg'],
  },
  robots: 'index, follow',
  // FIXED: Removed the 'icons' object to avoid conflict with public/favicon.ico
  // Next.js automatically serves public/favicon.ico at /favicon.ico
  alternates: {
    canonical: 'https://Decorlucknow.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
