"use client";

import { useEffect, useRef } from "react";
import styles from "./home-hero.module.css";

// Ported from website-v2: Pro + italic endings set like spokes on the arc; the wheel turns one step at a time.
const endings = ["found", "active", "lific", "gress", "digy", "cess"];
const fade = (off: number) => [1, .38, .14][Math.abs(off)] ?? 0;

export function HomeHero() {
  const columnRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const col = columnRef.current!;
    const arc = col.querySelector<HTMLElement>("[data-arc]")!;
    const words = Array.from(col.querySelectorAll<HTMLElement>("[data-ending]"));
    const n = words.length;
    let active = 0;
    const prev: number[] = [];

    const place = () => {
      const fs = parseFloat(getComputedStyle(col).fontSize);
      const r = arc.offsetWidth / 2;
      const step = .972 * fs / r;
      const dx = r + .05 * fs;
      const origin = `${-dx + .5 * fs}px ${.72 * fs}px`;
      words.forEach((w, i) => {
        let off = ((i - active) % n + n) % n;
        if (off > 3) off -= n;
        w.classList.toggle(styles.jump, prev[i] !== undefined && Math.abs(off - prev[i]) > 1);
        prev[i] = off;
        w.style.transformOrigin = origin;
        w.style.transform = `rotate(${off * step}rad) translate(${dx}px,0) scale(${off === 0 ? 1 : .9}) translate(${-dx}px,0)`;
        w.style.opacity = String(fade(off));
      });
    };
    const fit = () => {
      col.style.width = `${Math.max(...words.map(w => w.offsetWidth)) - parseFloat(getComputedStyle(col).fontSize) * .85}px`;
    };
    const resize = () => { fit(); place(); };

    place();
    document.fonts.ready.then(fit);
    window.addEventListener("resize", resize);
    const timer = matchMedia("(prefers-reduced-motion: reduce)").matches
      ? undefined
      : setInterval(() => { active = (active + 1) % n; place(); }, 2400);
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" aria-label="Profound Ventures">
      <h1 className={`${styles.stage} ${styles.reveal}`} aria-label="Profound">
        <span className={styles.pro} aria-hidden="true">Pro</span>
        <span className={styles.col} ref={columnRef} aria-hidden="true">
          <span className={styles.arc} data-arc />
          <svg className={styles.ripples} viewBox="-115 -115 230 230" aria-hidden="true">
            <g fill="none" stroke="#cfc8be" strokeDasharray="5 6">
              <circle r="76" opacity=".8" />
              <circle r="90" opacity=".6" />
              <circle r="104" opacity=".4" />
            </g>
          </svg>
          <span className={styles.dash} />
          {endings.map(ending => <span className={styles.word} data-ending key={ending}>{ending}</span>)}
        </span>
      </h1>
      <div className={`${styles.foot} ${styles.reveal}`}>
        <p>The studio-driven seed fund building alongside <em>Israel&apos;s next generation of founders.</em></p>
        <a className={styles.down} href="#about" aria-label="Scroll down">
          <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M7 11l7 7 7-7" /></svg>
        </a>
        <a className={styles.pitch} href="#contact">
          Pitch us your idea
          <i><svg viewBox="0 0 359.83 359.83" aria-hidden="true"><path fill="currentColor" d="M359.83 55.06v249.71c0 30.41-24.65 55.06-55.06 55.06H210.86L306.58 84.2 124.86 359.83H55.06C24.65 359.83 0 335.18 0 304.77V234.97L275.63 53.25 0 148.97V55.06C0 24.65 24.65 0 55.06 0h249.71c30.41 0 55.06 24.65 55.06 55.06Z" /></svg></i>
        </a>
      </div>
    </section>
  );
}
