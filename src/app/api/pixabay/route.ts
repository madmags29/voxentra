import { NextResponse } from "next/server";
import { fetchPixabayImages, fetchPixabayVideos } from "@/lib/pixabay";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q") || "telemarketing call center";
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const type = searchParams.get("type") || "photo";

    if (type === "video") {
      const videos = await fetchPixabayVideos(query, limit);
      return NextResponse.json({ success: true, count: videos.length, videos });
    } else {
      const images = await fetchPixabayImages(query, limit);
      return NextResponse.json({ success: true, count: images.length, images });
    }
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch from Pixabay" },
      { status: 500 }
    );
  }
}
