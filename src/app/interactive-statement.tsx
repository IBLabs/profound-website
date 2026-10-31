"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function InteractiveStatement({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = ref.current;
    if (!heading) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const units = Array.from(heading.querySelectorAll<HTMLElement>("[data-hover-unit]"));
    let positions: { x: number; y: number }[] = [];
    let frame = 0;
    let cursor = { x: 0, y: 0 };

    const measure = () => {
      positions = units.map(unit => {
        const bounds = unit.getBoundingClientRect();
        return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      positions = [];
      units.forEach(unit => {
        unit.style.removeProperty("--hover-lift");
        unit.style.removeProperty("--hover-tilt");
      });
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) return;
      cursor = { x: event.clientX, y: event.clientY };
      if (!positions.length) measure();
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        units.forEach((unit, index) => {
          const dx = positions[index].x - cursor.x;
          const dy = positions[index].y - cursor.y;
          const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 100);
          const falloff = proximity * proximity;
          unit.style.setProperty("--hover-lift", `${-9 * falloff}px`);
          unit.style.setProperty("--hover-tilt", `${dx / 100 * 8 * falloff}deg`);
        });
      });
    };

    heading.addEventListener("pointermove", move);
    heading.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);
    reducedMotion.addEventListener("change", reset);
    return () => {
      reset();
      heading.removeEventListener("pointermove", move);
      heading.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
      reducedMotion.removeEventListener("change", reset);
    };
  }, []);

  return <h2 id="founder-statement" ref={ref} aria-label="Profound founders build category-defining software and AI companies.">{children}</h2>;
}
