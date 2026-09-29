import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Rapid 24/7 Water Damage Restoration & Cleanup | Emergency Dispatch | Voxentra",
  description:
    "Immediate 45-minute response for burst pipes, basement floods, and water extraction. IICRC-certified master technicians. We bill your insurance directly.",
  openGraph: {
    title: "Rapid 24/7 Water Damage Restoration & Drying | Emergency Dispatch",
    description: "Emergency water extraction, structural drying, and direct insurance billing. Certified restoration crews on call 24/7.",
    url: "https://www.voxentraglobal.com/water-damage",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/water-damage",
  },
};

export default function WaterDamageLandingPage() {
  const data = LANDING_PAGES["water-damage"];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "24/7 Water Damage Restoration & Drying Services",
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
