import React from "react";

export const CallCenterVector: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="600" y2="400">
          <stop offset="0%" stopColor="#081B33" />
          <stop offset="100%" stopColor="#0E2545" />
        </linearGradient>
        <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="emeraldGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Outer Card Screen */}
      <rect width="600" height="400" rx="20" fill="url(#bgGrad)" stroke="#1E293B" strokeWidth="2" />

      {/* Grid Pattern */}
      <path d="M0 80 H600 M0 160 H600 M0 240 H600 M0 320 H600" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M120 0 V400 M240 0 V400 M360 0 V400 M480 0 V400" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

      {/* Top Header Bar */}
      <rect x="30" y="25" width="540" height="40" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
      <circle cx="55" cy="45" r="5" fill="#EF4444" />
      <circle cx="70" cy="45" r="5" fill="#F59E0B" />
      <circle cx="85" cy="45" r="5" fill="#10B981" />
      <text x="110" y="49" fill="#94A3B8" fontSize="12" fontFamily="sans-serif" fontWeight="bold">
        VOXENTRA DIALER CONTROL & CRM ENGINE v4.2
      </text>

      {/* Left Column: Live Analytics Cards */}
      <rect x="30" y="85" width="180" height="85" rx="10" fill="#0F172A" stroke="url(#cyanGlow)" strokeWidth="1.5" />
      <text x="45" y="108" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
        REAL-TIME CONVERSION
      </text>
      <text x="45" y="140" fill="#FFFFFF" fontSize="24" fontFamily="sans-serif" fontWeight="900">
        34.8%
      </text>

      <rect x="30" y="185" width="180" height="85" rx="10" fill="#0F172A" stroke="url(#emeraldGlow)" strokeWidth="1.5" />
      <text x="45" y="208" fill="#10B981" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
        AVG HOLD BUFFER TIME
      </text>
      <text x="45" y="240" fill="#FFFFFF" fontSize="24" fontFamily="sans-serif" fontWeight="900">
        112 sec
      </text>

      <rect x="30" y="285" width="180" height="85" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
      <text x="45" y="308" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
        TCPA CONSENT STATUS
      </text>
      <text x="45" y="340" fill="#10B981" fontSize="16" fontFamily="sans-serif" fontWeight="bold">
        ✓ 100% Verified
      </text>

      {/* Center: Live Call Wave & Agent Visualization */}
      <rect x="230" y="85" width="340" height="285" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1" />

      {/* Soundwave Graphic */}
      <path
        d="M260 150 Q 290 100 320 150 T 380 150 T 440 150 T 500 150 T 540 150"
        fill="none"
        stroke="url(#cyanGlow)"
        strokeWidth="3"
      />

      {/* Animated Sound Bars */}
      <rect x="270" y="180" width="8" height="40" rx="4" fill="#38BDF8" />
      <rect x="285" y="160" width="8" height="80" rx="4" fill="#10B981" />
      <rect x="300" y="170" width="8" height="60" rx="4" fill="#38BDF8" />
      <rect x="315" y="150" width="8" height="100" rx="4" fill="#10B981" />
      <rect x="330" y="175" width="8" height="50" rx="4" fill="#38BDF8" />

      {/* Call Details Table */}
      <rect x="250" y="270" width="300" height="80" rx="8" fill="#1E293B" />
      <text x="265" y="293" fill="#38BDF8" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
        CALL CONNECTED: Texas (TX) — ACA Health Insurance
      </text>
      <text x="265" y="315" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
        Prospect: Subsidized Marketplace | Income & Eligibility Screened
      </text>
      <text x="265" y="335" fill="#10B981" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
        STATUS: Warm Whispered to Agent (Ext #402)
      </text>
    </svg>
  );
};
