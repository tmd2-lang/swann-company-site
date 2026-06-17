import { Link } from "@tanstack/react-router";
import type { StudioProject } from "@/data/projects";
import { MaskedLine } from "@/components/motion/masked-line";

export function WorkTile({ project }: { project: StudioProject }) {
  return (
    <article className="group relative w-full overflow-hidden border-t border-foreground/10">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        data-cursor="hover"
        className="block"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden grain-overlay md:aspect-[21/9]">
          <img
            src={project.thumbImage}
            alt={project.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-transform duration-[2200ms] ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-12 md:pb-16 lg:px-20">
            <span className="text-eyebrow text-bone/85">
              Standard / {project.id} · {project.practiceType} · {project.year}
            </span>
            <h3 className="mt-5 font-display text-[12vw] font-light leading-[0.95] tracking-[-0.04em] text-bone sm:text-[8vw] lg:text-[6vw]">
              <MaskedLine>{project.name}</MaskedLine>
            </h3>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/85 md:text-base">{project.oneLiner}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-eyebrow text-bone/80">
              View build <span aria-hidden>→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function WorkSectionHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-6 px-6 md:grid-cols-12 md:px-10 ${compact ? "py-12 md:py-16" : "py-16 md:py-20"}`}>
      <div className="text-eyebrow text-muted-foreground md:col-span-3">(02) The Standard</div>
      <div className="md:col-span-9">
        <h2 className="text-display text-5xl leading-[0.92] md:text-7xl">The Standard.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Six practice types, one conversion bar. Each build shows what we ship when a practice is ready.
        </p>
      </div>
    </div>
  );
}
