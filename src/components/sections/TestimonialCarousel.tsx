"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/lib/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Quote className="w-4 h-4 text-brand-accent" />
            Verified Client Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight font-heading">
            Trusted by Leading US Sales Organizations
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-card border border-slate-200/80 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Client Info & Metric */}
            <div className="md:col-span-4 bg-brand-dark text-white p-6 rounded-2xl flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white font-black text-lg flex items-center justify-center mb-4">
                  {current.avatar}
                </div>
                <h4 className="text-lg font-bold text-white">{current.clientName}</h4>
                <p className="text-xs text-brand-accent font-medium mt-0.5">{current.role}</p>
                <p className="text-xs text-slate-300 font-semibold">{current.company}</p>
                <span className="inline-block mt-3 px-2.5 py-1 rounded-md bg-slate-800 text-[10px] uppercase font-extrabold text-slate-300">
                  {current.industry}
                </span>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">KEY RESULTS METRIC</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-black text-emerald-400 font-mono">{current.statsMetric}</span>
                  <span className="text-xs text-slate-300 font-medium leading-tight">{current.statsLabel}</span>
                </div>
              </div>
            </div>

            {/* Right: Quote Content */}
            <div className="md:col-span-8 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400">
                  Case Study {currentIndex + 1} of {TESTIMONIALS_DATA.length}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-700 flex items-center justify-center transition"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-700 flex items-center justify-center transition"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
