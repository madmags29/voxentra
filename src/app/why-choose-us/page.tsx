import React from "react";
import { QualityComparison } from "@/components/sections/QualityComparison";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { ShieldCheck, CheckCircle, Lock, Award, Zap, PhoneCall } from "lucide-react";

export default function WhyChooseUsPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            THE VOXENTRA DIFFERENCE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Built for Maximum B2B Lead Conversion & Zero TCPA Risk
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Discover why 500+ US insurance agencies, debt relief firms, and home services contractors rely on Voxentra Solutions.
          </p>
        </div>
      </section>

      <QualityComparison />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3">
              <ShieldCheck className="w-10 h-10 text-emerald-500" />
              <h3 className="text-xl font-bold text-slate-900">1-to-1 TCPA Audit Certificates</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                100% of leads and live call transfers carry time-stamped visual audit certificates, shielding your business from compliance litigation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3">
              <PhoneCall className="w-10 h-10 text-brand-primary" />
              <h3 className="text-xl font-bold text-slate-900">Warm Transfer Buffer Policy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom buffer options (60s - 120s) ensure you only pay for genuine conversations with interested consumers who meet your criteria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3">
              <Zap className="w-10 h-10 text-brand-accent" />
              <h3 className="text-xl font-bold text-slate-900">Instant CRM Integrations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct REST API, Ringba, Vicidial, Convoso, Salesforce, and HubSpot integrations deliver lead data in under 200 milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
