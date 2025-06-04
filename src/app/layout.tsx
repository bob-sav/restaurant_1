import { Cormorant_Garamond } from "next/font/google";
import { DM_Sans } from "next/font/google";

import { Hanken_Grotesk } from "next/font/google";
import { Buenard } from "next/font/google";

import Header from "@/components/Header";
import "../styles/globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const buenard = Buenard({
  variable: "--font-buenard",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  metadataBase: new URL("https://restaurant-1-three.vercel.app"),
  title: "FISH Restaurant",
  description: "Restaurant in the heart of Budapest.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "restaurant",
    "dinner",
    "lunch",
    "breakfast",
    "wine",
    "food",
    "fish",
    "table reserve",
  ],
  openGraph: {
    title: "FISH Restaurant",
    description: "Restaurant in the heart of Budapest.",
    url: "/",
    siteName: "FISH Restaurant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FISH Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FISH Restaurant",
    description: "Restaurant in the heart of Budapest.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${cormorantGaramond.variable} ${hankenGrotesk.variable} ${buenard.variable}`}
      >
        <div className="layout-wrapper">
          <Header />
          <main className="Home">{children}</main>
        </div>
      </body>
    </html>
  );
}
