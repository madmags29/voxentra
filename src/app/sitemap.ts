import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/lib/data/services";
import { BLOG_POSTS_DATA } from "@/lib/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.voxentraglobal.com";

  // Core Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/industries",
    "/how-it-works",
    "/why-choose-us",
    "/blog",
    "/faq",
    "/get-quote",
    "/contact",
    "/testimonials",
    "/brand-guidelines",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/get-quote" ? 0.9 : 0.8,
  }));

  // Dynamic Service Detail Pages
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Blog Article Pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS_DATA.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
