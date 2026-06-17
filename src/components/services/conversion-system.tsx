import { FadeUp } from "@/components/motion/fade-up";
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
    offset: "lg:pt-14",
  },
  {
    n: "03",
    label: "Proof",
    title: "Trust at first glance",
    body: "Reviews, credentials, galleries, and team proof placed where hesitation usually wins.",
    image: proofImg,
    offset: "lg:pt-6",
  },
  {
    n: "04",
    label: "Booking",
    title: "Always open",
    body: "Booking, click-to-text, missed-call text-back, and reminders on the path to consult.",
    image: bookingImg,
    offset: "lg:pt-20",
  },
] as const;

export function ConversionSystem() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] grain-overlay"
        aria-hidden
      />

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

        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-foreground/10">
          {LAYERS.map((layer, i) => (
            <FadeUp key={layer.n} delay={0.1 + i * 0.07}>
              <article className={`flex h-full flex-col ${layer.offset} lg:px-8 lg:first:pl-0 lg:last:pr-0`}>
                <div className="flex items-baseline justify-between gap-4 border-t border-lake/40 pt-6">
                  <span className="text-eyebrow text-muted-foreground">{layer.label}</span>
                  <span className="font-display text-5xl leading-none text-lake/25 md:text-6xl">{layer.n}</span>
                </div>

                <h3 className="mt-8 font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.05] text-foreground">
                  {layer.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75 md:text-[15px]">
                  {layer.body}
                </p>

                <figure className="relative mt-10 aspect-[4/5] overflow-hidden grain-overlay sm:mt-12">
                  <img
                    src={layer.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                </figure>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
