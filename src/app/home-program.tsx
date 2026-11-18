"use client";

import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import styles from "./home-program.module.css";

const PF_ICON = "M359.83 55.06v249.71c0 30.41-24.65 55.06-55.06 55.06H210.86L306.58 84.2 124.86 359.83H55.06C24.65 359.83 0 335.18 0 304.77V234.97L275.63 53.25 0 148.97V55.06C0 24.65 24.65 0 55.06 0h249.71c30.41 0 55.06 24.65 55.06 55.06Z";

const icons = {
  investment: <><rect x="3" y="11" width="26" height="10" rx="2.5" /><path d="M13.4 11v10" /><rect x="3" y="11" width="10.4" height="10" rx="2.5" fill="currentColor" stroke="none" /></>,
  focus: <><circle cx="16" cy="16" r="11.5" /><circle cx="16" cy="16" r="5.5" /><circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" /></>,
  pillars: <path d="M4 7h24M4 26h24M8 10.5v12M13.3 10.5v12M18.7 10.5v12M24 10.5v12" />,
  usa: <><circle cx="16" cy="16" r="12" /><ellipse cx="16" cy="16" rx="5.2" ry="12" /><path d="M4.4 12.5h23.2M4.4 19.5h23.2" /></>,
};

type Tile = { kind: "tile"; area: string; tone: "cream" | "grad" | "ink"; label: string; icon: keyof typeof icons; num: React.ReactNode; caption: React.ReactNode; detail: React.ReactNode };
type Photo = { kind: "photo"; area: string; src: string; alt: string; pos?: string };

// Ported from website-v2: on hover a tile flips colour, swaps to the detail caption and a sheen crosses the number.
const bento: (Tile | Photo)[] = [
  { kind: "tile", area: "a", tone: "cream", label: "Investment", icon: "investment", num: "$500K", caption: <>invested in every studio company, <em>in two tranches</em></>, detail: <>$200K SAFE at signing, <em>$300K matched 1:1</em></> },
  { kind: "photo", area: "b", src: "/studio/studio-07.jpeg", alt: "Founders and the studio team", pos: "center 20%" },
  { kind: "photo", area: "c", src: "/studio/studio-06.jpeg", alt: "An outdoor dinner with founders and investors" },
  { kind: "photo", area: "d", src: "/studio/studio-02.jpeg", alt: "The studio team together", pos: "center 25%" },
  { kind: "tile", area: "e", tone: "grad", label: "Focus", icon: "focus", num: "1", caption: <>company in the studio <em>at a time</em></>, detail: <>No batches, no demo days. <em>Bespoke from day one.</em></> },
  { kind: "tile", area: "f", tone: "ink", label: "Pillars", icon: "pillars", num: "4", caption: <>tech, GTM, org <em>and capital</em></>, detail: <>Run weekly with <em>dedicated owners</em></> },
  { kind: "photo", area: "g", src: "/photos/sticky-notes.webp", alt: "Mapping a go-to-market plan on sticky notes", pos: "center 62%" },
  { kind: "tile", area: "h", tone: "cream", label: "Finale", icon: "usa", num: <em>USA</em>, caption: <>roadshow with <em>top international VCs</em></>, detail: <>New York: investors, <em>momentum toward seed</em></> },
];

export function ProgramBento() {
  return (
    <section className={`section-shell ${styles.program}`} id="numbers" aria-labelledby="program-title">
      <ScrollReveal yOffset={16}>
        <h2 id="program-title" className={styles.title}>A pre-seed program<br /><em>built around you.</em></h2>
      </ScrollReveal>
      <div className={styles.bento}>
        {bento.map((item, i) => (
          <ScrollReveal key={item.area} className={`${item.kind === "tile" ? `${styles.tile} ${styles[item.tone]}` : styles.photo} ${styles[item.area]}`} delay={i * .04} yOffset={18} viewportAmount={.12}>
            {item.kind === "photo" ? (
              // eslint-disable-next-line @next/next/no-img-element -- crop set by object-position
              <img src={item.src} alt={item.alt} loading="lazy" style={{ objectPosition: item.pos }} />
            ) : (
              <>
                <svg className={styles.tileArrow} viewBox="0 0 359.83 359.83" aria-hidden="true"><path fill={item.tone === "grad" ? "currentColor" : "url(#pf-grad)"} d={PF_ICON} /></svg>
                <div className={styles.tileTop}>
                  <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">{icons[item.icon]}</svg>
                  <small className={styles.label}>{item.label}</small>
                </div>
                <b className={styles.num}>{item.num}</b>
                <span className={styles.caps}><span className={styles.capA}>{item.caption}</span><span className={styles.capB}>{item.detail}</span></span>
              </>
            )}
          </ScrollReveal>
        ))}
      </div>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <linearGradient id="pf-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#F6961C" /><stop offset=".4" stopColor="#F6631C" /><stop offset=".7" stopColor="#EE4711" /><stop offset="1" stopColor="#D91C07" /></linearGradient>
      </svg>
    </section>
  );
}

const people = [
  { name: "Adi Gozes", role: "Managing Partner", src: "/team/Adi.jpeg" },
  { name: "Ron Porat", role: "CTO & Studio Lead", src: "/team/ron.jpg" },
  { name: "Noy Dan", role: "Studio Director", src: "/team/reference/noy.webp" },
  { name: "Dalit Krainer", role: "People & Growth", src: "/team/reference/dalit.webp" },
];

export function HomeTeam() {
  return (
    <section className={`section-shell ${styles.team}`} id="team" aria-labelledby="home-team-title">
      <ScrollReveal className={styles.teamHead} yOffset={16}>
        <h2 id="home-team-title" className={styles.title}>The people who&apos;ll<br /><em>show up Sunday.</em></h2>
        <Link className="secondary-action" href="/team">Meet the full team <span aria-hidden="true">→</span></Link>
      </ScrollReveal>
      <div className={styles.people}>
        {people.map(({ name, role, src }, i) => (
          <ScrollReveal key={name} delay={i * 0.06} yOffset={14} viewportAmount={0.15}>
            <article className={styles.person}>
              {/* eslint-disable-next-line @next/next/no-img-element -- portrait crop set by aspect-ratio */}
              <div className={styles.portrait}><img src={src} alt={name} loading="lazy" /></div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
