import React from "react";
import { FAQS_DATA } from "@/lib/data/faqs";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { generateFAQSchema } from "@/lib/seo/schema";
import { HelpCircle, ShieldCheck } from "lucide-react";

export default function FaqPage() {
  const faqSchema = generateFAQSchema(FAQS_DATA);

  return (
    <div className="space-y-0">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* HERO */}
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            AI & ANSWER ENGINE OPTIMIZED FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to know about live call transfers, lead pricing, TCPA compliance, and CRM integrations.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {FAQS_DATA.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded">
                {faq.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
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
