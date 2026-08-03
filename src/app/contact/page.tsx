import React from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            GET IN TOUCH WITH OUR TEAM
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Talk to Our Enterprise Sales Specialists
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Ready to fuel your call center with high-intent warm live transfers? Contact us today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Corporate Headquarters
                </h3>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Voxentra Global / Solutions</p>
                      <p className="text-slate-600">739, Isai Tola, Kamal Singh Colony</p>
                      <p className="text-slate-600">Jhansi (U.P.) 284003, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Direct Support Desk</p>
                      <p className="font-bold text-slate-900 font-mono text-base">(+91) 884 068 2135</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Business Inquiries</p>
                      <p className="font-bold text-slate-900">hello@voxentraglobal.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Operating Hours</p>
                      <p className="font-medium text-slate-700">Mon - Fri: 8:00 AM - 8:00 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>100% Confidential Consultation & Instant SLA</span>
                </div>
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
