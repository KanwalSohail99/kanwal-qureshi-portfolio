import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { articles } from "@/data/articles";

// Required for static export (`output: "export"`) — this route has no
// dynamic input, so it can be rendered once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: `${SITE_URL}/insights/${a.slug}`,
      lastModified: new Date(a.modifiedAt ?? a.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
