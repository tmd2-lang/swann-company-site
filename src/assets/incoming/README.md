# Swann site images — drop folder

Production images are wired from `src/assets/editorial/`, `src/assets/work/`, and `src/assets/library/`.

## Current layout

```
../editorial/          hero-pool-arch.jpg, travertine-linen.jpg, studio-cinematic.jpg
../work/{slug}/        hero.jpg + scroll.jpg per Standard build
../library/            75 organized alternates (swan, interiors, studio-brand, …)
midjourney_session/    raw PNGs (gitignored, ~600MB) — keep locally for re-picks
```

Drop new batches into `misc/` or tell Cursor to process `midjourney_session/` again.
