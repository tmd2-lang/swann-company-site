import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { BonusCard } from "@/components/services/bonus-card";
import { ConversionSystem } from "@/components/services/conversion-system";
import { ServiceTierCard } from "@/components/services/service-tier-card";
import { FadeUp } from "@/components/motion/fade-up";
import { EditorialImage } from "@/components/motion/editorial-image";
import { MagneticButton } from "@/components/motion/magnetic-button";
import travertineImg from "@/assets/editorial/travertine-linen.jpg";
import heroBreakImg from "@/assets/library/interiors/dramatic_luxury_interior_with_black_reflective_floor_and_ivor_1603da1b-66bc-44d2-ac3a-d932702109c7_0.jpg";
import launchImg from "@/assets/library/interiors/a_calm_modern_treatment_room_shot_like_editorial_interior_des_1e026ffb-19e2-40d0-91aa-722887a7f583_0.jpg";
import growthImg from "@/assets/library/interiors/the_interior_of_a_serene_high-end_med_spa_reception_bright_an_72b1d7a6-f614-4255-919a-cefe807d98ea_0.jpg";
import dominanceImg from "@/assets/library/interiors/hero_image_for_a_luxury_creative_studio_serving_medspas_and_a_f503b2c6-33f8-41cf-be68-7edd1131b542_1.jpg";
import bonusReviewImg from "@/assets/library/interiors/editorial_still_life_for_a_boutique_medspa_web_design_studio__35469284-8d33-433c-a9ad-3f4ac1c9ee97_0.jpg";
import bonusPhotoImg from "@/assets/library/interiors/premium_medspa_website_design_mood_image_spa_towels_skincare__08b0c333-8208-47ac-bd24-17b568accd7a_1.jpg";
import bonusCalendarImg from "@/assets/library/interiors/boutique_skin_studio_atmosphere_towels_and_skincare_bottles_o_1c1360a9-1a82-4da6-be6b-21f5c180300e_2.jpg";
import scarcityBgImg from "@/assets/library/interiors/luxury_creative_studio_mood_image_for_a_medspa_web_designer_r_9f770f3f-58e2-49cc-9053-a20e94c389de_1.jpg";

const TIERS = [
  {
    name: "Launch",
    price: "$6,000",
    who: "For owners with an outdated site who need a premium, conversion-ready rebuild.",
    featured: false,
    image: launchImg,
    stagger: "low" as const,
    deliverables: [
      "5-page premium med spa website, mobile-first",
      "Booking CTA on every page",
      "Google Business Profile cleanup + basic local SEO",
      "Review widget + credentials/trust section",
      "Online booking integration",
      "Conversion tracking setup",
      "30-day launch timeline",
    ],
  },
  {
    name: "Growth",
    price: "$9,500",
    who: "For established med spas with existing traffic, reviews, and booking software.",
    featured: true,
    image: growthImg,
    stagger: "mid" as const,
    deliverables: [
      "Everything in Launch, plus:",
      "10 treatment-specific conversion pages",
      "Before/after gallery buildout",
      "Objection-handling FAQs per treatment",
      "Missed-call text-back setup",
      "60 days post-launch optimization",
      "Monthly booking conversion report",
    ],
  },
  {
    name: "Dominance",
    price: "From $15,000",
    who: "For 1–3 location med spas that want to own local search and AI discovery.",
    featured: false,
    image: dominanceImg,
    stagger: "high" as const,
    deliverables: [
      "Everything in Growth, plus:",
      "20 treatment/service pages",
      "Local authority content + competitor comparison pages",
      "Seasonal promo landing pages",
      "Front desk booking script pack",
      "90 days conversion optimization",
      "Monthly strategy calls for 3 months",
    ],
  },
];

const BONUSES = [
  {
    title: "The Review Engine",
    description: "Build-once automation that turns patient proof into homepage pull.",
    image: bonusReviewImg,
  },
  {
    title: "MedSpa Photo Day Kit",
    description: "Shot list, styling notes, and framing for real clinic assets.",
    image: bonusPhotoImg,
  },
  {
    title: "12-Month Promo Calendar",
    description: "Seasonal booking prompts and launch-week content, ready to publish.",
    image: bonusCalendarImg,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Swann Company" },
      {
        name: "description",
        content: "The MedSpa Booking Conversion System. Three tiers for med spas with existing traffic and proof.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <header className="border-b border-foreground/10 px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1500px]">
          <FadeUp>
            <p className="text-eyebrow text-muted-foreground">(07) Services</p>
            <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92]">
              Conversion-first builds. Not paid-traffic management.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              We rebuild your site into a booking engine for the traffic and proof you already have. Strategy,
              design, development, and launch optimization. No ad spend required to start.
            </p>
          </FadeUp>
        </div>
      </header>

      <EditorialImage
        src={heroBreakImg}
        alt=""
        caption="The room before the consult. We build for that moment."
        variant="break"
        className="mx-auto max-w-[1500px] px-6 md:px-10"
      />

      <ConversionSystem />

      <section className="bg-ink py-20 text-bone md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <FadeUp>
            <p className="text-eyebrow text-bone/50">Build tiers</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]">
              Three levels. One studio standard.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
              Deposit at kickoff. Balance due at launch. Every tier is a custom build, fully done for you.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-end">
            {TIERS.map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.07}>
                <ServiceTierCard
                  name={tier.name}
                  price={tier.price}
                  who={tier.who}
                  image={tier.image}
                  featured={tier.featured}
                  deliverables={tier.deliverables}
                  stagger={tier.stagger}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <FadeUp>
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <h2 className="text-eyebrow text-muted-foreground md:col-span-3">Included bonuses</h2>
              <p className="text-lg leading-relaxed text-foreground/80 md:col-span-9 md:max-w-2xl">
                Every build ships with tools that keep conversion compounding after launch.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BONUSES.map((bonus, i) => (
              <FadeUp key={bonus.title} delay={i * 0.06}>
                <BonusCard title={bonus.title} description={bonus.description} image={bonus.image} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1500px]">
          <FadeUp>
            <div className="grid overflow-hidden border border-foreground/12 md:grid-cols-2">
              <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
                <p className="text-eyebrow text-muted-foreground">Guarantee</p>
                <p className="mt-5 max-w-lg font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-snug">
                  If your new site does not beat your old visitor-to-booking rate within 60 days of launch, we keep
                  optimizing the core booking pages free until it does.
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Conversion tracking installed before launch. Balance due at launch. Free optimization only, not a
                  refund.
                </p>
              </div>
              <div className="relative min-h-[18rem] grain-overlay md:min-h-0">
                <img src={travertineImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-ink/25" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-16 flex flex-wrap items-center gap-4 border-t border-foreground/10 pt-16">
            <MagneticButton href="/contact" variant="solid">
              Book a leak review
            </MagneticButton>
            <Link to="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              See studio work →
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-bone md:py-20">
        <img
          src={scarcityBgImg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-[2px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden />
        <div className="relative mx-auto max-w-[1500px] px-6 text-center md:px-10">
          <FadeUp>
            <p className="text-eyebrow text-bone/50">Capacity</p>
            <p className="mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">
              Two custom builds per month.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-bone/65">
              One Growth or Dominance slot, and one Launch slot. Small studio by design.
            </p>
          </FadeUp>
        </div>
      </section>
    </SiteShell>
  );
}
