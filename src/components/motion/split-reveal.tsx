import { motion } from "motion/react";

const EASE = [0.2, 0.7, 0.1, 1] as const;

export function SplitReveal({
  text,
  className = "",
  as: As = "span",
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const Tag = motion[As as "span"] as typeof motion.span;
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline pb-[0.08em] pr-[0.25em]">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "115%", opacity: 0, filter: "blur(8px)" },
              show: { y: "0%", opacity: 1, filter: "blur(0px)", transition: { duration, ease: EASE } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
