import type { CSSProperties, ReactNode } from "react";
import styles from "./team-values.module.css";

function BrandGradient({ id }: { id: string }) {
  return <defs><linearGradient id={id} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#F6961C"/><stop offset=".4" stopColor="#F6631C"/><stop offset=".7" stopColor="#EE4711"/><stop offset="1" stopColor="#D91C07"/></linearGradient></defs>;
}

const at = (s: number) => ({ animationDelay: `${s}s` });
// Value-card parts pause until their card is on screen (team-experience toggles data-animating), hence `motion` on each.
const m = (...names: string[]) => [styles.motion, ...names].join(" ");
// 45° hatch strokes covering a box; clip them to the shape they shade.
const hatch = (x0: number, y0: number, x1: number, y1: number, step = 6) => {
  const h = y1 - y0;
  return Array.from({ length: Math.ceil((x1 - x0 + h) / step) + 1 }, (_, i) => `M${x0 - h + i * step} ${y0}l${h} ${h}`).join("");
};
const cross = (x: number, y: number) => `M${x - 5} ${y}h10M${x} ${y - 5}v10`;

// Each value card is a small construction sheet in the hero's style: a ruled grid that fades at the edges,
// faint guides inside the same fade, then the ink drawing and one hatched orange highlight on top.
function Sheet({ id, guides, children }: { id: string; guides?: ReactNode; children: ReactNode }) {
  const xs = [160, 126, 194, 71, 249, 16, 304], ys = [110, 76, 144, 21, 199];
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true">
      <BrandGradient id={`${id}-gold`} />
      <defs>
        <radialGradient id={`${id}-fade`}><stop offset=".4" stopColor="#fff" /><stop offset="1" stopColor="#000" /></radialGradient>
        <mask id={`${id}-edges`}><rect width="320" height="220" fill={`url(#${id}-fade)`} /></mask>
      </defs>
      <g mask={`url(#${id}-edges)`}>
        <g className={styles.heroGrid}>
          {xs.map(x => <path key={`x${x}`} className={m(styles.growY)} d={`M${x} 0V220`} style={{ ...at(Math.abs(x - 160) / 150), transformOrigin: "160px 110px" }} />)}
          {ys.map(y => <path key={`y${y}`} className={m(styles.growX)} d={`M0 ${y}H320`} style={{ ...at(.1 + Math.abs(y - 110) / 150), transformOrigin: "160px 110px" }} />)}
        </g>
        <g className={styles.construct}>{guides}</g>
      </g>
      {children}
    </svg>
  );
}

const STEP_W = 44, STEP_H = 28, STAIR_X = 70, GROUND = 180;
const treadTop = (k: number) => GROUND - STEP_H * (k + 1);

// 01: a staircase in elevation. Two markers (founder in ink, Profound in orange) hop up along drawn arcs.
function StairsArtwork() {
  const profile = `M${STAIR_X} ${GROUND}${[0, 1, 2, 3].map(k => `V${treadTop(k)}H${STAIR_X + STEP_W * (k + 1)}`).join("")}V${GROUND}Z`;
  const hops = [0, 1, 2].map(k => `M${92 + STEP_W * k} ${treadTop(k)}Q${114 + STEP_W * k} ${treadTop(k + 1) - 26} ${136 + STEP_W * k} ${treadTop(k + 1)}`);
  const summit = { x: STAIR_X + STEP_W * 3, y: treadTop(3) };
  const summitBox = `M${summit.x} ${summit.y}h${STEP_W}V${GROUND}H${summit.x}Z`;
  return (
    <Sheet id="v-stairs" guides={<>
      <path className={m(styles.draw)} d={`M30 ${GROUND}H290`} pathLength={1} style={at(.2)} />
      <path className={m(styles.draw, styles.ray)} d="M40 171.1L290 12" pathLength={1} style={at(.9)} />
    </>}>
      <clipPath id="v-stairs-summit"><path d={summitBox} /></clipPath>
      <path className={m(styles.fadeIn, styles.summitFill)} d={summitBox} fill="url(#v-stairs-gold)" style={{ animationDelay: "2s, 2.4s" }} />
      <path className={m(styles.draw, styles.hatch)} d={hatch(summit.x, summit.y, summit.x + STEP_W, GROUND)} clipPath="url(#v-stairs-summit)" pathLength={1} style={at(1.8)} />
      <path className={m(styles.draw, styles.ink)} d={profile} pathLength={1} style={at(.4)} />
      <path className={m(styles.draw, styles.lensLine)} d={summitBox} pathLength={1} style={at(1.6)} />
      {hops.map((d, k) => <path key={k} className={m(styles.draw, styles.hopPath)} d={d} pathLength={1} style={at(1.3 + k * .15)} />)}
      {[{ dx: -7, fill: "var(--ink)", lift: 14, delay: 2.4 }, { dx: 7, fill: "url(#v-stairs-gold)", lift: 9, delay: 2.62 }].map(({ dx, fill, lift, delay }) => (
        <g key={dx} className={m(styles.hopX)} style={at(delay)}>
          <g className={m(styles.hopY)} style={{ ...at(delay), "--lift": `${lift}px` } as CSSProperties}><circle cx={92 + dx} cy={treadTop(0) - 5} r="4.5" fill={fill} /></g>
        </g>
      ))}
    </Sheet>
  );
}

const TILE = 34, TILE_GAP = 10, TILES_X = 99, TILES_Y = 49;
const tilePath = (r: number, c: number) => `M${TILES_X + c * (TILE + TILE_GAP)} ${TILES_Y + r * (TILE + TILE_GAP)}h${TILE}v${TILE}h-${TILE}Z`;

// 02: a 3x3 batch in plan. A compass singles out the centre tile, which lifts out of its slot while the rest recede.
function BespokeArtwork() {
  const batch = [0, 1, 2].flatMap(r => [0, 1, 2].map(c => ({ r, c }))).filter(({ r, c }) => r !== 1 || c !== 1);
  const chosen = tilePath(1, 1);
  return (
    <Sheet id="v-tiles" guides={<>
      <path className={m(styles.draw)} d="M89 39L231 181" pathLength={1} style={at(.6)} />
      <path className={m(styles.draw)} d="M231 39L89 181" pathLength={1} style={at(.75)} />
    </>}>
      <clipPath id="v-tiles-chosen"><path d={chosen} /></clipPath>
      <path className={m(styles.ghost)} d={chosen} style={at(2.8)} />
      <g className={m(styles.recede)} style={at(2.8)}>
        {batch.map(({ r, c }) => <path key={`${r}${c}`} className={m(styles.draw, styles.tile)} d={tilePath(r, c)} pathLength={1} style={at(.3 + (r + c) * .08)} />)}
      </g>
      <circle className={m(styles.draw, styles.compassRing)} cx="160" cy="110" r="32" pathLength={1} style={at(1)} />
      <g className={m(styles.arm)} style={{ "--d": "1s", transformOrigin: "160px 110px" } as CSSProperties}><path d="M160 110H192" /><circle cx="192" cy="110" r="2.2" /></g>
      <g className={m(styles.float)} style={at(2.8)}>
        <path className={m(styles.fadeIn, styles.tileFill)} d={chosen} fill="url(#v-tiles-gold)" style={at(2)} />
        <path className={m(styles.draw, styles.hatch)} d={hatch(143, 93, 177, 127, 5)} clipPath="url(#v-tiles-chosen)" pathLength={1} style={at(1.8)} />
        <path className={m(styles.draw, styles.lensLine)} d={chosen} pathLength={1} style={at(1.6)} />
      </g>
    </Sheet>
  );
}

// 03: TLV to NYC. The route is an arc struck from a compass centre below the drawing; a traveler crosses it on a loop.
const TLV = [92, 150] as const, NYC = [232, 106] as const, ROUTE_R = 110, ROUTE_C = [186.5, 206.1] as const;
const ROUTE = `M${TLV[0]} ${TLV[1]}A${ROUTE_R} ${ROUTE_R} 0 0 1 ${NYC[0]} ${NYC[1]}`;

function GlobalArtwork() {
  const [cx, cy] = ROUTE_C;
  return (
    <Sheet id="v-global" guides={<>
      <circle className={m(styles.draw, styles.ray)} cx={cx} cy={cy} r={ROUTE_R} pathLength={1} style={at(.5)} />
      <path className={m(styles.draw)} d={`M${cx} ${cy}L${TLV[0]} ${TLV[1]}M${cx} ${cy}L${NYC[0]} ${NYC[1]}`} pathLength={1} style={at(.9)} />
      <path className={m(styles.pop)} d={cross(cx, cy)} style={{ ...at(.7), transformOrigin: `${cx}px ${cy}px` }} />
    </>}>
      <clipPath id="v-global-nyc"><circle cx={NYC[0]} cy={NYC[1]} r="20" /></clipPath>
      <circle className={m(styles.fadeIn, styles.tileFill)} cx={NYC[0]} cy={NYC[1]} r="20" fill="url(#v-global-gold)" style={at(2.1)} />
      <path className={m(styles.draw, styles.hatch)} d={hatch(212, 86, 252, 126, 5)} clipPath="url(#v-global-nyc)" pathLength={1} style={at(1.9)} />
      <circle className={m(styles.draw, styles.ink)} cx={TLV[0]} cy={TLV[1]} r="20" pathLength={1} style={at(.3)} />
      <circle className={m(styles.draw, styles.lensLine)} cx={NYC[0]} cy={NYC[1]} r="20" pathLength={1} style={at(1.7)} />
      <circle className={m(styles.pop)} cx={TLV[0]} cy={TLV[1]} r="3" fill="var(--ink)" style={{ ...at(.6), transformOrigin: `${TLV[0]}px ${TLV[1]}px` }} />
      <circle className={m(styles.pop)} cx={NYC[0]} cy={NYC[1]} r="3" fill="var(--orange)" style={{ ...at(1.9), transformOrigin: `${NYC[0]}px ${NYC[1]}px` }} />
      <path className={m(styles.draw, styles.lensLine, styles.routeLine)} d={ROUTE} pathLength={1} style={at(1.1)} />
      <g className={m(styles.sweep)} style={{ "--d": "1.1s", "--sweep": "83.7deg", transformOrigin: `${cx}px ${cy}px` } as CSSProperties}>
        <path d={`M${cx} ${cy}L${TLV[0]} ${TLV[1]}`} /><circle cx={TLV[0]} cy={TLV[1]} r="2.2" />
      </g>
      <circle className={m(styles.arrive)} cx={NYC[0]} cy={NYC[1]} r="20" style={at(2.8)} />
      <path className={m(styles.traveler)} d={ROUTE} pathLength={1} style={at(2.8)} />
      <g className={styles.heroLabels}>
        <text className={m(styles.rise)} x={TLV[0]} y={TLV[1] + 40} textAnchor="middle" style={at(1)}>Tel Aviv</text>
        <text className={m(styles.rise)} x={NYC[0]} y={NYC[1] + 40} textAnchor="middle" style={at(2.1)}>New York</text>
      </g>
    </Sheet>
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
