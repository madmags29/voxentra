"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  Lock,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle,
  PhoneCall,
  Clock,
  Sparkles,
} from "lucide-react";

interface LandingQuoteFormProps {
  vertical: string;
  formTitle: string;
  formSubtitle: string;
  serviceOptions: string[];
  phoneHotline?: string;
}

export const LandingQuoteForm: React.FC<LandingQuoteFormProps> = ({
  vertical,
  formTitle,
  formSubtitle,
  serviceOptions,
  phoneHotline = "(+91) 884 068 2135",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    businessEmail: "",
    serviceNeeded: serviceOptions[0] || "",
    zipCode: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedLeadId, setSubmittedLeadId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          phone: formData.phoneNumber.trim(),
          businessEmail: formData.businessEmail.trim(),
          email: formData.businessEmail.trim(),
          serviceNeeded: formData.serviceNeeded,
          service: formData.serviceNeeded,
          zipCode: formData.zipCode.trim(),
          zip: formData.zipCode.trim(),
          industry: vertical,
          leadSource: `${vertical} Landing Page`,
          message: formData.message.trim(),
          volume: `ZIP: ${formData.zipCode.trim()} | Service: ${formData.serviceNeeded}`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit quote request. Please try again.");
      }

      setSubmittedLeadId(data.lead?.id || `VOX-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Quote submission error:", err);
      const msg = err instanceof Error ? err.message : "Network error. Please try again or call our hotline.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      businessEmail: "",
      serviceNeeded: serviceOptions[0] || "",
      zipCode: "",
      message: "",
    });
  };

  return (
    <div
      id="quote-card"
      className="bg-slate-900/95 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/10 rounded-2xl overflow-hidden backdrop-blur-xl relative transition-all"
    >
      {/* Top Banner Stripe */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 px-6 py-4 text-white text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase bg-slate-950/40 px-3 py-1 rounded-full text-emerald-200 border border-emerald-300/30">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
          <span>Instant Quote Dispatch</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black mt-1 font-heading text-white tracking-tight">
          {formTitle}
        </h3>
        <p className="text-emerald-100 text-xs sm:text-sm mt-0.5 leading-snug">
          {formSubtitle}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {isSuccess ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
                Ref ID: {submittedLeadId}
              </span>
              <h4 className="text-2xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your project details have been successfully delivered to{" "}
                <span className="text-emerald-400 font-semibold">hello@voxentraglobal.com</span>.
                A certified local specialist is reviewing your specifications and will contact you within{" "}
                <strong className="text-white">60 minutes</strong> with your customized written estimate.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-left text-xs text-slate-300 space-y-2">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Name:</span>
                <span className="font-semibold text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-emerald-400">{formData.serviceNeeded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">ZIP Code:</span>
                <span className="font-semibold text-white">{formData.zipCode}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${phoneHotline.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition shadow-lg shadow-emerald-500/20 font-mono"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline Now</span>
              </a>
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-xl text-sm transition border border-slate-700"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {errorMessage && (
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Miller"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Phone Number <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Service Needed <span className="text-emerald-400">*</span>
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900 text-white py-1">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Property ZIP Code <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="e.g. 90210"
                  maxLength={10}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Project Details / Urgency <span className="text-slate-500 text-[10px] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Describe your needs, number of rooms/units, or preferred timing..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-xl font-black text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting to Dispatch Team...</span>
                </>
              ) : (
                <>
                  <span>Get Free Quote Now</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Privacy & Trust Badge */}
            <div className="pt-2 text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>We respect your privacy. No spam. 100% Free written estimate.</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Quotes routed directly to verified local specialists via hello@voxentraglobal.com
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
