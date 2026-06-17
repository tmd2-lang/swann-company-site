# Services page handoff (canonical)

**For Antigravity / any porting agent.**  
**Repo:** `/Users/tjdozier7/Downloads/swann-site-revamp-v2`  
**Route:** `/services` (not `/system`, not `/pricing`)  
**Preview:** `npm run dev -- --port 8790` → http://localhost:8790/services

---

## Naming (read this first)

| Old label | New canonical |
|-----------|----------------|
| "System" in nav | **Services** |
| `/pricing` (Phoenix) | **`/services`** |
| `System.jsx` tier grid | **Retired for pricing.** Tiers use `ServiceTierCard` instead. |

The **conversion stack** (thesis + 4 layers) is **not** a separate page. It lives **on `/services`** as `ConversionSystem`, above the tier grid.

The homepage **`#approach`** section is different content: 4-phase **studio process** (Fit call → Compound). Do not duplicate that on Services.

---

## Files to copy

### Services page (required)

| File | Role |
|------|------|
| `src/routes/services.tsx` | Page shell, section order, tier/bonus data |
| `src/components/services/conversion-system.tsx` | Mist-band 4-column editorial stack (see below) |
| `src/components/services/service-tier-card.tsx` | Image-led pricing cards |
| `src/components/services/bonus-card.tsx` | Bonus image cards |

### Shared deps (already in v2; Phoenix must have equivalents)

| File | Role |
|------|------|
| `src/components/layout/site-shell.tsx` | Nav + footer wrapper |
| `src/components/motion/fade-up.tsx` | Section entrance |
| `src/components/motion/editorial-image.tsx` | Cinematic break under hero |
| `src/components/motion/magnetic-button.tsx` | CTA button |
| `src/components/motion/split-reveal.tsx` | Headline word reveal in ConversionSystem |
| `src/styles.css` | Tokens: bone, ink, lake, mist (`secondary`), `text-eyebrow`, `grain-overlay` |

### Images (editorial accents only)

- `src/assets/editorial/travertine-linen.jpg` — guarantee split
- `src/assets/library/interiors/*` — tier headers, bonuses, breaks (see imports in `services.tsx`)

Copy source: `src/assets/library/` and `src/assets/editorial/`. Do not use Midjourney images for portfolio thumbs.

---

## Page structure (top → bottom)

```
SiteShell
├── header (bone)
│   └── eyebrow (07), h1, intro copy
├── EditorialImage break
│   └── full-bleed mood interior + mono caption
├── ConversionSystem (mist band)             ← 4-column editorial index + portrait mood images
│   ├── SplitReveal headline on mist
│   └── staggered columns (not Approach rows, not lake cards)
├── section bg-ink
│   └── "Build tiers" + 3× ServiceTierCard (staggered)
├── section bone
│   └── "Included bonuses" + 3× BonusCard
├── section bone
│   └── Guarantee split (copy | travertine) + CTAs
└── section bg-ink
    └── Capacity strip (blurred mood bg)
```

---

## Tier card pattern

| Element | Treatment |
|---------|-----------|
| Top | `aspect-[16/10]` crop, unique interior per tier, ink gradient overlay |
| Body | Bone surface, numbered deliverables `(01)` in mono |
| Featured (Growth) | `ring-lake` + shadow + `lg:-mt-4`. **Not** a solid lake fill. |
| Tiers | Launch $6k · Growth $9.5k (featured) · Dominance from $15k |
| Copy source | `Swann Design System/reference/Swann_MedSpa_Grand_Slam_Offer.md` |

---

## ConversionSystem — how it was built (for Antigravity)

**File:** `src/components/services/conversion-system.tsx`  
**Do NOT port:** Phoenix lake panel + card stack, `System.jsx`, or homepage `#approach` hover rows.

### Design intent

Editorial magazine index on **mist** (`bg-secondary`). Four staggered columns with portrait mood photography. Typography leads; images support. Distinct from:

- Homepage Approach (hover-sweep rows + tag pills)
- Service tier cards (16:10 headers on ink, bone card bodies)
- Old lake quote panel (retired)

### Layout spec

| Layer | Classes / behavior |
|-------|-------------------|
| Section | `bg-secondary py-24 md:py-36 relative overflow-hidden` |
| Grain | Absolute `grain-overlay` at `opacity-[0.35]` over full section |
| Header | `md:grid-cols-12`: eyebrow col-4, `SplitReveal` headline col-8 |
| Headline | Line 1: "Four layers between" · Line 2: *"browse and booked."* in `text-lake` italic |
| Thesis | `FadeUp` paragraph below, `max-w-3xl`, `text-foreground/80` |
| Column grid | `lg:grid-cols-4 lg:divide-x lg:divide-foreground/10` |
| Stagger | Per-column `lg:pt-0` / `lg:pt-14` / `lg:pt-6` / `lg:pt-20` |
| Column top | `border-t border-lake/40` + mono label left + watermark numeral right (`text-lake/25`, display 5xl) |
| Image | `aspect-[4/5] grain-overlay`, ink gradient bottom, `hover:scale-[1.04]` over 1.4s |
| Motion | `FadeUp` on header, thesis, each column (`delay` staggered) + `SplitReveal` on headline |

### Four layers (copy + images)

| # | Label | Title | Image path |
|---|-------|-------|------------|
| 01 | Site | Looks as good as the work | `src/assets/library/interiors/a_calm_modern_treatment_room_shot_like_editorial_interior_des_1e026ffb-19e2-40d0-91aa-722887a7f583_1.jpg` |
| 02 | Pages | Answers before they ask | `src/assets/library/interiors/the_interior_of_a_serene_high-end_med_spa_reception_bright_an_72b1d7a6-f614-4255-919a-cefe807d98ea_3.jpg` |
| 03 | Proof | Trust at first glance | `src/assets/library/interiors/premium_medspa_website_design_mood_image_spa_towels_skincare__08b0c333-8208-47ac-bd24-17b568accd7a_3.jpg` |
| 04 | Booking | Always open | `src/assets/library/swan/Swann-inspired_beauty_business_workspace_pale_stone_desk_fold_6458c6c3-72ad-4006-a071-c8284cb0ca99_2.jpg` |

**Image rules:** Editorial accents from `src/assets/library/` only. Empty `alt=""` (decorative). `loading="lazy"` on column images. Do not reuse portfolio prototype thumbs.

### All images on `/services` (full map)

| Use | Path |
|-----|------|
| Hero cinematic break | `library/interiors/dramatic_luxury_interior_with_black_reflective_floor_and_ivor_1603da1b-66bc-44d2-ac3a-d932702109c7_0.jpg` |
| ConversionSystem ×4 | See table above |
| Tier Launch | `library/interiors/a_calm_modern_treatment_room_..._1e026ffb_..._0.jpg` |
| Tier Growth | `library/interiors/the_interior_of_a_serene_high-end_med_spa_reception_..._72b1d7a6_..._0.jpg` |
| Tier Dominance | `library/interiors/hero_image_for_a_luxury_creative_studio_..._f503b2c6_..._1.jpg` |
| Bonus Review Engine | `library/interiors/editorial_still_life_for_a_boutique_medspa_web_design_studio_..._35469284_..._0.jpg` |
| Bonus Photo Day Kit | `library/interiors/premium_medspa_website_design_mood_image_spa_towels_skincare_..._08b0c333_..._1.jpg` |
| Bonus Promo Calendar | `library/interiors/boutique_skin_studio_atmosphere_towels_and_skincare_bottles_..._1c1360a9_..._2.jpg` |
| Guarantee split | `editorial/travertine-linen.jpg` |
| Capacity strip bg | `library/interiors/luxury_creative_studio_mood_image_for_a_medspa_web_designer_..._9f770f3f_..._1.jpg` |

Note: `_0` vs `_1` vs `_3` suffixes are different Midjourney variants in the same session. Match filenames exactly from `services.tsx` and `conversion-system.tsx` imports.

---

## Conversion stack (4 layers) — summary

Content maps to offer doc core stack. Thesis: *"Traffic before conversion is sending more people through the same leaky bucket."*

Implemented as mist-band editorial columns in `conversion-system.tsx` (spec above).

---

## What is NOT on Services

| Content | Where it lives |
|---------|----------------|
| 4-phase studio process (Fit call, One intake, Build + launch, Compound) | Homepage `#approach` → `src/sections/07-approach.tsx` |
| Old `System.jsx` bone tier rows | Retired |
| Phoenix `/pricing` horizontal tier list | Replaced by `ServiceTierCard` grid |

---

## Phoenix migration checklist

1. Add route **`/services`** (or rename `/pricing` → `/services`).
2. Nav link: **Services** → `/services`. Remove "System" label.
3. Copy all four files under `src/components/services/` + `src/routes/services.tsx`.
4. Wire nav CTA: **Book a leak review** → `/contact` (not "Start a project").
5. Match section rhythm exactly (see structure above). **Include `ConversionSystem`** (mist 4-column editorial layout) between break and ink tiers.
6. Use v2 type stack: Instrument Serif (display), DM Sans (body), IBM Plex Mono (chrome only).
7. Do **not** use `System.jsx` card grid for tiers.

---

## Prompt for Antigravity

```
Port the Services page from ~/Downloads/swann-site-revamp-v2.

Route: /services (rename from /pricing if needed). Nav label: Services.

Copy:
- src/routes/services.tsx
- src/components/services/conversion-system.tsx
- src/components/services/service-tier-card.tsx
- src/components/services/bonus-card.tsx

Section order:
header → EditorialImage break → ConversionSystem (mist 4-col editorial) →
ink tier grid (ServiceTierCard) → bonus cards → guarantee split → capacity strip

ConversionSystem rules:
- bg-secondary (mist) + grain overlay
- SplitReveal headline: "Four layers between" / italic lake "browse and booked."
- 4 columns: lake top rule, mono label, watermark numeral, title, body, 4:5 portrait image
- Stagger columns: lg:pt-0, lg:pt-14, lg:pt-6, lg:pt-20
- Copy images exactly from conversion-system.tsx imports (library/interiors + library/swan)
- NO lake panel, NO Approach hover rows, NO System.jsx cards

Preview: npm run dev -- --port 8790 → /services
Read SERVICES_HANDOFF.md in the repo for full spec.
```

---

## Historical reference (do not port as-is)

| Location | Notes |
|----------|-------|
| `~/.gemini/antigravity/scratch/swann-phoenix-v2/src/routes/pricing.tsx` | Old combined page; split System + Investment layout. Superseded by v2 `/services`. |
| `~/Downloads/Swann Design System/ui_kits/studio-site-combined/System.jsx` | Prototype only. **Retired.** Do not port lake panel. |
