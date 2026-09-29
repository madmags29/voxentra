"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, Phone } from "lucide-react";

interface LandingFooterProps {
  vertical?: string;
  phoneHotline?: string;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  vertical = "Home Services",
  phoneHotline = "(+91) 884 068 2135",
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pb-8 border-b border-slate-800 text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">100% TCPA Compliant & Verified</span>
          </div>
          <div className="hidden sm:block text-slate-700">&bull;</div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">256-Bit SSL Encrypted Submission</span>
          </div>
          <div className="hidden sm:block text-slate-700">&bull;</div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>
              Leads directed to{" "}
              <a
                href="mailto:hello@voxentraglobal.com"
                className="text-emerald-400 hover:text-emerald-300 underline font-semibold"
              >
                hello@voxentraglobal.com
              </a>
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-[11px] leading-relaxed space-y-2">
          <p>
            Voxentra Solutions connects property owners with licensed, independent third-party home improvement and specialty trade contractors. We do not perform contractor services directly. All estimates are free and provided by certified local professionals.
          </p>
          <p>
            By submitting a request, you authorize Voxentra and our network of verified service providers to contact you at the phone number provided (including via automated telephone technology, SMS text, and prerecorded calls) regarding your inquiry. Consent is not a condition of purchase.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900 text-[12px]">
          <div>
            &copy; 2026 Voxentra Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-400 transition underline">
              Terms &amp; Conditions
            </Link>
            <a
              href={`tel:${phoneHotline.replace(/[^\d+]/g, "")}`}
              className="text-emerald-400 hover:text-emerald-300 transition font-mono font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {phoneHotline}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
