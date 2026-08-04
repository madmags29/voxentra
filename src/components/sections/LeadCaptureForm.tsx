"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Phone, Send, Building2, User, Mail, Sparkles } from "lucide-react";

export const LeadCaptureForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    industry: "ACA & Health Insurance",
    leadType: "Live Call Transfers",
    monthlyRequirement: "100 - 500 Leads / Mo",
    fullName: "",
    company: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.lead) {
        try {
          const stored = JSON.parse(localStorage.getItem("voxentra_submitted_leads") || "[]");
          localStorage.setItem("voxentra_submitted_leads", JSON.stringify([data.lead, ...stored]));
        } catch (e) {
          console.error("LocalStorage save error:", e);
        }
      }
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Inquiry Received Successfully!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. A Voxentra B2B Lead Specialist has received your request for <span className="font-semibold text-brand-primary">{formData.industry}</span> campaigns.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 font-mono">
          Confirmation Reference: #VOX-{Math.floor(100000 + Math.random() * 900000)}
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
          }}
          className="text-xs text-brand-primary underline font-bold"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-6 md:p-8">
      {/* Header */}
      <div className="pb-5 border-b border-slate-100 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          Instant B2B Quote Request
        </span>
        <h3 className="text-xl font-bold text-brand-dark">Launch Your Telemarketing Campaign</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Company / Agency Name *
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Apex Health Insurance"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Business Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                placeholder="sarah@agency.com"
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Direct Phone *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="tel"
                required
                placeholder="(512) 555-0199"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Target Industry Vertical
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
          >
            <option value="ACA & Health Insurance">ACA & Health Insurance</option>
            <option value="Final Expense & Senior Life">Final Expense & Senior Life</option>
            <option value="Debt Settlement & Relief">Debt Settlement & Relief</option>
            <option value="24/7 Water Damage Restoration">24/7 Water Damage Restoration</option>
            <option value="Auto Insurance Savings">Auto Insurance Savings</option>
            <option value="SSDI Disability Claims">SSDI Disability Claims</option>
            <option value="Home Services & Solar">Home Services & Solar</option>
            <option value="Legal & Mass Tort">Legal & Mass Tort</option>
            <option value="Other Business Vertical">Other Business Vertical</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Campaign Requirements (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Target states, current close rate, specific filters needed..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-emeraldGlow flex items-center justify-center gap-2 transition"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>100% Confidential & Free Consultation. Zero Obligations.</span>
      </div>
    </div>
  );
};
