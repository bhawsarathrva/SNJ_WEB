import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <Container className="relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <ShieldCheck className="size-3.5" />
            {siteConfig.founded}—{new Date().getFullYear()}: {siteConfig.stats[0].value} in power systems
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-12 px-6 text-base" render={<Link href="/quote" />}>
              Request a Quote
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              render={<Link href="/tools/calculator" />}
            >
              <Calculator className="size-4" />
              Size My Generator
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-data text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-data text-xs uppercase tracking-widest text-muted-foreground">
                  Live Fleet Snapshot
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-teal-soft px-2.5 py-1 text-xs font-medium text-teal">
                  <span className="size-1.5 rounded-full bg-teal" />
                  Operational
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Diesel Generator Sets", value: "5 – 2,500 kVA" },
                  { label: "Gas Generator Sets", value: "50 – 500 kVA" },
                  { label: "Service Centers", value: siteConfig.stats[2].value },
                  { label: "Avg. Emergency Response", value: siteConfig.stats[3].value },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-dashed border-border pb-3 last:border-none"
                  >
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="font-data text-sm font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Figures reflect SNJ Diesel&apos;s active installed base across Maharashtra.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-primary px-5 py-4 text-primary-foreground shadow-lg">
            <p className="font-data text-2xl font-semibold">24×7</p>
            <p className="text-xs uppercase tracking-wide opacity-90">Emergency Breakdown Line</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
