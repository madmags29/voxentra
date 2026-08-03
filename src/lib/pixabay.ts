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
      return [];
    }
    const data = await res.json();
    return data.hits || [];
  } catch {
    return [];
  }
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
