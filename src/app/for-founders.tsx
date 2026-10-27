"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const founderPoints = [
  {
    title: "A CTO in your corner",
    body: "From architecture decisions to your first ten engineers - our studio CTO is in the weekly stand-ups.",
  },
  {
    title: "Design partners, not pipelines",
    body: "We open doors to your first 3–5 design partners and help you turn them into early revenue.",
  },
  {
    title: "Recruiting & org-building",
    body: "Founder coaching, comp philosophy, leadership hires. We help you build a team that compounds.",
  },
  {
    title: "Seed-ready, not just seed-funded",
    body: "Pitch coaching, dataroom, investor intros, and a fully-prepped global roadshow when you're ready.",
  },
];

export function ForFounders() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="for-founders-section" id="what-you-get" aria-labelledby="founders-headline">
      <div className="for-founders-orbit-graphic" aria-hidden="true">
        <div className="for-founders-orbit-ring" />
      </div>
      <div className="for-founders-bottom-orbit" aria-hidden="true">
        <div className="for-founders-ring for-founders-ring--outer" />
        <div className="for-founders-ring for-founders-ring--inner" />
      </div>
      <div className="for-founders-container section-shell">
        <motion.div
          className="for-founders-eyebrow-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.p className="eyebrow for-founders-eyebrow" variants={itemVariants}>
            For founders
          </motion.p>
        </motion.div>

        <div className="for-founders-split">
          {/* Left Column: Title and Lead Copy aligned to the top point of list */}
          <motion.div
            className="for-founders-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            <motion.h2
              id="founders-headline"
              className="for-founders-headline"
              variants={itemVariants}
            >
              <span>Not just a check,</span>
              <span className="for-founders-emphasis">
                <em>an additional co-founder.</em>
              </span>
            </motion.h2>

            <motion.p className="for-founders-lead" variants={itemVariants}>
              Most VCs show up at board meetings. We show up Sunday morning. From your first hire to your first paying customer, our studio team works inside the company — engineering, product, GTM, ops — until you&apos;ve earned your seed round.
            </motion.p>
          </motion.div>

          {/* Right Column: List of points with darker divider lines */}
          <motion.div
            className="for-founders-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            <ul className="for-founders-list" role="list">
              {founderPoints.map((point) => (
                <motion.li
                  key={point.title}
                  className="for-founders-list-item"
                  variants={itemVariants}
                >
                  <h3 className="for-founders-point-title">{point.title}</h3>
                  <p className="for-founders-point-body">{point.body}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
