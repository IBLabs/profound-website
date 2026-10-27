"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface Milestone {
  code: string;
  tag: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    code: "01",
    tag: "KICKOFF",
    title: "Align in a day",
    description:
      "Half-day kickoff with the full studio team: goals, milestones, gap analysis, and a fundraising simulation so we see the company the way future investors will.",
  },
  {
    code: "02",
    tag: "PILLARS",
    title: "Tech · GTM · Org · Capital",
    description:
      "Four pillars run weekly and bi-weekly with dedicated owners until you hit your milestones: MVP shipped, design partners live, leadership in place, fundraising ready.",
  },
  {
    code: "03",
    tag: "GOVERNANCE",
    title: "Monthly cadence",
    description:
      "One monthly sync to keep momentum honest, accountability sharp, and surprises rare.",
  },
  {
    code: "04",
    tag: "USA",
    title: "Roadshow → Seed",
    description:
      "The finale: USA roadshow with top international VCs and strategic partners. Your seed begins.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function StudioProgram() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="studio-program-shell section-shell">
      <motion.div
        className="studio-program-track"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ amount: 0.2, once: true }}
        variants={containerVariants}
      >
        {milestones.map((milestone, index) => {
          const isLast = index === milestones.length - 1;
          return (
            <motion.article
              key={milestone.code}
              className="studio-milestone"
              variants={itemVariants}
            >
              {/* Milestone Eyebrow Tag */}
              <div className="studio-milestone-tag">
                {milestone.code} / {milestone.tag}
              </div>

              {/* Node Dot + Horizontal Connector Arrow */}
              <div className="studio-milestone-node-wrap">
                <div className="studio-milestone-circle" aria-hidden="true" />
                {!isLast && (
                  <div className="studio-milestone-connector" aria-hidden="true">
                    <svg className="studio-connector-line-svg" height="12">
                      <line
                        x1="0"
                        y1="6"
                        x2="100%"
                        y2="6"
                        stroke="currentColor"
                        strokeDasharray="3 4"
                        strokeWidth="1.2"
                      />
                    </svg>
                    <svg
                      className="studio-connector-arrow"
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                    >
                      <path
                        d="M1 3.2 L4.5 6 L1 8.8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Milestone Content */}
              <div className="studio-milestone-content">
                <h3 className="studio-milestone-title">{milestone.title}</h3>
                <p className="studio-milestone-desc">{milestone.description}</p>
              </div>

              {/* Mobile Vertical Connector Arrow */}
              {!isLast && (
                <div className="studio-mobile-connector" aria-hidden="true">
                  <svg width="12" height="28" viewBox="0 0 12 28" fill="none">
                    <line
                      x1="6"
                      y1="0"
                      x2="6"
                      y2="21"
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M3.2 17.5 L6 21 L8.8 17.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.article>
          );
        })}
      </motion.div>

      {/* Editorial Studio Action */}
      <div className="studio-program-action">
        <a
          className="secondary-action"
          href="mailto:hello@profound.vc?subject=The%20Studio%20Program"
        >
          Explore the Studio program <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
