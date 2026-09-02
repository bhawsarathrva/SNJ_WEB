import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Siren } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { branches } from "@/data/branches";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Coverage Map — SNJ Diesel Branches",
  description:
    "Find the SNJ Diesel service branch nearest you, with contact details, coverage radius, and available services.",
  path: "/coverage",
});

export default function CoveragePage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Service coverage map."
        description={`${branches.length} branches across Maharashtra — find the one closest to your site.`}
        breadcrumbs={[
          { name: "Tools", path: "/tools" },
          { name: "Coverage", path: "/coverage" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.slug}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-lg font-semibold">{branch.city}</h2>
                  {branch.emergencyAvailable && (
                    <Badge variant="secondary" className="gap-1 text-teal">
                      <Siren className="size-3" />
                      24x7
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{branch.region}</p>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{branch.address}</span>
              </div>

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                ~{branch.coverageRadiusKm} km coverage radius
              </p>

              <div className="flex flex-wrap gap-1.5">
                {branch.services.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-1.5 border-t border-border pt-4 text-sm">
                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="size-3.5 text-primary" />
                  {branch.phone}
                </a>
                <a href={`mailto:${branch.email}`} className="flex items-center gap-2 hover:text-primary">
                  <Mail className="size-3.5 text-primary" />
                  {branch.email}
                </a>
              </div>
            </div>
          ))}
        </Container>

        <Container className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary/40 p-8 text-center">
          <h2 className="text-lg font-semibold">Not sure which branch covers your site?</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Send us your city and we&apos;ll route your request to the right team.
          </p>
          <Button render={<Link href="/service-request" />}>Book a Service</Button>
        </Container>
      </section>
    </>
  );
}
