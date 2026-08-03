import React from "react";
import Link from "next/link";
import { fetchPixabayVideos } from "@/lib/pixabay";
import { USAMapVisualizer } from "@/components/hero/USAMapVisualizer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline";
import { QualityComparison } from "@/components/sections/QualityComparison";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { CallCenterVector } from "@/components/illustrations/CallCenterVector";
import { ArrowRight, ShieldCheck, PhoneCall, CheckCircle, Sparkles, TrendingUp, Users, Award, Clock } from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  let heroVideo = "";
  try {
    const videos = await fetchPixabayVideos("call center corporate", 3);
    heroVideo = videos[0]?.videos?.large?.url || "";
  } catch (error) {
    console.error("Hero video fetch error:", error);
  }

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-20 md:py-24 overflow-hidden border-b border-slate-100">
        {/* Background Image / Video Fallback */}
        <div className="absolute inset-0 z-0">
          {heroVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20 filter grayscale"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src="/images/hero-banner.png"
              alt="Voxentra B2B Lead Operations"
              className="w-full h-full object-cover opacity-15 filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/80 to-brand-primary/10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
                <span>#1 US B2B Live Transfer & Telemarketing Network</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.1] font-heading">
                Premium Live Transfers & Exclusive Leads That{" "}
                <span className="gradient-text">Grow Your Business</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                Helping businesses across the United States connect with qualified, high-intent customers through 100% TCPA-compliant live call transfers and performance-driven telemarketing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-extrabold text-base shadow-lg shadow-brand-primary/25 hover:shadow-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 text-center"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/services"
                  className="px-8 py-4 rounded-xl bg-white border border-slate-300 hover:border-brand-primary text-slate-800 hover:text-brand-primary font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-center"
                >
                  <PhoneCall className="w-5 h-5 text-brand-primary" />
                  <span>Explore Live Verticals</span>
                </Link>
              </div>

              {/* Trust Micro Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% TCPA Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>TCPA Consent Logged</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>90s Warm Buffer</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visualizer */}
            <div className="lg:col-span-6">
              <USAMapVisualizer />
            </div>
          </div>

          {/* ANIMATED STATISTICS COUNTER */}
          <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-2 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-brand-dark font-mono">100K+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Qualified Leads Delivered</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-emerald-600 font-mono">98%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Client Satisfaction</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-2 font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-sky-600 font-mono">24/7</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Real-Time Lead Support</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-2 font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-purple-600 font-mono">500+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Active Business Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <ServicesGrid />

      {/* TELEMARKETING & CRM GRAPHIC SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Enterprise Quality Standards
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight font-heading">
                Turnkey Telemarketing & Live Call Routing Architecture
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our telemarketing specialists operate with state-of-the-art predictive dialers, automated 1-to-1 TCPA token logging, and custom whisper handoffs. You receive qualified conversations ready to buy.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>100% Exclusive, Single-Buyer Lead Distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Custom Warm Buffer Options (60s to 120s)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Instant CRM Sync via Twilio, Ringba & Webhooks</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/why-choose-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-bold text-sm shadow-md hover:bg-brand-primaryHover transition"
                >
                  <span>Read Full Compliance SLA</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <CallCenterVector className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorksTimeline />

      {/* QUALITY COMPARISON */}
      <QualityComparison />

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* LEAD CAPTURE SECTION */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-white">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent">
                READY TO SCALE YOUR PIPELINE?
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-heading">
                Talk to Our B2B Lead Generation Experts
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Connect with our campaign strategy team today. We will analyze your target vertical, design custom screening criteria, and provide sample call recordings within 24 hours.
              </p>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs text-slate-300">
                <p className="font-bold text-white uppercase tracking-wider text-[11px]">Direct Support Hotline:</p>
                <p className="text-2xl font-black text-emerald-400 font-mono">(+91) 884 068 2135</p>
                <p className="text-slate-400">Available Monday - Friday: 8:00 AM - 8:00 PM EST</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
