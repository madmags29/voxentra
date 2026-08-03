import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Voxentra Solutions | Premium Live Transfers & Exclusive B2B Leads Across USA",
  description: "Voxentra Solutions connects US businesses with high-intent qualified buyers through 100% TCPA-compliant live call transfers, inbound calls, telemarketing, and exclusive lead generation.",
  keywords: [
    "Voxentra Solutions",
    "live call transfers",
    "exclusive B2B leads",
    "telemarketing company USA",
    "ACA health insurance live transfers",
    "debt settlement calls",
    "water damage restoration leads",
    "final expense senior leads",
    "TCPA compliant leads",
    "inbound pay per call",
  ],
  authors: [{ name: "Voxentra Solutions" }],
  creator: "Voxentra Solutions",
  metadataBase: new URL("https://www.voxentraglobal.com"),
  openGraph: {
    title: "Voxentra Solutions | Connecting Businesses with High-Intent Customers",
    description: "Premium Live Transfers & Exclusive Leads Across the USA. 100% TCPA 1-to-1 Consent Verified.",
    url: "https://www.voxentraglobal.com",
    siteName: "Voxentra Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxentra Solutions | Premium Live Transfers & Exclusive Leads",
    description: "High-converting B2B telemarketing, live call transfers, and exclusive leads across the USA.",
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
  verification: {
    google: "hEEB4Un9O7U5Uu9lz9Hs_4KWL2w8Am-sgP-38JLOFRU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="hEEB4Un9O7U5Uu9lz9Hs_4KWL2w8Am-sgP-38JLOFRU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4WHQQG9HMN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4WHQQG9HMN');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-primary selection:text-white">
        <Header />
        <main className="flex-grow pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
