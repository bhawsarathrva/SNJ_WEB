"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  calculateFromFacility,
  calculateFromLoadList,
  quickFacilityPresets,
  recommendProducts,
  type LoadItem,
} from "@/lib/calculator";
import { products } from "@/data/products";

let nextId = 1;

function newLoadItem(): LoadItem {
  return { id: `item-${nextId++}`, label: "", kw: 0, quantity: 1 };
}

function ResultCard({
  recommendedKva,
  loadWithMarginKw,
}: {
  recommendedKva: number;
  loadWithMarginKw: number;
}) {
  const matches = useMemo(
    () => recommendProducts(products, recommendedKva),
    [recommendedKva]
  );

  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        Recommended generator size
      </p>
      <p className="font-data mt-1 text-4xl font-semibold text-foreground">
        {recommendedKva} kVA
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Based on {loadWithMarginKw.toFixed(1)} kW with a 25% safety margin at 0.8 power factor.
      </p>

      {matches.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Closest matches in our range
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {matches.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/40"
              >
                <span>
                  <span className="font-medium">{product.name}</span>
                  <span className="ml-2 text-muted-foreground">
                    {product.kvaRange?.[0]}–{product.kvaRange?.[1]} kVA
                  </span>
                </span>
                <ArrowRight className="size-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <Button className="mt-6 w-full" render={<Link href="/quote" />}>
        Request a Quote for This Size
      </Button>
    </div>
  );
}

export function GeneratorCalculator() {
  const [facilityKey, setFacilityKey] = useState(quickFacilityPresets[0].key);
  const [areaSqFt, setAreaSqFt] = useState("");
  const [facilityResult, setFacilityResult] = useState<ReturnType<
    typeof calculateFromFacility
  > | null>(null);

  const [items, setItems] = useState<LoadItem[]>([newLoadItem()]);
  const [listResult, setListResult] = useState<ReturnType<
    typeof calculateFromLoadList
  > | null>(null);

  function updateItem(id: string, patch: Partial<LoadItem>) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  return (
    <Tabs defaultValue="facility" className="w-full">
      <TabsList className="w-full sm:w-fit">
        <TabsTrigger value="facility">By Facility Type</TabsTrigger>
        <TabsTrigger value="loadlist">By Load List</TabsTrigger>
      </TabsList>

      <TabsContent value="facility" className="mt-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const area = Number(areaSqFt);
              if (area > 0) setFacilityResult(calculateFromFacility(area, facilityKey));
            }}
          >
            <div>
              <Label htmlFor="facility-type">Facility type</Label>
              <Select value={facilityKey} onValueChange={(v) => setFacilityKey(v as string)}>
                <SelectTrigger id="facility-type" className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {quickFacilityPresets.map((preset) => (
                    <SelectItem key={preset.key} value={preset.key}>
                      {preset.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {quickFacilityPresets.find((p) => p.key === facilityKey)?.description}
              </p>
            </div>
            <div>
              <Label htmlFor="area">Built-up area (sq ft)</Label>
              <Input
                id="area"
                type="number"
                min={0}
                required
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(e.target.value)}
                className="mt-1.5"
                placeholder="e.g. 15000"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Calculate
            </Button>
          </form>

          {facilityResult && (
            <ResultCard
              recommendedKva={facilityResult.recommendedKva}
              loadWithMarginKw={facilityResult.loadWithMarginKw}
            />
          )}
        </div>
      </TabsContent>

      <TabsContent value="loadlist" className="mt-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setListResult(calculateFromLoadList(items));
            }}
          >
            <div className="flex flex-col gap-3">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto_auto_auto] items-end gap-2">
                  <div>
                    {index === 0 && <Label className="mb-1.5">Equipment</Label>}
                    <Input
                      value={item.label}
                      onChange={(e) => updateItem(item.id, { label: e.target.value })}
                      placeholder="e.g. Lift, AC, pump"
                    />
                  </div>
                  <div className="w-24">
                    {index === 0 && <Label className="mb-1.5">kW each</Label>}
                    <Input
                      type="number"
                      min={0}
                      step={0.1}
                      value={item.kw || ""}
                      onChange={(e) => updateItem(item.id, { kw: Number(e.target.value) })}
                    />
                  </div>
                  <div className="w-20">
                    {index === 0 && <Label className="mb-1.5">Qty</Label>}
                    <Input
                      type="number"
                      min={0}
                      value={item.quantity || ""}
                      onChange={(e) => updateItem(item.id, { quantity: Number(e.target.value) })}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Remove item"
                    onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                    disabled={items.length === 1}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-fit"
              onClick={() => setItems((prev) => [...prev, newLoadItem()])}
            >
              <Plus className="size-3.5" />
              Add equipment
            </Button>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Calculate
            </Button>
          </form>

          {listResult && (
            <ResultCard
              recommendedKva={listResult.recommendedKva}
              loadWithMarginKw={listResult.loadWithMarginKw}
            />
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
