import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-nepali",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B3D91",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eformnepal.com"),
  title: {
    default: "E-Form Nepal | Your Online Form Partner — Easy Process, Brighter Future",
    template: "%s | E-Form Nepal",
  },
  description:
    "E-Form Nepal is a modern, trusted digital form guidance platform. Find verified requirements, official portal links, photo specifications, and personalized assistance for EDV, Lok Sewa, e-Passport, DOTM driving license, and NID in Nepal.",
  keywords: [
    "E-Form Nepal",
    "online form assistance Nepal",
    "EDV form filling Nepal",
    "EDV photo checker",
    "Lok Sewa Aayog online application",
    "e-Passport Nepal appointment",
    "DOTM smart driving license pre-registration",
    "National ID NID Nepal",
    "DOFE shram swikriti FEIMS",
    "online forms Nepal",
    "अनलाइन फाराम नेपाल",
    "डिभी लटरी फाराम",
  ],
  authors: [{ name: "E-Form Nepal", url: "https://eformnepal.com" }],
  creator: "E-Form Nepal",
  publisher: "E-Form Nepal",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://eformnepal.com",
    siteName: "E-Form Nepal",
    title: "E-Form Nepal | Your Online Form Partner",
    description:
      "Find the forms you need and get clear, reliable guidance through the application process — all in one place.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "E-Form Nepal - Your Online Form Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Form Nepal | Your Online Form Partner",
    description:
      "Modern, verified online form assistance and photo compliance checking for Nepal.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "E-Form Nepal",
    "alternateName": "इ-फाराम नेपाल",
    "url": "https://eformnepal.com",
    "logo": "https://eformnepal.com/logo.svg",
    "description":
      "Digital form assistance, photo compliance checking, and online application guidance for citizens across Nepal.",
    "telephone": "+9779865575108",
    "email": "support@eformnepal.com",
    "priceRange": "NPR 0 - 500",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP",
    },
    "openingHours": "Su-Fr 08:00-19:00",
    "sameAs": [
      "https://www.facebook.com/@eformnepalofficial",
      "https://www.youtube.com/@eFormNepal",
      "https://www.tiktok.com/@eformnepal"
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
