import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { productCategories } from "@/data/product-categories";
import { DynamicIcon } from "@/lib/icon-map";

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
            return (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40 hover:bg-card/80"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                    <DynamicIcon name={category.icon} className="size-4.5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-base font-semibold">{category.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{category.summary}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View range <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
