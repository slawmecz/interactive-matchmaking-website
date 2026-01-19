import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://swatanie.pl'),
  title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
  description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa. Rozpocznij swoją drogę do szczęścia już dziś!",
  keywords: "biuro matrymonialne, poszukiwanie partnera, randki, związki, miłość, Magnes, matrymonialne24, swatanie, biuro matrymonialne online, znajdź partnera, randki online, agencja matrymonialna",
  authors: [{ name: "Biuro Matrymonialne Magnes" }],
  creator: "Biuro Matrymonialne Magnes",
  publisher: "Biuro Matrymonialne Magnes",
  alternates: {
    canonical: 'https://swatanie.pl',
  },
  icons: {
    icon: [
      { url: '/slice1.ico', sizes: 'any' },
      { url: '/slice1.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/slice1.ico',
    apple: '/slice1.svg',
  },
  openGraph: {
    title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    url: 'https://swatanie.pl',
    siteName: 'Biuro Matrymonialne Magnes',
    type: "website",
    locale: "pl_PL",
    countryName: "Poland",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
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
  verification: {
    google: 'oDqTWQB5f5hJUEmTb8F',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Biuro Matrymonialne Magnes",
    "description": "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    "url": "https://swatanie.pl",
    "telephone": "+48600434700",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://matrymonialne24.pl"
    ],
    "foundingDate": "2002",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "1-10"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Biuro Matrymonialne Magnes",
    "url": "https://swatanie.pl",
    "logo": "https://swatanie.pl/Logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48600434700",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://matrymonialne24.pl"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Biuro Matrymonialne Magnes",
    "url": "https://swatanie.pl",
    "description": "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://swatanie.pl/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Biuro Matrymonialne",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Biuro Matrymonialne Magnes"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "description": "Usługi biura matrymonialnego: anonimowość, dyskrecja, profesjonalna obsługa, 12 miesięcy ofert, organizacja randek, promocja ogłoszeń.",
    "offers": {
      "@type": "Offer",
      "description": "Pakiet Najkorzystniejszy - kompleksowa usługa biura matrymonialnego"
    }
  };

  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
        {children}
      </body>
    </html>
  );
}
