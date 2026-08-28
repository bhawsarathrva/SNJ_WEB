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
    "Twenty years of sizing, installing, and servicing diesel and gas generator sets across Maharashtra — from a single workshop to a 6-branch service network.",
  path: "/about",
});

const timeline = [
  { year: "2003", title: "Founded in Pune", description: "Started as a small repair and spare-parts workshop serving local commercial clients." },
  { year: "2009", title: "First AMC contracts", description: "Moved from ad-hoc repair work to scheduled maintenance contracts for hospitals and offices." },
  { year: "2013", title: "Authorized sales added", description: "Began selling and installing new generator sets alongside service, not just repairing others' units." },
  { year: "2017", title: "Mumbai branch opened", description: "Expanded service coverage into the Mumbai Metropolitan Region." },
  { year: "2021", title: "Rental fleet launched", description: "Added a rental generator fleet for construction, events, and bridge-power needs." },
  { year: "2024", title: "6 service centers, 3,400+ units deployed", description: "Reached current scale across Western Maharashtra, Vidarbha, and Marathwada." },
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
        title="Twenty years of power that didn't wait for a good excuse"
        description={siteConfig.description}
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-2">Our Story</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              From a repair workshop to a full power-systems partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              SNJ Diesel started in {siteConfig.founded} as a small genset repair and spare-parts
              operation in Pune, working on whatever brand of generator a local business happened
              to own. That repair-first history still shapes how we work today — we diagnose to
              root cause before we quote, because that discipline is how a small workshop earns
              repeat customers without a sales team pushing new units on every visit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Over two decades, that grew into scheduled maintenance contracts, then authorized
              new-unit sales and installation, then a rental fleet and a six-branch service
              network. What hasn&apos;t changed is the accountability model: the team that sizes
              your genset is the same team that installs, maintains, and repairs it — not a
              rotating cast of subcontractors.
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
                service branches across Western Maharashtra, Vidarbha, and Marathwada.
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
          <SectionHeading eyebrow="Timeline" title="Two decades, six milestones" align="left" />
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
