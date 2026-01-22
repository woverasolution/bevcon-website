import type { Metadata } from "next";
import { Geist_Mono, Titillium_Web } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bevcon.net'),
  title: {
    default: "BevCon – Built for Reality",
    template: "%s | BevCon"
  },
  description: "BevCon partners with investors to plan, structure, and deliver beverage projects worldwide. Comprehensive consulting, construction, and confidence services for breweries and beverage facilities.",
  keywords: [
    "beverage consulting",
    "brewery construction",
    "beverage facility planning",
    "brewery consulting",
    "beverage project management",
    "brewery engineering",
    "beverage industry experts",
    "brewery design",
    "beverage production",
    "turnkey beverage projects"
  ],
  authors: [{ name: "BevCon" }],
  creator: "BevCon",
  publisher: "BevCon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bevcon.net',
    siteName: 'BevCon',
    title: 'BevCon – Built for Reality',
    description: 'BevCon partners with investors to plan, structure, and deliver beverage projects worldwide. Comprehensive consulting, construction, and confidence services for breweries and beverage facilities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BevCon – Built for Reality',
    description: 'BevCon partners with investors to plan, structure, and deliver beverage projects worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: 'https://www.bevcon.net',
  },
  verification: {
    google: 'DlzYHzQj9hYnHkjriGyW7ye8LQ2Yfe4L8y48TKZ-pUU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BevCon',
    url: 'https://www.bevcon.net',
    logo: 'https://www.bevcon.net/logos/DARK%20BG%20LOGO.svg',
    description: 'BevCon partners with investors to plan, structure, and deliver beverage projects worldwide.',
    sameAs: [
      // Add social media URLs here when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Inquiries',
      availableLanguage: ['English'],
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Beverage Consulting',
      'Brewery Construction',
      'Beverage Facility Planning',
      'Project Management',
      'Engineering Services',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${titilliumWeb.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
