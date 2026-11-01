import type { Metadata } from "next";
import { pageMetadata } from "../social";
import Link from "next/link";
import { TeamExperience } from "../team/team-experience";
import { ArtStage, CoverStage, GlobalArtwork, PillarsArtwork, StairsArtwork, StudioHeroArtwork } from "../team/team-values";
import "../team/team-reference.css";
import styles from "./studio.module.css";

export const metadata: Metadata = pageMetadata("Studio · Profound Ventures", "Profound Studio: a pre-seed program built around one company at a time.", "/studio");

const points = [
  { title: "One company at a time", body: "No batches, no demo days. We're in your trenches, not in a classroom." },
  { title: "Bespoke by default", body: "Your program is shaped by your stage, your sector, and your founding team." },
  { title: "Battle-tested process", body: "The same backbone: kickoff, four pillars, governance and the USA roadshow, refined across our portfolio." },
  { title: "Built to seed and beyond", body: "The goal isn't to finish a program. It's a category-defining company with a strong seed round and a clear path ahead." },
];

const photos = [
  { src: "/studio/studio-07.jpeg", alt: "A Profound Studio working session", pos: "center 25%" },
  { src: "/studio/studio-02.jpeg", alt: "The studio team with founders", pos: "center 30%" },
  { src: "/studio/studio-03.jpeg", alt: "A founders panel at the studio", pos: "center 60%" },
];

const terms = [
  { label: "Tranche 01", value: "$200K", title: "SAFE", body: "Uncapped, with a 20% discount. Wired at signing to fund the work that gets you to seed." },
  { label: "Tranche 02", value: "$300K", title: "Match", body: "Released when matched 1:1 against $300K from an external investor, so we're aligned with the round you raise next." },
  { label: "Studio equity", value: "5%", title: "Co-founder stake", body: "We take a 5% common-stock stake as the studio co-founder." },
];

const steps = [
  { label: "01 / Kickoff", title: "A half-day to set the bar", body: "A half-day kickoff with the full studio team: a fundraising presentation simulation, gap analysis, and a shared agreement on goals, expectations and program milestones." },
  { label: "02 / Product & GTM", title: "From idea to MVP plan", body: "Value proposition, ICP definition, blurbs, value-prop validation with ICPs, and the primary GTM motion. The outcome: a clear MVP definition and plan." },
];

const owners = [
  { pillar: "Fundraising", name: "Adi Gozes", body: "Managing Partner. Pitch, dataroom, investor intros.", src: "/team/Adi.jpeg" },
  { pillar: "Tech", name: "Ron Porat", body: "CTO & Studio Lead. Architecture, MVP, engineering hires, weekly tech reviews.", src: "/team/ron.jpg" },
  { pillar: "GTM", name: "Noy Dan", body: "Studio Director. Design partners, marketing, and the GTM motion.", src: "/team/reference/noy.webp" },
  { pillar: "Organization", name: "Dalit Krainer", body: "People & Growth. Leadership, comp, and culture.", src: "/team/reference/dalit.webp" },
];

const apply = <a className="pitch-button" href="#contact">Apply to the Studio</a>;

/* Studio layout matched to the reference studio.html, drawn with the Team page's construction-sheet illustrations. */
export default function StudioPage() {
  return (
    <TeamExperience className={styles.page}>
      <main>
        <section className="wrap pg-hero stacked">
          <div className="rv">
            <CoverStage><StudioHeroArtwork /></CoverStage>
            <div className="kicker">The Profound Studio</div>
            <h1>A pre-seed program <em className="gi">built around you.</em></h1>
            <p className="lead">Profound Studio is our dedicated pre-seed model, designed to turn ambitious early-stage startups into success stories. Unlike accelerators or incubators, we don&apos;t run batches or cohorts. We accept <em>one company at a time</em> and build a bespoke journey around your team and your milestones.</p>
            <div className={styles.cta}>{apply}</div>
          </div>
        </section>

        <section className="wrap sec">
          <div className="sh rv">
            <div><div className="kicker">Your co-founders</div><h2>An in-house team that <em>acts like co-founders.</em></h2></div>
            <div><p>Our experienced studio team supports every aspect of the company, from team building and technology to product and go-to-market, with the highest level of commitment.</p><p>We provide the operational scaffolding to get you to a substantial seed round, while building strong foundations for everything that comes next.</p></div>
          </div>
          <div className={styles.points}>
            {points.map(({ title, body }, i) => (
              <div className={`rv ${styles.point}`} key={title}><small>/0{i + 1}</small><h3>{title}</h3><p>{body}</p></div>
            ))}
          </div>
          <div className={styles.strip}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed 4:3 crops set in CSS */}
            {photos.map(({ src, alt, pos }) => <div className={`rv ${styles.photo}`} key={src}><img src={src} alt={alt} loading="lazy" style={{ objectPosition: pos }} /></div>)}
          </div>
        </section>

        <div className="rule" aria-hidden="true"><i></i><i></i></div>

        <section className="wrap sec" id="terms">
          <div className="sh rv">
            <div><div className="kicker">Investment terms</div><h2>$500K in two tranches, <em>plus skin in the game.</em></h2></div>
            <p>Profound&apos;s standard terms give you real working capital from day one, and align us with the seed round you raise next.</p>
          </div>
          <div className={styles.terms}>
            {terms.map(({ label, value, title, body }, i) => (
              <div className={`rv ${styles.term}`} key={label}>
                <small>{label}</small>
                <b className={i === 0 ? styles.grad : undefined}>{value}</b>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className={styles.note}>All terms are standardized across the portfolio: simple, founder-friendly, and built to keep us in lock-step with you.</p>
        </section>

        <section className={`wrap sec ${styles.split}`} id="onboarding">
          <div className={`rv ${styles.frame}`}><ArtStage className={styles.big}><StairsArtwork /></ArtStage></div>
          <div className="rv">
            <div className="kicker">Onboarding</div>
            <h2 className={styles.h2}>Day one, <em>in the room.</em></h2>
            <p className={styles.body}>Two intensive sessions to get the studio team and your founding team aligned on goals, milestones, and the path forward.</p>
            <ol className={styles.steps}>
              {steps.map(({ label, title, body }) => <li key={label}><small>{label}</small><h3>{title}</h3><p>{body}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="wrap sec" id="finale">
          <div className={`rv ${styles.band}`}>
            <div>
              <div className="kicker">The finale</div>
              <h2 className={styles.h2}>Show time: <em className="gi">the USA roadshow.</em></h2>
              <p className={styles.body}>The peak of the Studio program comes when our startups head to New York, ready to showcase their progress, meet investors, and build momentum toward a strong seed round.</p>
              <p className={styles.body}>We prepare together: tightening the narrative, honing the pitch, mapping the right rooms, and building the relationships that last long after the roadshow ends.</p>
              <div className={styles.cta}>{apply}</div>
            </div>
            <ArtStage className={styles.big}><GlobalArtwork /></ArtStage>
          </div>
        </section>

        <section className={`wrap sec ${styles.split}`} id="studio-team">
          <div className="rv">
            <div className="kicker">Studio team</div>
            <h2 className={styles.h2}>The people who&apos;ll <em>show up Sunday.</em></h2>
            <p className={styles.body}>Adi, Ron, Noy, Dalit, and the analyst bench: operators with real scars from building, shipping, and selling. Each one owns a pillar.</p>
            <div className={styles.owners}>
              {owners.map(({ pillar, name, body, src }) => (
                <div className={`person ${styles.owner}`} key={name}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- small circular crop */}
                  <img src={src} alt={name} loading="lazy" />
                  <div><small>{pillar}</small><h3>{name}</h3><p>{body}</p></div>
                </div>
              ))}
            </div>
            <Link className={`secondary-action ${styles.more}`} href="/team">Meet the full team <span aria-hidden="true">→</span></Link>
          </div>
          <div className={`rv ${styles.frame}`}><ArtStage className={styles.big}><PillarsArtwork /></ArtStage></div>
        </section>
      </main>
    </TeamExperience>
  );
}
