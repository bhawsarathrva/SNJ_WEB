"use client";

import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import { cn } from "@/lib/utils";
import { getIndustry } from "@/data/industries";
import type { Product } from "@/types";

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function ProductFilterGrid({ products }: { products: Product[] }) {
  const [application, setApplication] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const [fuelType, setFuelType] = useState<string | null>(null);

  const applications = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.applications))).sort(),
    [products]
  );
  const industrySlugs = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.industries))),
    [products]
  );
  const fuelTypes = useMemo(
    () => Array.from(new Set(products.map((p) => p.fuelType))).filter((f) => f !== "N/A"),
    [products]
  );

  const filtered = products.filter((p) => {
    if (application && !p.applications.includes(application)) return false;
    if (industry && !p.industries.includes(industry)) return false;
    if (fuelType && p.fuelType !== fuelType) return false;
    return true;
  });

  const hasFilters = applications.length > 0 || industrySlugs.length > 0 || fuelTypes.length > 1;

  return (
    <div>
      {hasFilters && (
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
          {fuelTypes.length > 1 && (
            <div>
              <p className="mb-2 font-data text-xs uppercase tracking-wide text-muted-foreground">
                Fuel Type
              </p>
              <div className="flex flex-wrap gap-2">
                {fuelTypes.map((f) => (
                  <FilterChip key={f} active={fuelType === f} onClick={() => setFuelType(fuelType === f ? null : f)}>
                    {f}
                  </FilterChip>
                ))}
              </div>
            </div>
          )}
          {applications.length > 0 && (
            <div>
              <p className="mb-2 font-data text-xs uppercase tracking-wide text-muted-foreground">
                Application
              </p>
              <div className="flex flex-wrap gap-2">
                {applications.map((app) => (
                  <FilterChip
                    key={app}
                    active={application === app}
                    onClick={() => setApplication(application === app ? null : app)}
                  >
                    {app}
                  </FilterChip>
                ))}
              </div>
            </div>
          )}
          {industrySlugs.length > 0 && (
            <div>
              <p className="mb-2 font-data text-xs uppercase tracking-wide text-muted-foreground">
                Industry
              </p>
              <div className="flex flex-wrap gap-2">
                {industrySlugs.map((slug) => {
                  const ind = getIndustry(slug);
                  if (!ind) return null;
                  return (
                    <FilterChip
                      key={slug}
                      active={industry === slug}
                      onClick={() => setIndustry(industry === slug ? null : slug)}
                    >
                      {ind.name}
                    </FilterChip>
                  );
                })}
              </div>
            </div>
          )}
          {(application || industry || fuelType) && (
            <Button
              variant="ghost"
              size="sm"
              className="w-fit"
              onClick={() => {
                setApplication(null);
                setIndustry(null);
                setFuelType(null);
              }}
            >
              Clear filters
            </Button>
          )}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <PackageSearch className="size-8 text-muted-foreground" />
          <p className="font-medium">No products match these filters.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setApplication(null);
              setIndustry(null);
              setFuelType(null);
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
