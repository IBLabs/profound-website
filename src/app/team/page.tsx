import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — ProFound",
  description: "Meet the operators, technologists, and ecosystem connectors building ProFound alongside Israel's next generation of founders.",
};

const team = [
  ["Adi Gozes", "Managing Partner", "Previously Partner at Entrée Capital with board experience across Rivery, Cypago, and Confetti; investment team at Samsung Catalyst Fund; and Director of Products at Vision Map (acquired by Rafael). She served as an officer in 8200."],
  ["Lee Moser", "Founding Partner", "Background spanning government, business development, and venture. Previously Head of Global Relations at iAngels, with deep experience connecting Israeli founders to international markets."],
  ["Ron Porat", "CTO", "Serial entrepreneur with multiple exits — CEO & Founder of Hacktics (acquired by EY) and Seeker (acquired by Synopsys); Co-Founder of Shine and CTO/Co-Founder of L1ght. Owns the tech pillar."],
  ["Dalit Krainer", "People & Growth", "Former Global VP HR at Amdocs, Chief HR Officer at Checkmarx, and Director of HR at Comverse. Owns the organization pillar — leadership, comp, and culture."],
  ["Noy Dan", "Studio Director", "Former Product Manager at WalkMe, Director of Investor Relations at iAngels, and Chief of Staff to the Deputy Ambassador at the Israeli Embassy in Washington, DC. Owns the GTM pillar."],
  ["Tomer Haviv", "Analyst", "Supports deal sourcing, diligence, and portfolio company analytics across the fund and the studio."],
  ["Danielle Zettel", "Director, Investor Relations & Communications", "Owns LP relationships, fund communications, and the partner narrative — keeping investors close and the Profound story sharp."],
  ["Matan Malka", "Assistant Controller", "Owns fund accounting, capital calls, and portfolio reporting. Keeps the financial backbone of the fund precise and audit-ready."],
  ["Paz Lazar", "Chief of Staff", "Connective tissue across the partners, studio, and portfolio. Runs operations, project execution, and the cadence that keeps the team in motion."],
] as const;

const agents = [
  ["Echo", "AI Analyst Agent", "Our autonomous research analyst. Echo continuously scans the Israeli ecosystem, drafts memos, runs market mapping, and surfaces founders worth meeting — 24/7 at the speed of the market."],
  ["Iris", "AI Personal Assistant", "Our team’s AI chief of staff. Iris handles inbox triage, scheduling, founder follow-ups, and meeting prep so the partners spend more time in the trenches with founders and less time on logistics."],
] as const;

const advisors = [
  ["Gary Ginsberg", "Co-Founder & Board Member at 25Madison. A seasoned communications and media leader with senior roles spanning the Clinton administration, Time Warner, News Corp, and Softbank, and a sitting board member across several public-interest organizations."],
  ["Josh Fidler", "Co-Chairman & COO at Chesapeake Realty Partners. NYU Law alum with a long track record in real estate development, investment, and community leadership across the Mid-Atlantic."],
  ["Vladimir Kitaygorodsky", "Founder & Managing Partner of Shibumi Capital. Previously at Bowdoin College and at Morgan Stanley and UBS, with two decades of experience leading private equity, public-market, and institutional allocation across global venture and growth strategies."],
] as const;

const principles = [
  ["01", "In the trenches", "Not advisors", "We sit alongside founders on the hardest problems — recruiting, product, GTM — for as long as it takes."],
  ["02", "One at a time", "Bespoke, not batched", "No cohorts, no demo days. Every Studio company gets a program tuned to its team and its stage."],
  ["03", "Global from day one", "Israel → US", "From day one we engineer for the U.S. market — through our network, NYC roadshow, and global partners."],
] as const;

export default function TeamPage() {
  return <main className="team-page">
    <header className="team-masthead">
      <nav className="team-nav section-shell" aria-label="Primary navigation">
        <Link href="/"><Image alt="ProFound" className="brand-logo brand-logo--header" height={30} priority src="/figma/profound-logo-dark.svg" width={120} /></Link>
        <div className="team-nav-links"><Link href="/">Home</Link><Link href="/#philosophy">Studio</Link><Link href="/#companies">Portfolio</Link><Link aria-current="page" href="/team">Team</Link></div>
        <a className="pitch-button team-pitch" href="mailto:hello@profound.vc">Pitch us</a>
      </nav>
      <div className="team-intro section-shell">
        <p className="eyebrow">Our team</p>
        <h1>A team of investors<br />and operators.</h1>
        <p>A group of builders, technologists, and ecosystem connectors who have walked the path our founders are walking — and stay close enough to walk it again with them.</p>
      </div>
    </header>

    <section className="team-roster section-shell" aria-labelledby="team-roster-title">
      <div className="team-section-heading"><p className="eyebrow">The team</p><h2 id="team-roster-title">Built to stay close<br />to the work.</h2><p>We combine venture experience, deep technical leadership, and institutional-grade operations to run a studio-driven fund built for early-stage Israel.</p></div>
      <figure className="team-portrait"><Image alt="The ProFound team together" height={1024} sizes="(max-width: 800px) 100vw, 90vw" src="/figma/founders/profound-team.png" width={1536} /></figure>
      <div className="team-grid">{team.map(([name, role, bio], index) => <article className="team-member" key={name}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p className="team-role">{role}</p><p>{bio}</p></article>)}</div>
    </section>

    <section className="team-agents" aria-labelledby="agents-title"><div className="section-shell"><div className="team-section-heading"><p className="eyebrow">AI teammates</p><h2 id="agents-title">Always in the<br />field.</h2></div><div className="agent-grid">{agents.map(([name, role, bio]) => <article key={name}><div><span className="agent-mark" aria-hidden="true">✦</span><p className="team-role">{role}</p><h3>{name}</h3></div><p>{bio}</p></article>)}</div></div></section>

    <section className="team-advisors section-shell" aria-labelledby="advisors-title"><div className="team-section-heading"><p className="eyebrow">Advisors</p><h2 id="advisors-title">The bench behind<br />our founders.</h2><p>A small, hand-picked group of operators and investors who lend their experience to our portfolio — on capital, real estate, public markets, and global growth.</p></div><div className="advisor-list">{advisors.map(([name, bio]) => <article key={name}><h3>{name}</h3><p>Advisor</p><p>{bio}</p></article>)}</div></section>

    <section className="team-principles" aria-labelledby="principles-title"><div className="section-shell"><div className="team-section-heading"><p className="eyebrow">How we work</p><h2 id="principles-title">What founders can<br />expect from us.</h2></div><div className="principle-list">{principles.map(([number, label, title, copy]) => <article key={number}><span>{number}</span><p>{label}</p><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <footer className="team-footer"><div className="section-shell"><p className="eyebrow">Want to join us?</p><h2>Build with us — as a founder,<br />or as a teammate.</h2><p>Drop us a line. We meet early.</p><a className="pitch-button" href="mailto:hello@profound.vc">hello@profound.vc</a><div className="team-footer-bottom"><Link href="/"><Image alt="ProFound" className="brand-logo brand-logo--footer" height={40} src="/figma/profound-logo.svg" width={160} /></Link><span>© {new Date().getFullYear()} ProFound Ventures</span></div></div></footer>
  </main>;
}
