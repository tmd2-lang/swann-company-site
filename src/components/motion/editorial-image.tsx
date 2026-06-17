import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  variant?: "inline" | "break" | "parallax";
  className?: string;
};

export function EditorialImage({
  src,
  alt,
  caption,
  variant = "inline",
  className = "",
}: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ["-6%", "6%"]);

  if (variant === "break") {
    return (
      <figure ref={ref} className={`relative my-16 md:my-24 overflow-hidden ${className}`.trim()}>
        <div className="relative aspect-[21/9] md:aspect-[2.4/1] overflow-hidden grain-overlay">
          <motion.img
            src={src}
            alt={alt}
            style={reduce ? undefined : { y, scale: 1.08 }}
            className="absolute inset-0 h-[115%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
        </div>
        {caption && (
          <figcaption className="mt-4 font-mono-x text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (variant === "parallax") {
    return (
      <figure ref={ref} className={`relative overflow-hidden rounded-sm ${className}`.trim()}>
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden grain-overlay">
          <motion.img
            src={src}
            alt={alt}
            style={reduce ? undefined : { y }}
            className="absolute inset-0 h-[112%] w-full object-cover"
          />
        </div>
        {caption && (
          <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm grain-overlay">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
