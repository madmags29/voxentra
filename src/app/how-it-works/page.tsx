import React from "react";
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

export default function HowItWorksPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            TRANSPARENT LEAD PIPELINE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Step-by-Step Lead Generation & Warm Transfer Setup
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            From initial campaign targeting configuration to live warm call handoff on your sales floor.
          </p>
        </div>
      </section>

      <HowItWorksTimeline />

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
