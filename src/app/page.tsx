import Image from "next/image";
import { FounderPanels } from "./founder-panels";
import { MarqueeEyebrow } from "./marquee-eyebrow";
import { SectionTitle } from "./section-title";
import { StudioStories } from "./studio-stories";

const logos = Array.from({ length: 8 }, (_, i) => `/figma/portfolio-logo-${i + 1}.png`);
const marqueeLogos = [...logos, ...logos];
const shootingStars = [
  ["6%", "-74px", "5.8s", "-1.2s", ".72"],
  ["15%", "-128px", "7.4s", "-4.3s", ".5"],
  ["27%", "-96px", "6.6s", "-2.8s", ".82"],
  ["39%", "-148px", "8.1s", "-6.5s", ".58"],
  ["52%", "-82px", "5.5s", "-3.7s", ".68"],
  ["63%", "-172px", "7.8s", "-1.9s", ".46"],
  ["74%", "-112px", "6.2s", "-5.1s", ".78"],
  ["86%", "-154px", "8.5s", "-3.1s", ".52"],
  ["95%", "-90px", "6.9s", "-7.2s", ".64"],
] as const;

export default function Home() {
  return <main>
    <section className="hero" id="top">
      <nav className="hero-nav hero-nav--intro" aria-label="Primary navigation">
        <a className="hero-wordmark" href="#top"><span>Pro</span>found</a>
        <div className="hero-nav-links"><a href="#top">Home</a><a href="#philosophy">Studio</a><a href="#companies">Portfolio</a><a href="#philosophy">Team</a><a href="#philosophy">Resources</a></div>
        <a className="pitch-button hero-pitch" href="mailto:hello@profound.vc">Pitch us</a>
      </nav>
      <div className="hero-content"><h1 className="hero-title--intro"><span>magic happens when you</span><span>put the focus on <span className="hero-title-emphasis"><span>people</span></span></span></h1><p className="hero-copy--intro">We&apos;re an early-stage fund and studio supporting Israeli founders in software and AI, helping from idea to seed and beyond.</p><div className="hero-actions hero-actions--intro"><a className="pitch-button" href="mailto:hello@profound.vc">Pitch us</a><a href="#philosophy">How the Studio works</a></div></div>
      <div className="hero-showcase hero-showcase--intro">
        <div className="hero-feature-image"><Image alt="ProFound founders together" fill priority sizes="100vw" src="/figma/hero-background-2-editorial.png" /></div>
      </div>
      <div className="hero-logo-band">
        <div className="shooting-stars" aria-hidden="true">
          {shootingStars.map(([left, height, duration, delay, size], index) => <span key={index} style={{ "--star-left": left, "--star-height": height, "--star-duration": duration, "--star-delay": delay, "--star-size": size } as React.CSSProperties} />)}
        </div>
        <div className="hero-marquee" aria-label="Portfolio companies"><MarqueeEyebrow /><div className="hero-logo-track">{marqueeLogos.map((logo, i) => <Image key={`${logo}-${i}`} src={logo} alt="" width={190} height={46} />)}</div></div>
      </div>
      <div className="hero-dusk" aria-hidden="true" />
    </section>
    <FounderPanels />
    <section className="commitment-section" aria-labelledby="commitment-title">
      <div className="commitment-grid">
        <article className="commitment-card commitment-card--lead">
          <div>
            <span aria-hidden="true" className="commitment-icon">✦</span>
            <SectionTitle id="commitment-title">One founder at a time.</SectionTitle>
            <p>We keep the studio deliberately focused, so every company gets the attention, candor, and practical support it needs to move with conviction.</p>
          </div>
        </article>
        <div aria-hidden="true" className="commitment-image commitment-image--portrait" />
        <article className="commitment-card">
          <div><span aria-hidden="true" className="commitment-icon">◫</span><h3>Full-stack support</h3><p>No outsourcing. Our studio personnel write code, shape GTM strategy, and work through the hard decisions alongside you.</p></div>
        </article>
        <article className="commitment-card">
          <div><span aria-hidden="true" className="commitment-icon">↗</span><h3>Long-term partnership</h3><p>We remain your sounding board through the earliest iterations, the seed round, and the next chapter beyond it.</p></div>
        </article>
        <article className="commitment-card">
          <div><span aria-hidden="true" className="commitment-icon">◎</span><h3>Global from day one</h3><p>We connect exceptional Israeli technical talent to the customers, operators, and capital that help companies grow.</p></div>
        </article>
        <div aria-hidden="true" className="commitment-image commitment-image--wide" />
      </div>
    </section>
    <section className="studio-section" id="philosophy" aria-labelledby="studio-title">
      <div className="studio-section-intro section-shell">
        <p className="eyebrow">In the trenches</p>
        <SectionTitle id="studio-title">We don&apos;t pitch from the sidelines.<br className="studio-title-break" /> We build with you.</SectionTitle>
        <p>Operating as a studio means our work is tied directly to the outcomes that matter: clearer products, stronger teams, and real momentum with customers.</p>
      </div>
      <StudioStories />
    </section>
    <footer className="site-footer">
      <div className="footer-cta section-shell">
        <div><SectionTitle>Building something<br />profound?</SectionTitle><p>We back the unconventional. The first-time founder, the unexpected team, the idea that doesn&apos;t fit a thesis deck. If that&apos;s you — let&apos;s talk.</p><p>We meet founders early. Pre-product, pre-team, pre-anything is fine. Let us know what you&apos;re imagining.</p></div>
        <div className="footer-email"><p className="eyebrow">Email us directly</p><a href="mailto:hello@profound.vc?subject=I%20have%20an%20idea%20for%20ProFound">hello@profound.vc</a></div>
      </div>
      <div className="footer-lower">
        <div className="footer-grid section-shell">
          <div className="footer-brand"><a className="footer-wordmark" href="#top"><span>✳</span> ProFound</a><p>Early-stage fund &amp; co-creation studio for unconventional software and AI founders.</p></div>
          <nav aria-label="Fund links"><h3>Fund</h3><a href="#top">Home</a><a href="#philosophy">Studio</a><a href="#companies">Legacy Portfolio</a><a href="#philosophy">Resources</a></nav>
          <nav aria-label="Company links"><h3>Company</h3><a href="#philosophy">Team</a><a href="mailto:hello@profound.vc">Contact</a></nav>
          <address><h3>Office</h3><p>Arik Einstein 3 Floor 4,<br />Herzliya, Israel</p><a href="mailto:hello@profound.vc">hello@profound.vc</a></address>
          <p className="footer-copyright">© {new Date().getFullYear()} ProFound Ventures</p>
        </div>
      </div>
    </footer>
  </main>;
}
