import Link from "next/link";
import { BrandLockup } from "./brand-lockup";
import { CopyEmail } from "./copy-email";
import styles from "./site-footer.module.css";

const email = "hello@profound.vc";

export function SiteFooter() {
  return (
    <div className={styles.root}>
      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Building something <em>profound?</em></h2>
        <p>We meet founders early. Pre-product, pre-team, pre-anything is fine.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${email}?subject=Pitch%3A%20`}>
            Pitch us your idea
            <i aria-hidden="true"><svg viewBox="0 0 359.83 359.83"><path fill="currentColor" d="M359.83 55.06v249.71c0 30.41-24.65 55.06-55.06 55.06h-64.53L318.88 62.49 120.66 359.83h-65.6C24.65 359.83 0 335.18 0 304.77v-65.6L297.34 40.95 0 119.58V55.06C0 24.65 24.65 0 55.06 0h249.71c30.41 0 55.06 24.65 55.06 55.06Z"/></svg></i>
          </a>
          <CopyEmail email={email} className={styles.copy} />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div className={styles.columns}>
            <p className={styles.tagline}>The studio-driven seed fund building alongside <em>Israel&apos;s next generation of founders.</em></p>
            <nav aria-label="Fund links"><h3>Fund</h3><Link href="/">Home</Link><Link href="/studio">Studio</Link><Link href="/portfolio">Legacy Portfolio</Link><Link href="/#philosophy">Resources</Link></nav>
            <nav aria-label="Company links"><h3>Company</h3><Link href="/team">Team</Link><a href="#contact">Contact</a></nav>
            <address><h3>Office</h3><p>Arik Einstein 3, Floor 4<br/>Herzliya, Israel</p><a className={styles.email} href={`mailto:${email}`}>{email}</a></address>
          </div>
        </div>
        <div className={styles.lockup}>
          <BrandLockup className={styles.logo} label="Profound Ventures" />
          <BrandLockup className={styles.wordmark} wordOnly />
        </div>
        <div className={styles.shell}>
          <div className={styles.base}><span>© {new Date().getFullYear()} Profound Ventures</span><span>Pre-seed · Seed · Studio + Fund</span></div>
        </div>
      </footer>
    </div>
  );
}
