import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Professional Heating & Air Conditioning Services | Free HVAC Quote | Voxentra",
  description:
    "Energy-efficient AC installation, heat pump upgrades, and emergency furnace repairs. Connect with vetted, licensed local HVAC technicians. 100% Free written estimate.",
  openGraph: {
    title: "Upgrade or Repair Your Heating & Cooling | Free HVAC Estimate",
    description: "Connect with certified local HVAC technicians for AC replacement, heat pumps, and 24/7 furnace repair.",
    url: "https://www.voxentraglobal.com/hvac",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/hvac",
  },
};

export default function HvacLandingPage() {
  const data = LANDING_PAGES.hvac;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HVAC & Air Conditioning Services",
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
