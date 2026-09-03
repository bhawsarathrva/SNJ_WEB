import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DynamicIcon } from "@/lib/icon-map";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <DynamicIcon name={product.icon} className="size-5" />
        </span>
        {product.kvaRange && (
          <span className="font-data text-xs font-semibold text-muted-foreground">
            {product.kvaRange[0]}–{product.kvaRange[1]} kVA
          </span>
        )}
      </div>
      <h3 className="mt-4 text-base font-semibold">{product.name}</h3>
      <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{product.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {product.applications.slice(0, 2).map((app) => (
          <Badge key={app} variant="secondary" className="text-[11px]">
            {app}
          </Badge>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        View specifications <ArrowRight className="size-3.5" />
      </span>
    </Link>
  );
}
