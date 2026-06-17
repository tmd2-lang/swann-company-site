import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const KINETIC_WORDS = [
  { t: "QUIET BROWSERS", k: "booked." },
  { t: "TRAFFIC WITHOUT", k: "conversion." },
  { t: "THE SITE", k: "before ads." },
  { t: "TRUST AT", k: "the CTA." },
  { t: "BUILD IT", k: "like it." },
];

export function KineticBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const reduce = useReducedMotion();
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-108%"]);

  return (
    <section ref={ref} className="relative h-[550vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain-overlay" />
        <motion.div
          style={reduce ? undefined : { x }}
          className="flex shrink-0 items-center gap-16 md:gap-32 whitespace-nowrap pl-[10vw] pr-[15vw]"
        >
          {KINETIC_WORDS.map((w, i) => (
            <div key={i} className="flex items-baseline gap-6 md:gap-10">
              <span className="text-display text-[22vw] md:text-[16vw] leading-[0.85] tracking-[-0.05em]">{w.t}</span>
              <span className="text-display italic text-lake text-[10vw] md:text-[7vw] leading-none">{w.k}</span>
              {i < KINETIC_WORDS.length - 1 && <span className="text-lake text-[6vw] md:text-[4vw]">✦</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
