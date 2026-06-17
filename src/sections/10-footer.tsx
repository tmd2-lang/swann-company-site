import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import swannMarkInk from "@/assets/swann-mark-ink.svg";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const reduce = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-2%"]);

  return (
    <footer ref={ref} className="border-t border-foreground/15 px-6 md:px-10 pt-12 pb-6 overflow-hidden">
      <div className="mx-auto max-w-[1600px] flex flex-col gap-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          <div>
            <div className="text-eyebrow mb-3">Studio</div>
            <p>Web design for med spas & skin clinics</p>
          </div>
          <div>
            <div className="text-eyebrow mb-3">Contact</div>
            <p>
              hello@swannco.co
              <br />
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Book a leak review
              </Link>
            </p>
          </div>
          <div>
            <div className="text-eyebrow mb-3">Index</div>
            <p className="flex flex-wrap gap-x-3 gap-y-1">
              <Link to="/work" className="hover:text-foreground transition-colors">
                Work
              </Link>
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/services" className="hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/" hash="approach" className="hover:text-foreground transition-colors">
                Approach
              </Link>
            </p>
          </div>
          <div>
            <div className="text-eyebrow mb-3">Capacity</div>
            <p>Two custom builds per month</p>
          </div>
        </div>
        <motion.div
          style={reduce ? undefined : { y }}
          className="text-display text-[28vw] md:text-[22vw] leading-[0.8] tracking-[-0.06em] select-none flex items-center gap-4 md:gap-6"
        >
          <img src={swannMarkInk} alt="" className="h-[0.45em] w-auto opacity-90" />
          Swann
        </motion.div>
        <div className="flex flex-wrap justify-between gap-3 text-eyebrow text-muted-foreground border-t border-foreground/10 pt-6">
          <span>© Swann Company, 2026</span>
          <span>From browsers to booked.</span>
        </div>
      </div>
    </footer>
  );
}
