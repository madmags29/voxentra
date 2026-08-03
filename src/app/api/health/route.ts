import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "Voxentra Solutions API",
    version: "1.0.0",
    tcpaComplianceEngine: "Active",
    timestamp: new Date().toISOString(),
  });
}
