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
  title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
  description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa. Rozpocznij swoją drogę do szczęścia już dziś!",
  keywords: "biuro matrymonialne, poszukiwanie partnera, randki, związki, miłość, Magnes, matrymonialne24",
  icons: {
    icon: '/heart-favicon.svg',
    shortcut: '/heart-favicon.svg',
    apple: '/heart-favicon.svg',
  },
  openGraph: {
    title: "Biuro Matrymonialne Magnes - Znajdź miłość swojego życia",
    description: "Interaktywna przygoda w poszukiwaniu partnera życiowego. 22 lata doświadczenia, pełna dyskrecja, profesjonalna obsługa.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
