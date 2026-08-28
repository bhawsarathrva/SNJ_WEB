import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Calendar, Gauge } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, getProject } from "@/data/projects";
import { getIndustry } from "@/data/industries";
import { getCategory } from "@/data/product-categories";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const industry = getIndustry(project.industry);
  const category = getCategory(project.productCategory);

  return (
    <>
      <PageHeader
        eyebrow="Case Study"
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      >
        <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:max-w-lg">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-primary" />
            {project.location}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="size-4 text-primary" />
            {project.year}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Gauge className="size-4 text-primary" />
            {project.capacity}
          </div>
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-semibold">The Challenge</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">The Solution</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-data text-xs uppercase tracking-widest text-muted-foreground">
              Results
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {result}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-dashed border-border pt-6">
              {industry && <Badge variant="secondary">{industry.name}</Badge>}
              {category && <Badge variant="secondary">{category.shortName}</Badge>}
              <Badge variant="secondary">{project.clientType}</Badge>
            </div>
            <Button
              className="mt-6 w-full"
              render={<Link href={`/quote?industry=${project.industry}&category=${project.productCategory}`} />}
            >
              Discuss a Similar Project
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
