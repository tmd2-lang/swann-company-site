import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SplitReveal } from "@/components/motion/split-reveal";
import { FadeUp } from "@/components/motion/fade-up";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3">
            <span className="text-eyebrow text-muted-foreground">(06) Begin</span>
            <span className="h-px w-12 bg-foreground/20" />
          </div>

          <h2 className="col-span-12 mt-10 font-display text-[clamp(2.6rem,7.5vw,8rem)] leading-[0.95] tracking-[-0.025em] text-foreground">
            <SplitReveal as="span" text="See where your site" className="block" />
            <SplitReveal
              as="span"
              text="is leaking consults."
              className="block italic text-muted-foreground"
              delay={0.2}
            />
          </h2>

          <FadeUp delay={0.4} className="col-span-12 mt-10 max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl">
            Send your current site. We&apos;ll review the booking path, trust placement, treatment pages, and mobile
            friction. Then we&apos;ll show you what we&apos;d rebuild first, personally, within two business days.
          </FadeUp>

          <FadeUp delay={0.55} className="col-span-12 mt-12">
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" variant="solid">
                Book a leak review
              </MagneticButton>
              <span className="ml-4 font-mono-x text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Reply within two business days · Two builds per month
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.65} className="col-span-12 mt-6">
            <Link to="/contact" className="text-sm text-lake hover:underline">
              Go to the leak review form →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
