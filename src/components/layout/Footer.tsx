import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ShieldCheck, Phone, Mail, MapPin, Lock, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Connecting Businesses with High-Intent Customers across the United States through 100% TCPA-compliant live call transfers, inbound campaigns, and exclusive leads.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
                <span>100% TCPA Verified</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-accent bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Lock className="w-4 h-4" />
                <span>1-to-1 Explicit Consent</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services/inbound-calls" className="hover:text-brand-accent transition">
                  Inbound Call Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/aca-health-insurance" className="hover:text-brand-accent transition">
                  ACA Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/final-expense-insurance" className="hover:text-brand-accent transition">
                  Final Expense Seniors
                </Link>
              </li>
              <li>
                <Link href="/services/debt-settlement" className="hover:text-brand-accent transition">
                  Debt Settlement & Relief
                </Link>
              </li>
              <li>
                <Link href="/services/water-damage-restoration" className="hover:text-brand-accent transition">
                  24/7 Water Damage
                </Link>
              </li>
              <li>
                <Link href="/services/home-services" className="hover:text-brand-accent transition">
                  Home Services & Solar
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Platform */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-brand-accent transition">
                  About Voxentra
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-brand-accent transition">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-accent transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-brand-accent transition">
                  Industry Verticals
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-brand-accent transition">
                  Testimonials & ROI
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-accent transition">
                  Resource Center / Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-accent transition">
                  FAQ & AI Answers
                </Link>
              </li>
              <li>
                <Link href="/brand-guidelines" className="hover:text-brand-accent transition">
                  Brand Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Admin Portal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Contact & Portal
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>739, Isai Tola, Kamal Singh Colony, Jhansi (U.P.) 284003, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-emerald-400 font-bold">(+91) 884 068 2135</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>hello@voxentraglobal.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 border border-slate-700 transition"
              >
                <Lock className="w-3.5 h-3.5 text-brand-accent" />
                <span>Client Lead Portal Login</span>
              </Link>
            </div>
          </div>
        </div>

        {/* TCPA Compliance Legal Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">TCPA & Compliance Guarantee:</p>
          <p>
            Voxentra Solutions operates in strict adherence to the Telephone Consumer Protection Act (TCPA), Federal Trade Commission (FTC) telemarketing sales rules, and Federal DNC regulations. All leads delivered feature verified 1-to-1 explicit consumer consent logged via verified visual certificate tokens.
          </p>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Voxentra Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/voxentra" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] transition text-slate-400">
              <Linkedin className="w-4 h-4" />
            </a>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
