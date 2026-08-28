import { Container } from "@/components/layout/container";
import { PageBreadcrumbs, type CrumbItem } from "@/components/layout/page-breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: CrumbItem[];
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("border-b border-border bg-secondary/40 py-10 sm:py-14", className)}>
      <Container>
        <PageBreadcrumbs items={breadcrumbs} />
        <div className="mt-4 max-w-3xl">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
