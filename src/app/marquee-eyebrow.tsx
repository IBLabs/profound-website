"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MarqueeEyebrow() {
  const reduceMotion = useReducedMotion();

  return <motion.p
    className="hero-marquee-eyebrow"
    initial={reduceMotion ? false : { opacity: 0, backgroundPosition: "100% 0%" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ amount: 0.7, once: true }}
    whileInView={reduceMotion ? {} : { opacity: 1, backgroundPosition: "0% 0%" }}
  >
    Successes &amp; Co. creations
  </motion.p>;
}
