"use client";

import { useState } from "react";
import styles from "./for-founders.module.css";

const founderPoints = [
  { tag: "Tech", image: "/studio/studio-08.jpeg", title: <>A CTO <em>in your corner</em></>, body: "From architecture decisions to your first ten engineers, our studio CTO is in the weekly stand-ups." },
  { tag: "GTM", image: "/studio/studio-05.jpeg", title: <>Design partners, <em>not pipelines</em></>, body: "We open doors to your first 3–5 design partners and help you turn them into early revenue." },
  { tag: "People", image: "/studio/studio-02.jpeg", title: <>Recruiting <em>&amp; org-building</em></>, body: "Founder coaching, comp philosophy, leadership hires. We help you build a team that compounds." },
  { tag: "Capital", image: "/studio/studio-06.jpeg", title: <>Seed-ready, <em>not just seed-funded</em></>, body: "Pitch coaching, dataroom, investor intros, and a fully-prepped global roadshow when you're ready." },
];

// Matches the reference's expanding photo cards: hover, focus or tap opens a card, the rest collapse to grayscale strips.
export function ForFounders() {
  const [open, setOpen] = useState(0);
  return (
    <section className={`section-shell ${styles.section}`} id="what-you-get" aria-labelledby="founders-headline">
      <div className={styles.head}>
        <h2 id="founders-headline">Not just a check,<br /><em>an additional <span className={styles.nowrap}>co-founder.</span></em></h2>
        <p>Most VCs show up at board meetings. We show up Sunday morning. From your first hire to your first paying customer, our studio team works inside the company until you&apos;ve earned your seed round.</p>
      </div>
      <div className={styles.cards}>
        {founderPoints.map(({ tag, image, title, body }, i) => (
          <article key={tag} className={styles.card} data-open={open === i} tabIndex={0}
            onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)} onClick={() => setOpen(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-width crop that must not rescale while the card animates */}
            <img src={image} alt="" loading="lazy" />
            <div className={styles.body}><h3>{title}</h3><p>{body}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
