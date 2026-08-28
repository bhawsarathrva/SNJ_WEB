import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Case Studies",
  description:
    "Installations across hospitals, data centers, manufacturing plants, toll plazas, and hospitality sites — sizing, redundancy, and results.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What we've actually installed and kept running"
        description="Real capacity, real constraints, real outcomes — not a generic feature list."
        breadcrumbs={[{ name: "Projects", path: "/projects" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => {
            const industry = getIndustry(project.industry);
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  {industry && <Badge variant="secondary">{industry.name}</Badge>}
                  <span className="font-data text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" />
                    {project.location}
                  </span>
                  <span className="font-data text-xs font-semibold text-primary">
                    {project.capacity}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read case study <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </Container>
      </section>
    </>
  );
}
