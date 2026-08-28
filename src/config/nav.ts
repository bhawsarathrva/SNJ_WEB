import type { NavGroup, NavLink } from "@/types";

export const mainNav: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Diesel Generator Sets", href: "/products/category/diesel-generator-sets", description: "6 kVA to 2,500 kVA standby & prime power" },
      { label: "Gas Generator Sets", href: "/products/category/gas-generator-sets", description: "Natural gas & biogas gensets" },
      { label: "Industrial Diesel Engines", href: "/products/category/industrial-diesel-engines", description: "Bare-shaft engines for OEM integration" },
      { label: "Controls & Accessories", href: "/products/category/controls-accessories", description: "AMF/ATS panels, canopies, sync panels" },
      { label: "Genuine Spare Parts", href: "/products/category/spare-parts", description: "OEM-approved parts, fast dispatch" },
      { label: "Used & Refurbished", href: "/products/category/used-refurbished", description: "Inspected, tested, warrantied units" },
      { label: "Rental Generators", href: "/products/category/rental-generators", description: "Short and long-term power rental" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Installation & Commissioning", href: "/services/installation-commissioning" },
      { label: "Annual Maintenance Contracts", href: "/services/annual-maintenance-contracts" },
      { label: "Repair & Overhauling", href: "/services/repair-overhauling" },
      { label: "Load Bank Testing", href: "/services/load-bank-testing" },
      { label: "Retrofit & Automation", href: "/services/retrofit-automation" },
      { label: "24x7 Emergency Breakdown", href: "/services/emergency-breakdown" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Healthcare & Hospitals", href: "/industries/healthcare" },
      { label: "Data Centers & IT Parks", href: "/industries/data-centers" },
      { label: "Manufacturing & Industrial", href: "/industries/manufacturing" },
      { label: "Real Estate & Commercial", href: "/industries/real-estate-commercial" },
      { label: "Telecom", href: "/industries/telecom" },
      { label: "Construction & Infrastructure", href: "/industries/construction-infrastructure" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Agriculture & Rural Power", href: "/industries/agriculture" },
      { label: "Government & PSU", href: "/industries/government-psu" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    items: [
      { label: "Power Requirement Calculator", href: "/tools/calculator", description: "Size a genset from your actual load" },
      { label: "Compare Generator Models", href: "/tools/compare", description: "Side-by-side spec comparison" },
      { label: "Service Coverage Map", href: "/coverage", description: "Find your nearest service center" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About SNJ Diesel", href: "/about" },
      { label: "Projects & Case Studies", href: "/projects" },
      { label: "Resources & Blog", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const headerActions: { quote: NavLink; service: NavLink } = {
  quote: { label: "Request a Quote", href: "/quote" },
  service: { label: "Book a Service", href: "/service-request" },
};

export const footerNav: NavGroup[] = [
  {
    label: "Products",
    items: [
      { label: "Diesel Generator Sets", href: "/products/category/diesel-generator-sets" },
      { label: "Gas Generator Sets", href: "/products/category/gas-generator-sets" },
      { label: "Industrial Diesel Engines", href: "/products/category/industrial-diesel-engines" },
      { label: "Spare Parts", href: "/products/category/spare-parts" },
      { label: "Used & Refurbished", href: "/products/category/used-refurbished" },
      { label: "Rental Generators", href: "/products/category/rental-generators" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Installation & Commissioning", href: "/services/installation-commissioning" },
      { label: "Annual Maintenance Contracts", href: "/services/annual-maintenance-contracts" },
      { label: "Repair & Overhauling", href: "/services/repair-overhauling" },
      { label: "Load Bank Testing", href: "/services/load-bank-testing" },
      { label: "Retrofit & Automation", href: "/services/retrofit-automation" },
      { label: "Emergency Breakdown", href: "/services/emergency-breakdown" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Projects & Case Studies", href: "/projects" },
      { label: "Resources & Blog", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Tools & Support",
    items: [
      { label: "Power Requirement Calculator", href: "/tools/calculator" },
      { label: "Compare Generator Models", href: "/tools/compare" },
      { label: "Service Coverage Map", href: "/coverage" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Book a Service", href: "/service-request" },
    ],
  },
];
