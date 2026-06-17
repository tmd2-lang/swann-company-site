import { BENEFIT_TICKER } from "@/data/stats-benefits";
import { VelocityMarquee } from "@/components/motion/velocity-marquee";

export function StatTicker() {
  return (
    <section className="relative border-y border-foreground/10 bg-foreground text-background py-14 md:py-20 overflow-hidden grain-overlay">
      <div className="mb-8 px-6 md:px-10 text-eyebrow opacity-60 flex justify-between">
        <span>(◆) What conversion looks like</span>
        <span>Take your time ↓</span>
      </div>
      <VelocityMarquee items={BENEFIT_TICKER} baseV={0.55} speed={0.45} />
    </section>
  );
}
