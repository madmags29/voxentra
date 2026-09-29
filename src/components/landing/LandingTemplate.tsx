"use client";

import React from "react";
import { LandingPageData } from "@/lib/data/landingPages";
import { LandingHeader } from "./LandingHeader";
import { LandingQuoteForm } from "./LandingQuoteForm";
import { LandingFooter } from "./LandingFooter";
import {
  ShieldCheck,
  Star,
  Leaf,
  Clock,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface LandingTemplateProps {
  data: LandingPageData;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({ data }) => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case "clock":
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case "award":
        return <Award className="w-5 h-5 text-emerald-400" />;
      case "star":
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
      case "shield":
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070e18] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Branded Conversion Header */}
      <LandingHeader phoneHotline={data.phoneHotline} badge={data.badge} />

      {/* 2. Main Standalone Conversion Content (Split Layout matching sample) */}
      <main className="flex-grow relative pt-8 pb-16 lg:py-16 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Hero, Media & Social Proof */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                {data.mainTitlePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  {data.mainTitleHighlight}
                </span>
                {data.mainTitleSuffix}
              </h1>

              {/* Sub-headline */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-300 font-heading">
                {data.subTitle}
              </h2>

              {/* Hero Media / Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group max-h-[320px] w-full">
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700/80 backdrop-blur-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Local Contractors
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-bold backdrop-blur-sm">
                    100% Free Quote
                  </span>
                </div>
              </div>

              {/* Benefit Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {data.description}
              </p>

              {/* Feature Badges Row (3 Trust Badges) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {data.badges.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl hover:border-slate-700 transition"
                  >
                    <div className="mt-0.5 p-1.5 bg-slate-800 rounded-lg flex-shrink-0">
                      {getBadgeIcon(b.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{b.title}</div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{b.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof Stack */}
              <div className="flex flex-wrap items-center gap-4 pt-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-slate-900">
                    BW
                  </div>
                  <div className="w-9 h-9 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-slate-900">
                    PL
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-slate-900">
                    RM
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-800 text-emerald-400 font-extrabold text-xs flex items-center justify-center ring-2 ring-slate-900">
                    +4k
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1.5">4.9 / 5.0</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Trusted by <strong className="text-white">{data.socialProofCount}</strong>
                  </div>
                </div>
              </div>

              {/* Value Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free Written Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero High-Pressure Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Upfront Pricing Guarantees</span>
                </div>
              </div>
            </div>

            {/* Right Column: Free Quote Card Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <LandingQuoteForm
                  vertical={data.vertical}
                  formTitle={data.formTitle}
                  formSubtitle={data.formSubtitle}
                  serviceOptions={data.serviceOptions}
                  phoneHotline={data.phoneHotline}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Reassurance / Trust Footer */}
      <LandingFooter vertical={data.vertical} phoneHotline={data.phoneHotline} />
    </div>
  );
};
