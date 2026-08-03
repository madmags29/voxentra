import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DATA } from "@/lib/data/services";
import { PhoneCall, ShieldCheck, ArrowRight, Activity } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4 text-brand-accent animate-pulse" />
            Specialized B2B Lead Verticals
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight font-heading">
            Exclusive Leads & Live Transfers That Drive Revenue
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Every vertical is supported by dedicated US screening specialists, 1-to-1 explicit consent certificates, and customized warm call buffer policies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-0 border border-slate-200/80 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              
              {service.imageUrl && (
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <Image 
                    src={service.imageUrl} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                </div>
              )}

              <div className="p-7 flex flex-col flex-grow">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Metrics Pill */}
                <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Close Rate:</span>
                  <span className="font-bold text-emerald-600 font-mono">{service.avgConversionRate}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-7 pb-7 pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                  TCPA Verified
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-extrabold text-brand-primary group-hover:text-brand-accent flex items-center gap-1 transition"
                >
                  <span>Explore Vertical</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
