import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/resources/blog/${post.slug}`,
  });
}

function renderBody(body: string[]) {
  return body.map((block, index) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-8 text-xl font-semibold">
          {block.replace("## ", "")}
        </h2>
      );
    }

    const parts = block.split(/(\[[^\]]+\]\([^)]+\))/g);
    return (
      <p key={index} className="mt-4 text-base leading-relaxed text-muted-foreground">
        {parts.map((part, partIndex) => {
          const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (match) {
            return (
              <Link key={partIndex} href={match[2]} className="font-medium text-primary underline underline-offset-2">
                {match[1]}
              </Link>
            );
          }
          return <span key={partIndex}>{part}</span>;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { name: "Resources", path: "/resources/blog" },
          { name: "Blog", path: "/resources/blog" },
          { name: post.title, path: `/resources/blog/${post.slug}` },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="size-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.readingTime}
          </span>
        </div>
      </PageHeader>

      <article className="border-b border-border py-16 sm:py-20">
        <Container className="max-w-2xl">{renderBody(post.body)}</Container>
      </article>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-lg font-semibold">Have a sizing question of your own?</h2>
            <p className="text-sm text-muted-foreground">
              Use the calculator, or send us your requirement directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button render={<Link href="/tools/calculator" />}>
                Open Calculator
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" render={<Link href="/quote" />}>
                Request a Quote
              </Button>
            </div>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-semibold">More from the Blog</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {otherPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/resources/blog/${item.slug}`}
                    className="rounded-xl border border-border bg-card p-5 hover:border-primary/40"
                  >
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground">{item.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
