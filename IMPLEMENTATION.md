# Implementation plan — Swann Site Revamp v2

Build rule: **one section = one module = one PR-sized chunk.** The orchestrator only imports and orders sections. Do not combine sections because copy or layout feels related.

---

## Locked product decisions

| Decision | Choice |
|----------|--------|
| Hero | Aesthetic-architects image shell (right parallax MJ) + Maison Halden `MaskedLine` type (left) |
| CTA | Brun `Closer` + modular `ContactForm` component |
| Copy | New copy per section brief below; old site is reference only |
| Section count | Exactly **10** scroll sections + global chrome |
| Work position | Section **05**, after positioning block (02–04) |

---

## Phase 0 — Scaffold (do once)

**Goal:** Empty runnable shell with Swann brand, no section content yet.

### 0.1 Fork base

- Copy `brun-s-aesthetic-brilliance` from `/tmp/swann-concepts/` into this repo (exclude `.git`)
- Rename package to `swann-site-revamp-v2`
- Add `lenis` dependency (from s-vel pattern)

### 0.2 Brand

- Replace `src/styles.css` with Swann palette (bone, mist, stone, lake, ink)
- Fonts: Instrument Serif (display) + DM Sans (body) + IBM Plex Mono (chrome) in `__root.tsx`
- Copy assets:
  - `swann-mark-ink.svg`, `swann-mark-bone.svg`
  - `assets/prototypes/*` (six concept thumbs)
  - `assets/editorial/hero-pool-arch.png` (+ breaks if needed later)

### 0.3 File structure

```
src/
  routes/
    index.tsx              # Orchestrator ONLY — imports sections in order
    __root.tsx
  sections/
    01-hero.tsx
    02-kinetic-band.tsx
    03-stat-ticker.tsx
    04-manifesto.tsx
    05-studio-work.tsx
    06-pl-stats.tsx
    07-approach.tsx
    08-who-its-for.tsx
    09-cta.tsx
    10-footer.tsx
  components/
    chrome/
      nav.tsx
      blob-cursor.tsx
      page-progress.tsx
      use-lenis.ts
    motion/
      masked-line.tsx        # from lumina
      split-words.tsx        # from brun (if shared)
      reveal.tsx
    contact/
      contact-form.tsx       # modular form module
  data/
    projects.ts              # six studio work entries + URLs
    stats-industry.ts        # section 03
    stats-offer.ts           # section 06
  styles.css
```

### 0.4 Orchestrator template

`index.tsx` must look like:

```tsx
export function SwannSite() {
  useLenis();
  return (
    <main>
      <BlobCursor />
      <PageProgress />
      <Nav />
      <Hero />           {/* 01 */}
      <KineticBand />    {/* 02 */}
      <StatTicker />     {/* 03 */}
      <Manifesto />      {/* 04 */}
      <StudioWork />     {/* 05 */}
      <PlStats />        {/* 06 */}
      <Approach />       {/* 07 */}
      <WhoItsFor />      {/* 08 */}
      <Cta />            {/* 09 — includes ContactForm */}
      <Footer />         {/* 10 */}
    </main>
  );
}
```

**Acceptance:** `npm run dev` runs; blank or placeholder sections render in order; Swann fonts/colors apply.

---

## Phase 1 — Global chrome

| Task | Source | File |
|------|--------|------|
| Lenis smooth scroll | s-vel `useLenis` | `components/chrome/use-lenis.ts` |
| Nav | brun `Nav` | `components/chrome/nav.tsx` — Swann wordmark, anchors: `#work` `#approach` `#who` `#contact` |
| Blob cursor | brun | `components/chrome/blob-cursor.tsx` |
| Page progress | brun | `components/chrome/page-progress.tsx` |
| MaskedLine | lumina | `components/motion/masked-line.tsx` |

**Acceptance:** Chrome works on a placeholder page; reduced-motion respected.

---

## Phase 2 — Sections 01–04 (positioning block)

Implement **in order**. Complete and review each before the next.

### Section 01 — `01-hero.tsx`

| | |
|---|---|
| **Source** | aesthetic-architects `Hero` + lumina `Hero` / `MaskedLine` |
| **ID** | `#top` |
| **Layout** | 12-col: left 7 type, right 5 full-height image |
| **Motion** | Image `imgY` + `imgScale`; text `textY` + `fade` on scroll |
| **Exclude** | Hero stat grid; Brun rotating words; full-bleed dark overlay |

**Copy brief**

- Eyebrow: `Swann Company · Est. 2026`
- Headline (3 masked lines): `From browsers` / `to booked.` (italic lake)
- Lead: ~2 lines — med spa & skin clinic sites; traffic + proof already exist; fix conversion before ad spend
- CTA primary → `#contact` · secondary → `#work`

**Acceptance:** Matches wire; no extra rows below fold except optional scroll hint.

---

### Section 02 — `02-kinetic-band.tsx`

| | |
|---|---|
| **Source** | brun `KineticBand` verbatim motion |
| **Layout** | `400vh` sticky horizontal scrub |
| **Exclude** | Any other content in this file |

**Copy brief** — word pairs (draft):

1. `QUIET BROWSERS` / `booked.`
2. `TRAFFIC WITHOUT` / `conversion.`
3. `THE SITE` / `before ads.`
4. `TRUST AT` / `the CTA.`
5. `BUILD IT` / `like it.`

**Acceptance:** Only kinetic band; scrub tied to scroll; lake italic accents.

---

### Section 03 — `03-stat-ticker.tsx`

| | |
|---|---|
| **Source** | brun `StatTicker` + `VelocityMarquee` |
| **Content** | **Industry stats only** |

**Data** (`stats-industry.ts`):

| Value | Label |
|-------|-------|
| 53% | of mobile visitors leave when a page loads slowly |
| 75% | judge business credibility from web design alone |
| 88% | won't return after a poor site experience |

**Exclude:** Pricing, capacity, Swann offer numbers.

**Acceptance:** Velocity reacts to scroll speed; two marquee rows.

---

### Section 04 — `04-manifesto.tsx`

| | |
|---|---|
| **Source** | brun `Manifesto` + `ScrubWord` |
| **Exclude** | Leaks cards; system steps |

**Copy brief** — single scrubbed paragraph (~30 words), draft:

> A beautiful med spa site can still leak consults. Buyers don't need a brochure — they need to feel safe, clear, and ready enough to book. Swann builds for that moment.

**Eyebrow row:** `(01) Position` · `Web design for med spas & skin clinics`

**Acceptance:** Word scrub only; no cards.

---

## Phase 3 — Section 05 (portfolio)

### Section 05 — `05-studio-work.tsx`

| | |
|---|---|
| **Source** | s-vel `CaseTile` motion + lumina `Work` typography scale |
| **ID** | `#work` |
| **Structure** | Section header + **6 separate project blocks** inside one section |

**Per project block**

| Layer | Behavior |
|-------|----------|
| Article | s-vel `scale` on scroll |
| Panel | s-vel `rotate` |
| Inner content | s-vel `y` drift |
| Name | Halden scale `text-[12vw]` → `6vw`, masked or split reveal |
| Image | Real thumb from `data/projects.ts` |
| Spacing | `py-16`–`py-24` between projects + `border-t` |

**Exclude:** Filter chips; 3-col grid; fake client ROI outcomes.

**Copy brief**

- Header eyebrow: `(02) Studio work`
- Title: `Concept sites.`
- Lead: one sentence on six practice types, one standard
- Per project: index, category, year, giant name, one-line studio note, live link

**Data:** `src/data/projects.ts` — six Vercel/Lovable URLs (unchanged from v1).

**Acceptance:** Six cinematic tiles; generous vertical rhythm; no boxes.

---

## Phase 4 — Sections 06–08

### Section 06 — `06-pl-stats.tsx`

| | |
|---|---|
| **Source** | s-vel `Proof` dark band |
| **Content** | **Swann offer stats only** |

**Data** (`stats-offer.ts`):

| Value | Label |
|-------|-------|
| $9,500 | Growth build |
| 2 | Custom builds per month |
| 30 | Day launch target |
| 60 | Days post-launch optimization |
| 60 | Day guarantee window |
| 0 | Templates shipped |

**Headline:** `Built for practices that already have proof.`

**Exclude:** Industry stats (those are §03); pricing cards.

---

### Section 07 — `07-approach.tsx`

| | |
|---|---|
| **Source** | brun `Approach` |
| **ID** | `#approach` |
| **Layout** | Dark ink band, 4 phases |

**Copy brief**

| Phase | Title | Body |
|-------|-------|------|
| 01 | Fit call | Confirm traffic, reviews, booking stack; is the site the constraint? |
| 02 | One intake | Assets + proof → build plan |
| 03 | Build + launch | Two approvals; 30-day target when client keeps pace |
| 04 | Compound | Post-launch optimization; guarantee if conversion doesn't beat baseline |

**Exclude:** Old Process 3-col cards; System 4-box grid.

---

### Section 08 — `08-who-its-for.tsx`

| | |
|---|---|
| **Source** | aesthetic-architects `WhoFor` |
| **ID** | `#who` |

**For list (hover swap):**

- Premium independent med spas
- Skin clinics with reviews & booking software
- Physician-led dermatology
- 1–3 locations with existing traffic

**Not for** (footer line or second list, no cards):

- Startups without proof · discount clinics · ads-before-site practices

**Exclude:** Investment "not a fit" boxes.

---

## Phase 5 — Section 09 + ContactForm module

### `components/contact/contact-form.tsx`

Modular, reusable, no layout chrome.

**Fields**

- Name (required)
- Email (required)
- Practice
- Current website

**States**

- Default / focused / submitting / success / error (success minimum for v1)

**Style**

- Underline fields on lake background (Brun editorial, not v1 bone card)
- Accessible labels, keyboard nav
- `prefers-reduced-motion` safe transitions

**API**

```tsx
export function ContactForm({
  onSuccess?: (data: ContactFormData) => void;
  className?: string;
}) { ... }
```

Form submission v1: client-side success state (wire to API / Formspree / email service in Phase 7).

---

### Section 09 — `09-cta.tsx`

| | |
|---|---|
| **Source** | brun `Closer` layout |
| **ID** | `#contact` |
| **Composition** | SplitWords headline + lead copy + **`<ContactForm />`** |

**Copy brief**

- Eyebrow: `(05) Start`
- Headline: `See where your site is leaking consults.`
- Body: URL review → booking path, trust, treatments, mobile friction; reply in two business days
- Footer line: Two custom builds per month

**Rule:** Closer and form are **one section**; form is imported module, not inline spaghetti.

**Acceptance:** `#contact` scroll target; form works standalone if dropped elsewhere later.

---

## Phase 6 — Section 10

### Section 10 — `10-footer.tsx`

| | |
|---|---|
| **Source** | brun `Footer` |
| **Motion** | Parallax giant Swann wordmark |

**Copy:** Studio index links · hello@swannco.co · capacity · © 2026

---

## Phase 7 — Polish

| Task | Notes |
|------|-------|
| Image optimization | WebP, max ~1600px width; hero + thumbs |
| Mobile nav | Brun/lumina hamburger pattern |
| `prefers-reduced-motion` | Audit every section |
| Meta / OG | Swann title + description in `__root.tsx` |
| Lighthouse pass | Target sane LCP on hero image |
| Deploy preview | Vercel project separate from live site |

---

## Retired content (do not reintroduce as sections)

| Old `swann-studio-site` | Replacement |
|---------------------------|-------------|
| Leaks 3-card grid | §04 Manifesto |
| System lake card + 4 boxes | §04 belief + §07 phases (no duplicate section) |
| Guarantee card | §06 stat + §07 phase 04 copy |
| Investment boxes | §06 P&L band |
| Hero stat row | §03 ticker |
| Work filter chips | Removed |
| Separate Contact section | §09 only |

---

## Build order checklist

```
[ ] Phase 0 — Scaffold + file structure
[ ] Phase 1 — Chrome
[ ] §01 Hero
[ ] §02 Kinetic band
[ ] §03 Stat ticker
[ ] §04 Manifesto
[ ] §05 Studio work
[ ] §06 P&L stats
[ ] §07 Approach
[ ] §08 Who it's for
[ ] ContactForm module
[ ] §09 CTA
[ ] §10 Footer
[ ] Phase 7 — Polish + deploy preview
```

---

## Review gate

After each section lands, confirm:

1. Only one section's layout pattern in the diff
2. No `rounded-2xl border bg-background p-8` card grids from old site
3. Copy matches brief (new writing, not pasted JSX from `swann-studio-site`)
4. Section index in eyebrow matches master list (01–05)

When Phase 0–6 are complete, this repo becomes the candidate to replace live `swann-studio-site` — only after explicit approval.
