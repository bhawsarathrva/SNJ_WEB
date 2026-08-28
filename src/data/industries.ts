import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    summary: "Continuous power for ICUs, operation theatres, and imaging equipment.",
    description:
      "Hospitals can't treat a power gap as an inconvenience — ICU ventilators, OT lighting, and imaging equipment need a changeover measured in seconds, not minutes. We size, install, and load-test standby power for facilities where the backup system is part of the clinical infrastructure, not an afterthought.",
    challenges: [
      "Sub-10-second changeover requirement for critical care loads",
      "Regulatory compliance audits requiring documented load bank tests",
      "Zero tolerance for nuisance trips during mains fluctuation",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "controls-accessories"],
    recommendedServiceSlugs: ["installation-commissioning", "load-bank-testing", "annual-maintenance-contracts"],
    typicalCapacity: "100 kVA – 500 kVA depending on bed count and imaging load",
    icon: "Stethoscope",
  },
  {
    slug: "data-centers",
    name: "Data Centers & IT Parks",
    summary: "N+1 redundant power for server halls and precision cooling.",
    description:
      "Data halls run on layered redundancy, and the genset layer is the last line of defense between a mains failure and a hard outage. We design for N+1 and N+2 configurations with synchronizing panels and full BMS integration.",
    challenges: [
      "N+1/N+2 redundancy across multiple parallel gensets",
      "Sub-second UPS-to-genset handoff coordination",
      "24/7/365 duty cycle tolerance for extended outages",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "gas-generator-sets", "controls-accessories"],
    recommendedServiceSlugs: ["installation-commissioning", "retrofit-automation", "load-bank-testing"],
    typicalCapacity: "250 kVA – 1,010 kVA, often multi-unit parallel bus",
    icon: "Server",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    summary: "Full-plant backup for production lines, motors, and compressors.",
    description:
      "A grid outage on a production floor doesn't just stop output — it can scrap a batch mid-process, damage motor windings on restart, or trip a compressed-air system a whole line depends on. We size for full-plant or priority-load backup depending on your risk tolerance.",
    challenges: [
      "High inrush current from motor loads on genset start",
      "Continuous multi-shift duty cycles",
      "Integration with existing plant electrical infrastructure",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "gas-generator-sets", "industrial-diesel-engines"],
    recommendedServiceSlugs: ["installation-commissioning", "annual-maintenance-contracts", "repair-overhauling"],
    typicalCapacity: "125 kVA – 1,010 kVA depending on plant load",
    icon: "Factory",
  },
  {
    slug: "real-estate-commercial",
    name: "Real Estate & Commercial",
    summary: "Backup power for lifts, common areas, and water supply in residential and office towers.",
    description:
      "Residents and tenants expect lifts, water pumps, and common-area lighting to keep running through an outage. We size for essential-services load, not the full connected load of the building.",
    challenges: [
      "Rooftop or basement installation with strict noise limits",
      "Shared ownership decision-making on capacity and budget",
      "Long-term AMC continuity across changing facility management",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "gas-generator-sets", "controls-accessories"],
    recommendedServiceSlugs: ["installation-commissioning", "annual-maintenance-contracts"],
    typicalCapacity: "40 kVA – 250 kVA depending on unit count and essential load",
    icon: "Building2",
  },
  {
    slug: "telecom",
    name: "Telecom",
    summary: "Remote-site power reliability for towers and network infrastructure.",
    description:
      "Telecom sites are often in locations with the least reliable grid and the least tolerance for downtime — a dropped tower means dropped calls and data across its coverage radius. We support remote-site sizing, containerized units, and fuel-theft-resistant tank configurations.",
    challenges: [
      "Remote-site accessibility for service and refueling",
      "Fuel security against theft and pilferage",
      "Battery-genset hybrid coordination for hybrid power sites",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "controls-accessories"],
    recommendedServiceSlugs: ["annual-maintenance-contracts", "emergency-breakdown"],
    typicalCapacity: "15 kVA – 82 kVA per tower site",
    icon: "Radio",
  },
  {
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure",
    summary: "Temporary and bridge power for active job sites and public works.",
    description:
      "Construction sites need power before the grid connection exists, and infrastructure projects often need bridge power during planned outages or capacity upgrades. Our rental fleet and rapid-deployment rental units are built for exactly this.",
    challenges: [
      "Frequent site relocation as the project progresses",
      "Rugged operating environment — dust, vibration, uneven power quality",
      "Short-notice capacity changes as project phases shift",
    ],
    recommendedProductCategories: ["rental-generators", "diesel-generator-sets"],
    recommendedServiceSlugs: ["installation-commissioning", "emergency-breakdown"],
    typicalCapacity: "125 kVA – 750 kVA rental, scaled to project phase",
    icon: "HardHat",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Guest-experience-grade backup for hotels, resorts, and banquet venues.",
    description:
      "A power outage during a wedding banquet or a hotel stay is a reputational event, not just an operational one. We size for kitchen equipment, HVAC, and guest-room continuity, with noise limits that respect the guest experience.",
    challenges: [
      "Strict noise limits near guest-facing areas",
      "Kitchen equipment inrush load on changeover",
      "Event-driven peak demand for banquet and conference power",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "gas-generator-sets", "rental-generators"],
    recommendedServiceSlugs: ["installation-commissioning", "annual-maintenance-contracts"],
    typicalCapacity: "40 kVA – 250 kVA depending on property size",
    icon: "Hotel",
  },
  {
    slug: "agriculture",
    name: "Agriculture & Rural Power",
    summary: "Irrigation pump power and biogas generation for farms and agri-processing.",
    description:
      "Rural grid supply is often unscheduled and seasonal, but irrigation timing isn't optional. We support pump-drive engines, standby gensets for cold storage, and biogas-fuelled gensets for agri-processing units generating their own fuel.",
    challenges: [
      "Unreliable or scheduled rural grid supply",
      "Dusty, high-vibration operating environments",
      "Seasonal duty cycles with long idle periods between use",
    ],
    recommendedProductCategories: ["industrial-diesel-engines", "diesel-generator-sets", "gas-generator-sets"],
    recommendedServiceSlugs: ["annual-maintenance-contracts", "repair-overhauling"],
    typicalCapacity: "15 kVA – 125 kVA, or bare-shaft engines for pump drives",
    icon: "Wheat",
  },
  {
    slug: "government-psu",
    name: "Government & PSU",
    summary: "Tender-compliant supply, installation, and AMC for public sector facilities.",
    description:
      "Government and public-sector projects come with tender documentation, compliance certificates, and multi-year AMC requirements. We support the full paperwork trail alongside the physical installation.",
    challenges: [
      "Tender compliance and documentation requirements",
      "Multi-year AMC continuity across budget cycles",
      "Public accountability for uptime and maintenance records",
    ],
    recommendedProductCategories: ["diesel-generator-sets", "industrial-diesel-engines"],
    recommendedServiceSlugs: ["installation-commissioning", "load-bank-testing", "annual-maintenance-contracts"],
    typicalCapacity: "62 kVA – 1,010 kVA depending on facility type",
    icon: "Landmark",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
