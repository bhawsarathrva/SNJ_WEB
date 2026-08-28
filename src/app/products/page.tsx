import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { productCategories } from "@/data/product-categories";
import { getProductsByCategory } from "@/data/products";
import { resolveIcon } from "@/lib/icon-map";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Generator Sets, Engines, Parts & Rentals",
  description:
    "Diesel and gas generator sets, industrial diesel engines, controls, genuine spare parts, certified-used units, and rental generators — 5 kVA to 2,500 kVA.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Sized from 5 kVA to 2,500 kVA, and everything around the genset"
        description="Seven product lines covering new gensets, bare-shaft engines, controls, parts, certified-used units, and rentals."
        breadcrumbs={[{ name: "Products", path: "/products" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 sm:grid-cols-2">
          {productCategories.map((category) => {
            const Icon = resolveIcon(category.icon);
            const count = getProductsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">{category.name}</h2>
                    <span className="font-data text-xs text-muted-foreground">
                      {count} model{count === 1 ? "" : "s"}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{category.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Browse range <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </Container>
      </section>
    </>
  );
}
