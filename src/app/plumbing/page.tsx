import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/lib/data/landingPages";
import { LandingTemplate } from "@/components/landing/LandingTemplate";

export const metadata: Metadata = {
  title: "Fast, Dependable Plumbing Services & Emergency Repairs | Free Plumber Quote | Voxentra",
  description:
    "Emergency leak detection, sewer pipe repair, drain cleaning, and tankless water heaters. Connect with licensed master plumbers for fast 60-minute emergency dispatch.",
  openGraph: {
    title: "Licensed Master Plumbing Repairs & Installation | Free Estimate",
    description: "Connect with vetted local master plumbers for emergency leaks, hydro jetting, and water heaters.",
    url: "https://www.voxentraglobal.com/plumbing",
  },
  alternates: {
    canonical: "https://www.voxentraglobal.com/plumbing",
  },
};

export default function PlumbingLandingPage() {
  const data = LANDING_PAGES.plumbing;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Master Plumbing Services",
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
