# Brand Design Rules for ProFound Website

Whenever editing or generating components, styles, or pages for ProFound:

1. **Follow the Design Guidelines in `BRAND_GUIDELINES.md`**:
   - Palette: Warm paper canvas (`--paper: #FAF8F5`, `--paper-subtle: #F3EFEA`), crisp white cards (`--paper-card: #FFFFFF`), deep charcoal ink (`--ink: #161513`), and International Orange accent (`--orange: #FF4D00`).
   - Reference image: `public/figma/brand-identity-board.png`.

2. **DITCHED ORANGE PILL SHAPES**:
   - **Never** create tags, category badges, or eyebrows wrapped in orange pill/capsule shapes (e.g. `border-radius: 999px; background: orange`).
   - Eyebrows must always be clean typography (`p.eyebrow`: uppercase, letter-spaced, bold, brand orange text directly on the section canvas).

3. **Typography**:
   - Headings: `Libre Baskerville` (`var(--font-libre)`, serif) with *italic emphasis* (frequently in `var(--orange)`).
   - Body, UI & Eyebrows: `Manrope` (`var(--font-manrope)`) for all body copy, navigation, buttons, and eyebrow titles/tags (uppercase, `letter-spacing: 0.14em`, font-weight 700).

4. **Surface Aesthetics**:
   - Editorial, architectural, warm, timeless paper aesthetic.
   - Clean hairline borders (`1px solid var(--line)`).
   - No generic SaaS dark mode unless explicitly specified for a specific sub-element.
