import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProductsOverview } from "@/components/sections/products-overview";
import { ServicesOverview } from "@/components/sections/services-overview";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CalculatorTeaser } from "@/components/sections/calculator-teaser";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "SNJ Diesel — Diesel & Gas Generator Sets, Installation, and 24x7 Service",
  description:
    "SNJ Diesel sizes, sells, installs, and services diesel and gas generator sets from 5 kVA to 2,500 kVA across Maharashtra, backed by 24x7 emergency breakdown response.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <ServicesOverview />
      <IndustriesStrip />
      <WhyChooseUs />
      <CalculatorTeaser />
      <ProjectsShowcase />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
