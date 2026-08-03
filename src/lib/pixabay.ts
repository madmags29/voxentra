const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || "1205054-735c0124dcc9779aa853f29fc";

export interface PixabayImage {
  id: number;
  pageURL: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
}

export interface PixabayVideo {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  picture_id: string;
  videos: {
    large: { url: string; width: number; height: number; size: number };
    medium: { url: string; width: number; height: number; size: number };
    small: { url: string; width: number; height: number; size: number };
    tiny: { url: string; width: number; height: number; size: number };
  };
  user: string;
}

export async function fetchPixabayImages(query: string, perPage: number = 6): Promise<PixabayImage[]> {
  try {
    const validPerPage = Math.max(3, Math.min(200, perPage));
    const encodedQuery = encodeURIComponent(query);
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${validPerPage}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn("Pixabay API HTTP error:", res.status, res.statusText);
      return getFallbackImages();
    }
    const data = await res.json();
    if (!data.hits || data.hits.length === 0) {
      return getFallbackImages();
    }
    return data.hits;
  } catch {
    return getFallbackImages();
  }
}

function getFallbackImages(): PixabayImage[] {
  return [
    {
      id: 1,
      pageURL: "https://unsplash.com",
      previewURL: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop",
      webformatURL: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      largeImageURL: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop",
      tags: "business team office",
      user: "Unsplash"
    },
    {
      id: 2,
      pageURL: "https://unsplash.com",
      previewURL: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop",
      webformatURL: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
      largeImageURL: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop",
      tags: "corporate strategy",
      user: "Unsplash"
    }
  ];
}

export async function fetchPixabayVideos(query: string, perPage: number = 3): Promise<PixabayVideo[]> {
  try {
    const validPerPage = Math.max(3, Math.min(200, perPage));
    const encodedQuery = encodeURIComponent(query);
    const url = `https://pixabay.com/api/videos/?key=${PIXABAY_API_KEY}&q=${encodedQuery}&safesearch=true&per_page=${validPerPage}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn("Pixabay Video API HTTP error:", res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    return data.hits || [];
  } catch (error: any) {
    if (error.name === 'AbortError') console.error("Pixabay Video API fetch aborted due to timeout");
    else console.error("Pixabay Video API fetch error:", error);
    return [];
  }
}
