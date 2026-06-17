import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeUp } from "@/components/motion/fade-up";
import { EditorialImage } from "@/components/motion/editorial-image";
import travertineImg from "@/assets/editorial/travertine-linen.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a leak review · Swann Company" },
      {
        name: "description",
        content: "Free diagnosis of where your med spa site loses consults, before anyone talks ad spend.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <div className="px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-eyebrow text-muted-foreground">(08) Contact</p>
                <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.92]">Book a leak review.</h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  A leak review is a free diagnosis of where your current site loses consults, before anyone talks ad
                  spend.
                </p>
              </FadeUp>

              <FadeUp delay={0.1} className="mt-14 md:mt-16">
                <ContactForm />
              </FadeUp>

              <FadeUp delay={0.15} className="mt-12 border-t border-foreground/10 pt-8">
                <Link to="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  See studio work →
                </Link>
              </FadeUp>
            </div>

            <div className="hidden lg:col-span-6 lg:col-start-7 lg:block">
              <FadeUp delay={0.12}>
                <EditorialImage
                  src={travertineImg}
                  alt=""
                  caption="Bone, stone, water. The palette we build inside."
                  variant="parallax"
                  className="sticky top-32"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
