"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ScrollReveal className="footer-cta section-shell" yOffset={22}>
        <div>
          <SectionTitle>
            Building something<br />profound?
          </SectionTitle>
          <p>
            We meet founders early. Pre-product, pre-team, pre-anything is fine.
            Let us know what you&apos;re imagining.
          </p>
        </div>
        <div className="footer-email">
          <p className="eyebrow">Email us directly</p>
          <a href="mailto:hello@profound.vc?subject=I%20have%20an%20idea%20for%20ProFound">
            hello@profound.vc
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal className="footer-lower" delay={0.08} yOffset={16}>
        <div className="footer-grid section-shell">
          <div className="footer-brand">
            <Link className="footer-wordmark" href="/">
              <Image
                alt="ProFound"
                className="brand-logo brand-logo--footer"
                height={40}
                src="/figma/profound-logo.svg"
                width={160}
              />
            </Link>
            <p>
              Early-stage fund &amp; co-creation studio for unconventional
              software and AI founders.
            </p>
          </div>
          <nav aria-label="Fund links">
            <h3>Fund</h3>
            <Link href="/">Home</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/portfolio">Legacy Portfolio</Link>
            <Link href="/#philosophy">Resources</Link>
          </nav>
          <nav aria-label="Company links">
            <h3>Company</h3>
            <Link href="/team">Team</Link>
            <a href="mailto:hello@profound.vc">Contact</a>
          </nav>
          <address>
            <h3>Office</h3>
            <p>
              Arik Einstein 3 Floor 4,<br />
              Herzliya, Israel
            </p>
            <a href="mailto:hello@profound.vc">hello@profound.vc</a>
          </address>
          <p className="footer-copyright">
            © {new Date().getFullYear()} ProFound Ventures
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
