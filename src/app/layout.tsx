// src/app/layout.tsx
import '../app/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';

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
    url: 'https://decorlucknow.com',
    siteName: 'Home Decor Lucknow',
    images: [
      {
        url: 'https://decorlucknow.com/images/home-decor-og.jpg',
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
    images: ['https://decorlucknow.com/images/home-decor-twitter.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://decorlucknow.com',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const primaryGaId = process.env.NEXT_PUBLIC_GA_PRIMARY_ID;
  const secondaryGaId = process.env.NEXT_PUBLIC_GA_SECONDARY_ID;

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen`}>
        {/* This check ensures scripts only render if the primary ID exists */}
        {primaryGaId && (
          <>
            {/* The loader script now uses the NEW primary ID */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${primaryGaId}`}
              strategy="afterInteractive"
            />
            {/* The inline script now contains BOTH config lines */}
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${primaryGaId}');
                ${secondaryGaId ? `gtag('config', '${secondaryGaId}');` : ''}
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
