const philosophy = [
  { number: "01", title: "Conviction over consensus", copy: "We form a point of view early, then do the work to make it useful." },
  { number: "02", title: "Founders first", copy: "The best companies are built with uncommon clarity and a long horizon." },
  { number: "03", title: "Ambition, made practical", copy: "We bring patient capital, sharp questions, and a hands-on operating network." },
  { number: "04", title: "Built to endure", copy: "We back teams creating the defining businesses of their generation." },
];

const companies = ["Arc", "Evergreen", "Frame", "Northstar", "Port", "Tandem"];

export default function Home() {
  return <main>
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="ProFound home">ProFound<span>•</span></a>
      <div className="nav-links"><a href="#philosophy">Philosophy</a><a href="#companies">Companies</a><a href="mailto:hello@profound.vc">Contact</a></div>
    </nav>
    <section className="hero section-shell" id="top">
      <p className="eyebrow">Venture capital for enduring companies</p>
      <h1>Backing the builders who move the world forward.</h1>
      <div className="hero-bottom"><p>ProFound partners with exceptional founders from the first belief to the lasting company.</p><a className="arrow-link" href="#philosophy">Our approach <span aria-hidden="true">↘</span></a></div>
    </section>
    <section className="logo-section" id="companies" aria-labelledby="companies-title"><div className="section-shell"><p className="eyebrow" id="companies-title">Selected companies</p><div className="company-grid">{companies.map((company) => <span key={company}>{company}</span>)}</div></div></section>
    <section className="philosophy section-shell" id="philosophy" aria-labelledby="philosophy-title">
      <div className="section-intro"><p className="eyebrow">Our philosophy</p><h2 id="philosophy-title">The earliest stage deserves the deepest partnership.</h2></div>
      <div className="principles">{philosophy.map((item) => <article className="principle" key={item.number}><span className="principle-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div>
    </section>
    <section className="statement-section" aria-labelledby="statement-title"><div className="section-shell statement-content"><p className="eyebrow">A place for what’s next</p><h2 id="statement-title">A fuller story is on its way.</h2><p>This space will introduce the people, ideas, and companies shaping ProFound’s point of view.</p></div></section>
    <footer className="site-footer section-shell"><a className="wordmark" href="#top">ProFound<span>•</span></a><p>© {new Date().getFullYear()} ProFound. Built for the long term.</p><a href="mailto:hello@profound.vc">hello@profound.vc</a></footer>
  </main>;
}
