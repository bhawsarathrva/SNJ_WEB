import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
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
          eyebrow="Real Installations & Site Work"
          title="Previous Work & Commissioned Projects"
          description="A showcase of backup power systems, synchronizing panels, and turnkey installations sized, engineered, and maintained by SNJ Diesel."
          cta={{ label: "View all project galleries", href: "/projects" }}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const industry = getIndustry(project.industry);
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  
                  {/* Badges on image */}
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    {industry && (
                      <Badge variant="secondary" className="bg-background/85 backdrop-blur-sm">
                        {industry.name}
                      </Badge>
                    )}
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 font-data text-xs text-white/90 backdrop-blur-sm">
                    {project.year}
                  </span>

                  {/* Capacity & Location Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-medium drop-shadow-sm">
                      <MapPin className="size-3.5 text-primary" />
                      {project.location}
                    </span>
                    <span className="rounded bg-primary/90 px-2 py-0.5 font-data font-semibold text-primary-foreground shadow-sm">
                      {project.capacity}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>

                  {/* Highlights / Results */}
                  {project.results && project.results.length > 0 && (
                    <div className="mt-4 border-t border-dashed border-border pt-3">
                      <span className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span className="line-clamp-1">{project.results[0]}</span>
                      </span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Client: {project.clientType}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      View details <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
