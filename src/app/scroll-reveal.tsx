"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  viewportAmount?: number | "some" | "all";
  immediate?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 18,
  viewportAmount = 0.2,
  immediate = false,
  className,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: yOffset }}
      animate={immediate && !shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={!immediate && !shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={immediate ? undefined : { once: true, amount: viewportAmount, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
