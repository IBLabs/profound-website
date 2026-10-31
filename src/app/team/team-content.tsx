import { TeamHeroArtwork, TeamValues } from "./team-values";

/* Team layout and artwork matched to https://profound-preview.vercel.app/team.html. */
export function TeamContent() {
  return <>




<main>
  <section className="wrap pg-hero stacked">
    <div className="rv">
      <TeamHeroArtwork />
      <div className="kicker">Our team</div>
      <h1>A team of investors <em className="gi">and operators.</em></h1>
      <p className="lead">A group of builders, technologists, and ecosystem connectors who have walked the path our founders are walking, and stay close enough to walk it again with them.</p>
      <p className="lead">We combine venture experience, deep technical leadership, and institutional-grade operations to run a <em>studio-driven fund</em> built for early-stage Israel.</p>
    </div>
  </section>

  <section className="wrap sec" id="people">
    <div className="people">
      <article className="person rv"><div className="ph"><img src="/team/Adi.jpeg" alt="Adi Gozes" loading="lazy" /></div><h3>Adi Gozes</h3><p className="role">Managing Partner</p><p className="bio">Previously Partner at Entrée Capital, with board experience across Rivery, Cypago and Confetti; investment team at Samsung Catalyst Fund; Director of Products at Vision Map (acquired by Rafael). Served as an officer in 8200.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/lee.jpg" alt="Lee Moser" loading="lazy" /></div><h3>Lee Moser</h3><p className="role">Founding Partner</p><p className="bio">A background spanning government, business development and venture. Previously Head of Global Relations at iAngels, connecting Israeli founders to international markets.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/ron.jpg" alt="Ron Porat" loading="lazy" /></div><h3>Ron Porat</h3><p className="role">CTO</p><p className="bio">Serial entrepreneur with multiple exits: Founder &amp; CEO of Hacktics (acquired by EY) and Seeker (acquired by Synopsys), Co-Founder of Shine, CTO and Co-Founder of L1ght. Owns the tech pillar.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/reference/dalit.webp" alt="Dalit Krainer" loading="lazy" /></div><h3>Dalit Krainer</h3><p className="role">People &amp; Growth</p><p className="bio">Former Global VP HR at Amdocs, Chief HR Officer at Checkmarx and Director of HR at Comverse. Owns the organization pillar: leadership, comp and culture.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/reference/noy.webp" alt="Noy Dan" loading="lazy" /></div><h3>Noy Dan</h3><p className="role">Studio Director</p><p className="bio">Former Product Manager at WalkMe, Director of Investor Relations at iAngels, and Chief of Staff to the Deputy Ambassador at the Israeli Embassy in Washington, DC. Owns the GTM pillar.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/danielle.jpg" alt="Danielle Zettel" loading="lazy" /></div><h3>Danielle Zettel</h3><p className="role">Investor Relations &amp; Communications</p><p className="bio">Owns LP relationships, fund communications and the partner narrative, keeping investors close and the Profound story sharp.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/paz.png" alt="Paz Lazar" loading="lazy" /></div><h3>Paz Lazar</h3><p className="role">Chief of Staff</p><p className="bio">Connective tissue across the partners, studio and portfolio. Runs operations, project execution and the cadence that keeps the team in motion.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/reference/tomer.webp" alt="Tomer Haviv" loading="lazy" /></div><h3>Tomer Haviv</h3><p className="role">Analyst</p><p className="bio">Supports deal sourcing, diligence and portfolio company analytics across the fund and the studio.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/matan.jpg" alt="Matan Malka" loading="lazy" /></div><h3>Matan Malka</h3><p className="role">Assistant Controller</p><p className="bio">Owns fund accounting, capital calls and portfolio reporting. Keeps the financial backbone of the fund precise and audit-ready.</p></article>
    </div>


  </section>

  <div className="rule" aria-hidden="true"><i></i><i></i></div>

  <section className="wrap sec" id="advisors">
    <div className="sh rv">
      <div><div className="kicker">Advisors</div><h2>The bench <em>behind our founders.</em></h2></div>
      <p>A small, hand-picked group of operators and investors who lend their experience to our portfolio: on capital, real estate, public markets and global growth.</p>
    </div>
    <div className="people p3">
      <article className="person rv"><div className="ph"><img src="/team/gary.jpg" alt="Gary Ginsberg" loading="lazy" /></div><h3>Gary Ginsberg</h3><p className="role">Advisor</p><p className="bio">Co-Founder &amp; Board Member at 25Madison. A communications and media leader with senior roles spanning the Clinton administration, Time Warner, News Corp and Softbank.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/josh.jpeg" alt="Josh Fidler" loading="lazy" /></div><h3>Josh Fidler</h3><p className="role">Advisor</p><p className="bio">Co-Chairman &amp; COO at Chesapeake Realty Partners. NYU Law alum with a long track record in real estate development, investment and community leadership.</p></article>
      <article className="person rv"><div className="ph"><img src="/team/reference/vladimir.webp" alt="Vladimir Kitaygorodsky" loading="lazy" /></div><h3>Vladimir Kitaygorodsky</h3><p className="role">Advisor</p><p className="bio">Founder &amp; Managing Partner of Shibumi Capital. Previously at Bowdoin College, Morgan Stanley and UBS, with two decades across private equity, public markets and global venture.</p></article>
    </div>
  </section>

  <section className="wrap sec" id="how">
    <div className="sh one rv">
      <div><div className="kicker">How we work</div><h2>What founders can <em>expect from us.</em></h2></div>
    </div>
    <TeamValues />
  </section>
</main>


  </>;
}
