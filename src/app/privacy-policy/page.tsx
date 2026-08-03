import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 prose prose-slate">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Privacy Policy & TCPA Compliance Notice</h1>
        <p className="text-xs text-slate-400">Effective Date: August 1, 2026</p>

        <p className="text-slate-600 mb-6">
          Voxentra Solutions Pvt. Ltd. (&quot;Voxentra&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to respecting your privacy and adhering strictly to all federal and state privacy regulations, including the Telephone Consumer Protection Act (TCPA), FTC Telemarketing Sales Rules, and the California Consumer Privacy Act (CCPA).
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">1. Information We Collect</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We collect information that you voluntarily provide to us, including your name, telephone number, email address, and specific details related to your request for service quotes (such as automotive, home improvement, insurance, or financial services).
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The information collected is used to connect you with licensed service providers, contractors, or agents in your area (including auto insurance, HVAC, home remodeling, life insurance, and debt management professionals) to fulfill your request for quotes.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">3. Consent to Contact (TCPA Compliance)</h2>
        <div className="p-5 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl text-sm text-slate-700 leading-relaxed my-4">
          <p className="font-medium text-slate-800">
            By submitting your information, you expressly consent to receive calls, SMS, or automated messages from us and our network of trusted service partners regarding your inquiry, even if your number is listed on a Do Not Call (DNC) registry.
          </p>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">4. 1-to-1 Explicit Consumer Consent</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          All leads and call transfers generated through Voxentra websites and publisher channels require affirmative 1-to-1 explicit consent. Visual recordings and timestamped 1-to-1 explicit consent tokens are collected and securely stored for audit protection.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">5. Do Not Call (DNC) Registry Scrubbing</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          All phone numbers processed for outbound telemarketing campaigns undergo real-time scrubbing against the Federal Do Not Call registry and internal company suppression lists.
        </p>
      </div>
    </div>
  );
}
