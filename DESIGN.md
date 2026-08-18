# Design System: The HS Manager — Website Redesign
**Stitch Project ID:** 8191684704800239217
**Source:** Synthesized from the local `design-system/` token library (`tokens/*.css`), component library (`components/`), and brand guidelines (`brand-book/`).

## 1. Visual Theme & Atmosphere

The HS Manager reads as **utilitarian-trustworthy** — the visual language of a safety-inspection tool that has to be taken seriously by site managers and auditors, not a consumer app. It is clean and airy (generous whitespace, a pale grey page surface rather than white) but grounded by a deep navy ink and a single confident brand green used sparingly for action and "pass" states. Corners are gently — but never sharply — rounded, shadows are soft and diffused rather than heavy, and motion is quick and restrained (150–220ms). The overall feel: **calm, procedural, and legible under pressure** — a field-inspection tool, not a marketing gloss.

## 2. Color Palette & Roles

### Brand primitives
- **HS Green** (`#12B71D`) — the brand mark color. Primary action color: buttons, links, focus rings, "pass" status.
- **HS Navy** (`#0D1F2D`) — the brand ink. Secondary actions, strong text, inverse surfaces (dark panels/footers).

### Green scale (brand/action)
`50` #EAFBEB · `100` #CFF5D2 · `200` #9EEBA6 · `300` #5CDC69 · `400` #2CC93B · **`500` #12B71D (base)** · `600` #0E9918 · `700` #0B7A13 · `800` #085B0E · `900` #063F0A

### Navy / ink scale
`50` #F1F5F7 · `100` #DFE7EC · `200` #BFCFDA · `300` #8AA3B5 · `400` #5B7B92 · `500` #365B72 · `600` #22455A · `700` #16303F · **`800` #0D1F2D (base)** · `900` #07131C

### Neutrals
White `#FFFFFF` · Grey-25 `#FBFCFD` · Grey-50 `#F5F7F9` · Grey-100 `#EDF0F3` · Grey-200 `#E1E6EB` · Grey-300 `#CBD3DA` · Grey-400 `#9CA8B3` · Grey-500 `#6E7C89` · Grey-600 `#4E5C69` · Grey-700 `#33414D`

### Status colors (inspection outcomes)
| Role | Base | Hover/Strong | Soft (bg) |
|---|---|---|---|
| Pass | Deep Confident Green (`#12B71D`) | — | `#EAFBEB` |
| Fail | Alert Red (`#E02B20`) | `#BE1D14` | `#FDECEA` |
| Warn | Amber Caution (`#F5A524`) | `#D2860C` | `#FEF5E6` |
| Info | Clear Blue (`#2F6FED`) | `#1F55C4` | `#EAF1FE` |
| N/A | Muted Slate (`#6E7C89`) | — | `#F1F4F6` |

### Semantic roles
- **Text:** strong `navy-800` · body `navy-700` · muted `navy-400` · inverse `#FFFFFF` · link `green-600` (hover `green-700`)
- **Surfaces:** page `grey-50` (pale, airy backdrop) · card `#FFFFFF` · sunken `grey-100` · inverse `navy-800` · brand `green-500` · brand-soft `green-50`
- **Borders:** subtle `grey-200` · default `grey-300` · strong `navy-200` · focus `green-500`
- **Actions:** primary `green-500` → hover `green-600` → press `green-700` · secondary `navy-800` → hover `navy-700`
- **Focus ring:** `0 0 0 3px rgba(18,183,29,.28)` — a soft green halo, never a hard outline

## 3. Typography Rules

- **Display font:** "ITC Avant Garde Gothic" (falls back to Plus Jakarta Sans) — reserved for hero/display moments only, bold weight, tight tracking.
- **Body/UI font:** "Plus Jakarta Sans" — carries everything else: headings, body copy, controls.
- **Mono font:** "JetBrains Mono" — token labels, data values, technical/code contexts.

### Scale
| Token | Size | Typical use |
|---|---|---|
| `display-lg` | 56px | Hero headline |
| `display-md` | 44px | Section hero |
| `display-sm` | 34px | Sub-hero |
| `h1` | 30px | Page title |
| `h2` | 24px | Section title |
| `h3` | 20px | Card/subsection title |
| `h4` | 17px | Minor heading |
| `body-lg` | 17px | Lead paragraph |
| `body` | 15px | Default body/UI text |
| `body-sm` | 13.5px | Secondary/meta text |
| `caption` | 12px | Hints, timestamps |
| `micro` | 11px | Eyebrows, tags |

- **Headings** are always **bold (700)**, `-1.8%` letter-spacing (`--tracking-heading`), `1.2` line-height — tight and confident, never light.
- **Display type** uses `-3%` tracking (`--tracking-display`) and the tightest line-height (`1.06`) for maximum impact at large sizes.
- **Body text** sits at normal tracking (`0`) with a relaxed `1.5` line-height for readability in dense inspection data.
- **Eyebrows/labels** are uppercase, bold, with wide `+9%` tracking (`--tracking-caps`) — the one place tracking opens up rather than tightens.
- Weight scale available: regular (400), medium (500), semibold (600) — used for interactive labels/buttons — bold (700), and extrabold (800) for rare max-emphasis moments.

## 4. Component Stylings

* **Buttons:** Height-based sizing (34/42/52px sm–lg), horizontal padding only, semibold label, `-0.5%` tracking. Default shape is **subtly rounded** (`--radius-control`, 12px) with an optional fully **pill** variant. Primary is solid brand green with a whisper-soft shadow that blooms into a soft green glow (`--shadow-brand`) on hover; secondary is solid navy; outline is white with a default-grey border; ghost is transparent, filling grey-100 on hover; danger is solid red. All variants lift 1px on hover and press down 1px on click — a tactile, physical response rather than a static tap target.

* **Cards/Containers:** **Generously rounded corners** (`--radius-card`, 20px) — noticeably softer than buttons/inputs, signaling "container" vs "control." White background with a hairline subtle-grey border by default; sunken (pale grey), brand-soft (pale green), and inverse (navy) tone variants exist for emphasis. Elevation is a **whisper-soft diffused shadow** at rest (`--shadow-sm`) that deepens and the card lifts 2px on hover when interactive (`--shadow-lg`) — never a heavy, high-contrast drop shadow.

* **Inputs/Forms:** Same control height and rounding as buttons (`--radius-control`, 12px), white background, a fine 1px default-grey stroke. On focus the stroke turns brand green and a soft green focus ring blooms around the field (no harsh outline); on error the stroke turns fail-red. Labels are small semibold navy-800 text above the field; hints/errors are caption-sized text below.

## 5. Layout Principles

- **Whitespace strategy:** Generous and airy — the page surface itself is a pale grey (`grey-50`), not white, so white cards read as elevated "islands" of content rather than blending into the background.
- **Spacing scale:** 4px base unit stepping to 4/8/12/16/20/24/32/40/48/64/80/96/128px — consistent geometric rhythm across margins, gaps, and padding.
- **Page grid:** Content max-width `1200px`, prose max-width `68ch`. Page gutters `24px` (mobile) expanding to `40px` (desktop).
- **Controls:** Standard control heights of 34/42/52px (sm/md/lg); minimum 44px tap target maintained for touch accessibility regardless of visual control size.
- **Depth as hierarchy, not decoration:** Elevation increases only on interaction (hover/focus) or to separate a genuinely floating layer (modals use `--shadow-xl`), keeping the resting UI flat and calm.
- **Motion:** Fast and functional — 90ms for instant feedback, 150ms for control-level transitions, 220ms for standard UI motion, up to 600ms only for full page-level transitions. Standard ease is a gentle overshoot-free curve (`cubic-bezier(.2,.8,.2,1)`) — responsive but never bouncy.

## 6. Homepage Mockup Build Directive

When building or recreating the HSM homepage, use the tokens above as the strict source of truth for color, type, radius, spacing, and motion — do not invent new values. Invoke the following installed skills, in this order, to produce a stunning, on-brand homepage mockup:

1. **`/superpowers:using-superpowers`** — establish skill discipline first; confirm which other skills apply before writing any code.
2. **`/stitch-utilities:taste-design`** — apply anti-generic, premium UI standards (calibrated color, asymmetric layout, perpetual micro-motion) using this file's tokens as the semantic design system.
3. **`/frontend-design:frontend-design`** — build the actual production-grade homepage markup/components, avoiding generic AI-aesthetic layouts.
4. **`/impeccable`** — audit and polish the result: visual hierarchy, information architecture, cognitive load, accessibility, responsive behavior, and copy.
5. **`/emil-design-eng`** — refine the invisible details and interaction polish (hover/press states, easing, component feel) per this file's Component Stylings and motion tokens.
6. **`/motion-framer`** — implement entrance, scroll, and micro-interaction animations using the durations/easing defined in §5 (90/150/220/600ms, `cubic-bezier(.2,.8,.2,1)`), via the motion/framer-motion library.

Goal: a homepage that feels calm, procedural, and trustworthy per §1 (Visual Theme & Atmosphere), built strictly from the tokens in §2–§5, polished to a premium, non-templated standard rather than a generic SaaS/AI-generated look.
