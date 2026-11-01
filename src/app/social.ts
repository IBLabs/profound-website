import type { Metadata } from "next";

// Absolute base for share URLs and the opengraph-image files: an explicit NEXT_PUBLIC_SITE_URL wins,
// then Vercel's production domain, then the local dev server.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

// Title, description and share cards for one page. A page's openGraph/twitter replace the layout's wholesale,
// so every page builds the full set here; the image itself comes from the route's opengraph-image.png.
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Profound Ventures", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}
