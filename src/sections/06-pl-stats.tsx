import { motion } from "motion/react";
import { Counter } from "@/components/motion/counter";
import { CONVERSION_BENEFITS } from "@/data/stats-benefits";

export function PlStats() {
  return (
    <section className="bg-ink text-bone py-32 md:py-48 grain">
      <div className="px-6 md:px-10 grid md:grid-cols-12 gap-6 mb-20">
        <div className="md:col-span-3 text-eyebrow opacity-60">(03) Outcomes</div>
        <h2 className="md:col-span-9 text-display text-5xl md:text-7xl leading-[0.92]">
          What a site that <em className="italic text-lake">converts</em> does for you.
        </h2>
        <p className="col-span-12 md:col-span-9 md:col-start-4 mt-2 text-base md:text-lg text-bone/65 max-w-2xl leading-relaxed">
          Not more traffic for traffic's sake. A site that turns existing visitors into booked consults, without
          asking your team to work harder.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/10 border-y border-bone/10">
        {CONVERSION_BENEFITS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
            className="bg-ink p-6 md:p-10 min-h-[14rem] flex flex-col justify-between"
          >
            <div className="text-eyebrow opacity-60 tabular-nums">
              0{i + 1} / {CONVERSION_BENEFITS.length}
            </div>
            <div>
              <div className="text-display text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight">
                {s.animate ? (
                  <Counter value={s.animate.value} prefix={s.animate.prefix} suffix={s.animate.suffix} />
                ) : (
                  s.display
                )}
              </div>
              <div className="mt-4 text-xs md:text-sm opacity-70 leading-snug max-w-[18rem]">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
