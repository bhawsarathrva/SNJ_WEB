import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { getIndustry } from "@/data/industries";

export function ProjectsShowcase() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Proof, Not Promises"
          title="Recent installations across Maharashtra"
          description="A sample of sites we've sized, installed, and now maintain."
          cta={{ label: "View all case studies", href: "/projects" }}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((project) => {
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
                <h3 className="mt-4 text-lg font-semibold leading-snug">{project.title}</h3>
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
        </div>
      </Container>
    </section>
  );
}
