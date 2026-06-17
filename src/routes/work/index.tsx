import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { STUDIO_PROJECTS } from "@/data/projects";
import { WorkSectionHeader, WorkTile } from "@/components/work/work-tile";
import { EditorialImage } from "@/components/motion/editorial-image";
import travertineImg from "@/assets/editorial/travertine-linen.jpg";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "The Standard · Swann Company" },
      {
        name: "description",
        content: "Swann studio builds for med spas and skin clinics. Six practice types, one conversion bar.",
      },
    ],
  }),
  component: WorkIndexPage,
});

function WorkIndexPage() {
  return (
    <SiteShell>
      <section className="border-t border-foreground/10 bg-background">
        <WorkSectionHeader />
        <div className="px-6 md:px-10">
          <EditorialImage
            src={travertineImg}
            alt=""
            caption="Six practice types. One conversion bar."
            variant="break"
            className="mx-auto max-w-[1500px]"
          />
        </div>
        <div>
          {STUDIO_PROJECTS.map((project) => (
            <WorkTile key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
