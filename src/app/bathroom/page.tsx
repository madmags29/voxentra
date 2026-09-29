import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Luxury Bathroom Remodeling & Tub Conversions | Free Bathroom Quote | Voxentra",
  description:
    "Transform your bathroom with fast 1-day tub-to-shower conversions, modern walk-in safety tubs, and custom vanities. Free in-home 3D design consultation and written estimate.",
  openGraph: {
    title: "Transform Your Space With Luxury Bath Remodeling | Free Quote",
    description: "1-day tub conversions, walk-in safety showers, and custom vanities. Vetted local licensed remodelers.",
    url: "https://www.voxentraglobal.com/bathroom",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/bathroom",
  },
};

export default function BathroomLandingPage() {
  const data = LANDING_PAGES.bathroom;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Remodeling & Tub Conversion Services",
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
