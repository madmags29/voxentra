import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Upgrade Your Windows & Doors | Free Energy-Saving Window Quote | Voxentra",
  description:
    "Premium energy-efficient replacement windows and door installations. Lower your energy bills with professional, certified window contractors. Free estimate within 1 hour.",
  openGraph: {
    title: "Upgrade Your Home Windows? | Free Energy-Saving Window Quote",
    description: "Certified replacement windows. Double-hung, vinyl casement, and sliding doors. Free quote within 1 hour.",
    url: "https://www.voxentraglobal.com/windows",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/windows",
  },
};

export default function WindowsLandingPage() {
  const data = LANDING_PAGES.windows;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window and Door Replacement Services",
    description: data.description,
    provider: {
      "@type": "Organization",
      name: "Voxentra Solutions",
      url: "https://www.voxentraglobal.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LandingTemplate data={data} />
    </>
  );
}
