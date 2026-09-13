"use client";

import { AnimatePresence, motion, type Transition, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const panels = [
  { category: "TECH", description: "From architecture decisions to your first ten engineers — our studio CTO is in the weekly stand-ups.", number: "01", title: "A CTO in your corner" },
  { category: "GTM", description: "We build your path to first customers, pressure-test the narrative, and open the right early doors.", number: "02", title: "Go to market, together" },
  { category: "PEOPLE", description: "The right team changes the trajectory. We help make the early hires count.", number: "03", title: "People around the table" },
  { category: "CAPITAL", description: "We stay close from idea through seed and beyond, with the resources to help you move decisively.", number: "04", title: "Capital for the long run" },
];

export function FounderPanels() {
  const [activePanel, setActivePanel] = useState(0);
  const [revealedPanel, setRevealedPanel] = useState<number | null>(0);
  const activePanelRef = useRef(activePanel);
  const reduceMotion = useReducedMotion();
  const transition: Transition = reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    activePanelRef.current = activePanel;
  }, [activePanel]);

  const selectPanel = (index: number) => {
    if (index === activePanel) return;

    setRevealedPanel(null);
    setActivePanel(index);
  };

  return <section className="founder-section" aria-labelledby="founder-title">
    <div className="founder-section-heading"><h2 id="founder-title">Not just a check,<br />an additional co-founder</h2><p>Most VCs show up at board meetings. We show up Sunday morning. From your first hire to your first paying customer, our studio team works inside the company — engineering, product, GTM, ops — until you&apos;ve earned your seed round.</p></div>
    <div className="founder-panels">
      {panels.map((panel, index) => {
        const isActive = activePanel === index;
        const isRevealed = revealedPanel === index;
        return <motion.button animate={{ flex: isActive ? 4.4 : 1 }} aria-pressed={isActive} className="founder-panel" key={panel.number} layout onAnimationComplete={() => { if (activePanelRef.current === index) setRevealedPanel(index); }} onClick={() => selectPanel(index)} transition={transition} type="button">
          <span className="founder-panel-shade" />
          <span className="founder-panel-content">
            <span className="founder-panel-meta"><span className="founder-panel-category">{panel.category}</span><span>{panel.number}</span></span>
            <span className="founder-panel-title">{panel.title}</span>
            <AnimatePresence initial={false}>{isRevealed && <motion.span animate={{ opacity: 1, height: "auto" }} className="founder-panel-description" exit={{ opacity: 0, height: 0 }} initial={{ opacity: 0, height: 0 }} transition={transition}>{panel.description}</motion.span>}</AnimatePresence>
          </span>
        </motion.button>;
      })}
    </div>
  </section>;
}
