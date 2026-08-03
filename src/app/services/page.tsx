import React from "react";
import Link from "next/link";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            NATIONWIDE B2B TELEMARKETING & LIVE TRANSFERS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Enterprise Lead Vertical Solutions
          </h1>
          <p className="text-slate-300 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Select your industry vertical below to inspect custom screening filters, TCPA 1-to-1 consent tokens, and pricing tiers.
          </p>
        </div>
      </section>

      <ServicesGrid />
    </div>
  );
}
