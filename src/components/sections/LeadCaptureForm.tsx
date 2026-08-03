"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Send, Building2, User, Mail, Sparkles } from "lucide-react";

export const LeadCaptureForm: React.FC = () => {
  const [step, setStep] = useState(1);
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
            setStep(1);
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
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Instant B2B Quote Request
          </span>
          <h3 className="text-xl font-bold text-brand-dark">Launch Your Telemarketing Campaign</h3>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? "bg-brand-primary text-white" : "bg-slate-200"}`}>1</span>
          <span className="w-4 h-0.5 bg-slate-200" />
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? "bg-brand-primary text-white" : "bg-slate-200"}`}>2</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Industry Vertical
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
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
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Primary Lead Format Needed
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Live Call Transfers", "Inbound Phone Calls", "Outbound Telemarketing", "Exclusive Digital Leads"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, leadType: type })}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition ${
                      formData.leadType === type
                        ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. Estimated Monthly Target Volume
              </label>
              <select
                value={formData.monthlyRequirement}
                onChange={(e) => setFormData({ ...formData, monthlyRequirement: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-brand-primary outline-none"
              >
                <option value="50 - 100 Leads / Mo">50 - 100 Leads / Month (Trial)</option>
                <option value="100 - 500 Leads / Mo">100 - 500 Leads / Month (Standard)</option>
                <option value="500 - 2,000 Leads / Mo">500 - 2,000 Leads / Month (Scale)</option>
                <option value="2,000+ Enterprise Volume">2,000+ Enterprise Volume / Month</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
            >
              <span>Next: Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-200">
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

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-emeraldGlow flex items-center justify-center gap-2 transition"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Details</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>100% Confidential & Free Consultation. Zero Obligations.</span>
      </div>
    </div>
  );
};
