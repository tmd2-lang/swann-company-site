import type { StudioProject } from "@/data/projects";
import { BuildPreview } from "@/components/work/build-preview";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { FadeUp } from "@/components/motion/fade-up";
import { EditorialImage } from "@/components/motion/editorial-image";

export function CaseStudyLayout({ project }: { project: StudioProject }) {
  const whatThisIs = `A Swann studio build for a ${project.practiceType.toLowerCase()} in ${project.city}. Built to the same standard we ship on every engagement: booking path, trust placement, treatment depth, mobile-first.`;

  return (
    <article className="pb-24 md:pb-32">
      <header className="border-b border-foreground/10 px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-eyebrow text-muted-foreground">
            Swann studio build · {project.practiceType} · {project.city} · {project.year}
          </p>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {project.oneLiner}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <FadeUp className="border-b border-foreground/10 py-14 md:py-20">
          <div className="grid gap-6 md:grid-cols-12">
            <h2 className="text-eyebrow text-muted-foreground md:col-span-3">What this is</h2>
            <p className="text-lg leading-relaxed text-foreground/80 md:col-span-9 md:text-xl">{whatThisIs}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05} className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:col-start-8 md:order-2">
              <EditorialImage
                src={project.accentImage}
                alt=""
                caption={project.accentCaption}
                variant="parallax"
              />
            </div>
            <div className="md:col-span-6 md:order-1">
              <h2 className="text-eyebrow text-muted-foreground">The premise</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">{project.premise}</p>
            </div>
          </div>
        </FadeUp>

        <EditorialImage
          src={project.thumbImage}
          alt={`${project.name} studio build preview`}
          caption="Built experience. Scroll capture from the studio build."
          variant="break"
        />

        <FadeUp delay={0.1} className="border-b border-foreground/10 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <h2 className="text-eyebrow text-muted-foreground md:col-span-3">What we optimized</h2>
            <ul className="space-y-6 md:col-span-9">
              {project.optimizations.map((item) => (
                <li key={item} className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="py-14 md:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-eyebrow text-muted-foreground">The build</h2>
            <span className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Standard / {project.id}
            </span>
          </div>
          <BuildPreview project={project} />
        </FadeUp>

        <FadeUp delay={0.2} className="border-t border-foreground/10 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl leading-[0.95] md:text-5xl">Want this for your practice?</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                Book a leak review. We&apos;ll look at your current site and show you what we&apos;d rebuild first.
              </p>
            </div>
            <div className="md:col-span-5 md:flex md:justify-end">
              <MagneticButton href="/contact" variant="solid">
                Book a leak review
              </MagneticButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
