"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall, ShieldCheck, Activity, MapPin } from "lucide-react";

interface LiveFeedItem {
  id: number;
  state: string;
  vertical: string;
  duration: string;
  timeAgo: string;
}

const SAMPLE_FEEDS: LiveFeedItem[] = [
  { id: 1, state: "Texas (TX)", vertical: "ACA Health Insurance", duration: "114s Warm Buffer", timeAgo: "2s ago" },
  { id: 2, state: "California (CA)", vertical: "Final Expense Insurance", duration: "98s Connected", timeAgo: "5s ago" },
  { id: 3, state: "Florida (FL)", vertical: "Debt Settlement ($22k)", duration: "120s Qualified", timeAgo: "8s ago" },
  { id: 4, state: "Ohio (OH)", vertical: "24/7 Water Damage Emergency", duration: "Active Dispatch", timeAgo: "12s ago" },
  { id: 5, state: "New York (NY)", vertical: "SSDI Disability Advocate", duration: "Case Screening", timeAgo: "15s ago" },
];

export const USAMapVisualizer: React.FC = () => {
  const [activeFeedIndex, setActiveFeedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeedIndex((prev) => (prev + 1) % SAMPLE_FEEDS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentFeed = SAMPLE_FEEDS[activeFeedIndex];

  return (
    <div className="relative w-full rounded-2xl glass-dark p-6 overflow-hidden border border-slate-700/60 shadow-glow">
      {/* Background Radial Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <h3 className="text-white font-semibold text-sm tracking-wide">USA LIVE TRANSFER NETWORK</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>Real-Time Active</span>
        </div>
      </div>

      {/* USA Vector Map Visualization */}
      <div className="relative w-full h-56 md:h-64 flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full h-full opacity-40">
          {/* US Map Silhouette Outlines */}
          <path
            d="M150 120 L220 100 L320 110 L450 90 L580 80 L700 130 L750 200 L720 320 L680 380 L610 420 L520 440 L400 410 L280 390 L180 340 L100 260 L120 170 Z"
            fill="none"
            stroke="#0284C7"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M200 180 Q350 140 550 200"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M280 300 Q450 220 620 280"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Interactive State Pulse Nodes */}
          {/* Texas Node */}
          <g transform="translate(380, 320)" className="animate-pulse">
            <circle r="12" fill="#10B981" opacity="0.3" />
            <circle r="6" fill="#10B981" />
          </g>

          {/* California Node */}
          <g transform="translate(160, 220)" className="animate-pulse">
            <circle r="12" fill="#38BDF8" opacity="0.3" />
            <circle r="6" fill="#38BDF8" />
          </g>

          {/* Florida Node */}
          <g transform="translate(640, 360)" className="animate-pulse">
            <circle r="12" fill="#10B981" opacity="0.3" />
            <circle r="6" fill="#10B981" />
          </g>

          {/* Ohio Node */}
          <g transform="translate(560, 190)" className="animate-pulse">
            <circle r="10" fill="#38BDF8" opacity="0.3" />
            <circle r="5" fill="#38BDF8" />
          </g>

          {/* Connecting Laser Arc Lines */}
          <path d="M160 220 Q 380 180 380 320" fill="none" stroke="url(#laser1)" strokeWidth="2.5" />
          <path d="M380 320 Q 510 250 640 360" fill="none" stroke="url(#laser2)" strokeWidth="2.5" />

          <defs>
            <linearGradient id="laser1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="laser2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Live Call Alert Overlay Card */}
        <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-slate-900/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/40 border border-brand-accent/40 flex items-center justify-center text-brand-accent flex-shrink-0">
              <PhoneCall className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-brand-accent flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {currentFeed.state}
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                  {currentFeed.timeAgo}
                </span>
              </div>
              <p className="text-sm font-bold text-white mt-0.5">{currentFeed.vertical}</p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              TCPA Verified
            </span>
            <span className="text-xs text-slate-300 font-mono mt-0.5">{currentFeed.duration}</span>
          </div>
        </div>
      </div>

      {/* Network Stats Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">
          <p className="text-slate-400 text-[10px] uppercase">Daily Live Calls</p>
          <p className="text-emerald-400 font-bold text-sm">12,450+</p>
        </div>
        <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">
          <p className="text-slate-400 text-[10px] uppercase">Avg Connect Time</p>
          <p className="text-brand-accent font-bold text-sm">&lt; 2.8s</p>
        </div>
        <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">
          <p className="text-slate-400 text-[10px] uppercase">TCPA Consent</p>
          <p className="text-white font-bold text-sm">100% 1-to-1</p>
        </div>
      </div>
    </div>
  );
};
