import { createFileRoute } from "@tanstack/react-router";
import { BlobCursor } from "@/components/chrome/blob-cursor";
import { Nav } from "@/components/chrome/nav";
import { PageProgress } from "@/components/chrome/page-progress";
import { useLenis } from "@/components/chrome/use-lenis";
import { Hero } from "@/sections/01-hero";
import { KineticBand } from "@/sections/02-kinetic-band";
import { StatTicker } from "@/sections/03-stat-ticker";
import { Manifesto } from "@/sections/04-manifesto";
import { EditorialImage } from "@/components/motion/editorial-image";
import { StudioWork } from "@/sections/05-studio-work";
import manifestoBreakImg from "@/assets/library/interiors/editorial_still_life_for_a_boutique_medspa_web_design_studio__35469284-8d33-433c-a9ad-3f4ac1c9ee97_1.jpg";
import { PlStats } from "@/sections/06-pl-stats";
import { Approach } from "@/sections/07-approach";
import { WhoItsFor } from "@/sections/08-who-its-for";
import { Cta } from "@/sections/09-cta";
import { Footer } from "@/sections/10-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swann Company · Web design for med spas & skin clinics" },
      {
        name: "description",
        content: "Swann designs and builds websites for med spas and skin clinics. From browsers to booked.",
      },
    ],
  }),
  component: SwannSite,
});

function SwannSite() {
  useLenis();
  return (
    <main className="bg-background text-foreground font-sans">
      <BlobCursor />
      <PageProgress />
      <Nav />
      <Hero />
      <KineticBand />
      <StatTicker />
      <Manifesto />
      <EditorialImage
        src={manifestoBreakImg}
        alt=""
        caption="Bone, stone, water. The palette we build inside."
        variant="break"
        className="mx-auto max-w-[1500px] px-6 md:px-10 [&_figure]:my-12 md:[&_figure]:my-20"
      />
      <StudioWork />
      <PlStats />
      <Approach />
      <WhoItsFor />
      <Cta />
      <Footer />
    </main>
  );
}
