import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";

export function VelocityMarquee({
  items,
  baseV,
  speed = 1,
}: {
  items: { v: string; l: string }[];
  baseV: number;
  /** Multiplier for base drift (use < 1 for slower tickers) */
  speed?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(1);
  const reduce = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseV * speed * (delta / 1000) * 4;
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(f) * 0.12;
    baseX.set(baseX.get() + moveBy);
  });

  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div style={{ x }} className="flex shrink-0 gap-16 pr-16">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-baseline gap-4 shrink-0">
            <span className="text-display text-5xl md:text-7xl text-background">{item.v}</span>
            <span className="text-sm md:text-base max-w-[18ch] text-background/60 leading-tight">{item.l}</span>
            <span className="text-lake text-3xl md:text-5xl ml-8">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
