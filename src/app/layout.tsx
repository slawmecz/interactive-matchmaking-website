import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

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
  title: {
    default: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    template: "%s | Biuro Matrymonialne Magnes",
  },
  description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja. Samotne panie i panowie 50+, 60+ – zapraszamy. Swatanie Warszawa, Wielkopolska, Małopolska i cała Polska.",
  keywords: "biuro matrymonialne, poszukiwanie partnera, randki, związki, miłość, Magnes, matrymonialne24, swatanie, biuro matrymonialne online, znajdź partnera, randki online, agencja matrymonialna, swatanie Warszawa, swatanie Kraków, swatanie Wrocław, biuro matrymonialne Wielkopolska, Małopolska, Śląsk, Pomorze, Mazowsze, Poznań, Gdańsk, samotne panie po 60, samotni panowie po 60, samotne panie po 50, samotni panowie po 50, randki 50 plus, randki 60 plus, biuro matrymonialne dla dojrzałych, znajdź partnera 50 plus",
  authors: [{ name: "Biuro Matrymonialne Magnes", url: "https://swatanie.pl" }],
  creator: "Biuro Matrymonialne Magnes",
  publisher: "Biuro Matrymonialne Magnes",
  applicationName: "Biuro Matrymonialne Magnes",
  alternates: {
    canonical: 'https://swatanie.pl',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/slice1.ico', sizes: 'any' },
      { url: '/slice1.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
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
    images: [
      {
        url: "/Logo.svg",
        width: 512,
        height: 512,
        alt: "Biuro Matrymonialne Magnes - logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    images: ["/Logo.svg"],
  },
  manifest: "/manifest.json",
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
  referrer: "strict-origin-when-cross-origin",
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
    "image": "https://swatanie.pl/Logo.svg",
    "telephone": "+48600434700",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dolnośląskie" },
      { "@type": "AdministrativeArea", "name": "Kujawsko-pomorskie" },
      { "@type": "AdministrativeArea", "name": "Lubelskie" },
      { "@type": "AdministrativeArea", "name": "Lubuskie" },
      { "@type": "AdministrativeArea", "name": "Łódzkie" },
      { "@type": "AdministrativeArea", "name": "Małopolskie" },
      { "@type": "AdministrativeArea", "name": "Mazowieckie" },
      { "@type": "AdministrativeArea", "name": "Opolskie" },
      { "@type": "AdministrativeArea", "name": "Podkarpackie" },
      { "@type": "AdministrativeArea", "name": "Podlaskie" },
      { "@type": "AdministrativeArea", "name": "Pomorskie" },
      { "@type": "AdministrativeArea", "name": "Śląskie" },
      { "@type": "AdministrativeArea", "name": "Świętokrzyskie" },
      { "@type": "AdministrativeArea", "name": "Warmińsko-mazurskie" },
      { "@type": "AdministrativeArea", "name": "Wielkopolskie" },
      { "@type": "AdministrativeArea", "name": "Zachodniopomorskie" },
      { "@type": "City", "name": "Warszawa" },
      { "@type": "City", "name": "Kraków" },
      { "@type": "City", "name": "Wrocław" },
      { "@type": "City", "name": "Poznań" },
      { "@type": "City", "name": "Gdańsk" },
      { "@type": "City", "name": "Konin" }
    ],
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
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dolnośląskie" },
      { "@type": "AdministrativeArea", "name": "Kujawsko-pomorskie" },
      { "@type": "AdministrativeArea", "name": "Lubelskie" },
      { "@type": "AdministrativeArea", "name": "Lubuskie" },
      { "@type": "AdministrativeArea", "name": "Łódzkie" },
      { "@type": "AdministrativeArea", "name": "Małopolskie" },
      { "@type": "AdministrativeArea", "name": "Mazowieckie" },
      { "@type": "AdministrativeArea", "name": "Opolskie" },
      { "@type": "AdministrativeArea", "name": "Podkarpackie" },
      { "@type": "AdministrativeArea", "name": "Podlaskie" },
      { "@type": "AdministrativeArea", "name": "Pomorskie" },
      { "@type": "AdministrativeArea", "name": "Śląskie" },
      { "@type": "AdministrativeArea", "name": "Świętokrzyskie" },
      { "@type": "AdministrativeArea", "name": "Warmińsko-mazurskie" },
      { "@type": "AdministrativeArea", "name": "Wielkopolskie" },
      { "@type": "AdministrativeArea", "name": "Zachodniopomorskie" }
    ],
    "description": "Usługi biura matrymonialnego: anonimowość, dyskrecja, profesjonalna obsługa, 12 miesięcy ofert, organizacja randek, promocja ogłoszeń.",
    "offers": {
      "@type": "Offer",
      "description": "Pakiet Najkorzystniejszy - kompleksowa usługa biura matrymonialnego"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak działa Biuro Matrymonialne Magnes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferujemy interaktywną ścieżkę wyboru pakietu: dyskrecję i anonimowość, możliwość wyboru partnera, bezpośredni kontakt z właścicielem (spotkanie u klienta lub w siedzibie), promocję ogłoszeń, pierwszeństwo do nowych ofert oraz 12 miesięcy aktywnego przedstawiania fotoofert."
        }
      },
      {
        "@type": "Question",
        "name": "Czy w Biurze Magnes mogę zachować anonimowość?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Szanujemy prywatność – nie musisz przekazywać zdjęcia; wszystko odbywa się za Twoją zgodą. Możesz zachować pełną anonimowość lub pokazać siebie tylko wtedy, gdy chcesz."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie usługi obejmuje pakiet Biura Matrymonialnego Magnes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anonimowość i dyskrecja, 12 miesięcy ofert szytych na miarę, Ty wybierasz – masz kontrolę, pierwszeństwo w dostępie do nowych osób, organizacja randek w biurze, wypromowanie ogłoszenia, bezpośredni kontakt z właścicielem, możliwość przedstawienia fotoofert u klienta w domu."
        }
      },
      {
        "@type": "Question",
        "name": "Na jakim obszarze działa Biuro Matrymonialne Magnes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zasięg ogólnopolski. Właściciel biura może przyjechać do klienta – przedstawienie ofert, sesja zdjęciowa i rozmowa w komfortowych warunkach."
        }
      },
      {
        "@type": "Question",
        "name": "Czy Biuro Magnes obsługuje samotne panie i panów po 50., 60. roku życia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Oferujemy usługi dla osób dojrzałych – samotne panie i panowie 50+, 60+. Pełna dyskrecja, indywidualne podejście i 22 lata doświadczenia w swataniu."
        }
      }
    ]
  };

  // Google Analytics Measurement ID - zamień na swój ID z Google Analytics
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {/* Google Analytics 4 - bez cookies dla swatanie.pl, z cookies dla matrymonialne24.pl */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Sprawdź hostname - jeśli swatanie.pl, wyłącz cookies
            const isSwatanie = window.location.hostname === 'swatanie.pl' || window.location.hostname === 'www.swatanie.pl';
            
            if (isSwatanie) {
              // Konfiguracja bez cookies dla swatanie.pl (zgodność z RODO)
              gtag('config', '${GA_MEASUREMENT_ID}', {
                'anonymize_ip': true,
                'allow_google_signals': false,
                'allow_ad_personalization_signals': false,
                'cookie_flags': 'SameSite=None;Secure',
                'send_page_view': true
              });
            } else {
              // Normalna konfiguracja z cookies dla matrymonialne24.pl
              gtag('config', '${GA_MEASUREMENT_ID}', {
                'send_page_view': true
              });
            }
          `}
        </Script>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-md bg-slate-800 px-4 py-2 text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
