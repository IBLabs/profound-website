"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function TeamExperience({ children, className }: { children: ReactNode; className: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const fitLabels = () => root.querySelectorAll<SVGSVGElement>(".ill.bare svg").forEach(svg => {
      const width = svg.getBoundingClientRect().width;
      if (width) svg.querySelectorAll("text").forEach(text => text.setAttribute("font-size", (14 * svg.viewBox.baseVal.width / width).toFixed(2)));
    });
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        reveal.unobserve(entry.target);
      }
    }), { threshold: .12 });
    root.querySelectorAll(".rv").forEach(element => reveal.observe(element));
    const light = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("lit");
        light.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -22% 0px" });
    root.querySelectorAll(".person").forEach(element => light.observe(element));

    const artwork = new IntersectionObserver(entries => entries.forEach(entry => {
      (entry.target as HTMLElement).dataset.animating = String(entry.isIntersecting);
    }), { threshold: .2 });
    root.querySelectorAll("[data-value-art]").forEach(element => artwork.observe(element));

    let disposed = false;
    window.addEventListener("resize", fitLabels);
    document.fonts.ready.then(() => { if (!disposed) fitLabels(); });
    fitLabels();
    return () => {
      disposed = true;
      reveal.disconnect();
      light.disconnect();
      artwork.disconnect();
      window.removeEventListener("resize", fitLabels);
    };
  }, []);

  return <div className={`reference-team ${className}`} ref={rootRef}>{children}</div>;
}
