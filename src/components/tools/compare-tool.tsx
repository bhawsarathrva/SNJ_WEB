"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/data/products";

const comparable = products.filter(
  (p) => p.category === "diesel-generator-sets" || p.category === "gas-generator-sets"
);

const defaultSlugs = [comparable[0]?.slug, comparable[1]?.slug, comparable[2]?.slug];

export function CompareTool() {
  const [slots, setSlots] = useState<(string | undefined)[]>(defaultSlugs);

  const selected = slots.map((slug) => comparable.find((p) => p.slug === slug));
  const specLabels = Array.from(
    new Set(selected.flatMap((p) => p?.specs.map((s) => s.label) ?? []))
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {slots.map((slug, index) => (
          <div key={index}>
            <Select
              value={slug}
              onValueChange={(v) =>
                setSlots((prev) => prev.map((s, i) => (i === index ? (v as string) : s)))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select generator ${index + 1}`} />
              </SelectTrigger>
              <SelectContent>
                {comparable.map((product) => (
                  <SelectItem key={product.slug} value={product.slug}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {selected.some(Boolean) && (
        <div className="overflow-hidden rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Spec</TableHead>
                {selected.map((product, index) => (
                  <TableHead key={index}>
                    {product ? (
                      <Link href={`/products/${product.slug}`} className="text-primary hover:underline">
                        {product.name}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">kVA Range</TableCell>
                {selected.map((product, index) => (
                  <TableCell key={index}>
                    {product?.kvaRange ? `${product.kvaRange[0]}–${product.kvaRange[1]} kVA` : "—"}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Fuel Type</TableCell>
                {selected.map((product, index) => (
                  <TableCell key={index}>{product?.fuelType ?? "—"}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Phase</TableCell>
                {selected.map((product, index) => (
                  <TableCell key={index}>{product?.phase ?? "—"}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Applications</TableCell>
                {selected.map((product, index) => (
                  <TableCell key={index} className="whitespace-normal">
                    {product?.applications.join(", ") ?? "—"}
                  </TableCell>
                ))}
              </TableRow>
              {specLabels.map((label) => (
                <TableRow key={label}>
                  <TableCell className="font-medium">{label}</TableCell>
                  {selected.map((product, index) => (
                    <TableCell key={index}>
                      {product?.specs.find((s) => s.label === label)?.value ?? "—"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {selected.filter(Boolean).map((product) => (
          <Button key={product!.slug} variant="outline" size="sm" render={<Link href="/quote" />}>
            Quote {product!.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
