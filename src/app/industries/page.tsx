import React from "react";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/data/industries";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { ShieldCheck, ArrowRight, Building2, TrendingUp } from "lucide-react";

export default function IndustriesPage() {
  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            SPECIALIZED B2B INDUSTRY VERTICALS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Targeted Leads for US Industry Leaders
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            From licensed insurance agencies and financial institutions to emergency restoration contractors and law firms.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Monthly Volume:</span>
                    <span className="font-bold text-brand-primary font-mono">{item.leadVolumePerMonth}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Avg Close Rate:</span>
                    <span className="font-bold text-emerald-600 font-mono">{item.avgConversion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
