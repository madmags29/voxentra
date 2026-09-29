import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Targeted Pest Control & Extermination Services | Free Pest Inspection Quote | Voxentra",
  description:
    "Fast, targeted extermination for termites, rodents, bed bugs, and general pests. Eco-friendly, pet-safe treatments with 100% free re-treatments guarantee.",
  openGraph: {
    title: "Fast, Targeted Pest Control & Extermination | Free Inspection Quote",
    description: "State-licensed pest specialists. Pet & child friendly treatments for termites, bed bugs, rodents, and ants.",
    url: "https://www.voxentraglobal.com/pest-control",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/pest-control",
  },
};

export default function PestControlLandingPage() {
  const data = LANDING_PAGES["pest-control"];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pest Control & Extermination Services",
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
