import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, getService, getRelatedServices } from "@/data/services";
import { getIndustry } from "@/data/industries";
import { DynamicIcon } from "@/lib/icon-map";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const serviceHref = `/service-request?type=${service.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(service.faqs)) }}
      />
      <PageHeader
        eyebrow="Services"
        title={service.name}
        description={service.tagline}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button render={<Link href={serviceHref} />}>
            Book This Service
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex size-12 items-center justify-center rounded-lg bg-teal-soft text-teal">
              <DynamicIcon name={service.icon} className="size-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold">The Problem</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {service.problem}
            </p>
            <h2 className="mt-8 text-xl font-semibold">Our Approach</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {service.solution}
            </p>

            {service.industries.length > 0 && (
              <>
                <h3 className="mt-8 text-base font-semibold">Common For</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.industries.map((slug) => {
                    const industry = getIndustry(slug);
                    if (!industry) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/industries/${slug}`}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary"
                      >
                        {industry.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-data text-xs uppercase tracking-widest text-muted-foreground">
              Why It Matters
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-dashed border-border pt-6">
              {service.applications.map((app) => (
                <Badge key={app} variant="secondary" className="text-[11px]">
                  {app}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
        <Container>
          <h2 className="text-xl font-semibold">How It Works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step) => (
              <li key={step.step} className="flex flex-col gap-2">
                <span className="font-data text-2xl font-semibold text-primary">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="mt-6 w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-semibold">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => {
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-teal">
                      <DynamicIcon name={item.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
