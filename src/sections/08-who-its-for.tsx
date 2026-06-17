import { FadeUp } from "@/components/motion/fade-up";

const AUDIENCES = [
  "Med spas",
  "Skin clinics",
  "Cosmetic dermatology",
  "Injectors & founders",
  "Multi-location practices",
  "Practices with proof",
];

export function WhoItsFor() {
  return (
    <section id="who" className="relative bg-secondary py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="text-eyebrow text-muted-foreground">(05) Who it's for</span>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-foreground/65">
              Operators who already do good clinical work, and need a site that matches it.
            </p>
          </div>
          <ul className="col-span-12 md:col-span-8">
            {AUDIENCES.map((a, i) => (
              <FadeUp key={a} delay={i * 0.05}>
                <li className="group flex items-baseline justify-between border-t border-foreground/15 py-7 last:border-b">
                  <span className="relative overflow-hidden font-display text-3xl tracking-tight text-foreground md:text-5xl">
                    <span className="block transition-transform duration-700 ease-out group-hover:-translate-y-full">{a}</span>
                    <span className="absolute inset-0 block translate-y-full italic text-lake transition-transform duration-700 ease-out group-hover:translate-y-0">
                      {a}
                    </span>
                  </span>
                  <span className="font-mono-x text-xs text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
