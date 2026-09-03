import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { industries } from "@/data/industries";
import { DynamicIcon } from "@/lib/icon-map";

export function IndustriesStrip() {
  return (
    <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Sized differently for every industry we work in"
          description="A hospital and a toll plaza don't need the same redundancy, noise limits, or documentation — our sizing and service approach adapts to each."
          cta={{ label: "Explore all industries", href: "/industries" }}
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => {
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <DynamicIcon name={industry.icon} className="size-5 text-primary" />
                <span className="text-sm font-medium leading-snug">{industry.name}</span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
