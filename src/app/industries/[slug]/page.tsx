import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import { industries, getIndustry } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";
import { getService } from "@/data/services";
import { getProjectsByIndustry } from "@/data/projects";
import { resolveIcon } from "@/lib/icon-map";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return buildMetadata({
    title: `Generator Power for ${industry.name}`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedProducts = getProductsByIndustry(industry.slug).slice(0, 3);
  const relatedServices = industry.recommendedServiceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedProjects = getProjectsByIndustry(industry.slug);
  const Icon = resolveIcon(industry.icon);

  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={industry.name}
        description={industry.description}
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button render={<Link href={`/quote?industry=${industry.slug}`} />}>
            Request a Quote for This Industry
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Icon className="size-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold">What Makes This Different</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {challenge}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-dashed border-border p-4 font-data text-sm">
              Typical sizing: <span className="font-semibold text-primary">{industry.typicalCapacity}</span>
            </p>
          </div>

          {relatedServices.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-data text-xs uppercase tracking-widest text-muted-foreground">
                Recommended Services
              </h3>
              <ul className="mt-4 flex flex-col divide-y divide-dashed divide-border">
                {relatedServices.map((service) => (
                  <li key={service.slug} className="py-3 first:pt-0 last:pb-0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between gap-3 text-sm font-medium hover:text-primary"
                    >
                      {service.name}
                      <ArrowRight className="size-3.5 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-semibold">Recommended Products</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-semibold">Case Studies in This Industry</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{project.summary}</p>
                  <span className="mt-3 font-data text-xs font-semibold text-primary">
                    {project.capacity} &middot; {project.location}
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
