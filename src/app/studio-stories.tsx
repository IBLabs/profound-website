"use client";

import { motion, useReducedMotion } from "framer-motion";

const stories = [
  "We get close to the work early, turning the questions in front of you into a focused next move.",
  "From product and engineering to the first go-to-market motions, we build the foundations alongside your team.",
  "The result is practical momentum: better decisions, real progress, and the room to keep moving with conviction.",
];

const entranceOrder = [1, 0, 2];

export function StudioStories() {
  const reduceMotion = useReducedMotion();

  return <div className="studio-stories section-shell">
    {stories.map((quote, index) => <motion.div
      className="studio-story-reveal"
      initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
      key={quote}
      transition={{ delay: reduceMotion ? 0 : entranceOrder.indexOf(index) * 0.18, duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.3, once: true }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
    >
      <article className="studio-story">
        <div aria-hidden="true" className="studio-story-placeholder" />
        <blockquote><p>{quote}</p><cite>— Founder name</cite></blockquote>
      </article>
    </motion.div>)}
  </div>;
}
