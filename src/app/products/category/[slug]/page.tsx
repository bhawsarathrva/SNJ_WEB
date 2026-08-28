import type { Metadata } from "next";
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
