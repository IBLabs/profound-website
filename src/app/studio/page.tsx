import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ScrollReveal } from "../scroll-reveal";

export const metadata: Metadata = {
  title: "Studio — ProFound",
  description:
    "The ProFound Studio is a hands-on pre-seed program for ambitious early-stage founders. One company at a time. Tech, GTM, organization, and capital — all under one roof.",
  openGraph: {
    title: "ProFound Studio — A pre-seed program built around you",
    description:
      "A dedicated pre-seed model designed to turn ambitious early-stage startups into success stories. One company at a time.",
  },
};

const cofounderBullets = [
  {
    num: "/01",
    title: "One company at a time",
    body: "No batches, no demo days. We're in your trenches, not in a classroom.",
  },
  {
    num: "/02",
    title: "Bespoke by default",
    body: "Your program is shaped by your stage, your sector, and your founding team.",
  },
  {
    num: "/03",
    title: "Battle-tested process",
    body: "The same backbone — Kickoff, four pillars, governance, and USA roadshow, refined across our portfolio.",
  },
  {
    num: "/04",
    title: "Built to seed and beyond",
    body: "The goal isn't to 'finish a program.' The goal is a category-defining company with a strong seed round and a clear path ahead.",
  },
];

const investmentTerms = [
  {
    num: "TRANCHE 01",
    title: "$200K SAFE",
    desc: "Uncapped, with a 20% discount. Wired at signing to fund the work that gets you to seed.",
  },
  {
    num: "TRANCHE 02",
    title: "$300K match",
    desc: "Released when matched 1:1 against $300K from an external investor — so we're aligned with the round you raise next.",
  },
  {
    num: "STUDIO EQUITY",
    title: "5% co-founder stake",
    desc: "We take a 5% common-stock stake as the studio co-founder.",
  },
];

const onboardingSteps = [
  {
    num: "01 / KICKOFF",
    title: "A half-day to set the bar",
    desc: "Half-day kickoff with the full studio team — fundraising presentation simulation, gap analysis, and a shared agreement on goals, expectations, and program milestones.",
  },
  {
    num: "02 / PRODUCT & GTM",
    title: "From idea to MVP plan",
    desc: "Half-day session covering value proposition, ICP definition, blurbs, value-prop validation with ICPs, and the primary GTM motion. Outcome: a clear MVP definition and plan.",
  },
];

const studioTeam = [
  {
    pillar: "FUNDRAISING",
    name: "Adi Gozes",
    desc: "Managing Partner. Owns the fundraising pillar — pitch, dataroom, investor intros.",
  },
  {
    pillar: "TECH",
    name: "Ron Porat",
    desc: "CTO & Studio Lead. Owns architecture, MVP, engineering hires, and weekly tech reviews.",
  },
  {
    pillar: "GTM",
    name: "Noy Dan",
    desc: "Studio Director. Owns design partners, marketing, and the GTM motion.",
  },
  {
    pillar: "ORGANIZATION",
    name: "Dalit Krainer",
    desc: "People & Growth. Owns leadership, comp, and culture.",
  },
];

export default function StudioPage() {
  return (
    <main className="studio-page">
      {/* Hero Section */}
      <section className="studio-hero">
        <div className="section-shell">
          <div className="studio-intro">
            <ScrollReveal delay={0.06} immediate yOffset={12}>
              <p className="eyebrow">The ProFound Studio</p>
            </ScrollReveal>

            <ScrollReveal delay={0.14} immediate yOffset={18}>
              <h1>
                A pre-seed program <br className="team-br-desktop" />
                <span className="studio-title-emphasis">
                  <em>built around you.</em>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.22} immediate yOffset={16}>
              <p className="studio-hero-lead">
                ProFound Studio is our dedicated pre-seed model — designed to turn ambitious
                early-stage startups into success stories. Unlike accelerators or incubators,
                we don&apos;t run batches or cohorts. We accept one company at a time and build a
                bespoke journey around your team and your milestones.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Are For Founders */}
      <section className="for-founders-section studio-cofounders-section" aria-labelledby="cofounders-heading">
        <div className="for-founders-orbit-graphic" aria-hidden="true">
          <div className="for-founders-orbit-ring" />
        </div>
        <div className="for-founders-bottom-orbit" aria-hidden="true">
          <div className="for-founders-ring for-founders-ring--outer" />
          <div className="for-founders-ring for-founders-ring--inner" />
        </div>
        <div className="for-founders-container section-shell">
          <ScrollReveal className="for-founders-eyebrow-wrap" yOffset={16}>
            <p className="eyebrow for-founders-eyebrow">Your co-founders</p>
          </ScrollReveal>

          <div className="for-founders-split">
            <ScrollReveal className="for-founders-left" yOffset={18}>
              <h2 id="cofounders-heading" className="for-founders-headline">
                <span>An in-house team that</span>
                <span className="for-founders-emphasis">
                  <em>acts like co-founders.</em>
                </span>
              </h2>
              <p className="for-founders-lead">
                Our experienced studio team supports every aspect of the company —
                team building, technology, product, and go-to-market — with the highest
                level of commitment.
              </p>
              <p className="for-founders-lead">
                We provide the operational scaffolding to get you to a substantial seed
                round, while building strong foundations for everything that comes next.
              </p>
            </ScrollReveal>

            <div className="for-founders-right">
              <ul className="for-founders-list" role="list">
                {cofounderBullets.map((bullet, i) => (
                  <li key={bullet.num} className="for-founders-list-item">
                    <ScrollReveal delay={i * 0.08} yOffset={16}>
                      <h3 className="for-founders-point-title">{bullet.title}</h3>
                      <p className="for-founders-point-body">{bullet.body}</p>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Studio Gallery 1 (Co-founders) */}
          <ScrollReveal delay={0.12} yOffset={20}>
            <div className="studio-gallery studio-gallery--cofounders">
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio working session"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-07.jpeg"
                />
              </figure>
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio working session"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-02.jpeg"
                />
              </figure>
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio working session"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-03.jpeg"
                />
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Terms */}
      <section
        className="studio-section studio-terms-section"
        aria-labelledby="terms-heading"
        style={{ background: "var(--paper-subtle)" }}
      >
        <div className="section-shell">
          <ScrollReveal className="studio-section-header" yOffset={18}>
            <p className="eyebrow">Investment terms</p>
            <h2 id="terms-heading">
              $500K in two tranches, <br className="team-br-desktop" />
              <span className="studio-title-emphasis">
                <em>plus skin in the game.</em>
              </span>
            </h2>
            <p>
              ProFound&apos;s standard investment terms are designed to give you real working capital
              from day one — and align us with the seed round you raise next.
            </p>
          </ScrollReveal>

          <div className="studio-grid-3">
            {investmentTerms.map((term, i) => (
              <ScrollReveal
                key={term.num}
                delay={i * 0.08}
                yOffset={20}
              >
                <div className="studio-card">
                  <span className="studio-card-num">{term.num}</span>
                  <h3 className="studio-card-title">{term.title}</h3>
                  <p className="studio-card-desc">{term.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} yOffset={12}>
            <p className="studio-footnote">
              {"//"} All terms are standardized across the portfolio — simple, founder-friendly, and built to keep us in lock-step with you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Onboarding */}
      <section className="studio-section" aria-labelledby="onboarding-heading">
        <div className="section-shell">
          <ScrollReveal className="studio-section-header" yOffset={18}>
            <p className="eyebrow">Onboarding</p>
            <h2 id="onboarding-heading">
              Day one, <br className="team-br-desktop" />
              <span className="studio-title-emphasis">
                <em>in the room.</em>
              </span>
            </h2>
            <p>
              Two intensive sessions to get the studio team and your founding team aligned —
              on goals, milestones, and the path forward.
            </p>
          </ScrollReveal>

          <div className="studio-grid-2">
            {onboardingSteps.map((step, i) => (
              <ScrollReveal
                key={step.num}
                delay={i * 0.08}
                yOffset={20}
              >
                <div className="studio-card">
                  <span className="studio-card-num">{step.num}</span>
                  <h3 className="studio-card-title">{step.title}</h3>
                  <p className="studio-card-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Roadshow Finale with Celestial Glow */}
      <section className="studio-nyc-section" aria-labelledby="roadshow-heading">
        {/* Celestial Orbit Motif */}
        <div className="studio-nyc-orbit" aria-hidden="true">
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 1100 1100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="550"
              cy="550"
              r="540"
              stroke="rgba(22, 21, 19, 0.08)"
              strokeDasharray="4 8"
              strokeWidth="1.5"
            />
            <circle
              cx="550"
              cy="550"
              r="430"
              stroke="rgba(22, 21, 19, 0.12)"
              strokeWidth="1.5"
            />
            <circle
              cx="550"
              cy="550"
              r="310"
              stroke="rgba(255, 77, 0, 0.25)"
              strokeDasharray="6 12"
              strokeWidth="1.5"
            />
            <circle
              cx="550"
              cy="550"
              r="190"
              stroke="rgba(22, 21, 19, 0.09)"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="studio-nyc-glow" aria-hidden="true" />

        <div className="section-shell">
          <ScrollReveal yOffset={24}>
            <div className="studio-nyc-content">
              <p className="eyebrow">The finale</p>
              <h2 id="roadshow-heading">
                Show time: the{" "}
                <span className="studio-title-emphasis">
                  <em>USA roadshow.</em>
                </span>
              </h2>
              <p>
                The peak of the Studio program comes when our startups head to New York
                ready to showcase their progress, meet investors, and build momentum toward
                a strong seed round.
              </p>
              <p>
                We prepare together: tightening the narrative, honing the pitch, mapping the right
                rooms, and building the relationships that last long after the roadshow ends.
              </p>
              <a
                className="pitch-button"
                href="mailto:hello@profound.vc?subject=Application%20for%20ProFound%20Studio"
                style={{ marginTop: "1.75rem" }}
              >
                Apply to the Studio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Team Preview */}
      <section className="studio-section" aria-labelledby="studioteam-heading">
        <div className="section-shell">
          <ScrollReveal className="studio-section-header" yOffset={18}>
            <p className="eyebrow">Studio team</p>
            <h2 id="studioteam-heading">
              The people who&apos;ll{" "}
              <span className="studio-title-emphasis">
                <em>show up Sunday.</em>
              </span>
            </h2>
            <p>
              Adi, Ron, Noy, Dalit, and the analyst bench — operators with real scars from building,
              shipping, and selling.
            </p>
          </ScrollReveal>

          <div className="studio-grid-4">
            {studioTeam.map((member, i) => (
              <ScrollReveal
                key={member.pillar}
                delay={i * 0.08}
                yOffset={20}
              >
                <div className="studio-card">
                  <span className="studio-card-num">{member.pillar}</span>
                  <h3 className="studio-card-title">{member.name}</h3>
                  <p className="studio-card-desc">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Studio Gallery 2 (Studio team) */}
          <ScrollReveal delay={0.12} yOffset={20}>
            <div className="studio-gallery studio-gallery--team">
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio team"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-08.jpeg"
                />
              </figure>
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio team"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-05.jpeg"
                />
              </figure>
              <figure className="studio-gallery-tile">
                <Image
                  alt="ProFound Studio team"
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                  src="/studio/studio-06.jpeg"
                />
              </figure>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16} yOffset={14}>
            <div className="studio-team-cta-row">
              <Link className="secondary-action" href="/team">
                Meet the full team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
