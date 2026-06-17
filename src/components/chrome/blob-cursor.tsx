import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function BlobCursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, reduce]);

  if (reduce) return null;
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block">
      <motion.div
        animate={{ scale: hover ? 2.6 : 1, opacity: hover ? 0.18 : 0.35 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="-translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-lake mix-blend-multiply blur-[2px]"
      />
    </motion.div>
  );
}
