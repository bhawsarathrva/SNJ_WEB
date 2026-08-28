import type { ProjectCaseStudy } from "@/types";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "riverside-multispecialty-hospital",
    title: "N+1 Standby Power for a 450-Bed Hospital",
    clientType: "450-bed multi-specialty hospital",
    industry: "healthcare",
    location: "Pune, Maharashtra",
    capacity: "2 x 250 kVA (N+1)",
    year: 2024,
    summary:
      "Replaced a single aging 300 kVA genset with a synchronized N+1 pair, eliminating single-point-of-failure risk across the ICU, OT, and imaging block.",
    challenge:
      "The hospital's existing single 300 kVA unit had no redundancy — any failure or scheduled maintenance meant a period of zero standby cover for critical care. The client needed redundant capacity without a full electrical re-design of the existing distribution board.",
    solution:
      "SNJ installed two 250 kVA diesel generator sets on a common bus with a synchronizing panel, sized so either unit alone could carry the hospital's essential-services load. Installation was phased over three nights to avoid any interruption to the existing single unit's cover during the changeover.",
    results: [
      "Zero single point of failure across standby power",
      "Sub-8-second changeover time verified on load bank test",
      "Maintenance can now be performed on one unit with full cover from the other",
    ],
    productCategory: "diesel-generator-sets",
  },
  {
    slug: "greenfield-it-park-data-hall",
    title: "1,010 kVA Bridge Power During Data Hall Commissioning",
    clientType: "IT park data hall operator",
    industry: "data-centers",
    location: "Hinjewadi, Pune",
    capacity: "1 x 1,010 kVA (rental, 45 days)",
    year: 2023,
    summary:
      "Provided rental bridge power during a 45-day gap between data hall energization and permanent utility connection approval.",
    challenge:
      "The client's permanent grid connection was delayed by six weeks past their committed go-live date with an anchor tenant. Losing the tenant commitment was not an option, and a permanent genset order would not arrive in time.",
    solution:
      "SNJ deployed a 1,010 kVA rental unit within 72 hours of the request, complete with a temporary fuel management contract and an on-site technician for the full rental duration to monitor load and fuel consumption.",
    results: [
      "Data hall went live on the committed date with rental power",
      "Zero downtime incidents across the 45-day rental period",
      "Client subsequently ordered a permanent 2 x 500 kVA N+1 system from SNJ",
    ],
    productCategory: "rental-generators",
  },
  {
    slug: "auto-components-plant-expansion",
    title: "500 kVA Capacity Expansion for an Auto Components Plant",
    clientType: "Tier-1 automotive components manufacturer",
    industry: "manufacturing",
    location: "Chakan, Pune",
    capacity: "1 x 500 kVA",
    year: 2024,
    summary:
      "Sized and installed a new 500 kVA set to cover a second production line added after the facility's original genset was already at capacity.",
    challenge:
      "The plant's existing 320 kVA genset was already running near full load on the original line. A new stamping line added significant motor-inrush demand that the existing unit could not absorb without risking nuisance trips.",
    solution:
      "Rather than replace the existing unit, SNJ installed a second 500 kVA set with a synchronizing panel, allowing both gensets to share load across the full plant or run independently by line during partial shutdowns.",
    results: [
      "New production line commissioned without derating the existing line's backup cover",
      "Total standby capacity increased by 500 kVA with zero disruption to ongoing production",
      "Plant now on a combined AMC covering both units on a single schedule",
    ],
    productCategory: "diesel-generator-sets",
  },
  {
    slug: "highway-toll-plaza-network",
    title: "Standardized Standby Power Across 12 Toll Plazas",
    clientType: "State highway authority",
    industry: "government-psu",
    location: "Maharashtra state highway network",
    capacity: "12 x 62 kVA",
    year: 2022,
    summary:
      "Delivered and commissioned identical 62 kVA units across 12 toll plaza sites under a single tender, with a standardized 5-year AMC.",
    challenge:
      "The highway authority needed identical, tender-compliant installations across 12 geographically dispersed sites, each requiring full documentation for public audit and a consistent long-term maintenance commitment.",
    solution:
      "SNJ standardized on a single 62 kVA configuration across all sites, with identical AMF panel setup for consistent operator training, and structured a 5-year AMC with quarterly visits logged centrally for audit purposes.",
    results: [
      "All 12 sites commissioned within the tender's 90-day window",
      "Centralized service log available for public audit at any site",
      "Zero toll-collection downtime attributed to power failure since commissioning",
    ],
    productCategory: "diesel-generator-sets",
  },
  {
    slug: "agri-biogas-processing-unit",
    title: "Biogas-to-Power Conversion for an Agri-Processing Unit",
    clientType: "Agricultural waste processing cooperative",
    industry: "agriculture",
    location: "Nashik, Maharashtra",
    capacity: "1 x 250 kVA (biogas)",
    year: 2023,
    summary:
      "Converted a cooperative's existing biogas waste stream into on-site power generation, offsetting diesel costs for their processing line.",
    challenge:
      "The cooperative was flaring excess biogas from their processing waste stream while simultaneously paying for diesel genset fuel to run the same facility — an obvious efficiency gap with no existing conversion pathway.",
    solution:
      "SNJ supplied a 250 kVA gas genset configured for variable methane-content biogas, including a gas-quality sensing and auto-compensation system to handle the cooperative's inconsistent feedstock.",
    results: [
      "Diesel fuel costs for the processing line reduced by an estimated 70%",
      "Previously flared biogas now offsets grid draw during processing hours",
      "Payback period on the conversion achieved within 14 months",
    ],
    productCategory: "gas-generator-sets",
  },
  {
    slug: "boutique-resort-noise-retrofit",
    title: "Acoustic Retrofit for a Guest-Facing Genset Installation",
    clientType: "Boutique hillside resort",
    industry: "hospitality",
    location: "Lonavala, Maharashtra",
    capacity: "1 x 125 kVA",
    year: 2024,
    summary:
      "Retrofitted an existing open-skid 125 kVA genset with an acoustic canopy after guest complaints during peak season power cuts.",
    challenge:
      "The resort's existing genset, installed years earlier by another vendor, was positioned closer to guest villas than ideal and had no acoustic enclosure — generating guest complaints every time it ran during evening power cuts.",
    solution:
      "SNJ surveyed the existing installation and fitted a custom acoustic canopy sized to the unit, reducing noise output from 82 dB(A) to under 68 dB(A) at the nearest guest villa, without needing to relocate the unit.",
    results: [
      "Noise level at nearest guest villa reduced by over 14 dB(A)",
      "Zero guest complaints related to genset noise since retrofit",
      "Retrofit completed in a single day with no operational downtime",
    ],
    productCategory: "controls-accessories",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByIndustry(industrySlug: string) {
  return projects.filter((p) => p.industry === industrySlug);
}
