import React from "react";
import Image from "next/image";
import { Download, Palette, Type, ShieldCheck, Sparkles } from "lucide-react";

export default function BrandGuidelinesPage() {
  const brandColors = [
    { name: "Voxentra Primary", hex: "#0F4C81", class: "bg-[#0F4C81]", desc: "Corporate Deep Sapphire" },
    { name: "Voxentra Secondary", hex: "#10B981", class: "bg-[#10B981]", desc: "Conversion Emerald" },
    { name: "Voxentra Accent", hex: "#38BDF8", class: "bg-[#38BDF8]", desc: "Bright Tech Sky" },
    { name: "Luxury Dark Navy", hex: "#081B33", class: "bg-[#081B33]", desc: "Dark Canvas Background" },
    { name: "Light Background", hex: "#F8FAFC", class: "bg-[#F8FAFC] border border-slate-300", desc: "Clean Content Canvas" },
    { name: "Core Text", hex: "#111827", class: "bg-[#111827]", desc: "High Contrast Typography" },
  ];

  const logoVariants = [
    {
      title: "Primary Logo (Standard)",
      desc: "Full brand signature for light backgrounds, website header, primary navigation, and official print collaterals.",
      specs: "500 × 100 px • Vector SVG",
      bgClass: "bg-slate-50",
      src: "/images/voxentra-logo-light.svg",
      imgClass: "h-12 w-auto",
      fileBase: "voxentra-logo-light",
    },
    {
      title: "Dark Canvas Version",
      desc: "High-contrast inverted signature optimized for dark navy backgrounds, footers, dark mode UI, and slide decks.",
      specs: "500 × 100 px • Vector SVG",
      bgClass: "bg-brand-dark",
      src: "/images/voxentra-logo-dark.svg",
      imgClass: "h-12 w-auto",
      fileBase: "voxentra-logo-dark",
    },
    {
      title: "Icon Only (Standalone Mark)",
      desc: "Iconic V-symbol representing soundwaves & growth nodes. Ideal for social avatars, profile pictures, and badges.",
      specs: "100 × 100 px • Vector SVG",
      bgClass: "bg-slate-50",
      src: "/images/voxentra-icon.svg",
      imgClass: "h-14 w-14",
      fileBase: "voxentra-icon",
    },
    {
      title: "Compact Horizontal",
      desc: "Scalable horizontal layout tailored for sticky navbars, email signatures, co-branding headers, and footers.",
      specs: "300 × 60 px • Vector SVG",
      bgClass: "bg-slate-50",
      src: "/images/voxentra-logo-light.svg",
      imgClass: "h-8 w-auto",
      fileBase: "voxentra-logo-light",
    },
    {
      title: "Mobile App Icon",
      desc: "App icon format featuring dark navy container background with rounded corners for iOS & Android launcher screens.",
      specs: "512 × 512 px • Vector SVG",
      bgClass: "bg-slate-50",
      src: "/images/voxentra-icon.svg",
      imgClass: "h-16 w-16 p-2.5 bg-brand-dark rounded-2xl shadow-lg",
      fileBase: "voxentra-icon",
    },
    {
      title: "Favicon & Browser Badge",
      desc: "Micro-format icon tuned for browser tab favicons (16x16, 32x32) and mobile web app browser badges.",
      specs: "32 × 32 px • Vector SVG",
      bgClass: "bg-slate-50",
      src: "/images/voxentra-icon.svg",
      imgClass: "h-8 w-8",
      fileBase: "voxentra-icon",
    },
  ];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen pb-20">
      {/* HERO */}
      <section className="bg-brand-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            OFFICIAL BRAND IDENTITY & ASSETS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Voxentra Solutions Brand Guidelines
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Enterprise branding system including SVG logo variants, color tokens, and typography specifications.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* LOGO SUITE DELIVERABLES */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              1. Logo Suite Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logoVariants.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center mb-4">{v.title}</span>
                <div className={`p-6 ${v.bgClass} rounded-xl flex items-center justify-center min-h-[140px] flex-grow`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.src}
                    alt={v.title}
                    className={v.imgClass}
                  />
                </div>
                <p className="text-xs text-slate-600 font-medium text-center mt-4 leading-relaxed">{v.desc}</p>
                <div className="mt-2 text-center">
                  <span className="inline-block text-[10px] font-mono font-semibold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">{v.specs}</span>
                </div>
                <div className="pt-4 mt-auto flex items-center justify-center gap-5 border-t border-slate-100">
                  <a
                    href={`/images/${v.fileBase}.svg`}
                    download
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-brand-primary transition flex items-center gap-1.5 py-1"
                  >
                    <Download className="w-3.5 h-3.5" /> SVG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLOR SYSTEM */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              2. Color Palette & Tokens
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandColors.map((col) => (
              <div key={col.hex} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
                <div className={`h-20 rounded-xl ${col.class} shadow-inner`} />
                <div>
                  <p className="text-xs font-bold text-slate-900">{col.name}</p>
                  <p className="text-sm font-mono font-bold text-slate-700 mt-0.5">{col.hex}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TYPOGRAPHY */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Type className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              3. Typography & Personality
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Headings & Display Font</h3>
              <p className="text-2xl font-black text-brand-primary font-heading">Plus Jakarta Sans</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Used for main hero headlines, section titles, and key statistics to communicate enterprise trust, modern technology, and clarity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Body & Interface Font</h3>
              <p className="text-2xl font-bold text-slate-800 font-sans">Inter</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Used for body paragraphs, data tables, lead forms, and UI components for high legibility across all device screen resolutions.
              </p>
            </div>
          </div>
        </div>

        {/* USAGE RULES */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              4. Logo Usage Rules
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider">✓ Do&apos;s</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    Use the logo SVG files from the brand kit for all media.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    Maintain clear space of at least 1× the icon height around the logo.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    Use the Dark Canvas version on dark backgrounds.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    Ensure sufficient contrast between the logo and background.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider">✗ Don&apos;ts</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Do not stretch, skew, or rotate the logo.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Do not change the logo colors or gradients.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Do not place the logo on busy or low-contrast backgrounds.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Do not add drop shadows, outlines, or effects to the logo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
