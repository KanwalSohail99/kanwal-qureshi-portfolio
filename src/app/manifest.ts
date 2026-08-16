import type { MetadataRoute } from "next";
import { SITE_TITLE } from "@/lib/site";

// Required for static export (`output: "export"`) — this route has no
// dynamic input, so it can be rendered once at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: "Kanwal Sohail",
    description:
      "Portfolio of Kanwal Sohail — banking professional with a background in biochemistry and a growing focus on technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#0b1220",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
