import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const MANIFESTO_TEXT =
  "A beautiful med spa site can still leak consults. Buyers don't need a brochure. They need to feel safe, clear, and ready enough to book. Swann builds for that moment.";

function ScrubWord({
  children,
  progress,
  range,
  reduce,
}: {
  children: React.ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  reduce: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="mr-[0.25em] inline-block">
      <motion.span style={reduce ? undefined : { opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const reduce = !!useReducedMotion();
  const words = MANIFESTO_TEXT.split(" ");

  return (
    <section className="relative px-6 md:px-10 py-32 md:py-56">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-center justify-between text-eyebrow text-muted-foreground">
          <span>(01) Position</span>
          <span>Web design for med spas & skin clinics</span>
        </div>
        <p
          ref={ref}
          aria-label={MANIFESTO_TEXT}
          className="text-display text-[8.5vw] md:text-[5.4vw] leading-[1.02] tracking-[-0.025em] flex flex-wrap"
        >
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <ScrubWord key={i} progress={scrollYProgress} range={[start, end]} reduce={reduce}>
                {w}
              </ScrubWord>
            );
          })}
        </p>
      </div>
    </section>
  );
}
