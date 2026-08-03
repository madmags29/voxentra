import React from "react";
import Image from "next/image";
import { fetchPixabayImages } from "@/lib/pixabay";
import { Check, X, ShieldCheck } from "lucide-react";

export const QualityComparison = async () => {
  const bgImage = "/images/live-transfers-banner.png";
  const comparisonRows = [
    {
      feature: "Exclusivity Standard",
      voxentra: "100% Exclusive to 1 Buyer Only",
      others: "Sold to 5-10 Competitors simultaneously",
    },
    {
      feature: "TCPA Consent Standard",
      voxentra: "1-to-1 Explicit Consent Certificate",
      others: "Obscure fine-print consent lists",
    },
    {
      feature: "Call Transfer Buffer",
      voxentra: "Custom 60s - 120s Warm Buffer Guarantee",
      others: "Billed instantly upon 1st second connect",
    },
    {
      feature: "Lead Verification",
      voxentra: "US Live Screening & Carrier Phone Scrub",
      others: "Raw Web Form Submissions / Bot Traffic",
    },
    {
      feature: "Average Sales Conversion",
      voxentra: "28% to 42% Sales Close Rate",
      others: "3% to 6% Close Rate",
    },
    {
      feature: "CRM Delivery Speed",
      voxentra: "Real-time Direct API / Warm Phone Call",
      others: "Delayed CSV Email Exports",
    },
    {
      feature: "Dedicated Account Support",
      voxentra: "24/7 Strategic Account Manager",
      others: "Automated Bot Support / No Phone Rep",
    },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Quality Background"
            fill
            className="object-cover opacity-10 filter grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4 border border-brand-accent/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            The Enterprise Lead Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-heading">
            Why Top US Agencies Choose Voxentra Solutions
          </h2>
          <p className="text-slate-300 text-base md:text-lg mt-4 leading-relaxed">
            Compare our enterprise-grade quality standards against traditional shared lead providers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-950 p-4 md:p-6 border-b border-slate-800 font-heading font-bold text-sm md:text-base">
            <div className="col-span-4 text-slate-400 uppercase tracking-wider text-xs">Lead Quality Metric</div>
            <div className="col-span-4 text-emerald-400 font-extrabold text-center flex items-center justify-center gap-1.5">
              <span>VOXENTRA SOLUTIONS</span>
            </div>
            <div className="col-span-4 text-slate-400 text-center">Traditional Lead Vendors</div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-center hover:bg-slate-800/40 transition">
                <div className="col-span-4 font-bold text-slate-200 text-xs md:text-sm">{row.feature}</div>

                <div className="col-span-4 text-center px-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs md:text-sm font-semibold">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{row.voxentra}</span>
                  </span>
                </div>

                <div className="col-span-4 text-center px-2">
                  <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs md:text-sm">
                    <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>{row.others}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
