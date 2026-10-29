import Image from "next/image";
import type { Metadata } from "next";
import { ScrollReveal } from "../scroll-reveal";

export const metadata: Metadata = {
  title: "Team — ProFound",
  description:
    "Meet the operators, technologists, and ecosystem connectors building ProFound alongside Israel's next generation of founders.",
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adi Gozes",
    role: "Managing Partner",
    image: "/team/Adi.jpeg",
    bio: "Previously Partner at Entrée Capital with board experience across Rivery, Cypago, and Confetti; investment team at Samsung Catalyst Fund; and Director of Products at Vision Map (acquired by Rafael). She served as an officer in 8200.",
  },
  {
    name: "Lee Moser",
    role: "Founding Partner",
    image: "/team/lee.jpg",
    bio: "Background spanning government, business development, and venture. Previously Head of Global Relations at iAngels, with deep experience connecting Israeli founders to international markets.",
  },
  {
    name: "Ron Porat",
    role: "CTO",
    image: "/team/ron.jpg",
    bio: "Serial entrepreneur with multiple exits — CEO & Founder of Hacktics (acquired by EY) and Seeker (acquired by Synopsys); Co-Founder of Shine and CTO/Co-Founder of L1ght. Owns the tech pillar.",
  },
  {
    name: "Dalit Krainer",
    role: "People & Growth",
    image: "/team/dalit.jpg",
    bio: "Former Global VP HR at Amdocs, Chief HR Officer at Checkmarx, and Director of HR at Comverse. Owns the organization pillar — leadership, comp, and culture.",
  },
  {
    name: "Noy Dan",
    role: "Studio Director",
    image: "/team/noy.png",
    bio: "Former Product Manager at WalkMe, Director of Investor Relations at iAngels, and Chief of Staff to the Deputy Ambassador at the Israeli Embassy in Washington, DC. Owns the GTM pillar.",
  },
  {
    name: "Danielle Zettel",
    role: "Director, Investor Relations & Communications",
    image: "/team/danielle.jpg",
    bio: "Owns LP relationships, fund communications, and the partner narrative — keeping investors close and the Profound story sharp.",
  },
  {
    name: "Paz Lazar",
    role: "Chief of Staff",
    image: "/team/paz.png",
    bio: "Connective tissue across the partners, studio, and portfolio. Runs operations, project execution, and the cadence that keeps the team in motion.",
  },
  {
    name: "Tomer Haviv",
    role: "Analyst",
    image: "/team/tomer.jpeg",
    bio: "Supports deal sourcing, diligence, and portfolio company analytics across the fund and the studio.",
  },
  {
    name: "Matan Malka",
    role: "Assistant Controller",
    image: "/team/matan.jpg",
    bio: "Owns fund accounting, capital calls, and portfolio reporting. Keeps the financial backbone of the fund precise and audit-ready.",
  },
];

interface Advisor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const advisors: Advisor[] = [
  {
    name: "Gary Ginsberg",
    role: "Advisor",
    image: "/team/gary.jpg",
    bio: "Co-Founder & Board Member at 25Madison. A seasoned communications and media leader with senior roles spanning the Clinton administration, Time Warner, News Corp, and Softbank, and a sitting board member across several public-interest organizations.",
  },
  {
    name: "Josh Fidler",
    role: "Advisor",
    image: "/team/josh.jpeg",
    bio: "Co-Chairman & COO at Chesapeake Realty Partners. NYU Law alum with a long track record in real estate development, investment, and community leadership across the Mid-Atlantic.",
  },
  {
    name: "Vladimir Kitaygorodsky",
    role: "Advisor",
    image: "/team/vlad.jpeg",
    bio: "Founder & Managing Partner of Shibumi Capital. Previously at Bowdoin College and at Morgan Stanley and UBS, with two decades of experience leading private equity, public-market, and institutional allocation across global venture and growth strategies.",
  },
];

interface ValuePrinciple {
  number: string;
  title: string;
  description: string;
}

const values: ValuePrinciple[] = [
  {
    number: "01 / IN THE TRENCHES",
    title: "Not advisors",
    description:
      "We sit alongside founders on the hardest problems — recruiting, product, GTM — for as long as it takes.",
  },
  {
    number: "02 / ONE AT A TIME",
    title: "Bespoke, not batched",
    description:
      "No cohorts, no demo days. Every Studio company gets a program tuned to its team and its stage.",
  },
  {
    number: "03 / GLOBAL FROM DAY ONE",
    title: "Israel → US",
    description:
      "From day one we engineer for the U.S. market — through our network, NYC roadshow, and global partners.",
  },
];

export default function TeamPage() {
  return (
    <main className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="section-shell">
          <ScrollReveal className="team-intro" yOffset={18}>
            <p className="eyebrow">Our team</p>
            <h1>
              A Team of <br className="team-br-desktop" />
              <span className="team-title-emphasis">
                <em>Investors and Operators</em>
              </span>
            </h1>
            <p className="team-intro-lead">
              A group of builders, technologists, and ecosystem connectors who have walked
              the path our founders are walking — and stay close enough to walk it again with them.
            </p>
            <p className="team-intro-note">
              We combine venture experience, deep technical leadership, and institutional-grade
              operations to run a studio-driven fund built for early-stage Israel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Roster Grid */}
      <section className="team-section" aria-labelledby="team-roster-title" style={{ paddingTop: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
        <div className="section-shell">
          <div className="team-grid-3">
            {teamMembers.map((member, index) => (
              <ScrollReveal
                key={member.name}
                delay={(index % 3) * 0.08}
                yOffset={20}
              >
                <article className="team-card">
                  <div className="team-card-photo">
                    <Image
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={member.image}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-bio">{member.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="team-section" aria-labelledby="advisors-title" style={{ paddingTop: 0 }}>
        <div className="section-shell">
          <ScrollReveal className="team-section-header" yOffset={18}>
            <p className="eyebrow">Advisors</p>
            <h2 id="advisors-title">
              The bench behind{" "}
              <span className="team-title-emphasis">
                <em>our founders.</em>
              </span>
            </h2>
            <p>
              A small, hand-picked group of operators and investors who lend their
              experience to our portfolio — on capital, real estate, public markets,
              and global growth.
            </p>
          </ScrollReveal>

          <div className="team-grid-3">
            {advisors.map((advisor, index) => (
              <ScrollReveal
                key={advisor.name}
                delay={(index % 3) * 0.08}
                yOffset={20}
              >
                <article className="team-card">
                  <div className="team-card-photo">
                    <Image
                      alt={advisor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={advisor.image}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-member-name">{advisor.name}</h3>
                    <p className="team-member-role">{advisor.role}</p>
                    <p className="team-member-bio">{advisor.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Values Section */}
      <section className="team-values-section" aria-labelledby="values-title">
        <div className="section-shell">
          <ScrollReveal className="team-section-header" yOffset={18}>
            <p className="eyebrow">How we work</p>
            <h2 id="values-title">
              What founders can{" "}
              <span className="team-title-emphasis">
                <em>expect from us.</em>
              </span>
            </h2>
          </ScrollReveal>

          <div className="team-grid-3">
            {values.map((val, index) => (
              <ScrollReveal
                key={val.number}
                delay={index * 0.08}
                yOffset={20}
              >
                <div className="team-value-card">
                  <span className="team-value-num">{val.number}</span>
                  <h3 className="team-value-title">{val.title}</h3>
                  <p className="team-value-desc">{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
