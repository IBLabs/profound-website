"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "../scroll-reveal";

export interface PortfolioCompany {
  name: string;
  tag: string;
  description: string;
  backer: string;
  url: string;
  letter: string;
  logo: string;
  categories: string[];
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "Marquee",
    tag: "AI · Sports",
    description: "The decision intelligence platform for professional team recruitment and scouting.",
    backer: "Backed by AnD Ventures",
    url: "https://themarquee.ai",
    letter: "M",
    logo: "/logos/portfolio/marquee.png",
    categories: ["ai"],
  },
  {
    name: "Limy",
    tag: "AI · Commerce",
    description: "Agentic web infrastructure helping brands measure and monetize visibility in AI-driven discovery.",
    backer: "Backed by AnD Ventures",
    url: "https://limy.ai",
    letter: "L",
    logo: "/logos/portfolio/limy.png",
    categories: ["ai", "consumer"],
  },
  {
    name: "Modelyo",
    tag: "Deep tech · Security",
    description: "Confidential computing infrastructure that keeps AI workloads encrypted end-to-end.",
    backer: "Backed by AnD Ventures",
    url: "https://www.modelyo.com",
    letter: "M",
    logo: "/logos/portfolio/modelyo.webp",
    categories: ["infra", "ai"],
  },
  {
    name: "Perfect",
    tag: "AI · HR Tech",
    description: "Agentic AI recruitment platform that runs the operational layer of hiring.",
    backer: "Backed by AnD Ventures",
    url: "https://www.goperfect.com",
    letter: "P",
    logo: "/logos/portfolio/perfect.png",
    categories: ["ai"],
  },
  {
    name: "Playo",
    tag: "AI · Gaming",
    description: "Generates fully playable, hyper-personalized 3D games at scale.",
    backer: "Backed by AnD Ventures",
    url: "https://playo.ai",
    letter: "P",
    logo: "/logos/portfolio/playo.png",
    categories: ["ai", "consumer"],
  },
  {
    name: "Conntour",
    tag: "AI · Security",
    description: "Natural-language search across video surveillance - a search engine for cameras.",
    backer: "Backed by AnD Ventures",
    url: "https://www.conntour.com",
    letter: "C",
    logo: "/logos/portfolio/conntour.png",
    categories: ["ai", "infra"],
  },
  {
    name: "Vinesight",
    tag: "Trust & Safety",
    description: "Detects and mitigates disinformation and coordinated attacks targeting brands, causes, and campaigns.",
    backer: "Backed by AnD Ventures",
    url: "https://www.vinesight.com",
    letter: "V",
    logo: "/logos/portfolio/vinesight.png",
    categories: ["infra"],
  },
  {
    name: "Unibeam",
    tag: "Identity · Infra",
    description: "SIM-based cryptographic authentication for fraud prevention across mobile and IoT.",
    backer: "Backed by AnD Ventures",
    url: "https://unibeam.com",
    letter: "U",
    logo: "/logos/portfolio/unibeam.png",
    categories: ["infra"],
  },
  {
    name: "Askit",
    tag: "AI · Research",
    description: "Behavioral simulation models that predict customer decisions and replace traditional research.",
    backer: "Backed by AnD Ventures",
    url: "https://start.askit-ai.com",
    letter: "A",
    logo: "/logos/portfolio/askit.png",
    categories: ["ai"],
  },
  {
    name: "Astrid",
    tag: "Entertainment",
    description: "An entertainment studio building original IP across games and connected media.",
    backer: "Backed by AnD Ventures",
    url: "https://astridentertainment.com",
    letter: "A",
    logo: "/logos/portfolio/astrid.png",
    categories: ["consumer"],
  },
  {
    name: "Ludeo",
    tag: "Consumer · Gaming",
    description: "The playable social platform - turning gameplay moments into shareable, interactive clips.",
    backer: "Backed by AnD Ventures",
    url: "https://ludeo.com",
    letter: "L",
    logo: "/logos/portfolio/ludeo.png",
    categories: ["consumer"],
  },
  {
    name: "Onebeat",
    tag: "AI · Retail",
    description: "AI-driven inventory optimization that turns short-term demand signals into daily store actions.",
    backer: "Backed by AnD Ventures",
    url: "https://onebeat.co",
    letter: "O",
    logo: "/logos/portfolio/onebeat.png",
    categories: ["ai", "consumer"],
  },
  {
    name: "Rogue Security",
    tag: "AI · Security",
    description: "AI-native security platform that stops agents from going rogue - real-time guardrails, policy enforcement, and runtime control for production LLMs and agents.",
    backer: "Backed by AnD Ventures",
    url: "",
    letter: "R",
    logo: "/logos/portfolio/rogue-security.png",
    categories: ["ai", "infra"],
  },
  {
    name: "Fincom",
    tag: "Fintech · Compliance",
    description: "Phonetic-linguistic AML and OFAC sanctions screening platform that slashes false positives for financial institutions.",
    backer: "Backed by AnD Ventures",
    url: "https://fincom.co",
    letter: "F",
    logo: "/logos/portfolio/fincom-co.png",
    categories: ["infra"],
  },
  {
    name: "Superlegal",
    tag: "AI · Legal",
    description: "AI-powered contract review for small and mid-sized businesses.",
    backer: "Backed by AnD Ventures",
    url: "https://www.superlegal.ai",
    letter: "S",
    logo: "/logos/portfolio/superlegal.png",
    categories: ["ai"],
  },
  {
    name: "Novacy",
    tag: "AI · Sales · Acquired",
    description: "AI-powered conversation intelligence for B2B sales - body language, tone, and content analysis. Acquired by Lusha.",
    backer: "Backed by AnD Ventures",
    url: "",
    letter: "N",
    logo: "/logos/portfolio/novacy.png",
    categories: ["ai", "acquired"],
  },
  {
    name: "Sensorz",
    tag: "Wireless · Observability",
    description: "AI-driven wireless observability for private 4G/5G networks - continuous spectrum monitoring and threat detection for mission-critical environments.",
    backer: "Backed by AnD Ventures",
    url: "",
    letter: "S",
    logo: "/logos/portfolio/sensorz.png",
    categories: ["infra"],
  },
  {
    name: "Chronom",
    tag: "AI · Cloud Ops",
    description: "AI cloud management platform that helps CISOs, FinOps, and MSPs optimize cost, security, and operations across modern cloud environments.",
    backer: "Backed by AnD Ventures",
    url: "",
    letter: "C",
    logo: "/logos/portfolio/chronom.png",
    categories: ["ai", "infra"],
  },
  {
    name: "Rivery",
    tag: "Data · Acquired",
    description: "Cloud-native data integration platform - ELT, orchestration, and reverse-ETL in one stack. Acquired by Boomi.",
    backer: "Backed by Entrée Capital",
    url: "https://rivery.io",
    letter: "R",
    logo: "/logos/portfolio/Rivery.png",
    categories: ["infra", "acquired"],
  },
  {
    name: "Guidde",
    tag: "AI · Knowledge",
    description: "AI digital adoption platform - turns any web workflow into a video tutorial and step-by-step guide in seconds, with auto voiceover, captions, and in-app delivery.",
    backer: "Backed by Entrée Capital",
    url: "https://www.guidde.com",
    letter: "G",
    logo: "/logos/portfolio/Guidde.webp",
    categories: ["ai"],
  },
  {
    name: "Bria",
    tag: "AI · Visual",
    description: "Enterprise visual generative AI platform - controllable text-to-image and video built on fully licensed data, with full IP indemnification for commercial use.",
    backer: "Backed by Entrée Capital",
    url: "https://bria.ai",
    letter: "B",
    logo: "/logos/portfolio/Bria.jpeg",
    categories: ["ai"],
  },
];

const filterTabs = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Applied" },
  { id: "infra", label: "Deep Tech & Infra" },
  { id: "consumer", label: "Commerce & Consumer" },
  { id: "acquired", label: "Acquired" },
] as const;

export function PortfolioGrid() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const searchInputId = useId();

  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const filteredCompanies = useMemo(() => {
    return portfolioCompanies.filter((company) => {
      const matchesTab =
        activeTab === "all" || company.categories.includes(activeTab);

      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        company.name.toLowerCase().includes(q) ||
        company.tag.toLowerCase().includes(q) ||
        company.description.toLowerCase().includes(q) ||
        company.backer.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  const counts = useMemo(() => {
    const acc: Record<string, number> = { all: portfolioCompanies.length };
    filterTabs.forEach((tab) => {
      if (tab.id !== "all") {
        acc[tab.id] = portfolioCompanies.filter((c) =>
          c.categories.includes(tab.id)
        ).length;
      }
    });
    return acc;
  }, []);

  return (
    <section className="portfolio-section section-shell" aria-labelledby="portfolio-grid-heading">
      <h2 id="portfolio-grid-heading" className="sr-only">
        Legacy Portfolio Companies
      </h2>

      {/* Filter and Search Controls */}
      <ScrollReveal delay={0.34} immediate yOffset={16}>
        <div className="portfolio-controls">
          <div className="portfolio-filters" role="tablist" aria-label="Filter companies by category">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`portfolio-filter-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="portfolio-filter-count">({counts[tab.id]})</span>
                </button>
              );
            })}
          </div>

          <div className="portfolio-search">
            <label htmlFor={searchInputId} className="sr-only">Search portfolio companies</label>
            <svg
              className="portfolio-search-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id={searchInputId}
              type="search"
              placeholder="Search companies, tech, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="portfolio-search-input"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Companies */}
      <div className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filteredCompanies.map((company, index) => {
            const CardWrapper = company.url ? "a" : "article";
            const linkProps = company.url
              ? {
                  href: company.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `${company.name} — ${company.tag} (opens in a new tab)`,
                }
              : {};

            return (
              <motion.div
                key={company.name}
                layout
                initial={
                  shouldReduceMotion
                    ? false
                    : hasEntered
                    ? { opacity: 0, scale: 0.96 }
                    : { opacity: 0, y: 18 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : hasEntered ? 0.22 : 0.48,
                  delay: shouldReduceMotion ? 0 : hasEntered ? 0 : 0.36 + Math.min(index, 9) * 0.032,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="portfolio-grid-item"
              >
                <CardWrapper className="portfolio-card" {...linkProps}>
                  <div className="portfolio-card-head">
                    <div className="portfolio-logo-frame">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={180}
                        height={60}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    {company.url && (
                      <span className="portfolio-card-link-icon" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </div>

                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{company.tag}</span>
                    <h3 className="portfolio-card-title">{company.name}</h3>
                    <p className="portfolio-card-desc">{company.description}</p>
                  </div>

                  <div className="portfolio-card-footer">
                    <span className="portfolio-backer">
                      <span className="portfolio-backer-dot" aria-hidden="true" />
                      {company.backer}
                    </span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredCompanies.length === 0 && (
          <div className="portfolio-empty">
            <h3>No companies found</h3>
            <p>Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="portfolio-filter-btn active"
              style={{ marginTop: "1rem" }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
