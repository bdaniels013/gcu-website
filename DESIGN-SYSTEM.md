# Gulf Coast Underground — Design System

Tokens **measured from the live gulfcoastunderground.org** (a WordPress/Divi
site) via computed styles, so this rebuild matches it precisely. Defined in
[`app/globals.css`](app/globals.css) (`@theme`) and used through the primitives
in [`components/ui.tsx`](components/ui.tsx).

## Typography

The live site is **Raleway everywhere, weight 500 (medium)** — light and
refined, never heavy/bold. Section titles are large and UPPERCASE.

| Role | Font | Size | Weight | Transform | Color |
|------|------|------|--------|-----------|-------|
| Section title (h1/h2) | Raleway | `clamp(2rem … 4rem)` | 500 | UPPERCASE | `#333` |
| Card / sub heading (h3) | Raleway | ~24px | 500 | UPPERCASE | `#333` |
| Body | Raleway | 15px | 400 | none | `#666` |
| Eyebrow / label | Raleway | 12px | 600 | UPPERCASE, tracked | teal |
| Button | Raleway | 14px | 600 | UPPERCASE, tracked | white/teal |

- Headings default to weight **500** via `globals.css` (`h1–h6`). Do **not** use
  `font-bold`/`font-extrabold` on headings.
- Body line-height **1.7** (airy), matching the live site.

## Color

| Token | Value | Use |
|-------|-------|-----|
| `--color-teal` | `#005655` | brand accent (exact Divi accent) |
| `--color-teal-deep` | `#00423f` | button hover |
| `--color-teal-darkest` | `#002e3d` | dark teal footer |
| `--color-charcoal` | `#3a3a3a` | dark mission band |
| `--color-mist` | `#333333` | headings / strong text |
| `--color-mist-soft` | `#666666` | body text |
| `--color-amber` | `#c47f29` | sparing warm accent (events) |

## Layout & shape

- **Content column:** `--content: 1080px` (the live row width). Use the
  `<Container>` primitive — never a wider max-width for body content.
- **Button radius:** `3px` (live value), via `<ButtonLink>` or `rounded-[3px]`.
- **Cards:** `rounded-md` with soft shadow — varied radii, not uniform pills.

## Primitives (`components/ui.tsx`)

- `<Container>` — 1080px column with responsive padding.
- `<SectionTitle>` — large UPPERCASE medium-weight h2.
- `<PageHero>` — inner-page hero (eyebrow + uppercase title + subtitle).
- `<Eyebrow>` — small tracked teal label.
- `<ButtonLink variant="primary|secondary|ghost">` — uppercase, 3px radius.
- `<Card>` — bordered surface with soft shadow.

## How the spec was captured

Read computed styles directly from the live site with the Chrome MCP
(`getComputedStyle` on representative `h1/h2/h3/p/a/.et_pb_button/.et_pb_section`
nodes), plus the Divi color options from the WordPress DB dump. This is the
source of truth — re-measure there before changing tokens.
