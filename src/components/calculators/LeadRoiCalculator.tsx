"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Target, CheckCircle2, ArrowRight } from "lucide-react";

interface IndustryConfig {
  name: string;
  avgLeadCost: number;
  avgDealValue: number;
  defaultCloseRate: number;
}

const INDUSTRY_CONFIGS: Record<string, IndustryConfig> = {
  "aca-insurance": { name: "ACA / Health Insurance", avgLeadCost: 45, avgDealValue: 650, defaultCloseRate: 32 },
  "final-expense": { name: "Final Expense Insurance", avgLeadCost: 55, avgDealValue: 900, defaultCloseRate: 35 },
  "debt-settlement": { name: "Debt Settlement & Relief", avgLeadCost: 75, avgDealValue: 2800, defaultCloseRate: 28 },
  "water-damage": { name: "Water Damage Restoration", avgLeadCost: 180, avgDealValue: 5500, defaultCloseRate: 55 },
  "auto-insurance": { name: "Auto Insurance Savings", avgLeadCost: 35, avgDealValue: 500, defaultCloseRate: 25 },
  "ssdi-disability": { name: "SSDI Disability Claims", avgLeadCost: 65, avgDealValue: 1800, defaultCloseRate: 38 },
  "home-services": { name: "Home Services & Solar", avgLeadCost: 85, avgDealValue: 3200, defaultCloseRate: 30 },
};

export const LeadRoiCalculator: React.FC = () => {
  const [selectedIndustryKey, setSelectedIndustryKey] = useState("aca-insurance");
  const [monthlyVolume, setMonthlyVolume] = useState(100);
  const [closeRate, setCloseRate] = useState(30);

  const config = INDUSTRY_CONFIGS[selectedIndustryKey];

  const totalCampaignCost = monthlyVolume * config.avgLeadCost;
  const projectedClosedDeals = Math.round((monthlyVolume * closeRate) / 100);
  const projectedGrossRevenue = projectedClosedDeals * config.avgDealValue;
  const projectedNetProfit = projectedGrossRevenue - totalCampaignCost;
  const roiPercentage = totalCampaignCost > 0 ? Math.round((projectedNetProfit / totalCampaignCost) * 100) : 0;

  return (
    <div className="w-full bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4 text-brand-accent" />
            ROI & Revenue Estimator
          </div>
          <h3 className="text-2xl font-bold text-brand-dark">Calculate Your Campaign Revenue Potential</h3>
          <p className="text-sm text-slate-600 mt-1">Estimate your monthly gross revenue and net profit with Voxentra exclusive live transfers.</p>
        </div>
        <div className="bg-brand-light p-4 rounded-xl border border-slate-200 text-right min-w-[200px]">
          <span className="text-xs text-slate-500 font-medium block">ESTIMATED COST PER LEAD</span>
          <span className="text-2xl font-black text-brand-primary font-mono">${config.avgLeadCost}</span>
          <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">100% Exclusive & Compliant</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Industry Selector */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Select Your Target Industry</label>
            <select
              value={selectedIndustryKey}
              onChange={(e) => {
                setSelectedIndustryKey(e.target.value);
                setCloseRate(INDUSTRY_CONFIGS[e.target.value].defaultCloseRate);
              }}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
            >
              {Object.entries(INDUSTRY_CONFIGS).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.name} (Avg Ticket: ${item.avgDealValue.toLocaleString()})
                </option>
              ))}
            </select>
          </div>

          {/* Slider 1: Monthly Lead Volume */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Monthly Lead / Transfer Volume</label>
              <span className="text-base font-black text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-lg">
                {monthlyVolume} Leads / Month
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="1000"
              step="25"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
              <span>25 (Starter)</span>
              <span>250 (Mid-tier)</span>
              <span>1,000+ (Enterprise)</span>
            </div>
          </div>

          {/* Slider 2: Close Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Target Agent Close Rate (%)</label>
              <span className="text-base font-black text-brand-secondary bg-emerald-50 px-3 py-1 rounded-lg">
                {closeRate}% Conversion
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="1"
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
              <span>10% (Conservative)</span>
              <span>30% (Industry Benchmark)</span>
              <span>60% (High Producer)</span>
            </div>
          </div>

          {/* Included Features List */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block mb-1">What&apos;s Included In Your Estimate:</span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Exclusive Warm Connect</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>TCPA Consent Certificate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Custom Buffer Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Instant CRM Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projected Revenue Results Card */}
        <div className="lg:col-span-5 bg-brand-dark text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl" />

          <div>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase block mb-1">ESTIMATED MONTHLY RESULTS</span>
            <h4 className="text-xl font-bold text-white mb-6">Projected Business Impact</h4>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm text-slate-300">Campaign Investment:</span>
                <span className="text-base font-mono font-bold text-slate-200">${totalCampaignCost.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm text-slate-300 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-brand-accent" />
                  Estimated Closed Deals:
                </span>
                <span className="text-lg font-bold text-brand-accent font-mono">{projectedClosedDeals} Deals</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm text-slate-300">Projected Gross Revenue:</span>
                <span className="text-xl font-black text-white font-mono">${projectedGrossRevenue.toLocaleString()}</span>
              </div>

              <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide block">ESTIMATED NET PROFIT</span>
                    <span className="text-3xl font-black text-emerald-400 font-mono">${projectedNetProfit.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 font-medium block">ESTIMATED ROI</span>
                    <span className="text-xl font-extrabold text-emerald-300 flex items-center justify-end gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +{roiPercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <a
              href="/contact"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-emeraldGlow transition-transform active:scale-98"
            >
              <span>Reserve This Campaign Volume</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-[11px] text-center text-slate-400 mt-2">No commitment required. Speak with an enterprise lead strategist today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
