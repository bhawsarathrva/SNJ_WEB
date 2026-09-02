import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { CompareTool } from "@/components/tools/compare-tool";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compare Generator Models — Side-by-Side Specs",
  description:
    "Compare diesel and gas generator sets side by side on kVA range, fuel type, phase, and full specs.",
  path: "/tools/compare",
});

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Compare generator models."
        description="Pick up to three diesel or gas generator sets to compare specifications side by side."
        breadcrumbs={[
          { name: "Tools", path: "/tools" },
          { name: "Compare", path: "/tools/compare" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <CompareTool />
        </Container>
      </section>
    </>
  );
}
