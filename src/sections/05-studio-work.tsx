import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { STUDIO_PROJECTS } from "@/data/projects";
import { WorkSectionHeader } from "@/components/work/work-tile";
import { MaskedLine } from "@/components/motion/masked-line";
import type { StudioProject } from "@/data/projects";

function HomeCaseTile({ project }: { project: StudioProject }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.92, 1, 0.97]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-1.2, 1.2]);

  return (
    <motion.article ref={ref} style={{ scale }} className="border-t border-foreground/10 py-16 md:py-24">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        data-cursor="hover"
        className="block px-6 md:px-10"
      >
        <motion.div
          style={{ rotate }}
          className="relative aspect-[16/10] overflow-hidden rounded-sm md:aspect-[21/9]"
        >
          <img
            src={project.thumbImage}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />
          <motion.div
            style={{ y }}
            className="absolute inset-0 flex flex-col justify-between p-8 text-background md:p-12"
          >
            <div className="flex items-start justify-between text-eyebrow opacity-80">
              <span>Standard / {project.id}</span>
              <span>
                {project.practiceType} · {project.year}
              </span>
            </div>
            <div>
              <h3 className="font-display text-[12vw] font-light leading-[0.95] tracking-[-0.04em] sm:text-[8vw] lg:text-[6vw]">
                <MaskedLine>{project.name}</MaskedLine>
              </h3>
              <div className="mt-6 inline-flex items-center gap-2 text-eyebrow opacity-90">
                View build <span aria-hidden>→</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            initial={{ x: "-120%" }}
            whileInView={{ x: "120%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-background/10 to-transparent"
          />
        </motion.div>
      </Link>
      <div className="mt-8 grid gap-6 px-6 md:grid-cols-12 md:px-10">
        <div className="text-eyebrow text-muted-foreground md:col-span-3">Studio note</div>
        <p className="text-display text-xl leading-snug text-balance md:col-span-9 md:text-2xl">{project.oneLiner}</p>
      </div>
    </motion.article>
  );
}

export function StudioWork() {
  return (
    <section id="work" className="border-t border-foreground/10 bg-background">
      <WorkSectionHeader />
      <div>
        {STUDIO_PROJECTS.map((project) => (
          <HomeCaseTile key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
