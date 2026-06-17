type BonusCardProps = {
  title: string;
  description: string;
  image: string;
};

export function BonusCard({ title, description, image }: BonusCardProps) {
  return (
    <article className="group overflow-hidden border border-foreground/12 bg-background">
      <div className="relative aspect-[4/3] overflow-hidden grain-overlay">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
