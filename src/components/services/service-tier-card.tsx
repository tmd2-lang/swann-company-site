type ServiceTierCardProps = {
  name: string;
  price: string;
  who: string;
  image: string;
  featured?: boolean;
  deliverables: string[];
  stagger?: "low" | "mid" | "high";
};

export function ServiceTierCard({
  name,
  price,
  who,
  image,
  featured = false,
  deliverables,
  stagger = "mid",
}: ServiceTierCardProps) {
  const staggerCls =
    stagger === "low" ? "lg:mt-10" : stagger === "high" ? "lg:mt-16" : featured ? "lg:-mt-4" : "";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden bg-bone text-foreground transition-transform duration-500 hover:-translate-y-1 ${staggerCls} ${
        featured
          ? "ring-1 ring-lake/45 shadow-[0_28px_70px_-16px_rgba(0,0,0,0.55)]"
          : "ring-1 ring-bone/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden grain-overlay">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-8 md:p-9">
        {featured && (
          <span className="mb-4 text-eyebrow text-lake">Recommended</span>
        )}
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">{name}</h2>
        <p className="mt-4 font-display text-4xl leading-none tracking-tight">{price}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{who}</p>

        <ul className="mt-8 flex-1 space-y-4 border-t border-foreground/10 pt-8 text-sm leading-relaxed text-foreground/85">
          {deliverables.map((item, i) => (
            <li key={item} className="flex gap-4">
              <span className="mt-0.5 shrink-0 font-mono-x text-[10px] tabular-nums text-muted-foreground">
                ({String(i + 1).padStart(2, "0")})
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
