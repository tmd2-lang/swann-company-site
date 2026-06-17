# Swann Site Revamp v2

A new Swann Company marketing site built **section by section** from the best layout and motion patterns across four Lovable concept repos — with fresh copy and Swann brand tokens. This project replaces the exploratory `swann-studio-revamp` approach; it does **not** modify the live [`swann-studio-site`](https://swann-studio-site.vercel.app/) deploy.

## What this is

| | |
|---|---|
| **Product** | Single-page site for Swann Company (web design for med spas & skin clinics) |
| **Method** | Fork concept repo *bones* (Vite + React + Motion + Tailwind), port **one section at a time** — no merging |
| **Copy** | New writing; old `swann-studio-site` copy is reference only, not a constraint |
| **Brand** | Swann tokens: bone, lake, ink; Instrument Serif + DM Sans + IBM Plex Mono |

## What this is not

- Not a reskin of `swann-studio-site` (no card grids, no offer-page boxes)
- Not a single monolithic `index.tsx` dump — each section is its own module
- Not live until explicitly deployed and swapped

## Layout (10 sections, fixed order)

```
01  Hero                 Aesthetic-architects image + Maison Halden masked type
02  Kinetic band         Brun (pinned horizontal scrub)
03  Stat ticker          Brun velocity marquee (industry stats)
04  Manifesto            Brun word-scrub positioning
05  Studio work          Sável scroll physics + Halden long type
06  P&L stats band        Sável Proof layout (Swann offer stats)
07  Approach             Brun dark four-phase grid
08  Who it's for         Lumen & Co audience list
09  CTA + ContactForm    Brun closer + modular form module
10  Footer               Brun parallax wordmark
```

**Locked decisions**

- **Hero:** Aesthetic split + MJ `hero-pool-arch` parallax + Halden `MaskedLine` headline
- **CTA:** Brun closer layout + dedicated `ContactForm` module (not a bone card from v1)

## Concept sources (GitHub / local clones)

| Repo | Path (local) | What we take |
|------|----------------|--------------|
| `brun-s-aesthetic-brilliance` | `/tmp/swann-concepts/brun-s-aesthetic-brilliance` | Kinetic band, ticker, manifesto, approach, closer, footer, nav, cursor |
| `s-vel-studio-showcase` | `/tmp/swann-concepts/s-vel-studio-showcase` | Lenis, portfolio `CaseTile` scroll, P&L `Proof` band |
| `aesthetic-architects` | `/tmp/swann-concepts/aesthetic-architects` | Hero image parallax shell, `WhoFor` |
| `lumina-studio` (Maison Halden) | `/tmp/swann-concepts/lumina-studio` | `MaskedLine`, work-scale typography |

## Related folders

| Folder | Role |
|--------|------|
| `swann-studio-site` | Live site — **do not edit** without explicit approval |
| `swann-studio-revamp` | First revamp experiment — archived reference |
| `Swann Design System` | Tokens, marks, `colors_and_type.css` |
| `midjourney_session` | Editorial hero + break imagery |

## Docs in this repo

- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** — Section-by-section build spec, file plan, phases, copy briefs, acceptance criteria

## Dev

```bash
cd swann-site-revamp-v2
npm install
npm run dev
```

Open http://localhost:3000 (or the port Vite prints).

**Structure:** Each section lives in `src/sections/01-hero.tsx` … `10-footer.tsx`. The orchestrator is `src/routes/index.tsx` only.

## Deploy (later)

Static Vercel deploy, same model as concept repos. Separate URL from live site until swap is intentional.
