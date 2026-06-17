# Nav / menu bar handoff (canonical)

**For Antigravity / any porting agent.**  
**Repo:** `/Users/tjdozier7/Downloads/swann-site-revamp-v2`  
**File:** `src/components/chrome/nav.tsx`  
**Preview:** `npm run dev -- --port 8790`

---

## Short answer: not just Work and About

v2 nav links:

| Label | Target | Type |
|-------|--------|------|
| **Work** | `/work` | Route |
| **Services** | `/services` | Route (was Phoenix "System" / `/pricing`) |
| **About** | `/about` | Route |
| **Approach** | `/#approach` | Homepage hash |
| *(clock)* | — | `HH:MM NYC` live time |
| **Book a leak review** | `/contact` | CTA button (right) |

**Minimum for Antigravity if trimming:** Work + Services + About + Contact CTA. Keep **Approach** on homepage unless you intentionally drop the process section from nav.

**Do NOT use:** Phoenix `Work` → `/#work` only, `System` → `/pricing`, `Start a project`.

---

## Copy this file

```
src/components/chrome/nav.tsx
```

Nav is included via `SiteShell` (`src/components/layout/site-shell.tsx`) on all subpages, and directly on homepage in `src/routes/index.tsx`.

---

## Layout spec

```
┌─────────────────────────────────────────────────────────────────┐
│  Swann.          Work  Services  About  Approach  14:32 NYC    [Book a leak review] │
└─────────────────────────────────────────────────────────────────┘
```

| Zone | Spec |
|------|------|
| Container | `fixed inset-x-0 top-0 z-50`, `max-w-[1500px]`, `px-6 md:px-10` |
| Scrolled | `bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3` |
| Default | `bg-transparent py-6` |
| Wordmark | `font-display text-2xl md:text-3xl` → `Swann` + lake `.` |
| Nav links | `font-mono-x text-eyebrow`, `gap-10`, `hover:text-lake` |
| Clock | `tabular-nums text-foreground/50`, updates every 30s, `America/New_York` |
| CTA | Rounded pill, mono uppercase, pulsing lake dot, `hover:bg-foreground hover:text-background` |
| Mobile | Hamburger → stacked links + CTA + clock (`md:hidden` drawer) |

**Phoenix difference:** Phoenix uses logo mark image beside wordmark. v2 is **wordmark only** (no nav logo). Port v2 pattern unless user asks for mark.

---

## LINKS array (exact)

```ts
const LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Approach", to: "/", hash: "approach" },
] as const;
```

TanStack Router: `Link` with `to` + optional `hash` for Approach.

---

## Route map (what each link needs)

| Nav label | Route file | Notes |
|-----------|------------|-------|
| Work | `src/routes/work/index.tsx` | The Standard index. Not `/#work` only. |
| Services | `src/routes/services.tsx` | See `SERVICES_HANDOFF.md` |
| About | `src/routes/about.tsx` | Studio page |
| Approach | `src/sections/07-approach.tsx` | `id="approach"` on homepage |
| Contact CTA | `src/routes/contact.tsx` | See `CONTACT_HANDOFF.md` |

Homepage work section `#work` still exists for deep links, but nav **Work** goes to `/work` (dedicated index + case studies).

---

## Phoenix → v2 migration

| Phoenix | v2 |
|---------|-----|
| Work → `/#work` | Work → `/work` |
| System → `/pricing` | Services → `/services` |
| *(missing)* | About → `/about` |
| *(missing)* | Approach → `/#approach` |
| Start a project | Book a leak review |

---

## Prompt for Antigravity

```
Update nav in swann-phoenix-v2 to match ~/Downloads/swann-site-revamp-v2/src/components/chrome/nav.tsx.

Links (in order):
- Work → /work
- Services → /services
- About → /about
- Approach → /#approach
- NYC clock (mono, tabular)
- CTA: Book a leak review → /contact

Style:
- font-mono-x + text-eyebrow on links
- font-display wordmark (no logo mark in nav unless asked)
- Scrolled blur bar, transparent at top
- Mobile hamburger with full link list

Ensure routes exist: /work, /services, /about, /contact
Read NAV_HANDOFF.md + SERVICES_HANDOFF.md + CONTACT_HANDOFF.md
```

---

## Related handoffs

- `SERVICES_HANDOFF.md` — `/services` page
- `CONTACT_HANDOFF.md` — `/contact` page
- `src/routes/about.tsx` — About page (no separate handoff yet)
