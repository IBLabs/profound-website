import Image from "next/image";
import { CommitmentSection } from "./commitment-section";
import { ForFounders } from "./for-founders";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";
import { StudioProgram } from "./studio-program";
import { PromiseSection } from "./promise-section";

const portfolioLogos = [
  { name: "Wiz", src: "/figma/logos/Wiz_logo.svg.webp" },
  { name: "Abnormal", src: "/figma/logos/abnormal.webp" },
  { name: "Maze", src: "/figma/logos/mazelogo.webp" },
  { name: "Rival", src: "/figma/logos/rival-logo-black.png" },
  { name: "Vega", src: "/figma/logos/vega.webp" },
  { name: "Koi", src: "/figma/logos/koi.webp" },
];

const trackLogos = [
  ...portfolioLogos,
  ...portfolioLogos,
  ...portfolioLogos,
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-content">
          <ScrollReveal delay={0.06} immediate yOffset={14}>
            <p className="eyebrow hero-eyebrow">
              Early-stage fund &amp; co-creation studio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14} immediate yOffset={18}>
            <h1 className="hero-title--intro">
              <span>magic happens when&nbsp;you</span>
              <span>
                put the focus on{" "}
                <span className="hero-title-emphasis">
                  <em>people</em>
                </span>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.22} immediate yOffset={18}>
            <p className="hero-copy--intro">
              We&apos;re an early-stage fund and studio supporting Israeli founders
              in software and AI, helping from idea to seed and beyond.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} immediate yOffset={18}>
            <div className="hero-actions hero-actions--intro">
              <a className="pitch-button" href="mailto:hello@profound.vc">
                Pitch us
              </a>
              <a className="secondary-action" href="#philosophy">
                How the Studio works <span aria-hidden="true">→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="hero-logo-band" delay={0.38} immediate yOffset={16}>
          <div className="hero-marquee" aria-label="Portfolio companies">
            <div className="hero-logo-track">
              {trackLogos.map((logo, i) => (
                <img
                  alt={logo.name}
                  className="hero-logo-item"
                  height={22}
                  key={`${logo.name}-a-${i}`}
                  src={logo.src}
                />
              ))}
            </div>
            <div aria-hidden="true" className="hero-logo-track">
              {trackLogos.map((logo, i) => (
                <img
                  alt=""
                  className="hero-logo-item"
                  height={22}
                  key={`${logo.name}-b-${i}`}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="hero-showcase hero-showcase--intro"
          delay={0.44}
          duration={0.75}
          immediate
          yOffset={24}
        >
          <div className="hero-orbit-graphic" aria-hidden="true">
            <div className="orbit-ring orbit-ring--1" />
            <div className="orbit-ring orbit-ring--2" />
            <div className="orbit-ring orbit-ring--3" />
          </div>
          <div className="hero-feature-image">
            <Image
              alt="ProFound founders together"
              fill
              priority
              sizes="100vw"
              src="/figma/hero-background-2-editorial.png"
            />
          </div>
        </ScrollReveal>
      </section>

      <ForFounders />

      <CommitmentSection />

      <section className="studio-section" id="philosophy" aria-labelledby="studio-title">
        <ScrollReveal className="studio-section-intro section-shell" yOffset={20}>
          <p className="eyebrow">The studio program</p>
          <SectionTitle id="studio-title">
            From kickoff to USA,<br className="studio-title-break" /> a path tuned to{" "}
            <span className="hero-title-emphasis">
              <em>you.</em>
            </span>
          </SectionTitle>
          <p className="studio-section-copy">
            Every Studio company runs the same backbone — kickoff, four pillars,
            monthly governance, USA Roadshow — but every milestone is shaped to fit
            your stage, your sector, and your team.
          </p>
        </ScrollReveal>
        <StudioProgram />
      </section>

      <PromiseSection />

    </main>
  );
}
