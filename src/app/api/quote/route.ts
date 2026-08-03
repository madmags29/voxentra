import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { vertical, volume = 100 } = body;

    const basePricing: Record<string, number> = {
      "aca-health-insurance": 45,
      "final-expense-insurance": 55,
      "debt-settlement": 75,
      "water-damage-restoration": 180,
      "auto-insurance": 35,
      "ssdi-disability": 65,
      "home-services": 85,
    };

    const costPerLead = basePricing[vertical] || 50;
    const totalEstimate = costPerLead * Number(volume);

    return NextResponse.json({
      success: true,
      vertical,
      volume,
      costPerLead,
      totalEstimate,
      currency: "USD",
      tcpaCertificateIncluded: true,
      warmBufferGuarantee: "90s - 120s",
    });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid parameters" }, { status: 400 });
  }
}
