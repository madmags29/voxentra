import React from "react";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

export default function TestimonialsPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            VERIFIED SUCCESS STORIES
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Client Testimonials & ROI Case Studies
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            See how top US sales directors and marketing executives rely on Voxentra Solutions to scale their pipeline.
          </p>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
