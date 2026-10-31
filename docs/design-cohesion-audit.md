# Design cohesion audit — 31 October 2026

Scope: Home, Studio, Portfolio, Team, and the shared navigation/contact/footer.

## Findings resolved

- Capsule filters, search fields, and primary actions conflicted with the reference's squarer controls. These now share a 6px radius; portfolio filters retain the reference's 40px height and neutral selected treatment.
- Older Studio and Portfolio cards used large radii, stacked shadows, and decorative hover lifts. Active cards now use 8px corners, hairline borders, warm surfaces, and quiet border feedback. Brand logos remain in their original colors.
- Studio and Portfolio still inherited the old italic face. Page accents now consistently use Fraunces italic at 1.08em beside Libre Baskerville headings and Manrope body text.
- Team had a separate contact section/footer. All routes now use one shared contact section and footer, including a common email address, copy interaction, navigation, and responsive wordmark.
- White and warm canvas values drifted between implementations. Shared color, gradient, surface, and radius tokens now define the current palette.
- Retired Team/footer CSS and two unused font families were removed to reduce competing design definitions. Current decisions are recorded in BRAND_GUIDELINES.md.

## Intentional exceptions

- The hero spinner keeps its original Libre Baskerville lettering and its more vibrant active gradient.
- The reference navigation keeps Google Sans.
- Portraits and orbital motifs remain circular. Text tabs and progress indicators keep their editorial treatment rather than becoming filled buttons.
- Wide content remains capped at 1,440px, with narrower 1,180px editorial sections.

## Verification

- Inspected all four routes at 320px, 1,024px, and 2,560px widths: no horizontal overflow or clipped text; one footer on each page.
- Confirmed the 6px control radius and Fraunces accents through computed styles.
- Verified portfolio filtering, searching for a company, and returning to All.
- Verified the shared copy-email control in a focused browser tab.
- Reviewed desktop portfolio cards and Studio sections, plus desktop/mobile contact layouts.
- TypeScript, production build with webpack, and whitespace checks passed.
