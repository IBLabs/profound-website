import type { Metadata } from "next";
import { PortfolioGrid } from "./portfolio-grid";
import { ScrollReveal } from "../scroll-reveal";

export const metadata: Metadata = {
  title: "Legacy Portfolio — ProFound",
  description:
    "The Profound Ventures legacy portfolio — AI, infrastructure, gaming, and category-defining companies built alongside us from pre-seed.",
  openGraph: {
    title: "Legacy Portfolio — ProFound",
    description:
      "Companies we are proud to build alongside. A concentrated portfolio of unconventional teams across AI, infrastructure, consumer, and applied software.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-intro section-shell">
          <ScrollReveal delay={0.06} immediate yOffset={12}>
            <p className="eyebrow">Legacy Portfolio</p>
          </ScrollReveal>

          <ScrollReveal delay={0.14} immediate yOffset={18}>
            <h1>
              Companies we are{" "}
              <span className="portfolio-title-emphasis">
                <em>proud</em>
              </span>
              <br />
              to build alongside.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.22} immediate yOffset={16}>
            <p className="portfolio-intro-lead">
              A concentrated portfolio of unconventional teams across AI, infrastructure,
              consumer, and applied software.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.28} immediate yOffset={14}>
            <p className="portfolio-intro-note">
              Legacy Portfolio represents companies backed by our founding partners
              in prior vehicles and platforms, many of which have since raised significant
              follow-on capital from leading global investors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid Section with Filtering */}
      <PortfolioGrid />
    </main>
  );
}
