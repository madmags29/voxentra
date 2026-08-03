import { NextResponse } from "next/server";
import { sendLeadNotificationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, businessEmail, phoneNumber, industry, leadType, monthlyRequirement, company, message } = body;

    if (!fullName || !businessEmail || !phoneNumber) {
      return NextResponse.json(
        { success: false, error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    const leadRecord = {
      leadId: `VOX-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      businessEmail,
      phoneNumber,
      company: company || "N/A",
      industry: industry || "General Inquiry",
      leadType: leadType || "Live Transfers",
      monthlyRequirement: monthlyRequirement || "Standard",
      message: message || "",
    };

    console.log("New Lead Form Submitted to hello@voxentraglobal.com:", leadRecord);

    // Dispatch real SMTP email to hello@voxentraglobal.com
    try {
      await sendLeadNotificationEmail(leadRecord);
      console.log("SMTP Email successfully sent to hello@voxentraglobal.com");
    } catch (emailErr) {
      console.error("SMTP Email Dispatch Error:", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead inquiry submitted successfully. A Voxentra Specialist will reach out within 15 minutes.",
        lead: leadRecord,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
