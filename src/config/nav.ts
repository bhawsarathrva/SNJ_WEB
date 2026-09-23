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
    label: "Projects",
    href: "/projects",
    items: [
      {
        label: "All Previous Work & Photo Gallery",
        href: "/projects",
        description: "500+ verified installations & full site photo gallery",
      },
      {
        label: "Hospital N+1 Backup (2x250 kVA)",
        href: "/projects/riverside-multispecialty-hospital",
        description: "Multi-specialty hospital ICU & OT standby setup",
      },
      {
        label: "IT Park Data Hall Bridge (1,010 kVA)",
        href: "/projects/greenfield-it-park-data-hall",
        description: "Mobile containerized rental genset deployment",
      },
      {
        label: "Automotive Plant Expansion (500 kVA)",
        href: "/projects/auto-components-plant-expansion",
        description: "Tier-1 plant with LV busduct & AMF synchronization",
      },
      {
        label: "Highway Toll Plaza Network (12x62 kVA)",
        href: "/projects/highway-toll-plaza-network",
        description: "State highway multi-site canopy installation",
      },
      {
        label: "Biogas Renewable Energy (250 kVA)",
        href: "/projects/agri-biogas-processing-unit",
        description: "Agri-waste biogas-to-power generator system",
      },
      {
        label: "Resort Acoustic Retrofit (125 kVA)",
        href: "/projects/boutique-resort-noise-retrofit",
        description: "Ultra-silent canopy with 14 dB(A) noise reduction",
      },
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
      { label: "Compare Generator Models", href: "/tools/compare", description: "Side-by-side spec comparison" },
      { label: "Service Coverage Map", href: "/coverage", description: "Find your nearest service center" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About SNJ Diesel", href: "/about" },
      { label: "Resources & Blog", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const headerActions: { service: NavLink; phone: NavLink; quote?: NavLink } = {
  service: { label: "Book a Service", href: "/service-request" },
  phone: { label: "9755515060", href: "tel:9755515060" },
  quote: { label: "Request a Quote", href: "/quote" },
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
      { label: "Previous Work & Projects", href: "/projects" },
      { label: "Resources & Blog", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Tools & Support",
    items: [
      { label: "Compare Generator Models", href: "/tools/compare" },
      { label: "Service Coverage Map", href: "/coverage" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Book a Service", href: "/service-request" },
    ],
  },
];
