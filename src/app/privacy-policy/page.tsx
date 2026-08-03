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

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">1. 1-to-1 Explicit Consumer Consent</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          All leads and call transfers generated through Voxentra websites and publisher channels require affirmative 1-to-1 explicit consent. Visual recordings and timestamped 1-to-1 explicit consent tokens are collected and securely stored for audit protection.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">2. Information Collection & Usage</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We collect business inquiry details (name, company, business email, phone, industry) to provide campaign quotes, live call routing, and client support. We do not sell consumer personal information to unauthorized third-party brokers.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">3. Do Not Call (DNC) Registry Scrubbing</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          All phone numbers processed for outbound telemarketing campaigns undergo real-time scrubbing against the Federal Do Not Call registry and internal company suppression lists.
        </p>
      </div>
    </div>
  );
}
