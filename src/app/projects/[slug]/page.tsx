import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Calendar,
  Gauge,
  Phone,
  Camera,
  Layers,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, getProject } from "@/data/projects";
import { getIndustry } from "@/data/industries";
import { getCategory } from "@/data/product-categories";
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from "@/lib/whatsapp";
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
    title: `${project.title} — Previous Work & Installation Case Study`,
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

  const whatsappUrl = getWhatsAppUrl(
    `Hi SNJ Diesel, I am reviewing your installation: "${project.title}" (${project.capacity}, ${project.location}) and would like to discuss a similar requirement for my facility.`
  );

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow="Previous Work & Installation Case Study"
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <MapPin className="size-4 text-primary" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Calendar className="size-4 text-primary" />
            <span>Commissioned in {project.year}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1 font-data font-semibold text-primary">
            <Gauge className="size-4" />
            <span>{project.capacity}</span>
          </div>
        </div>
      </PageHeader>

      {/* Main Installation Hero Image Showcase */}
      <section className="border-b border-border bg-card/40 py-8 sm:py-12">
        <Container>
          <div className="group relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-data text-xs font-semibold text-primary-foreground shadow">
                  <Camera className="size-3.5" /> Verified On-Site Installation Photo
                </span>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl text-white drop-shadow-md">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Client: {project.clientType} • Location: {project.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {industry && (
                  <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-md">
                    {industry.name}
                  </Badge>
                )}
                {category && (
                  <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-md">
                    {category.shortName}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Details & Scope */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-10">
            {/* The Challenge */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Wrench className="size-3.5" />
                <span>The Requirement</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">The Challenge</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>

            {/* The Engineering Solution */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <ShieldCheck className="size-3.5" />
                <span>The Engineering Approach</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">The Solution</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>

            {/* Scope Delivered */}
            {project.scope && project.scope.length > 0 && (
              <div className="rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
                <h3 className="font-heading text-lg font-bold">Turnkey Scope of Delivery</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3.5 text-sm font-medium shadow-sm"
                    >
                      <Layers className="size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Sidebar & Quick Booking */}
          <div className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="font-heading text-base font-bold">
                  Verified Outcomes
                </h3>
                <span className="font-data text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  Fully Operational
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-4">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-foreground leading-snug">{result}</span>
                  </li>
                ))}
              </ul>

              {/* Technical Badges */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-dashed border-border pt-6">
                {industry && <Badge variant="secondary">{industry.name}</Badge>}
                {category && <Badge variant="secondary">{category.shortName}</Badge>}
                <Badge variant="secondary">{project.clientType}</Badge>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <Button
                  className="w-full gap-2"
                  render={
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <Phone className="size-4" />
                  Discuss via WhatsApp ({WHATSAPP_DISPLAY})
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  render={
                    <Link
                      href={`/quote?industry=${project.industry}&category=${project.productCategory}`}
                    />
                  }
                >
                  Request Technical Quotation
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Installation Work Photo Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="border-b border-border bg-card/60 py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <span className="font-data text-xs font-semibold uppercase tracking-wider text-primary">
                  Site Visuals & Workmanship
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Installation Documentation Gallery
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  High-resolution photo documentation of equipment placement, control integration, and testing.
                </p>
              </div>
              <Badge variant="outline" className="self-start md:self-auto font-data text-xs">
                {project.gallery.length} High-Res Visuals
              </Badge>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - photo ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 font-medium">
                    {project.title} • Detail View #{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Other Projects Preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                More Case Studies
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                Explore Other Previous Installations
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              All Projects <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] sm:aspect-square sm:w-48 shrink-0 overflow-hidden bg-muted">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    sizes="(min-width: 640px) 200px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{other.clientType}</span>
                      <span className="font-data">{other.year}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                      {other.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                      {other.summary}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-3 text-xs">
                    <span className="font-data font-semibold text-primary">
                      {other.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-primary">
                      Read study <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
