import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/data/services";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo/schema";
import { PhoneCall, ShieldCheck, CheckCircle2, ArrowRight, Clock, Award, HelpCircle } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function DynamicServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(
    service.title,
    service.shortDescription,
    `https://voxentra.com/services/${service.slug}`
  );
  const faqSchema = generateFAQSchema(service.faq);

  return (
    <div className="space-y-0">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* SERVICE HERO */}
      <section className="bg-[#081B33] text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider border border-brand-accent/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{service.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-heading block">
              {service.heroHeadline}
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed">
              {service.heroSubheadline}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="bg-slate-900/90 border border-slate-700 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Close Rate:</span>
                <span className="font-bold text-emerald-400 font-mono">{service.avgConversionRate}</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-700 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-accent" />
                <span className="text-slate-300 font-bold">{service.qualityGuarantee}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SPECS & FEATURES */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Features & Benefits */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                  Key Campaign Features & Compliance Standards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Cards */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Why Leading Agencies Choose Our {service.title}
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <h3 className="text-lg font-bold text-brand-primary">{b.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Campaign Process & Lead Delivery Pipeline
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.processSteps.map((p) => (
                    <div key={p.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-2xl font-black text-brand-accent font-mono block mb-2">{p.step}</span>
                      <h4 className="text-base font-bold text-slate-900 mb-1">{p.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {service.faq.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-brand-primary" />
                    Frequently Asked Questions ({service.title})
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((item, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <h4 className="text-base font-bold text-slate-900">{item.q}</h4>
                        <p className="text-sm text-slate-600">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Specs & Lead Form */}
            <div className="lg:col-span-4 space-y-8">
              {/* Specs Card */}
              <div className="bg-brand-dark text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 uppercase tracking-wider text-xs">
                  {service.title} Technical Specifications
                </h3>
                <div className="space-y-3 text-xs">
                  {service.leadSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="font-bold text-brand-accent font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Capture Form */}
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
