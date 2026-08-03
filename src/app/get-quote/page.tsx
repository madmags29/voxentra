import React from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

export default function GetQuotePage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            CUSTOM B2B CAMPAIGN QUOTE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Get Your Custom B2B Lead Quote
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Submit your campaign requirements below for an immediate custom volume quote and campaign SLA.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
