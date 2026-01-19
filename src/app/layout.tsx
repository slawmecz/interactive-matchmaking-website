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
  keywords: "biuro matrymonialne, poszukiwanie partnera, randki, związki, miłość, Magnes, matrymonialne24, swatanie",
  alternates: {
    canonical: 'https://swatanie.pl',
  },
  icons: {
    icon: '/slice1.svg',
    shortcut: '/slice1.svg',
    apple: '/slice1.svg',
  },
  openGraph: {
    title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    url: 'https://swatanie.pl',
    siteName: 'Biuro Matrymonialne Magnes',
    type: "website",
    locale: "pl_PL",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
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
    ]
  };

  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
