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
    default: "BevCon – German Brewery & Beverage EPC Engineering | Turnkey Projects Worldwide",
    template: "%s | BevCon"
  },
  description: "BevCon is a German EPC contractor and EPCM engineering partner delivering turnkey brewery and beverage plant projects across Africa, Asia, and the Caribbean. From feasibility to commissioning — independent consulting, construction management, and FIDIC contract administration.",
  keywords: [
    "EPC contractor brewery",
    "EPCM beverage plant engineering",
    "turnkey brewery construction",
    "German brewery engineering",
    "beverage project Africa",
    "beverage project Asia",
    "beverage project Caribbean",
    "FIDIC contract administration",
    "brewery feasibility study",
    "beverage consulting",
    "brewery construction management",
    "beverage facility planning",
    "turnkey beverage plant",
    "independent engineering partner"
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
    title: 'BevCon – German Brewery & Beverage EPC Engineering | Turnkey Projects Worldwide',
    description: 'BevCon is a German EPC contractor and EPCM engineering partner delivering turnkey brewery and beverage plant projects across Africa, Asia, and the Caribbean.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BevCon – German Brewery & Beverage EPC Engineering | Turnkey Projects Worldwide',
    description: 'BevCon is a German EPC contractor and EPCM engineering partner delivering turnkey brewery and beverage plant projects across Africa, Asia, and the Caribbean.',
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
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.bevcon.net/#organization',
        name: 'BevCon',
        legalName: 'BevCon – Beverage Consulting and Engineering GmbH',
        url: 'https://www.bevcon.net',
        logo: 'https://www.bevcon.net/logos/DARK%20BG%20LOGO.svg',
        description: 'German EPC contractor and EPCM engineering partner delivering turnkey brewery and beverage plant projects across Africa, Asia, and the Caribbean.',
        foundingLocation: {
          '@type': 'Place',
          name: 'Hamburg, Germany',
        },
        areaServed: [
          { '@type': 'Continent', name: 'Africa' },
          { '@type': 'Continent', name: 'Asia' },
          { '@type': 'Place', name: 'Caribbean' },
        ],
        knowsAbout: [
          'EPC contracting',
          'EPCM engineering',
          'Turnkey brewery construction',
          'Beverage plant engineering',
          'FIDIC contract administration',
          'Brewery feasibility studies',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Business Inquiries',
          availableLanguage: ['English', 'German'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.bevcon.net/#website',
        url: 'https://www.bevcon.net',
        name: 'BevCon',
        publisher: { '@id': 'https://www.bevcon.net/#organization' },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.bevcon.net/#service',
        name: 'BevCon – Brewery & Beverage EPC Engineering',
        provider: { '@id': 'https://www.bevcon.net/#organization' },
        serviceType: [
          'EPC Contracting',
          'EPCM Engineering',
          'Turnkey Brewery Construction',
          'Beverage Plant Feasibility Studies',
          'FIDIC Contract Administration',
          'Construction Management',
          'Independent Engineering Consulting',
        ],
        areaServed: [
          { '@type': 'Continent', name: 'Africa' },
          { '@type': 'Continent', name: 'Asia' },
          { '@type': 'Place', name: 'Caribbean' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.bevcon.net/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a turnkey EPC brewery project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A turnkey EPC (Engineering, Procurement, Construction) brewery project is a delivery model where a single contractor takes responsibility for the complete design, procurement, construction, and commissioning of a brewery or beverage plant. BevCon acts as the independent engineering partner representing the investor throughout this process.',
            },
          },
          {
            '@type': 'Question',
            name: 'What regions does BevCon serve for brewery and beverage projects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BevCon delivers turnkey brewery and beverage plant projects across Africa, Asia, and the Caribbean, bringing German engineering discipline and independent EPCM expertise to emerging and established markets worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between EPC and EPCM in beverage plant engineering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In EPC, a single contractor assumes full responsibility for engineering, procurement, and construction under a lump-sum contract. In EPCM, the engineering partner manages these activities on behalf of the investor, providing greater transparency and control. BevCon provides independent EPCM services and represents investors in EPC contracts.',
            },
          },
        ],
      },
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
