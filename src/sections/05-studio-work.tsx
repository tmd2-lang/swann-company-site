import { STUDIO_PROJECTS } from "@/data/projects";
import { WorkSectionHeader, WorkTile } from "@/components/work/work-tile";

export function StudioWork() {
  return (
    <section id="work" className="border-t border-foreground/10 bg-background">
      <WorkSectionHeader />
      <div>
        {STUDIO_PROJECTS.map((project) => (
          <WorkTile key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
