import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.voxentraglobal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
      // Explicit permissions for AI Answer Engine and Generative Crawlers
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Bytespider",
          "CCBot",
          "Applebot-Extended",
          "anthropic-ai",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/admin"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
