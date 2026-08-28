import type { Product } from "@/types";

export interface LoadItem {
  id: string;
  label: string;
  kw: number;
  quantity: number;
}

export interface QuickFacilityPreset {
  key: string;
  label: string;
  wattsPerSqFt: number;
  description: string;
}

export const quickFacilityPresets: QuickFacilityPreset[] = [
  {
    key: "hospital",
    label: "Hospital / Healthcare Facility",
    wattsPerSqFt: 5.5,
    description: "ICU, OT, imaging, and critical care loads run continuously.",
  },
  {
    key: "office",
    label: "Office / IT Park",
    wattsPerSqFt: 2.2,
    description: "Lighting, HVAC, lifts, and workstation load.",
  },
  {
    key: "manufacturing",
    label: "Manufacturing / Factory",
    wattsPerSqFt: 4.0,
    description: "Motor loads, compressors, and production line equipment.",
  },
  {
    key: "residential",
    label: "Residential Complex",
    wattsPerSqFt: 1.5,
    description: "Common area lighting, lifts, water pumps, and select backup points.",
  },
  {
    key: "retail",
    label: "Retail / Hospitality",
    wattsPerSqFt: 3.0,
    description: "HVAC, refrigeration, lighting, and kitchen equipment.",
  },
  {
    key: "data-center",
    label: "Data Center / Server Room",
    wattsPerSqFt: 12.0,
    description: "High-density IT load plus precision cooling.",
  },
];

const SAFETY_MARGIN = 0.25;
const POWER_FACTOR = 0.8;
const SQFT_TO_KW_DIVISOR = 1000;

export interface CalculatorResult {
  totalConnectedKw: number;
  loadWithMarginKw: number;
  recommendedKva: number;
}

export function calculateFromLoadList(items: LoadItem[]): CalculatorResult {
  const totalConnectedKw = items.reduce(
    (sum, item) => sum + Math.max(0, item.kw) * Math.max(0, item.quantity),
    0
  );
  const loadWithMarginKw = totalConnectedKw * (1 + SAFETY_MARGIN);
  const recommendedKva = Math.ceil(loadWithMarginKw / POWER_FACTOR);
  return { totalConnectedKw, loadWithMarginKw, recommendedKva };
}

export function calculateFromFacility(
  areaSqFt: number,
  facilityKey: string
): CalculatorResult {
  const preset = quickFacilityPresets.find((p) => p.key === facilityKey);
  const wattsPerSqFt = preset?.wattsPerSqFt ?? 3;
  const totalConnectedKw = (areaSqFt * wattsPerSqFt) / SQFT_TO_KW_DIVISOR;
  const loadWithMarginKw = totalConnectedKw * (1 + SAFETY_MARGIN);
  const recommendedKva = Math.ceil(loadWithMarginKw / POWER_FACTOR);
  return { totalConnectedKw, loadWithMarginKw, recommendedKva };
}

export function recommendProducts(
  products: Product[],
  recommendedKva: number,
  categories: string[] = ["diesel-generator-sets", "gas-generator-sets"]
): Product[] {
  const inRange = products.filter(
    (p) =>
      categories.includes(p.category) &&
      p.kvaRange &&
      recommendedKva >= p.kvaRange[0] * 0.6 &&
      recommendedKva <= p.kvaRange[1] * 1.4
  );

  const scored = inRange
    .map((p) => {
      const mid = p.kvaRange ? (p.kvaRange[0] + p.kvaRange[1]) / 2 : 0;
      return { product: p, distance: Math.abs(mid - recommendedKva) };
    })
    .sort((a, b) => a.distance - b.distance);

  return scored.slice(0, 3).map((s) => s.product);
}
