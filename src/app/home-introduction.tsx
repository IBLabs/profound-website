import Image from "next/image";
import { InteractiveStatement } from "./interactive-statement";
import { ScrollReveal } from "./scroll-reveal";
import styles from "./home-introduction.module.css";

const companies = [
  { name: "Marquee", logo: "marquee.png" },
  { name: "Superlegal", logo: "superlegal.png" },
  { name: "Limy", logo: "limy.png" },
  { name: "Modelyo", logo: "modelyo.webp" },
  { name: "Perfect", logo: "perfect.png" },
  { name: "Playo", logo: "playo.png" },
  { name: "Conntour", logo: "conntour.png" },
  { name: "Vinesight", logo: "vinesight.png" },
  { name: "Unibeam", logo: "unibeam.png" },
  { name: "Askit", logo: "askit.png" },
  { name: "Astrid", logo: "astrid.png" },
  { name: "Ludeo", logo: "ludeo.png" },
  { name: "Onebeat", logo: "onebeat.png" },
];

function HoverText({ text }: { text: string }) {
  return text.split(" ").map((word, index) => (
    <span key={index}>
      {index > 0 && " "}
      <span className={styles.hoverWord}>
        {Array.from(word).map((letter, letterIndex) => (
          <span className={styles.hoverLetter} data-hover-unit key={letterIndex}>{letter}</span>
        ))}
      </span>
    </span>
  ));
}

function FounderPortraits({ people, delay = 0 }: { people: string[]; delay?: number }) {
  return (
    <span className={styles.portraits} data-hover-unit aria-hidden="true">
      {people.map((person, index) => (
        <span className={styles.portrait} key={person} style={{ animationDelay: `${index * 5 - 20 + delay}s` }}>
          <Image src={`/team/${person}`} alt="" fill sizes="80px" />
        </span>
      ))}
    </span>
  );
}

export function HomeIntroduction() {
  return (
    <div className={styles.sections}>
      <section id="about" aria-label="About ProFound" className={styles.intro}>
        <ScrollReveal className={styles.about}>
          <div className={styles.photo}>
            <Image src="/studio/studio-03.jpeg" alt="A founders panel at the ProFound studio" fill sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
          <div className={styles.panel}>
            <p>We&apos;re an early-stage fund and studio for Israeli founders in software and AI, <em>from idea to seed and beyond.</em></p>
            <dl className={styles.facts}>
              <div><dt>Model</dt><dd>Studio + Fund</dd></div>
              <div><dt>Stage</dt><dd>Pre-seed → Seed</dd></div>
            </dl>
          </div>
        </ScrollReveal>
      </section>
      <section className={styles.portfolio} aria-labelledby="founder-statement">
        <ScrollReveal className={styles.statement}>
          <InteractiveStatement>
            <HoverText text="Profound founders" /> <FounderPortraits people={["danielle.jpg", "lee.jpg", "paz.png", "noy.png"]} /> <HoverText text="build" /> <em className={styles.noBreak}><HoverText text="category-defining" /></em> <HoverText text="software" /> <FounderPortraits people={["tomer.jpeg", "matan.jpg", "ron.jpg", "Adi.jpeg"]} delay={1.25} /> <HoverText text="and AI companies." />
          </InteractiveStatement>
        </ScrollReveal>
        <div className={styles.strip}>
          <div className={styles.marquee} aria-hidden="true">
            <div className={styles.track}>
              {[0, 1].map(copy => (
                <div className={styles.companySet} key={copy}>
                  {companies.map(company => (
                    <span className={styles.companyLogo} key={company.name}>
                      <Image src={`/logos/portfolio/${company.logo}`} alt="" fill sizes="160px" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="sr-only">Portfolio: {companies.map(company => company.name).join(", ")}</p>
      </section>
    </div>
  );
}
