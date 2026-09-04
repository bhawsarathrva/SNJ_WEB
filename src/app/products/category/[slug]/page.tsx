import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calculator } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { ProductFilterGrid } from "@/components/products/product-filter-grid";
import { productCategories, getCategory } from "@/data/product-categories";
import { getProductsByCategory } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.summary,
    path: `/products/category/${category.slug}`,
  });
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={category.name}
        description={category.summary}
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: category.name, path: `/products/category/${category.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="sm" render={<Link href="/tools/calculator" />}>
            <Calculator className="size-4" />
            Size My Requirement
          </Button>
          <Button size="sm" variant="outline" render={<Link href="/tools/compare" />}>
            Compare Models
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </PageHeader>

      {/* Premium Dark Category Showcase Banner */}
      <div className="relative h-72 w-full sm:h-84 lg:h-[26rem] overflow-hidden border-y border-slate-800 bg-slate-950 flex items-center justify-center py-8 px-4 sm:px-8">
        {/* Radial Ambient Backlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30, 64, 175, 0.35) 0%, rgba(15, 23, 42, 0.8) 55%, rgba(2, 6, 23, 1) 100%)",
          }}
        />

        {/* Technical Grid Pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.25) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Floor Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 h-8 w-3/4 max-w-4xl bg-blue-500/20 blur-2xl rounded-full"
        />

        {/* Genset Image with High-Depth Shadows */}
        <div className="relative z-10 h-full w-full max-w-5xl flex items-center justify-center">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority
            sizes="(min-width: 1280px) 1100px, 100vw"
            className="object-contain object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(59,130,246,0.2)]"
          />
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <Container>
          {products.length > 0 ? (
            <ProductFilterGrid products={products} />
          ) : (
            <p className="text-muted-foreground">
              No models are currently listed in this category. Contact us for availability.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
