"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle } from "./section-title";

const slides = [
  { alt: "Team mapping a strategy on a glass board", description: "What it takes to turn a sharp technical insight into a company: a focused first prototype, the right early team, and the conviction to keep moving before the market sees it.", image: "/figma/founders/conviction.jpg", logo: "/figma/portfolio-logo-1.png", title: "Building conviction before the first round" },
  { alt: "Team celebrating a product launch", description: "The conversations, customer signals, and practical experiments that turn a promising early product into real momentum — and give a team the confidence to make its next move.", image: "/figma/founders/successful_product_launch.jpg", logo: "/figma/portfolio-logo-2.png", title: "The work behind a confident product launch" },
  { alt: "Chess board prepared for the next move", description: "How exceptional teams turn a clear point of view into a company built to grow with intention, while protecting the speed and focus that made the idea matter in the first place.", image: "/figma/founders/next_move.jpg", logo: "/figma/portfolio-logo-3.png", title: "Finding the right next move with intention" },
];

const slideDuration = 6000;

export function FounderPanels() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timeout = window.setTimeout(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, slideDuration);

    return () => window.clearTimeout(timeout);
  }, [activeSlide, reduceMotion]);

  return <section className="news-section" id="news" aria-labelledby="news-title">
    <div className="news-section-heading">
      <p className="news-eyebrow">Studio dispatches</p>
      <div className="news-copy">
        <div className="news-logo-slot"><AnimatePresence initial={false} mode="wait">
          <motion.div animate={{ opacity: 1, x: 0 }} className="news-copy-logo" exit={{ opacity: 0, x: 28 }} initial={{ opacity: 0, x: -28 }} key={slides[activeSlide].logo} transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}><Image alt="Portfolio company logo" className="news-company-logo" height={40} src={slides[activeSlide].logo} style={{ height: "2rem", width: "auto" }} width={160} /></motion.div>
        </AnimatePresence></div>
        <SectionTitle id="news-title" key={slides[activeSlide].title}>{slides[activeSlide].title}</SectionTitle>
        <div className="news-details-slot"><AnimatePresence initial={false} mode="wait">
          <motion.div animate={{ opacity: 1, x: 0 }} className="news-copy-details" exit={{ opacity: 0, x: 28 }} initial={{ opacity: 0, x: -28 }} key={slides[activeSlide].image} transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}><p>{slides[activeSlide].description}</p><div className="news-copy-actions"><a className="news-read-more" href="#news">Read More</a></div></motion.div>
        </AnimatePresence></div>
      </div>
      <div aria-label="News articles" className="news-page-controls" role="tablist">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return <button aria-controls="news-carousel" aria-label={`Show news article ${index + 1}`} aria-selected={isActive} className={`news-page-control${isActive ? " is-active" : ""}`} key={slide.image} onClick={() => setActiveSlide(index)} role="tab" type="button">
            {isActive && <span className="news-page-control-fill" key={activeSlide} />}
          </button>;
        })}
      </div>
    </div>
    <div className="news-carousel" id="news-carousel">
      <AnimatePresence initial={false} mode="wait">
        <motion.div animate={{ opacity: 1 }} className="news-carousel-slide" exit={{ opacity: 0 }} initial={{ opacity: 0 }} key={slides[activeSlide].image} transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}>
          <Image alt={slides[activeSlide].alt} fill priority={activeSlide === 0} sizes="(max-width: 800px) calc(100vw - 2rem), 82vw" src={slides[activeSlide].image} />
        </motion.div>
      </AnimatePresence>
    </div>
  </section>;
}
