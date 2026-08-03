import React from "react";

export default function TermsPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 prose prose-slate">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Terms & Conditions of Service</h1>
        <p className="text-xs text-slate-400">Effective Date: August 1, 2026</p>

        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Welcome to Voxentra Solutions. By accessing our platform, ordering live call transfers, or using our lead routing APIs, you agree to comply with and be bound by the following enterprise terms and conditions.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">1. Lead Exclusivity & SLA</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Voxentra guarantees that exclusive live transfers and leads purchased under exclusive agreements are routed solely to the contracted buyer entity.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-2">2. Call Buffer & Credit Policy</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Warm live call transfers include a standard 60-second to 120-second duration buffer depending on campaign specifications. Calls disconnecting prior to the agreed buffer duration are eligible for unbilled status or replacement credit.
        </p>
      </div>
    </div>
  );
}
