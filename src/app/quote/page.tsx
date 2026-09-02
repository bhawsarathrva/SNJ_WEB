import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { QuoteForm } from "@/components/forms/quote-form";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote — Diesel & Gas Generator Sets",
  description:
    "Tell us your capacity and site details and SNJ Diesel will send a sized, priced quote within one business day.",
  path: "/quote",
});

const reassurances = [
  {
    icon: Clock,
    title: "Response within 1 business day",
    description: "A sales engineer reviews every request personally — no auto-replies.",
  },
  {
    icon: ShieldCheck,
    title: "Sized, not just sold",
    description: "We size the genset to your actual load before we quote a number.",
  },
  {
    icon: Phone,
    title: "Prefer to talk?",
    description: `Call ${siteConfig.phone} and we'll take it from there.`,
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Request a Quote"
        title="Get a sized, priced quote in one business day."
        description="Share a few details about your site and load, and our team will follow up with a recommendation and pricing."
        breadcrumbs={[{ name: "Quote", path: "/quote" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <QuoteForm />
          </div>

          <div className="flex flex-col gap-4">
            {reassurances.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-teal-soft text-teal">
                  <item.icon className="size-5" />
                </span>
                <h2 className="mt-3 text-sm font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
