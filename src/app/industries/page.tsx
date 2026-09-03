import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { industries } from "@/data/industries";
import { DynamicIcon } from "@/lib/icon-map";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Generator sizing, installation, and service tailored to healthcare, data centers, manufacturing, real estate, telecom, construction, hospitality, agriculture, and government.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="No two sites need the same power system"
        description="A hospital and a highway toll plaza don't share a redundancy requirement, a noise limit, or a documentation trail. We size and service by industry, not by a one-size catalog."
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <DynamicIcon name={industry.icon} className="size-6 text-primary" />
                <h2 className="text-base font-semibold">{industry.name}</h2>
                <p className="flex-1 text-sm text-muted-foreground">{industry.summary}</p>
                <p className="font-data text-xs text-muted-foreground">
                  Typical: {industry.typicalCapacity}
                </p>
              </Link>
            );
          })}
        </Container>
      </section>
    </>
  );
}
