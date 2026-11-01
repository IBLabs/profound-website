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

/* Portfolio hero matched to the reference portfolio.html; the company cards are replaced by a one-colour logo grid. */
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
              </>;
              return (
                <li key={name}>
                  {url ? <a href={url} target="_blank" rel="noreferrer">{mark}</a> : <span>{mark}</span>}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </TeamExperience>
  );
}
