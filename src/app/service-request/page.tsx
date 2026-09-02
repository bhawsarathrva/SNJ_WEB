import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceRequestForm } from "@/components/forms/service-request-form";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Service — AMC, Repair, Installation & Emergency Breakdown",
  description:
    "Book installation, AMC, repair, or emergency breakdown service for your diesel or gas generator set.",
  path: "/service-request",
});

export default function ServiceRequestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a Service"
        title="Book a technician for your genset."
        description="Installation, AMC, repair, load bank testing, or an emergency breakdown — tell us what's happening and we'll route it to the nearest branch."
        breadcrumbs={[{ name: "Book a Service", path: "/service-request" }]}
      >
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary"
        >
          <Phone className="size-4" />
          Breakdown right now? Call {siteConfig.emergencyPhone} — don&apos;t wait for the form.
        </a>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <ServiceRequestForm />
          </div>
        </Container>
      </section>
    </>
  );
}
