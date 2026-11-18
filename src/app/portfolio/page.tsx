import type { Metadata } from "next";
import { pageMetadata } from "../social";
import { TeamExperience } from "../team/team-experience";
import "../team/team-reference.css";
import { IconSpin } from "./icon-spin";
import styles from "./portfolio.module.css";

export const metadata: Metadata = pageMetadata("Portfolio · Profound Ventures", "A concentrated portfolio of unconventional teams across AI, infrastructure, consumer and applied software.", "/portfolio");

// Logos are one-colour ink versions of public/logos/portfolio, generated into public/logos/mono.
// w is each logo's display width in px, set so they read at the same size: every mark gets the same bounding area
// (width = sqrt(area × aspect)), nudged up for light, airy marks and down for dense ones ((0.32 / ink density)^0.3).
const companies = [
  { name: "Marquee", logo: "marquee", w: 200, url: "https://themarquee.ai" },
  { name: "Limy", logo: "limy", w: 146, url: "https://limy.ai" },
  { name: "Modelyo", logo: "modelyo", w: 150, url: "https://www.modelyo.com" },
  { name: "Perfect", logo: "perfect", w: 154, url: "https://www.goperfect.com" },
  { name: "Playo", logo: "playo", w: 110, url: "https://playo.ai" },
  { name: "Conntour", logo: "conntour", w: 176, url: "https://www.conntour.com" },
  { name: "Vinesight", logo: "vinesight", w: 129, url: "https://www.vinesight.com" },
  { name: "Unibeam", logo: "unibeam", w: 186, url: "https://unibeam.com" },
  { name: "Askit", logo: "askit", w: 116, url: "https://start.askit-ai.com" },
  { name: "Astrid", logo: "astrid", w: 156, url: "https://astridentertainment.com" },
  { name: "Ludeo", logo: "ludeo", w: 134, url: "https://ludeo.com" },
  { name: "Onebeat", logo: "onebeat", w: 156, url: "https://onebeat.co" },
  { name: "Rogue Security", logo: "rogue-security", w: 132 },
  { name: "Fincom", logo: "fincom-co", w: 160, url: "https://fincom.co" },
  { name: "Superlegal", logo: "superlegal", w: 166, url: "https://www.superlegal.ai" },
  { name: "Novacy", logo: "novacy", w: 141, acquired: true },
  { name: "Sensorz", logo: "sensorz", w: 200 },
  { name: "Chronom", logo: "chronom", w: 151 },
  { name: "Rivery", logo: "rivery", w: 135, url: "https://rivery.io", acquired: true },
  { name: "Guidde", logo: "guidde", w: 140, url: "https://www.guidde.com" },
  { name: "Bria", logo: "bria", w: 84, url: "https://bria.ai" },
];

const PF_ICON = "M359.83 55.06v249.71c0 30.41-24.65 55.06-55.06 55.06H210.86L306.58 84.2 124.86 359.83H55.06C24.65 359.83 0 335.18 0 304.77V234.97L275.63 53.25 0 148.97V55.06C0 24.65 24.65 0 55.06 0h249.71c30.41 0 55.06 24.65 55.06 55.06Z";

/* Portfolio hero matched to the reference portfolio.html; logos sit in website-v2's company cards. */
export default function PortfolioPage() {
  return (
    <TeamExperience className="">
      <main>
        <section className="wrap pg-hero big-ill">
          <div className="rv">
            <div className="kicker">Portfolio</div>
            <h1>Proud <em className="gi">to build alongside.</em></h1>
            <p className="lead">A concentrated portfolio of unconventional teams across AI, infrastructure, consumer and applied software.</p>
            <p className="lead">The legacy portfolio covers companies backed by our founding partners in prior vehicles and platforms, many of which have since raised <em>significant follow-on capital</em> from leading global investors.</p>
          </div>
          <div className="ill bare rv"><IconSpin /></div>
        </section>

        <section className="wrap sec" id="companies" aria-label="Portfolio companies">
          <ul className={`rv ${styles.logos}`}>
            {companies.map(({ name, logo, w, url, acquired }) => {
              const mark = <>
                {/* eslint-disable-next-line @next/next/no-img-element -- small static marks of varying aspect ratio */}
                <img src={`/logos/mono/${logo}.png`} alt={name} loading="lazy" style={{ "--w": w } as React.CSSProperties} />
                {acquired && <small>Acquired</small>}
                <svg className={styles.arrow} viewBox="0 0 359.83 359.83" aria-hidden="true"><path fill="url(#pf-grad)" d={PF_ICON} /></svg>
              </>;
              return (
                <li key={name}>
                  {url ? <a href={url} target="_blank" rel="noreferrer">{mark}</a> : <span>{mark}</span>}
                </li>
              );
            })}
          </ul>
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
            <linearGradient id="pf-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#F6961C" /><stop offset=".4" stopColor="#F6631C" /><stop offset=".7" stopColor="#EE4711" /><stop offset="1" stopColor="#D91C07" /></linearGradient>
          </svg>
        </section>
      </main>
    </TeamExperience>
  );
}
