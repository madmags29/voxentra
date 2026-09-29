"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const LANDING_ROUTES = [
  "/hvac",
  "/plumbing",
  "/roofing",
  "/windows",
  "/window",
  "/bathroom",
  "/water-damage",
  "/pest-control",
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = LANDING_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));

  if (isLanding) {
    return <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">{children}</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
