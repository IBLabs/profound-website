import { HomeIntroduction } from "./home-introduction";
import { HomeHero } from "./home-hero";
import { CommitmentSection } from "./commitment-section";
import { ForFounders } from "./for-founders";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";
import { StudioProgram } from "./studio-program";
import { PromiseSection } from "./promise-section";

export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />

      <HomeIntroduction />

      <ForFounders />

      <CommitmentSection />

      <section className="studio-section" id="philosophy" aria-labelledby="studio-title">
        <ScrollReveal className="studio-section-intro section-shell" yOffset={20}>
          <p className="eyebrow">The studio program</p>
          <SectionTitle id="studio-title">
            From kickoff to USA,<br className="studio-title-break" /> a path tuned to{" "}
            <span className="hero-title-emphasis">
              <em>you.</em>
            </span>
          </SectionTitle>
          <p className="studio-section-copy">
            Every Studio company runs the same backbone — kickoff, four pillars,
            monthly governance, USA Roadshow — but every milestone is shaped to fit
            your stage, your sector, and your team.
          </p>
        </ScrollReveal>
        <StudioProgram />
      </section>

      <PromiseSection />

    </main>
  );
}
