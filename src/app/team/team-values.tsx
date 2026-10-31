import type { CSSProperties, ReactNode } from "react";
import styles from "./team-values.module.css";

type Point = [number, number, number?];
type BoxFaces = { top: string; right: string; front: string };

function BrandGradient({ id }: { id: string }) {
  return <defs><linearGradient id={id} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#F6961C"/><stop offset=".4" stopColor="#F6631C"/><stop offset=".7" stopColor="#EE4711"/><stop offset="1" stopColor="#D91C07"/></linearGradient></defs>;
}

// 2:1 isometric projection shared by every artwork, so they read as one set with the hero.
function projector(ox: number, oy: number) {
  const iso = ([x, y, z = 0]: Point) => `${ox + x - y},${oy + (x + y) / 2 - z}`;
  const face = (...points: Point[]) => `M${points.map(iso).join("L")}Z`;
  const box = (x: number, y: number, w: number, d: number, h: number): BoxFaces => ({
    top: face([x, y, h], [x + w, y, h], [x + w, y + d, h], [x, y + d, h]),
    right: face([x + w, y, 0], [x + w, y + d, 0], [x + w, y + d, h], [x + w, y, h]),
    front: face([x, y + d, 0], [x + w, y + d, 0], [x + w, y + d, h], [x, y + d, h]),
  });
  return { face, box };
}

function Box({ faces }: { faces: BoxFaces }) {
  return <g><path className={styles.front} d={faces.front} /><path className={styles.right} d={faces.right} /><path className={styles.top} d={faces.top} /></g>;
}

const STAIRS_X = 88, STAIRS_Y = 154, STEP_DEPTH = 22, STEP_RISE = 18;

function StairsArtwork() {
  const { box } = projector(STAIRS_X, STAIRS_Y);
  const steps = [3, 2, 1, 0].map(i => ({ i, faces: box(0, -(i + 1) * STEP_DEPTH, 56, STEP_DEPTH, (i + 1) * STEP_RISE) }));
  // Markers start centred on step 1; the climb keyframes move them by one step vector (22, -29) at a time.
  const marker = (x: number) => [STAIRS_X + x + STEP_DEPTH / 2, STAIRS_Y + (x - STEP_DEPTH / 2) / 2 - STEP_RISE] as const;
  // Each marker hops on its own arc height and lags slightly, so the pair doesn't move in lockstep.
  const climbers = [{ x: 16, fill: "var(--ink)", lift: 10, delay: 0 }, { x: 38, fill: "url(#values-stairs)", lift: 6, delay: .22 }];
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-stairs" />
      {steps.map(({ i, faces }) => (
        <g className={`${styles.motion} ${styles.rise}`} key={i} style={{ animationDelay: `${i * 90}ms` }}>
          <Box faces={faces} />
          {i === 3 && <path className={`${styles.motion} ${styles.summit}`} d={faces.top} fill="url(#values-stairs)" />}
        </g>
      ))}
      {climbers.map(({ x, fill, lift, delay }) => {
        const [cx, cy] = marker(x);
        return (
          <g className={`${styles.motion} ${styles.climbX}`} key={x} style={{ "--delay": `${delay}s` } as CSSProperties}>
            <g className={`${styles.motion} ${styles.climbY}`} style={{ "--lift": "0px" } as CSSProperties}><ellipse className={styles.shadow} cx={cx} cy={cy} rx="6" ry="3" /></g>
            <g className={`${styles.motion} ${styles.climbY}`} style={{ "--lift": `${lift}px` } as CSSProperties}><circle cx={cx} cy={cy - 7} r="5" fill={fill} /></g>
          </g>
        );
      })}
    </svg>
  );
}

function BespokeArtwork() {
  const { box, face } = projector(160, 58);
  const tile = (r: number, c: number) => box(c * 40, r * 40, 30, 30, 5);
  // ponytail: no depth sort, resting tiles never overlap; the lifted one is drawn last.
  const batch = [0, 1, 2].flatMap(r => [0, 1, 2].map(c => ({ r, c }))).filter(({ r, c }) => r !== 1 || c !== 1);
  const chosen = tile(1, 1);
  // Entry wave runs from the front row (r + c = 4, bottom of the drawing) to the back.
  const riseDelay = (depth: number) => ({ animationDelay: `${(4 - depth) * 80}ms` });
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-bespoke" />
      <path className={`${styles.motion} ${styles.slot}`} d={face([40, 40], [70, 40], [70, 70], [40, 70])} />
      <g className={`${styles.motion} ${styles.recede}`}>{batch.map(({ r, c }) => <g className={`${styles.motion} ${styles.rise}`} key={`${r}-${c}`} style={riseDelay(r + c)}><Box faces={tile(r, c)} /></g>)}</g>
      <g className={`${styles.motion} ${styles.lift}`}>
        <g className={`${styles.motion} ${styles.rise}`} style={riseDelay(2)}><Box faces={chosen} /></g>
        <g className={`${styles.motion} ${styles.paint}`}><path className={styles.edge} d={chosen.front} fill="#C93F0A" /><path className={styles.edge} d={chosen.right} fill="#E2530F" /><path className={styles.edge} d={chosen.top} fill="url(#values-bespoke)" /></g>
      </g>
    </svg>
  );
}

function Platform({ cx, cy, children }: { cx: number; cy: number; children?: ReactNode }) {
  const rx = 30, ry = 15, h = 8;
  return <g><path className={styles.front} d={`M${cx - rx} ${cy - h}V${cy}A${rx} ${ry} 0 0 0 ${cx + rx} ${cy}V${cy - h}Z`} /><ellipse className={styles.top} cx={cx} cy={cy - h} rx={rx} ry={ry} />{children}</g>;
}

const ROUTE = "M96 124C104 48 214 30 224 92";

function GlobalArtwork() {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id="values-global" />
      <path className={styles.guide} d="M96 136 224 104" />
      <Platform cx={96} cy={136}><circle cx="96" cy="128" r="4" fill="var(--ink)" /></Platform>
      <Platform cx={224} cy={104}><ellipse className={`${styles.motion} ${styles.arrive}`} cx="224" cy="96" rx="22" ry="11" /><circle cx="224" cy="96" r="4" fill="url(#values-global)" /></Platform>
      <path className={styles.route} d={ROUTE} />
      <path className={`${styles.motion} ${styles.traveler}`} d={ROUTE} pathLength="1" />
      <g className={styles.locations}><text x="96" y="168" textAnchor="middle">TLV</text><text x="224" y="136" textAnchor="middle">NYC</text></g>
    </svg>
  );
}

// Team hero geometry: a vesica piscis. Each circle is centred on the other's rim, so they meet at P (top) and Q (bottom).
const A = [155, 150] as const, B = [245, 150] as const, R = 90, P = [200, 72.06] as const, Q = [200, 227.94] as const;
// ponytail: Fibonacci offsets give the grid its uneven, hand-ruled rhythm, dense at the centre and sparse at the edges.
const FIB = [0, 21, 55, 89, 144];
const gridX = [...new Set(FIB.flatMap(o => [200 - o, 200 + o]))];
const gridY = [...new Set(FIB.flatMap(o => [150 - o, 150 + o]))];
const LENS = `M${P[0]} ${P[1]}A${R} ${R} 0 0 1 ${Q[0]} ${Q[1]}A${R} ${R} 0 0 1 ${P[0]} ${P[1]}Z`;
const HATCH = Array.from({ length: 26 }, (_, i) => `M${60 + i * 7} 72L${216 + i * 7} 228`).join("");
// The sides of the two equilateral triangles, extended past the drawing like ruled construction lines.
const RAYS = [[65, 305.8, 290, -83.7], [335, 305.8, 110, -83.7], [65, -5.8, 290, 383.7], [335, -5.8, 110, 383.7]];
const RHOMBUS = [[A, P], [P, B], [B, Q], [Q, A]];

// Team hero: investors and operators drawn as a compass construction on a ruled grid; their intersection is the highlight.
// Phases overlap on purpose: the grid is still growing while the compass sweeps, rays keep ruling while the circles close.
export function TeamHeroArtwork() {
  const at = (s: number) => ({ animationDelay: `${s}s` });
  const compass = (c: readonly [number, number], d: number, flip: boolean) => (
    <>
      <circle className={`${styles.draw} ${styles.circle}`} cx={c[0]} cy={c[1]} r={R} pathLength={1} transform={flip ? `rotate(180 ${c[0]} ${c[1]})` : undefined} style={at(d)} />
      <g className={styles.arm} style={{ "--d": `${d}s`, transformOrigin: `${c[0]}px ${c[1]}px` } as CSSProperties}>
        <path d={`M${c[0]} ${c[1]}H${c[0] + (flip ? -R : R)}`} />
        <circle cx={c[0] + (flip ? -R : R)} cy={c[1]} r="2.2" />
      </g>
      <path className={`${styles.pop} ${styles.construct}`} d={`M${c[0] - 5} ${c[1]}H${c[0] + 5}M${c[0]} ${c[1] - 5}V${c[1] + 5}`} style={{ ...at(d - .25), transformOrigin: `${c[0]}px ${c[1]}px` }} />
    </>
  );
  return (
    <div className={styles.heroArt}>
      <svg viewBox="0 0 400 300" role="img" aria-label="Two circles, investors and operators, drawn on a grid; their intersection is highlighted">
        <defs>
          <BrandGradient id="hero-gold" />
          <radialGradient id="hero-fade"><stop offset=".45" stopColor="#fff" /><stop offset="1" stopColor="#000" /></radialGradient>
          <mask id="hero-edges"><rect width="400" height="300" fill="url(#hero-fade)" /></mask>
          <clipPath id="hero-lens"><path d={LENS} /></clipPath>
        </defs>
        <g mask="url(#hero-edges)">
          <g className={styles.heroGrid}>
            {gridX.map(x => <path key={`x${x}`} className={styles.growY} d={`M${x} 0V300`} style={at(Math.abs(x - 200) / 140)} />)}
            {gridY.map(y => <path key={`y${y}`} className={styles.growX} d={`M0 ${y}H400`} style={at(.15 + Math.abs(y - 150) / 140)} />)}
          </g>
          <g className={styles.construct}>
            <path className={styles.growX} d="M0 150H400" style={at(.2)} />
            <path className={styles.growY} d="M200 0V300" style={at(.35)} />
            {RAYS.map(([x1, y1, x2, y2], i) => <path key={i} className={`${styles.draw} ${styles.ray}`} d={`M${x1} ${y1}L${x2} ${y2}`} pathLength={1} style={at(1.1 + i * .18)} />)}
            <circle className={`${styles.draw} ${styles.ray} ${styles.outer}`} cx="200" cy="150" r="170" pathLength={1} style={at(.5)} />
          </g>
        </g>
        {compass(A, .8, false)}
        {compass(B, 1.25, true)}
        <g className={styles.construct}>
          {RHOMBUS.map(([[x1, y1], [x2, y2]], i) => <path key={i} className={`${styles.draw} ${styles.rhomb}`} d={`M${x1} ${y1}L${x2} ${y2}`} pathLength={1} style={at(2.2 + i * .12)} />)}
        </g>
        <path className={`${styles.fadeIn} ${styles.lensFill}`} d={LENS} fill="url(#hero-gold)" style={at(3.1)} />
        <path className={`${styles.draw} ${styles.hatch}`} d={HATCH} clipPath="url(#hero-lens)" pathLength={1} style={at(2.8)} />
        <path className={`${styles.draw} ${styles.lensLine}`} d={LENS} pathLength={1} style={at(2.6)} />
        {[P, Q].map(([x, y], i) => (
          <g key={y}>
            <circle className={styles.ripple} cx={x} cy={y} r="3" style={{ animationDelay: `${3.6 + i * .3}s`, transformOrigin: `${x}px ${y}px` }} />
            <circle className={`${styles.pop} ${styles.node}`} cx={x} cy={y} r="3" style={{ ...at(2.5 + i * .15), transformOrigin: `${x}px ${y}px` }} />
          </g>
        ))}
        <g className={styles.heroLabels}>
          <text className={styles.rise} x="104" y="143" textAnchor="middle" style={at(2.2)}>Investors</text>
          <text className={styles.rise} x="296" y="143" textAnchor="middle" style={at(2.65)}>Operators</text>
        </g>
      </svg>
    </div>
  );
}

const values = [
  { label: "01 / In the trenches", title: "Not advisors", description: "We sit alongside founders on the hardest problems, from recruiting to product and GTM, for as long as it takes.", Artwork: StairsArtwork },
  { label: "02 / One at a time", title: "Bespoke, not batched", description: "No cohorts, no demo days. Every Studio company gets a program tuned to its team and its stage.", Artwork: BespokeArtwork },
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
