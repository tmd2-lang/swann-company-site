import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { CaseStudyLayout } from "@/components/work/case-study-layout";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Work"} · Swann Company` },
      {
        name: "description",
        content: loaderData?.project.oneLiner ?? "Swann studio build",
      },
    ],
  }),
  component: CasePage,
});

function CasePage() {
  const { project } = Route.useLoaderData();
  return (
    <SiteShell>
      <CaseStudyLayout project={project} />
    </SiteShell>
  );
}
