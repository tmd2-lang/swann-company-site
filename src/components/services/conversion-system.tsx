import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { FadeUp } from "@/components/motion/fade-up";
import { RevealMotion } from "@/components/motion/reveal-motion";
import { SplitReveal } from "@/components/motion/split-reveal";
import siteImg from "@/assets/library/interiors/a_calm_modern_treatment_room_shot_like_editorial_interior_des_1e026ffb-19e2-40d0-91aa-722887a7f583_1.jpg";
import pagesImg from "@/assets/library/interiors/the_interior_of_a_serene_high-end_med_spa_reception_bright_an_72b1d7a6-f614-4255-919a-cefe807d98ea_3.jpg";
import proofImg from "@/assets/library/interiors/premium_medspa_website_design_mood_image_spa_towels_skincare__08b0c333-8208-47ac-bd24-17b568accd7a_3.jpg";
import bookingImg from "@/assets/library/swan/Swann-inspired_beauty_business_workspace_pale_stone_desk_fold_6458c6c3-72ad-4006-a071-c8284cb0ca99_2.jpg";

const LAYERS = [
  {
    n: "01",
    label: "Site",
    title: "Looks as good as the work",
    body: "Custom mobile-first design that matches the quality of the treatments behind the door.",
    image: siteImg,
    offset: "lg:pt-0",
  },
  {
    n: "02",
    label: "Pages",
    title: "Answers before they ask",
    body: "Treatment pages built around objections, trust, pricing context, and the decision to book.",
    image: pagesImg,
    offset: "lg:pt-24",
  },
  {
    n: "03",
    label: "Proof",
    title: "Trust at first glance",
    body: "Reviews, credentials, galleries, and team proof placed where hesitation usually wins.",
    image: proofImg,
    offset: "lg:pt-10",
  },
  {
    n: "04",
    label: "Booking",
    title: "Always open",
    body: "Booking, click-to-text, missed-call text-back, and reminders on the path to consult.",
    image: bookingImg,
    offset: "lg:pt-32",
  },
] as const;

function LayerColumn({
  layer,
  index,
}: {
  layer: (typeof LAYERS)[number];
  index: number;
}) {
  const imageRef = useRef<HTMLElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();

  return (
    <RevealMotion delay={index * 0.14} y={40}>
      <article className={`flex h-full flex-col ${layer.offset}`}>
        <div className="flex items-baseline justify-between gap-4 border-t border-lake/40 pt-8">
          <span className="text-eyebrow text-muted-foreground">{layer.label}</span>
          <span className="font-display text-5xl leading-none text-lake/25 md:text-6xl">{layer.n}</span>
        </div>

        <h3 className="mt-10 font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.05] text-foreground">
          {layer.title}
        </h3>
        <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/75 md:text-[15px]">
          {layer.body}
        </p>

        <figure ref={imageRef} className="relative mt-12 aspect-[4/5] overflow-hidden grain-overlay md:mt-14">
          <motion.img
            src={layer.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
            initial={reduce ? false : { scale: 1.08, opacity: 0.85 }}
            animate={imageInView ? { scale: 1, opacity: 1 } : undefined}
            transition={{ duration: 1.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { scale: 1.04 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </figure>
      </article>
    </RevealMotion>
  );
}

export function ConversionSystem() {
  return (
    <section className="relative overflow-hidden bg-secondary py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] grain-overlay" aria-hidden />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <FadeUp className="md:col-span-4">
            <p className="text-eyebrow text-muted-foreground">What you get</p>
          </FadeUp>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.94] tracking-tight text-foreground">
              <SplitReveal as="span" text="Four layers between" className="block" />
              <SplitReveal
                as="span"
                text="browse and booked."
                className="mt-1 block italic text-lake"
                delay={0.12}
              />
            </h2>
          </div>
        </div>

        <FadeUp delay={0.08} className="mt-10 max-w-3xl md:mt-14">
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            Traffic before conversion is sending more people through the same leaky bucket. Every Swann build
            ships the same conversion stack. Tiers scale depth and page count, not the standard.
          </p>
        </FadeUp>

        <div className="mt-24 grid grid-cols-1 gap-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-24 lg:mt-32 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 xl:gap-x-12">
          {LAYERS.map((layer, i) => (
            <LayerColumn key={layer.n} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
