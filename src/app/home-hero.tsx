"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./home-hero.module.css";

const endings = ["found", "digy", "active", "gress", "cess"];

export function HomeHero() {
  const columnRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const column = columnRef.current;
    const hero = column?.closest("section");
    if (!column || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reset = () => {
      column.style.setProperty("--pointer-angle", "0rad");
      column.style.setProperty("--pointer-radius", "0px");
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) return;
      const bounds = hero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      column.style.setProperty("--pointer-angle", `${y * 0.007}rad`);
      column.style.setProperty("--pointer-radius", `${x * 3}px`);
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reducedMotion.addEventListener("change", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reducedMotion.removeEventListener("change", reset);
    };
  }, []);

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    const words = Array.from(column.querySelectorAll<HTMLElement>("[data-ending]"));
    const arc = column.querySelector<HTMLElement>("[data-arc]")!;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = column.closest("section")!;
    let active = 0;
    let previous: number[] = [];
    let disposed = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    let anticipationTimer: ReturnType<typeof setTimeout> | undefined;
    let anticipationAnimations: Animation[] = [];
    let introTimer: ReturnType<typeof setTimeout> | undefined;
    let introducing = true;

    function place(phase = active, spinning = false) {
      if (!column || disposed) return;
      const fontSize = parseFloat(getComputedStyle(column).fontSize);
      const radius = arc.offsetWidth / 2;
      const step = (1.12 * fontSize) / radius;
      const distance = radius + 0.05 * fontSize;

      words.forEach((word, index) => {
        let offset = ((index - phase) % words.length + words.length) % words.length;
        if (offset > words.length / 2) offset -= words.length;
        // Hide the wraparound jump on the far side of the wheel.
        word.classList.toggle(styles.jump, previous[index] !== undefined && Math.abs(offset - previous[index]) > 1);
        word.classList.toggle(styles.spinning, spinning || introducing);
        if (offset !== 0) {
          word.classList.remove(styles.locked, styles.initiallyLit);
          word.style.removeProperty("--lock-start");
        }
        else if (!spinning && !introducing && previous[index] !== undefined && previous[index] !== 0) word.classList.add(styles.locked);
        previous[index] = offset;
        word.style.transformOrigin = `${-distance + 0.5 * fontSize}px ${0.72 * fontSize}px`;
        const focus = Math.max(0, 1 - Math.abs(offset));
        word.style.transform = `rotate(${offset * step}rad) translate(${distance}px, 0) scale(${0.9 + focus * 0.1}) translate(${-distance}px, 0)`;
        const fades = [1, 0.38, 0.14, 0];
        const lower = Math.floor(Math.abs(offset));
        const fraction = Math.abs(offset) - lower;
        word.style.opacity = String(fades[lower] + ((fades[lower + 1] ?? 0) - fades[lower]) * fraction);
      });
      column.style.width = `${Math.max(...words.map(word => word.offsetWidth)) - fontSize * 0.85}px`;
    }

    function start() {
      clearInterval(timer);
      clearTimeout(anticipationTimer);
      anticipationAnimations.forEach(animation => animation.cancel());
      anticipationAnimations = [];
      if (!introducing && !reducedMotion.matches && !document.hidden) {
        timer = setInterval(() => {
          // Pull the whole cylinder back a fraction before releasing it.
          anticipationAnimations = words.map(word => word.animate([
            { transform: word.style.transform },
            { transform: `rotate(.012rad) ${word.style.transform}` },
          ], { duration: 280, easing: "cubic-bezier(.4, 0, .7, 1)", fill: "forwards" }));
          anticipationTimer = setTimeout(() => {
            anticipationAnimations.forEach(animation => {
              animation.commitStyles();
              animation.cancel();
            });
            anticipationAnimations = [];
            // Flush the wind-up pose so the normal spin starts from it.
            words.forEach(word => getComputedStyle(word).transform);
            active = (active + 1) % endings.length;
            place();
          }, 290);
        }, 2400);
      }
    }

    const resize = () => place();
    place(0, true);
    document.fonts.ready.then(() => {
      if (disposed) return;
      hero.dataset.entered = "true";
      const finishEntrance = () => {
        if (disposed) return;
        introducing = false;
        previous = [];
        place();
        start();
      };
      if (reducedMotion.matches) finishEntrance();
      else introTimer = setTimeout(finishEntrance, 850);
    });
    window.addEventListener("resize", resize);
    reducedMotion.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);
    start();

    return () => {
      disposed = true;
      delete hero.dataset.entered;
      clearInterval(timer);
      clearTimeout(anticipationTimer);
      anticipationAnimations.forEach(animation => animation.cancel());
      clearTimeout(introTimer);
      window.removeEventListener("resize", resize);
      reducedMotion.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" aria-label="Profound Ventures">
      <h1 className={styles.stage} aria-label="Profound">
        <span className={styles.pro} aria-hidden="true">Pro</span>
        <span className={styles.column} ref={columnRef} aria-hidden="true">
          <span className={styles.arc} data-arc />
          <svg className={styles.ripples} viewBox="-115 -115 230 230" aria-hidden="true">
            <g fill="none" stroke="#cfc8be" strokeDasharray="5 6">
              <circle r="76" opacity=".8" />
              <circle r="90" opacity=".6" />
              <circle r="104" opacity=".4" />
            </g>
          </svg>
          <span className={styles.dash} />
          {endings.map((ending, index) => (
            <span className={`${styles.word}${index === 0 ? ` ${styles.initiallyLit}` : ""}`} data-ending key={ending} style={{ opacity: index === 0 ? 1 : 0 }}>
              <span className={styles.wordText}>
                {Array.from(ending).map((letter, letterIndex) => (
                  <span
                    className={styles.letter}
                    key={letterIndex}
                    data-letter={letter}
                    style={{
                      "--letter-delay": `${letterIndex * 0.015}s`,
                      "--letter-nudge": `${0.028 + (letterIndex % 3) * 0.003}em`,
                      "--gradient-size": `${ending.length * 100}% 100%`,
                      "--gradient-position": `${letterIndex / (ending.length - 1) * 100}% 0`,
                    } as CSSProperties}
                  >{letter}</span>
                ))}
              </span>
            </span>
          ))}
        </span>
      </h1>
      <div className={styles.foot}>
        <p>The studio-driven seed fund building alongside <em>Israel&apos;s next generation of founders.</em></p>
        <a className={styles.down} href="#about" aria-label="Scroll to learn about ProFound">
          <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m7 11 7 7 7-7" /></svg>
        </a>
        <a className={styles.pitch} href="mailto:hello@profound.vc">
          Pitch us your idea
          <span><svg viewBox="0 0 359.83 359.83" aria-hidden="true"><path fill="currentColor" d="M359.83 55.06v249.71c0 30.41-24.65 55.06-55.06 55.06h-64.53L318.88 62.49 120.66 359.83h-65.6C24.65 359.83 0 335.18 0 304.77v-65.6L297.34 40.95 0 119.58V55.06C0 24.65 24.65 0 55.06 0h249.71c30.41 0 55.06 24.65 55.06 55.06Z" /></svg></span>
        </a>
      </div>
    </section>
  );
}
