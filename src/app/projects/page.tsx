import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Zap, Clock, Award, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { ProjectsGalleryView } from "@/components/sections/projects-gallery-view";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Previous Work Gallery",
  description:
    "Explore actual field installations, synchronized generator pairs, rental deployments, acoustic canopies, and biogas generators installed and maintained by SNJ Diesel across Maharashtra.",
  path: "/projects",
});

const stats = [
  {
    icon: Zap,
    value: "500+",
    label: "Gensets Commissioned",
    subtext: "Across healthcare, IT, & heavy manufacturing",
  },
  {
    icon: ShieldCheck,
    value: "99.98%",
    label: "Uptime Reliability",
    subtext: "On critical N+1 synchronized standby systems",
  },
  {
    icon: Clock,
    value: "< 8 sec",
    label: "Auto Changeover",
    subtext: "Seamless transition with custom ATS panels",
  },
  {
    icon: Award,
    value: "15+ Yrs",
    label: "Engineering Excellence",
    subtext: "Authorised sales, service, and turnkey projects",
  },
];

export default function ProjectsPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi SNJ Diesel, I am reviewing your previous work & projects page and would like to discuss a generator installation requirement for my site."
  );

  return (
    <>
      <PageHeader
        eyebrow="Previous Work & Installation Gallery"
        title="What We've Actually Built, Installed & Kept Running"
        description="Real capacity, rigorous engineering, and verified field photography — explore our previous work across healthcare, IT parks, manufacturing facilities, infrastructure, and hospitality."
        breadcrumbs={[{ name: "Projects", path: "/projects" }]}
      />

      {/* Engineering Stats Ribbon */}
      <section className="border-b border-border bg-card/60 py-8 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon className="size-4" />
                    <span className="font-heading text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="mt-1 text-xs font-semibold text-foreground">
                    {stat.label}
                  </span>
                  <span className="mt-0.5 text-[11px] text-muted-foreground">
                    {stat.subtext}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Main Filterable Projects & Installation Work Gallery */}
      <section className="py-14 sm:py-20">
        <Container>
          <ProjectsGalleryView projects={projects} industries={industries} />
        </Container>
      </section>

      {/* Bottom CTA Banner */}
      <section className="border-t border-border bg-gradient-to-b from-card to-background py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Zap className="size-3.5" />
                Custom Site Engineering
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Need a similar generator setup for your facility?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Send us your single line diagram (SLD), site drawings, or load requirements. Our electrical engineers will size the genset, design the acoustic canopy, and provide a turnkey proposal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                variant="outline"
                className="gap-2 w-full sm:w-auto"
                render={
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Phone className="size-4 text-emerald-500" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </Button>
              <Button
                className="gap-2 w-full sm:w-auto"
                render={<Link href="/quote" />}
              >
                Request Site Sizing & Quote
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
