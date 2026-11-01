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

export const metadata: Metadata = {
  title: "ProFound — Venture Capital",
  description: "ProFound partners with exceptional founders from the first belief to the lasting company.",
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
