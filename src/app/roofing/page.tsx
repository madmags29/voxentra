import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Premier Roof Replacement & Storm Damage Repair | Free Roofing Quote | Voxentra",
  description:
    "Architectural shingles, standing seam metal roofs, and emergency storm leak repairs. Includes 100% free drone inspection and lifetime non-prorated warranties.",
  openGraph: {
    title: "Protect Your Home With Top-Tier Roofing | Free Drone Inspection & Quote",
    description: "Certified GAF and Owens Corning roofing contractors. Upfront estimates, emergency repairs, and insurance claim assistance.",
    url: "https://www.voxentraglobal.com/roofing",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/roofing",
  },
};

export default function RoofingLandingPage() {
  const data = LANDING_PAGES.roofing;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential & Commercial Roofing Services",
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
