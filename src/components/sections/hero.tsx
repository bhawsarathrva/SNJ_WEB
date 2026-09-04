import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[620px] lg:min-h-[720px] xl:min-h-[760px] w-full overflow-hidden border-b border-border bg-slate-950 flex items-center py-10 lg:py-16">
      {/* SVG Clip Path Definition for the Cutout Card */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="cummins-hero-cutout" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0 0.08
                C 0 0.035, 0.035 0, 0.08 0
                L 0.94 0
                C 0.975 0, 1 0.025, 1 0.06
                L 1 0.92
                C 1 0.965, 0.965 1, 0.92 1
                L 0.06 1
                C 0.025 1, 0 0.975, 0 0.94
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Full Page-Fitting Background Banner Image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden"
      >
        <Image
          src="/images/hero-banner.png"
          alt="CAT Diesel Generator - Built for a Brighter Tomorrow"
          fill
          priority
          className="object-cover object-[75%_center] lg:object-[82%_center]"
          sizes="100vw"
        />
        {/* Soft Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none lg:w-[55%]" />
      </div>

      {/* Foreground Container with Smooth Cutout Card */}
      <Container className="relative z-10 w-full">
        <div className="w-full max-w-xl lg:max-w-[48%] xl:max-w-[46%]">
          {/* Cutout Card Wrapper with Drop Shadow */}
          <div className="filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
            <div
              className="relative bg-slate-950/85 backdrop-blur-xl border border-white/10 p-7 sm:p-9 lg:p-10 text-white transition-all"
              style={{
                clipPath: "url(#cummins-hero-cutout)",
              }}
            >
              {/* Eyebrow Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-200">
                <ShieldCheck className="size-3.5 text-amber-400" />
                <span>
                  {siteConfig.founded}—{new Date().getFullYear()}: {siteConfig.stats[0].value} in power systems
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] leading-[1.08] text-white">
                {siteConfig.tagline}
              </h1>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {siteConfig.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all border-none"
                  render={<Link href="/quote" />}
                >
                  Request a Quote
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-semibold border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm"
                  render={<Link href="/tools/calculator" />}
                >
                  <Calculator className="size-4" />
                  Size My Generator
                </Button>
              </div>

              {/* Key Stats Row */}
              <dl className="mt-8 pt-6 border-t border-dashed border-white/15 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-data text-xl sm:text-2xl font-bold text-amber-400">
                      {stat.value}
                    </dt>
                    <dd className="mt-0.5 text-[11px] sm:text-xs uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
