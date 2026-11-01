import type { Metadata } from "next";
import { TeamExperience } from "../team/team-experience";
import "../team/team-reference.css";
import { IconSpin } from "./icon-spin";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio · Profound Ventures",
  description: "A concentrated portfolio of unconventional teams across AI, infrastructure, consumer and applied software.",
};

// Logos are one-colour ink versions of public/logos/portfolio, generated into public/logos/mono.
const companies = [
  { name: "Marquee", logo: "marquee", url: "https://themarquee.ai" },
  { name: "Limy", logo: "limy", url: "https://limy.ai" },
  { name: "Modelyo", logo: "modelyo", url: "https://www.modelyo.com" },
  { name: "Perfect", logo: "perfect", url: "https://www.goperfect.com" },
  { name: "Playo", logo: "playo", url: "https://playo.ai" },
  { name: "Conntour", logo: "conntour", url: "https://www.conntour.com" },
  { name: "Vinesight", logo: "vinesight", url: "https://www.vinesight.com" },
  { name: "Unibeam", logo: "unibeam", url: "https://unibeam.com" },
  { name: "Askit", logo: "askit", url: "https://start.askit-ai.com" },
  { name: "Astrid", logo: "astrid", url: "https://astridentertainment.com" },
  { name: "Ludeo", logo: "ludeo", url: "https://ludeo.com" },
  { name: "Onebeat", logo: "onebeat", url: "https://onebeat.co" },
  { name: "Rogue Security", logo: "rogue-security" },
  { name: "Fincom", logo: "fincom-co", url: "https://fincom.co" },
  { name: "Superlegal", logo: "superlegal", url: "https://www.superlegal.ai" },
  { name: "Novacy", logo: "novacy", acquired: true },
  { name: "Sensorz", logo: "sensorz" },
  { name: "Chronom", logo: "chronom" },
  { name: "Rivery", logo: "rivery", url: "https://rivery.io", acquired: true },
  { name: "Guidde", logo: "guidde", url: "https://www.guidde.com" },
  { name: "Bria", logo: "bria", url: "https://bria.ai" },
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
            {companies.map(({ name, logo, url, acquired }) => {
              const mark = <>
                {/* eslint-disable-next-line @next/next/no-img-element -- small static marks of varying aspect ratio */}
                <img src={`/logos/mono/${logo}.png`} alt={name} loading="lazy" />
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
