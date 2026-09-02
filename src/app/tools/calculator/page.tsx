import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { GeneratorCalculator } from "@/components/tools/generator-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Power Requirement Calculator — Size Your Generator",
  description:
    "Estimate the right generator size from your facility type and area, or an itemized equipment load list.",
  path: "/tools/calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Power requirement calculator."
        description="Size a genset from your facility type, or itemize your actual equipment load for a tighter estimate."
        breadcrumbs={[
          { name: "Tools", path: "/tools" },
          { name: "Calculator", path: "/tools/calculator" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <GeneratorCalculator />
        </Container>
      </section>
    </>
  );
}
