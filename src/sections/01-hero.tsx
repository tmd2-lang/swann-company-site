import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroImg from "@/assets/editorial/hero-pool-arch.png";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { MaskedLine, Reveal } from "@/components/motion/masked-line";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={ref} id="top" className="relative w-full overflow-hidden bg-background">
      <div className="grid min-h-[100svh] w-full grid-cols-1 lg:grid-cols-12">
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: fade }}
          className="order-2 flex items-end px-6 pb-16 pt-28 sm:px-10 lg:order-1 lg:col-span-7 lg:pb-24 lg:pt-36"
        >
          <div className="max-w-[42rem]">
            <Reveal>
              <span className="eyebrow">Swann Company · Est. 2026</span>
            </Reveal>
            <h1 className="mt-8 text-[14vw] font-light leading-[0.92] tracking-[-0.04em] sm:text-[10vw] lg:text-[7.4vw]">
              <span className="block">
                <MaskedLine>From browsers</MaskedLine>
              </span>
              <span className="block italic text-lake">
                <MaskedLine delay={140}>to booked.</MaskedLine>
              </span>
            </h1>
            <Reveal delay={400} className="mt-10 max-w-md">
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                We design and build websites for med spas and skin clinics that already have traffic, reviews, and
                booking software, and fix conversion before anyone talks ad spend.
              </p>
            </Reveal>
            <Reveal delay={560} className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="/contact" variant="solid">
                Book a leak review
              </MagneticButton>
              <MagneticButton href="/work" variant="ghost">
                See studio work
              </MagneticButton>
            </Reveal>
          </div>
        </motion.div>
        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative h-[68vh] w-full lg:h-screen overflow-hidden">
            <motion.img
              src={heroImg}
              alt=""
              style={reduce ? undefined : { y: imgY, scale: imgScale }}
              className="absolute inset-0 h-[115%] w-full object-cover object-[40%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent lg:from-background/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
