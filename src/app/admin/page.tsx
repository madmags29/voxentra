"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Users, PhoneCall, ShieldCheck, Filter, Download, Plus, Search, CheckCircle2, Clock, AlertCircle, LayoutDashboard, FileText, Settings, LogOut, Lock, KeyRound, ArrowRight } from "lucide-react";

interface AdminLead {
  id: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  leadType: string;
  volume: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED";
  consentToken: string;
  date: string;
}

const INITIAL_LEADS: AdminLead[] = [
  {
    id: "VOX-849201",
    fullName: "Marcus Vance",
    company: "Apex Health Partners",
    email: "marcus@apexhealth.com",
    phone: "(512) 555-0194",
    industry: "ACA & Health Insurance",
    leadType: "Live Call Transfers",
    volume: "500 Leads / Mo",
    status: "NEW",
    consentToken: "TCPA-8F92A110",
    date: "10 mins ago",
  },
  {
    id: "VOX-731904",
    fullName: "Elena Rodriguez",
    company: "National Debt Relief",
    email: "elena@ndrcenter.com",
    phone: "(305) 555-8831",
    industry: "Debt Settlement & Relief",
    leadType: "Inbound Phone Calls",
    volume: "1,000 Leads / Mo",
    status: "QUALIFIED",
    consentToken: "TCPA-4B19C992",
    date: "1 hour ago",
  },
  {
    id: "VOX-620411",
    fullName: "David Sterling",
    company: "Restoration Pro 24/7",
    email: "david@restorationpro.com",
    phone: "(216) 555-4012",
    industry: "24/7 Water Damage",
    leadType: "Live Call Transfers",
    volume: "250 Calls / Mo",
    status: "CONVERTED",
    consentToken: "TCPA-99A041EF",
    date: "3 hours ago",
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [leads, setLeads] = useState<AdminLead[]>(INITIAL_LEADS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [activeTab, setActiveTab] = useState<"leads" | "cms" | "settings">("leads");

  // Modal & Form State for Submitting New Lead Inquiries inside Admin Portal
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [newLead, setNewLead] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "ACA & Health Insurance",
    leadType: "Live Call Transfers",
    volume: "100 - 500 Leads / Mo",
    message: "",
  });

  const fetchLeads = async () => {
    try {
      let apiLeads: AdminLead[] = [];
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.leads)) {
          apiLeads = data.leads;
        }
      }

      let localLeads: AdminLead[] = [];
      try {
        localLeads = JSON.parse(localStorage.getItem("voxentra_submitted_leads") || "[]");
      } catch (e) {
        console.error("Local leads parse error:", e);
      }

      // Merge API leads and local leads without duplicates by ID
      const combined = [...localLeads, ...apiLeads];
      const uniqueLeads = Array.from(new Map(combined.map((item) => [item.id, item])).values());

      if (uniqueLeads.length > 0) {
        setLeads(uniqueLeads);
      }
    } catch (err) {
      console.error("Error fetching live leads:", err);
    }
  };

  useEffect(() => {
    setIsClient(true);
    const authSession = sessionStorage.getItem("voxentra_admin_auth");
    if (authSession === "true") {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    setTimeout(() => {
      if (email.trim() && password.trim()) {
        setIsAuthenticated(true);
        sessionStorage.setItem("voxentra_admin_auth", "true");
        fetchLeads();
      } else {
        setLoginError("Please enter both email and password.");
      }
      setIsLoading(false);
    }, 600);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("voxentra_admin_auth");
  };

  const handleCreateLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead),
      });
      const data = await res.json();
      if (res.ok && data.success && data.lead) {
        try {
          const stored = JSON.parse(localStorage.getItem("voxentra_submitted_leads") || "[]");
          localStorage.setItem("voxentra_submitted_leads", JSON.stringify([data.lead, ...stored]));
        } catch (err) {
          console.error("LocalStorage save error:", err);
        }

        setToastMessage(`Lead ${data.lead.id} created successfully!`);
        setShowAddModal(false);
        setNewLead({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          industry: "ACA & Health Insurance",
          leadType: "Live Call Transfers",
          volume: "100 - 500 Leads / Mo",
          message: "",
        });
        fetchLeads();
        setTimeout(() => setToastMessage(""), 4000);
      } else {
        alert(data.error || "Failed to submit lead inquiry.");
      }
    } catch {
      alert("Error connecting to lead submission endpoint.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isClient) return null;

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Decorative Background Blur Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 shadow-2xl space-y-6 relative z-10">
          {/* Brand Logo Header */}
          <div className="text-center space-y-3">
            <div className="inline-block">
              <Logo variant="white" size="lg" />
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-bold text-white font-heading flex items-center justify-center gap-2">
                <Lock className="w-4 h-4 text-brand-accent" />
                Enterprise Portal Login
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Enter your credentials to access live leads & campaign analytics
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 pt-2">
            {loginError && (
              <div className="p-3 bg-red-950/80 border border-red-500/40 rounded-xl text-red-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Work Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="admin@voxentra.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Client Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Helper Hint */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-center space-y-1">
            <p className="font-semibold text-slate-300">🔑 Demo Access Credentials:</p>
            <p className="font-mono text-brand-accent">Email: admin@voxentra.com | Password: voxentra2026</p>
          </div>

          <div className="pt-2 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Admin Header Bar */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo variant="white" size="md" />
          <span className="text-xs font-mono bg-brand-primary/30 text-brand-accent px-2.5 py-1 rounded border border-brand-accent/20">
            Enterprise Client Portal v2.4
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-semibold">TCPA API: Active</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-slate-400 hover:text-white flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition font-medium"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-950 border-r border-slate-800 p-6 space-y-6 hidden md:block">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Management Portal</p>
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("leads")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                  activeTab === "leads" ? "bg-brand-primary text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Lead Inquiries ({leads.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("cms")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                  activeTab === "cms" ? "bg-brand-primary text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Blog CMS Articles</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                  activeTab === "settings" ? "bg-brand-primary text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>API & Webhook Keys</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Inquiries</span>
              <p className="text-3xl font-black text-white font-mono mt-1">128</p>
              <span className="text-[10px] text-emerald-400 font-bold block mt-1">+14% this week</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Live Transfers Routed</span>
              <p className="text-3xl font-black text-brand-accent font-mono mt-1">842</p>
              <span className="text-[10px] text-slate-400 block mt-1">Avg connect: 2.4s</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1-to-1 Consent Verification</span>
              <p className="text-3xl font-black text-emerald-400 font-mono mt-1">100%</p>
              <span className="text-[10px] text-emerald-400 font-bold block mt-1">0 Compliance Violations</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Campaigns</span>
              <p className="text-3xl font-black text-purple-400 font-mono mt-1">11 Verticals</p>
              <span className="text-[10px] text-slate-400 block mt-1">All Systems Operational</span>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 px-4 py-3 rounded-xl text-xs font-bold flex items-center justify-between shadow-lg animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{toastMessage}</span>
              </div>
              <button onClick={() => setToastMessage("")} className="text-emerald-400 hover:text-white">✕</button>
            </div>
          )}

          {/* Lead Table Controls */}
          {activeTab === "leads" && (
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search leads by name or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-white focus:outline-none focus:border-brand-accent"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-300 outline-none"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="NEW">NEW</option>
                    <option value="QUALIFIED">QUALIFIED</option>
                    <option value="CONVERTED">CONVERTED</option>
                  </select>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Submit Lead Inquiry</span>
                  </button>

                  <button
                    onClick={() => alert("Exporting CSV report...")}
                    className="flex items-center gap-2 px-3 py-2 bg-brand-primary hover:bg-brand-primaryHover text-white rounded-xl text-xs font-bold shadow transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-3">Ref ID</th>
                      <th className="p-3">Prospect</th>
                      <th className="p-3">Company</th>
                      <th className="p-3">Industry Vertical</th>
                      <th className="p-3">Format</th>
                      <th className="p-3">TCPA Token</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-900/60 transition">
                        <td className="p-3 font-mono font-bold text-brand-accent">{lead.id}</td>
                        <td className="p-3">
                          <p className="font-bold text-white">{lead.fullName}</p>
                          <p className="text-[10px] text-slate-400">{lead.phone}</p>
                        </td>
                        <td className="p-3 font-medium">{lead.company}</td>
                        <td className="p-3 font-semibold text-slate-200">{lead.industry}</td>
                        <td className="p-3 text-slate-400">{lead.leadType}</td>
                        <td className="p-3 font-mono text-[10px] text-emerald-400">{lead.consentToken}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded text-[10px] font-extrabold uppercase ${
                              lead.status === "NEW"
                                ? "bg-amber-950 text-amber-400 border border-amber-500/30"
                                : lead.status === "QUALIFIED"
                                ? "bg-sky-950 text-sky-400 border border-sky-500/30"
                                : "bg-emerald-950 text-emerald-400 border border-emerald-500/30"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "cms" && (
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Blog CMS Article Manager</h3>
                <button
                  onClick={() => alert("Opening article editor modal...")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Article</span>
                </button>
              </div>
              <p className="text-xs text-slate-400">Manage blog articles, SEO metadata, and generative AI answer engine keywords.</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">API Keys & CRM Webhooks</h3>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-mono block">Production API Endpoint:</span>
                <code className="text-xs text-brand-accent font-mono block">https://www.voxentraglobal.com/api/leads</code>
                <span className="text-xs text-slate-400 font-mono block mt-2">Live Webhook Secret:</span>
                <code className="text-xs text-emerald-400 font-mono block">vx_live_9f82a174092b7c019a</code>
              </div>
            </div>
          )}

          {/* Submit Lead Inquiry Modal */}
          {showAddModal && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-5 relative animate-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Plus className="w-5 h-5 text-emerald-400" />
                      Submit New Lead Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">Enter lead details to register directly in system</p>
                  </div>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleCreateLeadSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={newLead.fullName}
                        onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Company / Agency *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Financial"
                        value={newLead.company}
                        onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@apex.com"
                        value={newLead.email}
                        onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Direct Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(512) 555-0199"
                        value={newLead.phone}
                        onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Industry Vertical</label>
                      <select
                        value={newLead.industry}
                        onChange={(e) => setNewLead({ ...newLead, industry: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      >
                        <option value="ACA & Health Insurance">ACA & Health Insurance</option>
                        <option value="Final Expense & Senior Life">Final Expense & Senior Life</option>
                        <option value="Debt Settlement & Relief">Debt Settlement & Relief</option>
                        <option value="24/7 Water Damage">24/7 Water Damage</option>
                        <option value="Auto Insurance Savings">Auto Insurance Savings</option>
                        <option value="SSDI Disability Claims">SSDI Disability Claims</option>
                        <option value="Home Services & Solar">Home Services & Solar</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold uppercase tracking-wider block">Lead Format</label>
                      <select
                        value={newLead.leadType}
                        onChange={(e) => setNewLead({ ...newLead, leadType: e.target.value })}
                        className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                      >
                        <option value="Live Call Transfers">Live Call Transfers</option>
                        <option value="Inbound Phone Calls">Inbound Phone Calls</option>
                        <option value="Outbound Telemarketing">Outbound Telemarketing</option>
                        <option value="Exclusive Digital Leads">Exclusive Digital Leads</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase tracking-wider block">Campaign Notes / Requirement</label>
                    <textarea
                      rows={2}
                      placeholder="Target states, volume notes, specific criteria..."
                      value={newLead.message}
                      onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-brand-accent"
                    />
                  </div>

                  <div className="pt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="w-1/3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmittingLead ? "Submitting Inquiry..." : "Submit Inquiry to Portal"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
