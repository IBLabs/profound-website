import type { Metadata } from "next";
import { Google_Sans, Libre_Baskerville, Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const referenceSans = Google_Sans({
  variable: "--font-team-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  adjustFontFallback: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const accent = Fraunces({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { pageMetadata, siteUrl } from "./social";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata("Profound Ventures · Studio-driven seed fund", "The studio-driven seed fund building alongside Israel's next generation of founders.", "/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${referenceSans.variable} ${libreBaskerville.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
