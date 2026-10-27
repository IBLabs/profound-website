"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

type SectionTitleProps = HTMLMotionProps<"h2">;

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.h2
      {...props}
      className={["section-title--reveal", className].filter(Boolean).join(" ")}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.h2>
  );
}
