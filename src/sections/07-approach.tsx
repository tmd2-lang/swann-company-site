import { useState } from "react";
import { motion } from "motion/react";
import { RevealMotion } from "@/components/motion/reveal-motion";

const PILLARS = [
  {
    n: "01",
    title: "Fit call",
    body: "We confirm traffic, reviews, booking software, and whether the site is actually the constraint.",
    tags: ["Traffic", "Reviews", "Fit"],
  },
  {
    n: "02",
    title: "One intake",
    body: "You share assets, services, and proof. Swann turns it into the build plan.",
    tags: ["Assets", "Services", "Plan"],
  },
  {
    n: "03",
    title: "Build + launch",
    body: "Two approvals. A 30-day launch target when assets and sign-off stay on schedule.",
    tags: ["Approvals", "Launch", "Mobile"],
  },
  {
    n: "04",
    title: "Compound",
    body: "Post-launch optimization. If conversion doesn't beat baseline in 60 days, we keep going free.",
    tags: ["Optimize", "CRO", "Guarantee"],
  },
];

function ApproachRow({
  n,
  title,
  body,
  tags,
  index,
}: {
  n: string;
  title: string;
  body: string;
  tags: string[];
  index: number;
}) {
  const [hover, setHover] = useState(false);
  return (
    <RevealMotion delay={index * 0.05}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative grid grid-cols-1 gap-6 overflow-hidden border-b border-foreground/15 py-10 md:grid-cols-12 md:gap-10 md:py-16"
      >
        <motion.div
          aria-hidden
          initial={false}
          animate={{ scaleX: hover ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 origin-left bg-foreground"
        />
        <div className="relative z-10 text-eyebrow text-muted-foreground transition-colors group-hover:text-background/60 md:col-span-1">
          {n}
        </div>
        <h3 className="relative z-10 font-display text-4xl leading-none transition-colors group-hover:text-background md:col-span-4 md:text-6xl">
          <span
            className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hover ? "translate-x-3" : ""
            }`}
          >
            {title}
          </span>
        </h3>
        <p className="relative z-10 max-w-prose text-base leading-relaxed text-foreground/75 transition-colors group-hover:text-background/80 md:col-span-4 md:text-lg">
          {body}
        </p>
        <ul className="relative z-10 flex flex-wrap gap-2 font-mono-x content-start md:col-span-3 md:justify-end">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-foreground/20 px-3 py-1 text-[10px] uppercase tracking-wider text-foreground/80 transition-colors group-hover:border-background/30 group-hover:text-background/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </RevealMotion>
  );
}

export function Approach() {
  return (
    <section id="approach" className="relative bg-background px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div className="text-eyebrow text-muted-foreground">(04) Approach</div>
          <h2 className="max-w-[18ch] font-display text-[10vw] leading-[0.95] text-foreground md:text-[5.4vw]">
            Four phases. <em className="text-lake">One outcome.</em>
          </h2>
        </div>
        <div className="border-t border-foreground/15">
          {PILLARS.map((p, i) => (
            <ApproachRow key={p.n} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
