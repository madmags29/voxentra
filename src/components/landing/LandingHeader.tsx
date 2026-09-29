"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

interface LandingHeaderProps {
  phoneHotline?: string;
  badge?: string;
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  phoneHotline = "(+91) 884 068 2135",
}) => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("quote-card");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo variant="white" size="md" />
        </Link>

        {/* Right side contact & CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/90 border border-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-left hidden sm:block">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                24/7 Priority Hotline:
              </div>
              <a
                href={`tel:${phoneHotline.replace(/[^\d+]/g, "")}`}
                className="text-sm font-extrabold text-emerald-400 hover:text-emerald-300 font-mono transition tracking-wide flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 inline" />
                {phoneHotline}
              </a>
            </div>
            {/* Mobile compact call button */}
            <a
              href={`tel:${phoneHotline.replace(/[^\d+]/g, "")}`}
              className="sm:hidden text-xs font-bold text-emerald-400 flex items-center gap-1 font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Quick Quote Button */}
          <button
            onClick={scrollToForm}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <span>Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
