import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Users, Leaf, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About SNJ Diesel",
  description:
    "Over a decade of sizing, installing, and servicing diesel and gas generator sets — from specialized maintenance to over 500+ deployed power units.",
  path: "/about",
});

const timeline = [
  { year: "2014", title: "Founded in Indore", description: "Started as a dedicated generator repair, overhaul, and power equipment engineering service." },
  { year: "2016", title: "First Industrial AMC contracts", description: "Expanded from ad-hoc emergency repairs to scheduled maintenance contracts for industrial plants and healthcare." },
  { year: "2018", title: "Authorized new unit sales", description: "Began sizing, supplying, and commissioning new CPCB-compliant diesel and gas generator sets." },
  { year: "2020", title: "Regional service expansion", description: "Extended 24x7 emergency response fleet and rapid technician dispatch across industrial corridors." },
  { year: "2022", title: "Rental fleet & turn-key power", description: "Added high-capacity rental generators and turn-key synchronization panels for critical facilities." },
  { year: "2024", title: "500+ gensets deployed & counting", description: "Surpassed 500+ operational installations and hundreds of active AMC contracts with sub-3-hour response." },
];

const certifications = [
  { icon: ShieldCheck, title: "CPCB IV+ Compliance", description: "All new diesel gensets sold meet current Central Pollution Control Board emission norms." },
  { icon: Award, title: "OEM-Authorized Parts", description: "Genuine parts sourcing directly from OEM supply chains, not grey-market substitutes." },
  { icon: Leaf, title: "Noise & Emissions Advisory", description: "Site-level guidance on local noise ordinances and pollution clearance documentation." },
  { icon: Users, title: "Trained Technician Network", description: "Field technicians certified on major genset brands, not just SNJ-supplied units." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About SNJ Diesel"
        title="Over a decade of power that didn't wait for a good excuse"
        description={siteConfig.description}
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-2">Our Story</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              From a dedicated workshop to a trusted power-systems partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              SNJ Diesel started in {siteConfig.founded} with a hands-on focus on genset maintenance,
              overhauling, and reliable emergency support. That repair-first engineering mindset still
              shapes how we work today — we diagnose to root cause before we quote, ensuring every
              facility receives the exact power sizing and technical support it needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Over the past decade, that grew into scheduled maintenance contracts, authorized
              new-unit sales, synchronization panels, and a comprehensive rental fleet. What hasn&apos;t
              changed is our accountability model: the team that sizes your genset is the same team
              that installs, maintains, and backs it with 24x7 emergency response.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-data text-xs uppercase tracking-widest text-muted-foreground">
              At a Glance
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-data text-3xl font-semibold text-primary">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-dashed border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Headquartered in {siteConfig.address.city}, {siteConfig.address.state}, with
                rapid service response across key commercial and industrial hubs.
              </p>
              <Button variant="outline" className="mt-4" render={<Link href="/coverage" />}>
                View service coverage
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Timeline" title="A decade of growth, key milestones" align="left" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="flex flex-col gap-2 bg-card p-6">
                <span className="font-data text-sm font-semibold text-primary">{item.year}</span>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Standards"
            title="Certifications & compliance"
            description="What we hold ourselves to, and what we help you document for your own audits."
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-card">
                  <cert.icon className="size-5 text-primary" />
                </span>
                <h3 className="text-base font-semibold">{cert.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Careers at SNJ Diesel</h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                We hire field technicians, service engineers, and sales staff across our six
                branches. If you know diesel and gas gensets, or want to learn on a team that
                still values a technician&apos;s judgment over a script, get in touch.
              </p>
            </div>
            <Button size="lg" render={<Link href="/contact" />}>
              Contact Us About Careers
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
