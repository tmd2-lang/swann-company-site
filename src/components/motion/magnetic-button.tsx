import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

type MagneticButtonProps = {
  children: React.ReactNode;
  variant: "solid" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
};

export function MagneticButton({
  children,
  variant,
  href,
  onClick,
  type = "button",
  showArrow = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const reduce = useReducedMotion();
  const base =
    "inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors";
  const cls =
    variant === "solid"
      ? `${base} bg-foreground text-background hover:bg-lake`
      : `${base} border border-foreground/25 hover:bg-foreground/5`;

  const onMove = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <>
      {children}
      {showArrow && <span aria-hidden>→</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        data-cursor="hover"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      data-cursor="hover"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cls}
    >
      {content}
    </motion.button>
  );
}
