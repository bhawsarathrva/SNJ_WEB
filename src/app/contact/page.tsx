import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact SNJ Diesel — Sales, Service & Emergency Support",
  description:
    "Reach SNJ Diesel for generator sales, service requests, or 24x7 emergency breakdown support. Call, WhatsApp, or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a real engineer, not a call center."
        description="Whether you're sizing a new installation or need a technician on site, here's how to reach us."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              For quotes, use the{" "}
              <Link href="/quote" className="text-primary underline-offset-4 hover:underline">
                quote request form
              </Link>{" "}
              instead — it routes faster.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Emergency Breakdown
              </h2>
              <a
                href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                className="mt-2 flex items-center gap-2 text-xl font-semibold text-primary"
              >
                <Phone className="size-5" />
                {siteConfig.emergencyPhone}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                Answered 24x7 across our service branches.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                    {siteConfig.address.state} {siteConfig.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 shrink-0 text-primary" />
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-primary" />
                  <span>Mon–Sat, 9:00 AM – 7:00 PM (emergency line is 24x7)</span>
                </li>
              </ul>
            </div>

            <Link
              href="/coverage"
              className="group flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-6 transition-colors hover:border-primary/40"
            >
              <div>
                <h2 className="text-sm font-semibold">Find your nearest branch</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.stats[2].value} service centers across Maharashtra.
                </p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
