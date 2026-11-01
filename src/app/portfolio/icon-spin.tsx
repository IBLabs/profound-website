"use client";

import { useEffect, useRef } from "react";
import styles from "./portfolio.module.css";

// The Profound icon as a white block with an orange outline, turning slowly in 3D (ported from the reference illus.js).
// Every frame the side walls are rotated, culled and drawn back to front; the face is drawn last.

const SCALE = .36, DEPTH = 44, TILT = .36, PERIOD = 14, INK = "#FF4C00";

// The icon outline as a polygon in icon units: straight edges exact, rounded corners sampled, sharp corners remembered.
const OUTLINE = (() => {
  const P: [number, number][] = [], sharp = new Set<number>();
  const pt = (u: number, v: number, isSharp = false) => { if (isSharp) sharp.add(P.length); P.push([u, v]); };
  const curve = (p0: number[], p1: number[], p2: number[], p3: number[]) => {
    for (let i = 1; i <= 12; i++) {
      const t = i / 12, a = (1 - t) ** 3, b = 3 * (1 - t) ** 2 * t, c = 3 * (1 - t) * t * t, d = t ** 3;
      P.push([a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]]);
    }
  };
  pt(359.83, 55.06); pt(359.83, 304.77);
  curve([359.83, 304.77], [359.83, 335.18], [335.18, 359.83], [304.77, 359.83]);
  pt(240.24, 359.83, true); pt(318.88, 62.49, true); pt(120.66, 359.83, true); pt(55.06, 359.83);
  curve([55.06, 359.83], [24.65, 359.83], [0, 335.18], [0, 304.77]);
  pt(0, 239.17, true); pt(297.34, 40.95, true); pt(0, 119.58, true); pt(0, 55.06);
  curve([0, 55.06], [0, 24.65], [24.65, 0], [55.06, 0]);
  pt(304.77, 0);
  curve([304.77, 0], [335.18, 0], [359.83, 24.65], [359.83, 55.06]);
  P.pop(); // the last curve point is the start again
  return { P, sharp };
})();

function frame(th: number, tilt = TILT) {
  const { P, sharp } = OUTLINE, n = P.length, H = DEPTH / 2;
  const base = P.map(([u, v]) => [(u - 179.9) * SCALE, -(v - 179.9) * SCALE]);
  let area = 0;
  for (let i = 0; i < n; i++) { const a = P[i], b = P[(i + 1) % n]; area += a[0] * b[1] - b[0] * a[1]; }
  const sg = area > 0 ? 1 : -1;
  const normals = P.map((a, i) => { const b = P[(i + 1) % n], du = b[0] - a[0], dv = b[1] - a[1], l = Math.hypot(du, dv) || 1; return [sg * dv / l, sg * du / l, 0]; });
  const cy = Math.cos(th), sy = Math.sin(th), cx = Math.cos(tilt), sx = Math.sin(tilt);
  const rot = ([x, y, z]: number[]) => { const x1 = x * cy + z * sy, z1 = -x * sy + z * cy; return [x1, y * cx - z1 * sx, y * sx + z1 * cx]; };
  const F = base.map(([x, y]) => rot([x, y, H])), B = base.map(([x, y]) => rot([x, y, -H]));
  const scr = (p: number[]) => `${p[0].toFixed(1)},${(-p[1]).toFixed(1)}`;
  const vis = normals.map(rot).map(v => v[2] > 1e-4);
  const corner = (i: number) => sharp.has(i) || vis[(i - 1 + n) % n] !== vis[i];
  const faces: [number, string][] = [];
  for (let i = 0; i < n; i++) {
    if (!vis[i]) continue;
    const j = (i + 1) % n;
    let edges = `M${scr(F[i])}L${scr(F[j])}M${scr(B[i])}L${scr(B[j])}`;
    if (corner(i)) edges += `M${scr(F[i])}L${scr(B[i])}`;
    if (corner(j)) edges += `M${scr(F[j])}L${scr(B[j])}`;
    faces.push([(F[i][2] + F[j][2] + B[i][2] + B[j][2]) / 4, `<polygon points="${scr(F[i])} ${scr(F[j])} ${scr(B[j])} ${scr(B[i])}" fill="#fff" stroke="#fff" stroke-width=".7"/><path d="${edges}" fill="none"/>`]);
  }
  faces.sort((a, b) => a[0] - b[0]);
  const cap = rot([0, 0, 1])[2] > 0 ? F : B;
  return faces.map(f => f[1]).join("") + `<polygon class="cap" points="${cap.map(scr).join(" ")}" fill="#fff"/>`;
}

const GRID = [-126, -84, -42, 0, 42, 84, 126];

export function IconSpin() {
  const svgRef = useRef<SVGSVGElement>(null), blockRef = useRef<SVGGElement>(null);
  useEffect(() => {
    const svg = svgRef.current, block = blockRef.current;
    if (!svg || !block) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // angle is the turntable yaw. It advances with the idle spin plus any fling velocity left over from a drag.
    let angle = .6, vel = 0, dragging = false, lastX = 0, lastT = 0;
    const aim = { x: 0, y: 0 }, lean = { x: 0, y: 0 };
    const draw = () => { block.innerHTML = frame(angle + lean.x * .45, TILT - lean.y * .3); };
    draw();

    // Grab and turn: horizontal drag spins the block; letting go flings it, and the fling eases back into the idle spin.
    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastT = performance.now(); vel = 0; svg.setPointerCapture(e.pointerId); };
    const onUp = () => { dragging = false; };
    const onMove = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect(), clamp = (v: number) => Math.max(-1, Math.min(1, v));
      if (dragging) {
        const now = performance.now(), d = (e.clientX - lastX) * (5 / r.width);
        angle += d; vel = d / Math.max((now - lastT) / 1000, .016);
        lastX = e.clientX; lastT = now;
        if (reduce) draw();
        return;
      }
      // Otherwise the cursor leans the block toward it (extra yaw and tilt), eased so the spin carries on underneath.
      aim.x = clamp((e.clientX - (r.left + r.width / 2)) / (r.width * 1.5));
      aim.y = clamp((e.clientY - (r.top + r.height / 2)) / (r.height * 1.5));
    };
    svg.addEventListener("pointerdown", onDown);
    svg.addEventListener("pointerup", onUp);
    svg.addEventListener("pointercancel", onUp);
    window.addEventListener("pointermove", onMove);
    const unbind = () => {
      svg.removeEventListener("pointerdown", onDown); svg.removeEventListener("pointerup", onUp); svg.removeEventListener("pointercancel", onUp);
      window.removeEventListener("pointermove", onMove);
    };
    if (reduce) return unbind;

    let run = false, last = 0, raf = 0;
    const loop = (now: number) => {
      if (!run) return;
      const dt = Math.min((now - last) / 1000, .05); last = now;
      if (!dragging) { angle += (2 * Math.PI / PERIOD + vel) * dt; vel *= Math.pow(.04, dt); }
      lean.x += (aim.x - lean.x) * .06; lean.y += (aim.y - lean.y) * .06;
      draw();
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(es => es.forEach(e => {
      const was = run; run = e.isIntersecting;
      if (run && !was) { last = performance.now(); raf = requestAnimationFrame(loop); }
    }));
    io.observe(svg);
    return () => { io.disconnect(); cancelAnimationFrame(raf); unbind(); };
  }, []);
  return (
    <svg ref={svgRef} className={styles.scene} viewBox="-140 -128 280 256" role="img" aria-label="The Profound icon as a white block with an orange outline, turning slowly on a ruled grid; drag to turn it">
      <defs>
        <radialGradient id="spin-fade"><stop offset=".35" stopColor="#fff" /><stop offset="1" stopColor="#000" /></radialGradient>
        <mask id="spin-edges"><rect x="-140" y="-128" width="280" height="256" fill="url(#spin-fade)" /></mask>
      </defs>
      {/* Our construction-sheet backdrop: a ruled grid, a compass ring and the centre cross, faded at the edges. */}
      <g mask="url(#spin-edges)" fill="none" stroke="#181816" strokeOpacity=".14">
        {GRID.map(v => <path key={v} d={`M${v} -128V128M-140 ${v}H140`} />)}
        <circle r="118" strokeOpacity=".45" strokeDasharray="3 5" />
        <path d="M-6 0H6M0 -6V6" strokeOpacity=".5" />
      </g>
      <g ref={blockRef} className={styles.block} stroke={INK} strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
