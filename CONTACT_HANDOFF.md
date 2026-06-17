# Contact page handoff (canonical)

**For Antigravity / any porting agent.**  
**Repo:** `/Users/tjdozier7/Downloads/swann-site-revamp-v2`  
**Route:** `/contact`  
**Preview:** `npm run dev -- --port 8790` → http://localhost:8790/contact

---

## Naming & CTAs

| Element | Canonical copy |
|---------|----------------|
| Page title | Book a leak review · Swann Company |
| H1 | Book a leak review. |
| Nav CTA | Book a leak review → `/contact` |
| Form submit | Book a leak review |
| Secondary link | See studio work → `/work` |

**Do NOT port:** Phoenix full-lake contact page, "Start a project", "Brand Audit" modal, fake submit with no Formspree.

---

## Files to copy

| File | Role |
|------|------|
| `src/routes/contact.tsx` | Page layout: copy left, sticky image right |
| `src/components/contact/contact-form.tsx` | Leak review form + Formspree submit |
| `src/components/layout/site-shell.tsx` | Nav + footer wrapper |
| `src/components/motion/fade-up.tsx` | Section entrance |
| `src/components/motion/editorial-image.tsx` | Sticky parallax image (desktop) |
| `.env.example` | `VITE_FORMSPREE_ENDPOINT` |

---

## Page structure

```
SiteShell
└── bone page (pt-28 / pb-24)
    └── max-w-[1500px] grid lg:12 cols
        ├── LEFT lg:col-span-5
        │   ├── eyebrow (08) Contact
        │   ├── h1 Book a leak review.
        │   ├── intro paragraph
        │   ├── ContactForm (underline fields, no card box)
        │   └── link → /work
        └── RIGHT lg:col-span-6 lg:col-start-7 (hidden below lg)
            └── EditorialImage parallax sticky top-32
```

### Design intent

**Calm editorial**, not Phoenix drama. No full-lake background. No bone card floating on lake. Form sits directly on bone with **underline borders** (`border-b border-foreground/15`), mono eyebrows on labels, large transparent inputs. One sticky travertine image on desktop only.

Distinct from:
- Phoenix `/contact` (full `bg-lake`, bone form card, 4 fields only, fake submit)
- Homepage `#contact` CTA section (headline only, links to this page)

---

## Layout spec

| Element | Treatment |
|---------|-----------|
| Page bg | `bg-background` (bone) via SiteShell |
| Grid | `lg:grid-cols-12 lg:gap-20` |
| Copy column | `lg:col-span-5` |
| Image column | `hidden lg:block lg:col-span-6 lg:col-start-7` |
| H1 | `font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.92]` |
| Form fields | Underline style, no rounded card wrapper |
| Submit button | `rounded-full bg-foreground` → `hover:bg-lake`, disabled at 40% opacity |
| Sticky image | `EditorialImage variant="parallax" className="sticky top-32"` |

---

## Image (one file)

| Use | Path |
|-----|------|
| Sticky editorial (desktop) | `src/assets/editorial/travertine-linen.jpg` |

- `variant="parallax"` — scroll-linked Y motion, `aspect-[4/5] md:aspect-[3/4]`
- Caption: `Bone, stone, water. The palette we build inside.`
- `alt=""` (decorative)
- Hidden on mobile (`hidden lg:block`) — form is full-width on small screens

**Do not** swap in Midjourney library interiors here. Travertine is the contact accent (texture / palette story).

---

## ContactForm — fields & validation

**File:** `src/components/contact/contact-form.tsx`

### Required fields

| Field | Key | Notes |
|-------|-----|-------|
| Your name | `name` | |
| Email | `email` | Regex validation |
| Practice / clinic name | `practice` | |
| What's leaking? | `leaking` | Textarea, 4 rows |

### Optional fields

| Field | Key | Notes |
|-------|-----|-------|
| Website URL | `website` | |
| Consults per month | `consultsPerMonth` | Free text |
| Budget range | `budget` | Select: Under $8k, $8k–$12k, $12k–$20k, $20k+ |
| Timeline | `timeline` | Select: ASAP, 1–2 months, 3+ months, Just researching |

### Submit behavior

- Endpoint: `import.meta.env.VITE_FORMSPREE_ENDPOINT`
- Method: `POST` JSON to Formspree (`Content-Type: application/json`, `Accept: application/json`)
- Subject line: `Leak review · {practice}`
- If env missing: show error pointing to `hello@swannco.co`
- Success state: "Thank you, {firstName}." + two business days copy
- `tone` prop: `"light"` (default on contact page) or `"dark"` for future ink sections

### Env setup

```bash
# .env (copy from .env.example)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

---

## Prompt for Antigravity

```
Port Contact from ~/Downloads/swann-site-revamp-v2.

Route: /contact. Nav CTA: Book a leak review.

Copy:
- src/routes/contact.tsx
- src/components/contact/contact-form.tsx

Layout:
- Bone page, NOT full-lake Phoenix contact
- Left: eyebrow (08), h1, intro, underline form, /work link
- Right (lg only): sticky EditorialImage parallax
- Image: src/assets/editorial/travertine-linen.jpg
- Caption: Bone, stone, water. The palette we build inside.

Form:
- Full leak review fields (see contact-form.tsx)
- Formspree via VITE_FORMSPREE_ENDPOINT
- Required: name, email, practice, leaking textarea
- Submit label: Book a leak review

Do NOT:
- Full lake background
- Bone card on lake
- Fake submit with no backend
- Brand audit / start a project copy

Preview: :8790/contact
Read CONTACT_HANDOFF.md in repo.
```

---

## Historical reference (do not port as-is)

| Location | Notes |
|----------|-------|
| `~/.gemini/antigravity/scratch/swann-phoenix-v2/src/routes/contact.tsx` | Full `bg-lake` page, bone card, 4 fields, fake submit |
| Homepage `09-cta.tsx` | CTA headline only — links to `/contact`, not a duplicate form |
