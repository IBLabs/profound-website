"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import styles from "./home-program.module.css";

// Minimal line drawings in the Team page's vocabulary; each stroke draws in once on scroll.
function Line({ d, className, delay = 0 }: { d: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <path d={d} className={className} />;
  return <motion.path d={d} className={className} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay, ease: [.65, 0, .35, 1] }} />;
}

const drawings = {
  // $200K then $300K: one bar split 2:3.
  investment: <>
    <Line className={styles.accent} d="M48 32H106V68H48Z" />
    <Line className={styles.ink} d="M106 32H192V68H106" delay={.3} />
  </>,
  // One company in the studio: a single node inside one ring.
  focus: <>
    <Line className={styles.ink} d="M92 50a28 28 0 1 0 56 0a28 28 0 1 0 -56 0" />
    <circle className={styles.node} cx="120" cy="50" r="5" />
  </>,
  // Four pillars under one beam.
  pillars: <>
    <Line className={styles.accent} d="M60 22H180" />
    {[78, 106, 134, 162].map((x, i) => <Line key={x} className={styles.ink} d={`M${x} 22V78`} delay={.2 + i * .1} />)}
    <Line className={styles.ink} d="M60 78H180" delay={.1} />
  </>,
  // Tel Aviv to New York: one arc between two points.
  usa: <>
    <Line className={styles.accent} d="M184 66Q120 10 56 66" />
    <circle className={styles.node} cx="184" cy="66" r="4" /><circle className={styles.node} cx="56" cy="66" r="4" />
  </>,
};

type Tile = { kind: "tile"; area: string; label: string; art: keyof typeof drawings; num: React.ReactNode; caption: React.ReactNode };
type Photo = { kind: "photo"; area: string; src: string; alt: string; pos?: string };

const bento: (Tile | Photo)[] = [
  { kind: "tile", area: "a", label: "Investment", art: "investment", num: "$500K", caption: <>invested in every studio company, <em>in two tranches</em></> },
  { kind: "photo", area: "b", src: "/studio/studio-05.jpeg", alt: "A studio session around the boardroom table", pos: "center 60%" },
  { kind: "photo", area: "c", src: "/studio/studio-06.jpeg", alt: "An outdoor dinner with founders and investors" },
  { kind: "photo", area: "d", src: "/studio/studio-02.jpeg", alt: "The studio team together", pos: "center 25%" },
  { kind: "tile", area: "e", label: "Focus", art: "focus", num: "1", caption: <>company in the studio <em>at a time</em></> },
  { kind: "tile", area: "f", label: "Pillars", art: "pillars", num: "4", caption: <>tech, GTM, org <em>and capital</em></> },
  { kind: "photo", area: "g", src: "/photos/sticky-notes.webp", alt: "Mapping a go-to-market plan on sticky notes", pos: "center 62%" },
  { kind: "tile", area: "h", label: "Finale", art: "usa", num: <em>USA</em>, caption: <>roadshow with <em>top international VCs</em></> },
];

const people = [
  { name: "Adi Gozes", role: "Managing Partner", src: "/team/Adi.jpeg" },
  { name: "Ron Porat", role: "CTO & Studio Lead", src: "/team/ron.jpg" },
  { name: "Noy Dan", role: "Studio Director", src: "/team/reference/noy.webp" },
  { name: "Dalit Krainer", role: "People & Growth", src: "/team/reference/dalit.webp" },
];

// Photos drift at their own speeds while the bento crosses the viewport (px at the start/end of the pass) and slide inside their frames;
// info panels stay put on the surface.
const DRIFT = 40;
const speeds: Record<string, number> = { b: -.7, c: 1, d: -.9, g: .8 };

function Panel({ item, progress }: { item: (typeof bento)[number]; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const k = reduce ? 0 : speeds[item.area] ?? 0;
  const y = useTransform(progress, [0, 1], [k * DRIFT, -k * DRIFT]);
  const imgY = useTransform(progress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);
  return (
    <motion.div className={item.kind === "tile" ? styles.tile : styles.photo} style={{ gridArea: item.area, y }}>
      {item.kind === "photo" ? (
        <motion.img src={item.src} alt={item.alt} loading="lazy" style={{ objectPosition: item.pos, y: imgY }} />
      ) : (
        <>
          <small className={styles.label}>{item.label}</small>
          <svg className={styles.art} viewBox="0 0 240 100" aria-hidden="true">{drawings[item.art]}</svg>
          <b className={styles.num}>{item.num}</b>
          <p className={styles.caption}>{item.caption}</p>
        </>
      )}
    </motion.div>
  );
}

// The reference's bento: flat info panels with photos floating over them as the page scrolls.
export function ProgramBento() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <section className={`section-shell ${styles.program}`} id="numbers" aria-labelledby="program-title">
      <ScrollReveal yOffset={16}>
        <h2 id="program-title" className={styles.title}>A pre-seed program<br /><em>built around you.</em></h2>
      </ScrollReveal>
      <div ref={ref} className={styles.bento}>
        {bento.map(item => <Panel key={item.area} item={item} progress={scrollYProgress} />)}
      </div>
    </section>
  );
}

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
