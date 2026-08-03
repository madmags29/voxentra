"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { SERVICES_DATA } from "@/lib/data/services";
import { PhoneCall, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Clock, MapPin, Phone } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);
  const [estTime, setEstTime] = useState<string>("08:00 AM");
  const [pstTime, setPstTime] = useState<string>("05:00 AM");

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const updateTime = () => {
      const now = new Date();
      setEstTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setPstTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top US Time & Announcement Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-mono font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-sans font-bold uppercase tracking-wider">US MARKET TIME:</span>
            {isMounted ? (
              <>
                <span className="text-white font-bold">{estTime} EST</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-300">{pstTime} PST</span>
              </>
            ) : (
              <span className="text-white font-bold">08:00 AM EST | 05:00 AM PST</span>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% TCPA 1-to-1 Consent Verified
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold font-mono">
              <Phone className="w-3 h-3" />
              (+91) 884 068 2135
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo variant="primary" size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm font-semibold transition ${pathname === "/" ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 text-sm font-semibold transition py-2 ${pathname.startsWith("/services") ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}>
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-primary transition-transform" />
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full -left-20 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Targeted Service Verticals</span>
                      <Link href="/services" className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    {SERVICES_DATA.slice(0, 8).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-primary transition">
                              {service.title}
                            </p>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {service.shortDescription}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className={`text-sm font-semibold transition ${pathname.startsWith("/industries") ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}
              >
                Industries
              </Link>

              <Link
                href="/how-it-works"
                className={`text-sm font-semibold transition ${pathname === "/how-it-works" ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}
              >
                How It Works
              </Link>

              <Link
                href="/why-choose-us"
                className={`text-sm font-semibold transition ${pathname === "/why-choose-us" ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}
              >
                Why Us
              </Link>

              <Link
                href="/blog"
                className={`text-sm font-semibold transition ${pathname.startsWith("/blog") ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"}`}
              >
                Blog
              </Link>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-bold text-sm shadow-md hover:shadow-lg transition-transform active:scale-98 flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname === "/" ? "text-brand-primary" : "text-slate-800"}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname.startsWith("/services") ? "text-brand-primary" : "text-slate-800"}`}
          >
            All Services (11 Verticals)
          </Link>
          <Link
            href="/industries"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname.startsWith("/industries") ? "text-brand-primary" : "text-slate-800"}`}
          >
            Industries
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname === "/how-it-works" ? "text-brand-primary" : "text-slate-800"}`}
          >
            How It Works
          </Link>
          <Link
            href="/why-choose-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname === "/why-choose-us" ? "text-brand-primary" : "text-slate-800"}`}
          >
            Why Choose Us
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname === "/testimonials" ? "text-brand-primary" : "text-slate-800"}`}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold ${pathname.startsWith("/blog") ? "text-brand-primary" : "text-slate-800"}`}
          >
            Blog
          </Link>
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-600 font-sans uppercase font-bold text-[10px]">US TIME:</span>
              </div>
              {isMounted ? (
                <>
                  <span className="text-brand-primary">{estTime} EST</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-600">{pstTime} PST</span>
                </>
              ) : (
                <span className="text-brand-primary">08:00 AM EST</span>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full block text-center py-3 rounded-xl bg-brand-primary text-white font-bold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
