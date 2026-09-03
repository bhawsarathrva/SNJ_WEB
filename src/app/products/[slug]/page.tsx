import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/product-card";
import { products, getProduct, getRelatedProducts } from "@/data/products";
import { getCategory } from "@/data/product-categories";
import { getIndustry } from "@/data/industries";
import { DynamicIcon } from "@/lib/icon-map";
import { buildMetadata, productJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.tagline,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const quoteHref = `/quote?category=${product.category}${
    product.kvaRange ? `&kva=${product.kvaRange[1]}` : ""
  }`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <PageHeader
        eyebrow={category?.name}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: category?.name ?? "Product", path: `/products/category/${product.category}` },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button render={<Link href={quoteHref} />}>
            Request a Quote
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" render={<Link href="/tools/compare" />}>
            Add to Comparison
          </Button>
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <DynamicIcon name={product.icon} className="size-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <Badge key={app} variant="secondary">
                  {app}
                </Badge>
              ))}
            </div>

            <h3 className="mt-8 text-base font-semibold">Key Features</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {feature}
                </li>
              ))}
            </ul>

            {product.industries.length > 0 && (
              <>
                <h3 className="mt-8 text-base font-semibold">Common Industries</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.industries.map((slug) => {
                    const industry = getIndustry(slug);
                    if (!industry) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/industries/${slug}`}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary"
                      >
                        {industry.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-data text-xs uppercase tracking-widest text-muted-foreground">
              Specifications
            </h3>
            <dl className="mt-4 divide-y divide-dashed divide-border">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                  <dd className="font-data text-sm font-semibold text-right">{spec.value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-muted-foreground">Fuel Type</dt>
                <dd className="font-data text-sm font-semibold">{product.fuelType}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-muted-foreground">Phase</dt>
                <dd className="font-data text-sm font-semibold">{product.phase}</dd>
              </div>
            </dl>
            <Button className="mt-6 w-full" render={<Link href={quoteHref} />}>
              Request a Quote for This Model
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-semibold">Related Models</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
