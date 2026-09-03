import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { services } from "@/data/services";
import { DynamicIcon } from "@/lib/icon-map";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Generator Services — Installation, AMC, Repair & More",
  description:
    "Installation and commissioning, annual maintenance contracts, repair and overhauling, load bank testing, retrofit and automation, and 24x7 emergency breakdown.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six services. One accountable team."
        description="From first installation to end-of-life overhaul, the same technicians who size your genset stay responsible for it."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-teal">
                  <DynamicIcon name={service.icon} className="size-6" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">{service.name}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{service.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    See process & FAQs <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </Container>
      </section>
    </>
  );
}
