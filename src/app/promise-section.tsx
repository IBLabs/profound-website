"use client";

import { ScrollReveal } from "./scroll-reveal";

export function PromiseSection() {
  return (
    <section className="promise-section" aria-labelledby="promise-title">
      <div className="promise-orbit-graphic" aria-hidden="true">
        <div className="orbit-ring orbit-ring--1" />
        <div className="orbit-ring orbit-ring--2" />
        <div className="orbit-ring orbit-ring--3" />
      </div>
      <div className="promise-glow" aria-hidden="true" />
      <div className="section-shell promise-container">
        <ScrollReveal className="promise-content" yOffset={20}>
          <p className="eyebrow promise-eyebrow">Our promise</p>
          <h2 id="promise-title" className="promise-title">
            If you’re building something{" "}
            <span className="hero-title-emphasis">
              <em>profound,</em>
            </span>
            <br className="promise-title-break" />
            {" "}you should never feel like you’re building it alone.
          </h2>
          <p className="promise-copy">
            We back the unconventional. The first-time founder, the unexpected team,
            the idea that doesn’t fit a thesis deck. If that’s you — let’s talk.
          </p>
          <div className="promise-actions">
            <a
              className="pitch-button promise-button"
              href="mailto:hello@profound.vc?subject=Pitch%20us%20your%20idea"
            >
              Pitch us your idea
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
