import styles from "./team-values.module.css";

function BrandGradient({ id }: { id: string }) {
  return <defs><linearGradient id={id} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#F6961C"/><stop offset=".4" stopColor="#F6631C"/><stop offset=".7" stopColor="#EE4711"/><stop offset="1" stopColor="#D91C07"/></linearGradient></defs>;
}

function FlagArtwork() {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-flag" />
      <path className={styles.guide} d="M54 174h212" />
      <ellipse className={styles.line} cx="160" cy="174" rx="68" ry="22" />
      <ellipse className={`${styles.guide} ${styles.motion} ${styles.orbit}`} cx="160" cy="174" rx="91" ry="33" />
      <path className={styles.line} d="M160 174V45" />
      <path className={`${styles.motion} ${styles.flag}`} d="M162 46 209 63 162 80Z" fill="url(#values-flag)" />
      <circle cx="160" cy="174" r="5" fill="var(--ink)" />
      <circle className={`${styles.motion} ${styles.anchorPulse}`} cx="160" cy="174" r="10" fill="none" stroke="var(--orange)" />
    </svg>
  );
}

function FocusArtwork() {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-focus" />
      <g className={styles.secondary}>
        <rect x="48" y="88" width="51" height="74" rx="5" />
        <path d="M60 139h27m-27 10h18" />
        <rect x="221" y="88" width="51" height="74" rx="5" />
        <path d="M233 139h27m-27 10h18" />
      </g>
      <path className={styles.guide} d="M99 125h23m76 0h23" />
      <rect className={styles.focusCard} x="122" y="57" width="76" height="105" rx="6" />
      <circle className={`${styles.motion} ${styles.focusPulse}`} cx="160" cy="96" r="23" fill="url(#values-focus)" opacity=".1" />
      <circle cx="160" cy="96" r="11" fill="url(#values-focus)" />
      <path className={styles.line} d="M144 127h32m-24 13h16" opacity=".4" />
      <path className={`${styles.motion} ${styles.focusBrackets}`} d="M118 72V53h19m46 0h19v19m0 75v19h-19m-46 0h-19v-19" />
      <ellipse className={styles.guide} cx="160" cy="190" rx="44" ry="5" />
    </svg>
  );
}

function GlobalArtwork() {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-global" />
      <g className={styles.line}>
        <circle cx="160" cy="109" r="65" />
        <ellipse cx="160" cy="109" rx="26" ry="65" opacity=".35" />
        <ellipse cx="160" cy="109" rx="65" ry="15" opacity=".35" />
      </g>
      <path className={styles.route} d="M108 82C100 13 234 20 218 116" />
      <path className={`${styles.motion} ${styles.traveler}`} d="M108 82C100 13 234 20 218 116" pathLength="1" />
      <circle cx="108" cy="82" r="4" fill="var(--ink)" />
      <circle cx="218" cy="116" r="4" fill="url(#values-global)" />
      <g className={styles.locations}><text x="108" y="204" textAnchor="middle">TLV</text><text x="218" y="204" textAnchor="middle">NYC</text></g>
      <path className={styles.guide} d="M127 200h72" />
    </svg>
  );
}

const values = [
  { label: "01 / In the trenches", title: "Not advisors", description: "We sit alongside founders on the hardest problems, from recruiting to product and GTM, for as long as it takes.", Artwork: FlagArtwork },
  { label: "02 / One at a time", title: "Bespoke, not batched", description: "No cohorts, no demo days. Every Studio company gets a program tuned to its team and its stage.", Artwork: FocusArtwork },
  { label: "03 / Global from day one", title: "Israel → US", description: "From day one we engineer for the U.S. market, through our network, the NYC roadshow and global partners.", Artwork: GlobalArtwork },
];

export function TeamValues() {
  return (
    <div className={styles.grid}>
      {values.map(({ label, title, description, Artwork }) => (
        <article className={`rv ${styles.card}`} key={title}>
          <div className={styles.stage} data-value-art><Artwork /></div>
          <div className={styles.copy}><small>{label}</small><h3>{title}</h3><p>{description}</p></div>
        </article>
      ))}
    </div>
  );
}
