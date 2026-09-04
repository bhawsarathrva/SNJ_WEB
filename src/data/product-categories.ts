import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    slug: "diesel-generator-sets",
    name: "Diesel Generator Sets",
    shortName: "Diesel Gensets",
    summary: "6 kVA to 2,500 kVA standby, prime, and continuous power sets.",
    icon: "Zap",
    image: "/images/products/diesel-generator-sets.png",
  },
  {
    slug: "gas-generator-sets",
    name: "Gas Generator Sets",
    shortName: "Gas Gensets",
    summary: "Natural gas and biogas generator sets for continuous duty.",
    icon: "Flame",
    image: "/images/products/gas-generator-sets.jpg",
  },
  {
    slug: "industrial-diesel-engines",
    name: "Industrial Diesel Engines",
    shortName: "Diesel Engines",
    summary: "Bare-shaft engines for pumping, compressor, and OEM integration.",
    icon: "Cog",
    image: "/images/products/industrial-diesel-engines.jpg",
  },
  {
    slug: "controls-accessories",
    name: "Controls & Accessories",
    shortName: "Controls",
    summary: "AMF/ATS panels, synchronizing panels, canopies, and AVRs.",
    icon: "SlidersHorizontal",
    image: "/images/products/controls-accessories.jpg",
  },
  {
    slug: "spare-parts",
    name: "Genuine Spare Parts",
    shortName: "Spare Parts",
    summary: "OEM-approved filters, injectors, alternators, and control modules.",
    icon: "PackageSearch",
    image: "/images/products/spare-parts.jpg",
  },
  {
    slug: "used-refurbished",
    name: "Used & Refurbished Units",
    shortName: "Used Units",
    summary: "Inspected, load-tested, and warrantied second-life generators.",
    icon: "RotateCcw",
    image: "/images/products/used-refurbished.jpg",
  },
  {
    slug: "rental-generators",
    name: "Rental Generators",
    shortName: "Rentals",
    summary: "Short and long-term power rental for planned and emergency needs.",
    icon: "CalendarRange",
    image: "/images/products/rental-generators.jpg",
  },
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}
