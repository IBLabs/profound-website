"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

const SLIDE_DURATION = 5000;

const pillars = [
  {
    num: "01",
    title: "One founder at a time",
    copy: "We keep the studio deliberately focused, so every company gets the attention, candor, and practical support it needs to move with conviction.",
    image: "/figma/hero-background-1.png",
    alt: "ProFound founder in studio workspace",
  },
  {
    num: "02",
    title: "Full-stack support",
    copy: "No outsourcing. Our studio personnel write code, shape GTM strategy, and work through the hard decisions alongside you.",
    image: "/figma/founders/conviction.jpg",
    alt: "Technical strategy and architecture session",
  },
  {
    num: "03",
    title: "Long-term partnership",
    copy: "We remain your sounding board through the earliest iterations, the seed round, and the next chapter beyond it.",
    image: "/figma/founders/next_move.jpg",
    alt: "Strategic planning and long horizon",
  },
  {
    num: "04",
    title: "Global from day one",
    copy: "We connect exceptional Israeli technical talent to the customers, operators, and capital that help companies grow.",
    image: "/figma/founders/successful_product_launch.jpg",
    alt: "Celebrating a successful product launch",
  },
];

export function CommitmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % pillars.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + pillars.length) % pillars.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % pillars.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex, reduceMotion]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="commitment-section"
      id="in-the-trenches"
      aria-labelledby="commitment-title"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="section-shell commitment-container">
        {/* Section Header */}
        <ScrollReveal yOffset={18} className="commitment-header">
          <p className="eyebrow commitment-eyebrow">In the trenches</p>
          <SectionTitle id="commitment-title" className="commitment-headline">
            <span>We don’t pitch on advice.</span>
            <br />
            <span className="hero-title-emphasis">
              <em>We build with you.</em>
            </span>
          </SectionTitle>
          <div className="commitment-lead-copy">
            <p>
              Profound is a different kind of fund. Instead of running cohorts or
              sending you to office hours, our team becomes part of yours, one company
              at a time, bespoke from day one, and for as long as it takes to get
              to a substantial seed round with top-tier investors.
            </p>
            <p>
              That means we’re picky about who we back, and obsessive about the
              founders we choose.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div
          className="commitment-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Tab Selection Bar with Filling Progress Bars */}
          <div
            className="commitment-carousel-tabs"
            role="tablist"
            aria-label="Commitment pillars"
          >
            {pillars.map((pillar, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={pillar.num}
                  type="button"
                  role="tab"
                  id={`pillar-tab-${pillar.num}`}
                  aria-controls={`pillar-panel-${pillar.num}`}
                  aria-selected={isActive}
                  className={`commitment-carousel-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="commitment-tab-num">{pillar.num}</span>
                  <span className="commitment-tab-title">{pillar.title}</span>
                  <span className="commitment-tab-progress-track">
                    {isActive && (
                      <span
                        key={activeIndex}
                        className="commitment-tab-progress-fill"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carousel Stage Card */}
          <div className="commitment-carousel-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                id={`pillar-panel-${pillars[activeIndex].num}`}
                role="tabpanel"
                aria-labelledby={`pillar-tab-${pillars[activeIndex].num}`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="commitment-stage-grid"
              >
                {/* Content */}
                <div className="commitment-stage-content">
                  <div className="commitment-stage-body">
                    <span className="commitment-stage-badge">
                      PILLAR {pillars[activeIndex].num}
                    </span>
                    <h3 className="commitment-stage-title">
                      {pillars[activeIndex].title}
                    </h3>
                    <p className="commitment-stage-copy">
                      {pillars[activeIndex].copy}
                    </p>
                  </div>
                </div>

                {/* Media Image */}
                <div className="commitment-stage-media">
                  <div
                    className="commitment-stage-image-wrap"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={pillars[activeIndex].image}
                      alt={pillars[activeIndex].alt}
                      fill
                      priority
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="commitment-stage-image"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
