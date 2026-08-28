import type { ServiceBranch } from "@/types";

export const branches: ServiceBranch[] = [
  {
    slug: "pune-hq",
    city: "Pune",
    region: "Western Maharashtra",
    address: "Plot 14, Industrial Estate Road, Pune, Maharashtra 411019",
    phone: "+91-9755515060",
    email: "pune@snjdiesel.com",
    coverageRadiusKm: 120,
    services: ["Sales", "Installation", "AMC", "Repair & Overhaul", "24x7 Emergency"],
    emergencyAvailable: true,
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    region: "Mumbai Metropolitan Region",
    address: "Unit 7, Andheri East Industrial Estate, Mumbai, Maharashtra 400093",
    phone: "+91-9755515060",
    email: "mumbai@snjdiesel.com",
    coverageRadiusKm: 90,
    services: ["Sales", "Installation", "AMC", "Repair & Overhaul", "24x7 Emergency", "Rental"],
    emergencyAvailable: true,
  },
  {
    slug: "nashik",
    city: "Nashik",
    region: "North Maharashtra",
    address: "MIDC Ambad, Nashik, Maharashtra 422010",
    phone: "+91-9755515060",
    email: "nashik@snjdiesel.com",
    coverageRadiusKm: 100,
    services: ["Sales", "Installation", "AMC", "Repair & Overhaul"],
    emergencyAvailable: true,
  },
  {
    slug: "nagpur",
    city: "Nagpur",
    region: "Vidarbha",
    address: "Butibori Industrial Area, Nagpur, Maharashtra 441122",
    phone: "+91-9755515060",
    email: "nagpur@snjdiesel.com",
    coverageRadiusKm: 110,
    services: ["Sales", "AMC", "Repair & Overhaul"],
    emergencyAvailable: true,
  },
  {
    slug: "aurangabad",
    city: "Chhatrapati Sambhajinagar",
    region: "Marathwada",
    address: "Waluj MIDC, Chhatrapati Sambhajinagar, Maharashtra 431136",
    phone: "+91-9755515060",
    email: "sambhajinagar@snjdiesel.com",
    coverageRadiusKm: 85,
    services: ["Sales", "AMC", "Repair & Overhaul"],
    emergencyAvailable: false,
  },
  {
    slug: "kolhapur",
    city: "Kolhapur",
    region: "Southwestern Maharashtra",
    address: "Shiroli MIDC, Kolhapur, Maharashtra 416122",
    phone: "+91-9755515060",
    email: "kolhapur@snjdiesel.com",
    coverageRadiusKm: 80,
    services: ["Sales", "AMC", "Repair & Overhaul"],
    emergencyAvailable: false,
  },
];

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}
