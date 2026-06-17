import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { EditorialImage } from "@/components/motion/editorial-image";
import { MagneticButton } from "@/components/motion/magnetic-button";
import studioImg from "@/assets/editorial/studio-cinematic.jpg";
import workspaceImg from "@/assets/library/swan/Swann-inspired_beauty_business_workspace_pale_stone_desk_fold_6458c6c3-72ad-4006-a071-c8284cb0ca99_2.jpg";
import swanImg from "@/assets/library/swan/graceful_white_swan_gliding_through_a_still_reflecting_pool_i_677b9395-2f8b-424e-a33a-ad3ba79265eb_1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Swann Company" },
      {
        name: "description",
        content: "Swann Company designs and builds conversion-ready websites for med spas and skin clinics.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <div className="pb-24 pt-28 md:pb-32 md:pt-36">
        <header className="border-b border-foreground/10 px-6 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-[1500px]">
            <FadeUp>
              <p className="text-eyebrow text-muted-foreground">(09) About</p>
              <h1 className="mt-8 max-w-[14ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92]">
                A studio for practices that already do the work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Swann designs and builds websites for med spas and skin clinics with existing traffic, reviews, and
                booking software. We fix conversion before anyone talks ad spend.
              </p>
            </FadeUp>
          </div>
        </header>

        <EditorialImage
          src={studioImg}
          alt=""
          caption="Editorial restraint, not agency noise."
          variant="break"
          className="mx-auto max-w-[1500px] px-6 md:px-10"
        />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <FadeUp className="py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <h2 className="text-eyebrow text-muted-foreground">What we believe</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
                <p>
                  Your site is the room before the consult. It sets price, trust, and the decision to book. Most med spa
                  sites look interchangeable because they were built like brochures, not booking engines.
                </p>
                <p>
                  We work with operators who already have proof and traffic. Our job is to make the digital experience
                  match the clinical one, with a clear path from first scroll to booked consult.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid gap-10 border-t border-foreground/10 py-16 md:grid-cols-2 md:py-24">
            <FadeUp delay={0.05}>
              <EditorialImage
                src={workspaceImg}
                alt=""
                caption="Small studio. Two custom builds per month."
                variant="parallax"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <EditorialImage
                src={swanImg}
                alt=""
                caption="Quiet mark. Loud conversion discipline."
                variant="parallax"
              />
            </FadeUp>
          </div>

          <FadeUp className="border-t border-foreground/10 py-16 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl leading-[0.95] md:text-5xl">From browsers to booked.</h2>
                <p className="mt-4 max-w-md text-muted-foreground">Web design for med spas & skin clinics.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="/contact" variant="solid">
                  Book a leak review
                </MagneticButton>
                <MagneticButton href="/work" variant="ghost">
                  See studio work
                </MagneticButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SiteShell>
  );
}
