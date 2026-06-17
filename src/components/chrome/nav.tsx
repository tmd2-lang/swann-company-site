import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const LINKS = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Approach", to: "/" as const, hash: "approach" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const d = new Date();
      setNow(
        `${d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/New_York" })} NYC`,
      );
    };
    tick();
    const clock = setInterval(tick, 30000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(clock);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-foreground/5 bg-background/80 py-3 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-baseline gap-1 font-display text-2xl leading-none text-foreground md:text-3xl">
          Swann<span className="text-lake">.</span>
        </Link>

        <nav className="hidden items-center gap-10 font-mono-x text-eyebrow md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="transition-colors hover:text-lake"
            >
              {link.label}
            </Link>
          ))}
          <span className="tabular-nums text-foreground/50">{now}</span>
        </nav>

        <Link
          to="/contact"
          className="group relative hidden items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 font-mono-x text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-lake group-hover:bg-background" />
          Book a leak review
        </Link>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-foreground/10 bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 font-mono-x text-eyebrow">
            {LINKS.map((link) => (
              <Link key={link.label} to={link.to} hash={link.hash} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              Book a leak review
            </Link>
            <span className="tabular-nums text-foreground/50">{now}</span>
          </nav>
        </div>
      )}
    </header>
  );
}
