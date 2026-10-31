# ProFound Ventures — Brand Identity & Design System Guidelines

> **Reference Slide**: An archived copy of the official brand identity board is saved at [`public/figma/brand-identity-board.png`](file:///Users/asibiton/Documents/GitHub/profound-website/public/figma/brand-identity-board.png).
> Any AI agent or developer building pages or components for ProFound must follow this guide.

## Current implementation decisions — 31 October 2026

These session-approved decisions supersede older styling guidance:

- Use a white base canvas, warm secondary surfaces, charcoal text, and International Orange. Keep gradients for brand accents and primary contact treatments.
- Typography: Libre Baskerville regular headings; Manrope body and controls; Fraunces italic accents at `1.08em`. The hero word spinner deliberately retains Libre Baskerville. The shared reference navigation deliberately uses Google Sans.
- Controls: `--radius-control: 6px`; outlined neutral filters, charcoal selected states, orange primary actions. Avoid capsule buttons. Portrait circles and orbital motifs remain circular.
- Cards and photography: `--radius-card: 8px`, hairline borders, restrained flat surfaces. Avoid deep shadows and decorative hover lifts on informational cards.
- Use the same navigation, contact CTA, and footer on every route. Contact details must remain consistent.
- Wide content is capped at 1,440px, editorial sections at 1,180px, and the homepage hero at 960px tall. Preserve responsive gutters and mobile reflow.
- Respect reduced motion; use visible keyboard focus. Keep the logo strip moving on hover.

---

## 1. Brand Essence & Atmosphere

ProFound is an early-stage venture fund and co-creation studio supporting Israeli software and AI founders from idea to seed and beyond.

- **Vibe**: Warm architectural paper, high-end editorial publication, humanistic clarity, patient capital.
- **What it is NOT**: Generic SaaS dark mode, neon/cyber themes, rounded toy-like buttons, or tech-template styles.
- **Core Mottoes**: 
  - *"magic happens when you put the focus on people"*
  - *"lets work to greater"*
  - *"One founder at a time."*
  - *"Building profound companies, from day one."*

---

## 2. ⚠️ Critical Brand Rule: DITCHED ORANGE PILL SHAPES

> [!IMPORTANT]
> **We have officially ditched the orange pill-like shapes.**
> - **DO NOT** create tags, eyebrows, category pills, or badges using orange pill/capsule shapes (e.g., rounded 999px containers with orange backgrounds or orange borders).
> - **Eyebrows must be clean typography**: uppercase, letter-spaced (`letter-spacing: 0.14em`), font-weight 700, rendered as plain text in brand orange (`var(--orange)`) directly on the section canvas (e.g. `<p className="eyebrow">For founders</p>`).

---

## 3. Color Palette & CSS Tokens

Always use the design tokens declared in `src/app/globals.css`:

```css
:root {
  /* Canvas / Paper Backgrounds */
  --paper: #FFFFFF;          /* White base canvas */
  --paper-subtle: #F4EFEA;   /* Soft architectural paper for contrast sections */
  --paper-card: #FFFFFF;     /* Crisp white card surface */
  --surface-warm: #F8F4EF;   /* Warm cards on the white canvas */
  --radius-control: 6px;
  --radius-card: 8px;

  /* Ink / Typography */
  --ink: #181816;            /* Deep charcoal ink (never pure #000000) */
  --ink-heading: #181816;    /* High contrast heading ink */
  --muted: #5D5952;          /* Warm editorial body text */
  --muted-light: #948F87;    /* Tertiary metadata & labels */

  /* Hairlines & Borders */
  --line: #E7E2DB;       /* Subtle architectural divider */
  --line-strong: rgba(22, 21, 19, 0.18);/* Active / prominent divider */

  /* Signature Brand Accent (International Orange / Vermillion) */
  --orange: #FF4C00;
  --orange-hover: #E64500;
  --orange-subtle: rgba(255, 77, 0, 0.08);
  --orange-glow: rgba(255, 77, 0, 0.22);
}
```

---

## 4. Typography

### 1. Display & Headings: `Libre Baskerville` (`var(--font-libre)`)
- Classic editorial book serif.
- **Signature Typographic Pairing**: Serif regular paired with *italic emphasis* (often in `var(--orange)`).
  - Example: `magic happens when you put the focus on` *`people`*
  - Example: `lets work to` *`greater`*
  - Example: `Not just a check,` *`an additional co-founder.`*

### 2. Body, UI & Eyebrows: `Manrope` (`var(--font-manrope)`)
- Clean, open, modern sans-serif with excellent legibility.
- Used across the entire site for body copy, buttons, and all eyebrow titles & milestone tags (styled in uppercase, tracking `letter-spacing: 0.14em`, font-weight 700).
- Colors: `var(--muted)` for body copy, `var(--ink)` for bold/lead copy, `var(--orange)` for eyebrows and accent tags.

### 3. Accent text: `Fraunces` (`var(--font-accent)`)
- Use the 400 italic face at `1.08em` for emphasis inside page headings and editorial text.
- Preserve Libre Baskerville in the hero word spinner and Google Sans in the reference navigation.

---

## 5. UI Elements & Layout Architecture

1. **Card Surfaces**:
   - Background: Warm `var(--surface-warm)` on the white canvas; use `var(--paper-card)` for contrast on warm sections.
   - Border: Delicate 1px hairline `var(--line)`.
   - Radius: `8px` (`var(--radius-card)`).
   - Shadow: None by default; use hairline borders for separation.
   - Hover: Quiet border or color change for actionable cards; do not lift informational cards.

2. **Geometric Motifs**:
   - Thin concentric orbit rings and 1px crosshair lines (dashed and solid).
   - Clean grid layouts with generous whitespace.

3. **Buttons**:
   - Primary: `pitch-button` (`background: var(--ink)` or `var(--orange)`, 6px radius, white text, restrained hover feedback).
   - Secondary: `secondary-action` (inline text with directional arrow `→`, transitions to orange on hover).
   - **Never use orange pill shapes for informational labels or badges.**

---

## 6. Photography & Imagery

- Real, candid, editorial photography of founders in well-lit architectural studio environments.
- Warm color grading, subtle natural film grain, authentic human connection.
- Avoid generic stock photography, AI uncanny portraits, or corporate clipart.
