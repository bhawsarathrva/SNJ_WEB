import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Generator Sizing, Maintenance & Technical Guides",
  description:
    "Practical guides on generator sizing, AMC economics, wet stacking, fuel type selection, and other technical topics from the SNJ Diesel team.",
  path: "/resources/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Blog"
        description="Technical guides written by the people who actually service these machines."
        breadcrumbs={[
          { name: "Resources", path: "/resources/blog" },
          { name: "Blog", path: "/resources/blog" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-4 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Badge variant="secondary" className="w-fit">
                {post.category}
              </Badge>
              <h2 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {post.readingTime}
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read article <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
