import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, GitCompareArrows, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tools — Power Calculator, Compare Models & Coverage Map",
  description:
    "Size a generator from your load, compare models side by side, or find your nearest SNJ Diesel service branch.",
  path: "/tools",
});

const tools = [
  {
    href: "/tools/calculator",
    icon: Calculator,
    title: "Power Requirement Calculator",
    description: "Size a genset from your facility area or an itemized load list.",
  },
  {
    href: "/tools/compare",
    icon: GitCompareArrows,
    title: "Compare Generator Models",
    description: "Put up to three generator sets side by side on spec.",
  },
  {
    href: "/coverage",
    icon: MapPin,
    title: "Service Coverage Map",
    description: "Find the branch nearest your site and its response coverage.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Do the sizing before you talk to sales."
        description="Three self-serve tools to help you spec a generator, compare options, and find local support."
        breadcrumbs={[{ name: "Tools", path: "/tools" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-teal-soft text-teal">
                <tool.icon className="size-6" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">{tool.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{tool.description}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Open tool <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
