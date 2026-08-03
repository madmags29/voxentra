import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchPixabayImages } from "@/lib/pixabay";
import { ShieldCheck, Award, Users, CheckCircle, ArrowRight, Building2, MapPin } from "lucide-react";

export default async function AboutPage() {
  const heroImage = "/images/hero-banner.png";

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white py-16 md:py-24 relative overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Voxentra Team"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" />
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              ABOUT VOXENTRA SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading">
              Connecting Businesses with High-Intent US Customers
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Voxentra Solutions is a trusted US-focused telemarketing and lead generation company specializing in delivering high-quality, real-time, exclusive consumer leads and warm live call transfers.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">100% TCPA Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe zero-risk compliance is non-negotiable. Every lead delivered carries visual 1-to-1 explicit consent certificates.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Rigorous Quality Screening</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our telemarketing specialists undergo continuous quality scoring and script audits so that only genuine, high-intent prospects reach your agents.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Dedicated Partnership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We assign experienced US account managers to optimize daily call pacing, campaign filters, and conversion benchmarks alongside your team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
