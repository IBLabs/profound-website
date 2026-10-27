# ProFound Ventures — Brand Identity & Design System Guidelines

> **Reference Slide**: An archived copy of the official brand identity board is saved at [`public/figma/brand-identity-board.png`](file:///Users/asibiton/Documents/GitHub/profound-website/public/figma/brand-identity-board.png).
> Any AI agent or developer building pages or components for ProFound must follow this guide.

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
  --paper: #FAF8F5;          /* Warm off-white / ivory canvas */
  --paper-subtle: #F3EFEA;   /* Soft architectural paper for contrast sections */
  --paper-card: #FFFFFF;     /* Crisp white card surface */

  /* Ink / Typography */
  --ink: #161513;            /* Deep charcoal ink (never pure #000000) */
  --ink-heading: #121110;    /* High contrast heading ink */
  --muted: #6E6A63;          /* Warm editorial body text */
  --muted-light: #948F87;    /* Tertiary metadata & labels */

  /* Hairlines & Borders */
  --line: rgba(22, 21, 19, 0.09);       /* Subtle architectural divider */
  --line-strong: rgba(22, 21, 19, 0.18);/* Active / prominent divider */

  /* Signature Brand Accent (International Orange / Vermillion) */
  --orange: #FF4D00;
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
- Used across the entire site for body copy, navigation, buttons, and all eyebrow titles & milestone tags (styled in uppercase, tracking `letter-spacing: 0.14em`, font-weight 700).
- Colors: `var(--muted)` for body copy, `var(--ink)` for bold/lead copy, `var(--orange)` for eyebrows and accent tags.

---

## 5. UI Elements & Layout Architecture

1. **Card Surfaces**:
   - Background: Pure white `var(--paper-card)` on `var(--paper)` or `var(--paper-subtle)`.
   - Border: Delicate 1px hairline `var(--line)`.
   - Radius: `14px` to `18px`.
   - Shadow: Soft, diffused architectural shadow `0 4px 20px -8px rgba(22, 21, 19, 0.04)`.
   - Hover: Subtle lift (`transform: translateY(-3px)`), gentle border tint (`rgba(255, 77, 0, 0.25)`), warm shadow.

2. **Geometric Motifs**:
   - Thin concentric orbit rings and 1px crosshair lines (dashed and solid).
   - Clean grid layouts with generous whitespace.

3. **Buttons**:
   - Primary: `pitch-button` (`background: var(--ink)` or `var(--orange)`, pill radius, white text, smooth hover lift).
   - Secondary: `secondary-action` (inline text with directional arrow `→`, transitions to orange on hover).
   - **Never use orange pill shapes for informational labels or badges.**

---

## 6. Photography & Imagery

- Real, candid, editorial photography of founders in well-lit architectural studio environments.
- Warm color grading, subtle natural film grain, authentic human connection.
- Avoid generic stock photography, AI uncanny portraits, or corporate clipart.
