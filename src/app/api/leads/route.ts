import { NextResponse } from "next/server";
import { sendLeadNotificationEmail } from "@/lib/email";
import fs from "fs";
import path from "path";

export interface LeadItem {
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
  createdAt: string;
  message?: string;
}

const DEFAULT_LEADS: LeadItem[] = [
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
    createdAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    message: "Need 500 ACA live transfers per month in FL and TX."
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
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    message: "Minimum $10,000 unsecured debt filter."
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
    createdAt: new Date(Date.now() - 180 * 60 * 1000).toISOString(),
    message: "Emergency water damage inbound calls for Cleveland area."
  }
];

const LEADS_FILE = path.join(process.env.TMPDIR || "/tmp", "voxentra_leads.json");

function getStoredLeads(): LeadItem[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Error reading stored leads file:", err);
  }
  return DEFAULT_LEADS;
}

function saveStoredLeads(leads: LeadItem[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing stored leads file:", err);
  }
}

export async function GET() {
  const leads = getStoredLeads();
  return NextResponse.json({
    success: true,
    leads,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, businessEmail, email, phoneNumber, phone, industry, leadType, monthlyRequirement, volume, company, message } = body;

    const finalEmail = businessEmail || email;
    const finalPhone = phoneNumber || phone;

    if (!fullName || !finalEmail || !finalPhone) {
      return NextResponse.json(
        { success: false, error: "Missing required contact fields (fullName, email, phone)." },
        { status: 400 }
      );
    }

    const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
    const newLead: LeadItem = {
      id: `VOX-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      email: finalEmail,
      phone: finalPhone,
      company: company || "N/A",
      industry: industry || "General Inquiry",
      leadType: leadType || "Live Call Transfers",
      volume: monthlyRequirement || volume || "100 - 500 Leads / Mo",
      status: "NEW",
      consentToken: `TCPA-${randomHex}`,
      date: "Just now",
      createdAt: new Date().toISOString(),
      message: message || "",
    };

    const currentLeads = getStoredLeads();
    const updatedLeads = [newLead, ...currentLeads];
    saveStoredLeads(updatedLeads);

    console.log("New Lead Enquiry Recorded in System:", newLead);

    // Dispatch real SMTP email notification in background (non-blocking)
    sendLeadNotificationEmail({
      leadId: newLead.id,
      fullName: newLead.fullName,
      businessEmail: newLead.email,
      phoneNumber: newLead.phone,
      company: newLead.company,
      industry: newLead.industry,
      leadType: newLead.leadType,
      monthlyRequirement: newLead.volume,
      message: newLead.message,
    }).then(() => {
      console.log("SMTP Email successfully sent to hello@voxentraglobal.com");
    }).catch((emailErr) => {
      console.error("SMTP Email Dispatch Error (non-blocking):", emailErr);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead inquiry submitted successfully.",
        lead: newLead,
        leads: updatedLeads,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("API Lead POST Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
