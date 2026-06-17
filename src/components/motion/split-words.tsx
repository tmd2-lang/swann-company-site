import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export function SplitWords({ text, className = "", as: Tag = "h2" }: { text: string; className?: string; as?: "h2" | "p" }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const words = text.split(" ");
  const Component = Tag === "p" ? motion.p : motion.h2;
  return (
    <Component ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%", rotate: 4 }}
            animate={inView ? { y: 0, rotate: 0 } : undefined}
            transition={{ duration: 1, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
