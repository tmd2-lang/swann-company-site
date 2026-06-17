import { motion, useScroll, useSpring } from "motion/react";

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.5 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] bg-lake origin-left z-[70]" />;
}
