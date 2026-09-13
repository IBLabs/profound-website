"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

type SectionTitleProps = HTMLMotionProps<"h2">;

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  return <motion.h2
    {...props}
    className={["section-title--reveal", className].filter(Boolean).join(" ")}
    initial={reduceMotion ? false : { backgroundPosition: "100% 0%" }}
    transition={{ duration: 1.15, ease: "linear" }}
    viewport={{ amount: 0.55, once: true }}
    whileInView={reduceMotion ? {} : { backgroundPosition: "0% 0%" }}
  >{children}</motion.h2>;
}
