import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { productCategories } from "@/data/product-categories";
import { resolveIcon } from "@/lib/icon-map";

export function ProductsOverview() {
  return (
    <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Sell"
          title="A full power-systems catalog, sized to your load"
          description="From a 40 kVA silent set for a small office to a 1,010 kVA industrial installation — plus the controls, parts, and rental fleet to support all of it."
          cta={{ label: "Browse all products", href: "/products" }}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => {
            const Icon = resolveIcon(category.icon);
            return (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-card/80"
              >
                <div>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{category.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{category.summary}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View range <ArrowRight className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
