import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/services";
import { resolveIcon } from "@/lib/icon-map";

export function ServicesOverview() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Service coverage from installation to end-of-life overhaul"
          description="Most generator problems trace back to a gap in one of these six areas. We run all of them under one accountable team."
          cta={{ label: "See all services", href: "/services" }}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = resolveIcon(service.icon);
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-teal-soft text-teal">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{service.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
