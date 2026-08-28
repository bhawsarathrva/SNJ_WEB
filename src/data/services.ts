import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "installation-commissioning",
    name: "Installation & Commissioning",
    tagline: "From site survey to load bank acceptance, handled end to end.",
    summary:
      "We plan the site, run the single-line diagram, install the set, and commission it with a full load bank acceptance test before handover.",
    problem:
      "A genset that's incorrectly sited, poorly earthed, or commissioned without a real load test tends to fail exactly when it's needed most — during an actual outage, not a demo run.",
    solution:
      "SNJ's installation teams handle civil foundation requirements, exhaust and fuel-line routing, electrical interconnection, and AMF/ATS panel wiring, then prove the whole system with an on-load acceptance test before sign-off.",
    process: [
      { step: 1, title: "Site Survey", description: "Assess space, ventilation, exhaust routing, fuel storage, and electrical interconnection points." },
      { step: 2, title: "Design & Approvals", description: "Single-line diagram, foundation drawing, and pollution/noise compliance documentation." },
      { step: 3, title: "Installation", description: "Mechanical placement, fuel and exhaust piping, electrical termination, and panel wiring." },
      { step: 4, title: "Commissioning", description: "Dry run, then full load bank acceptance test with a signed test report." },
      { step: 5, title: "Handover", description: "Operator training and documentation package delivered on sign-off." },
    ],
    applications: ["New installations", "Genset replacements", "Capacity upgrades"],
    industries: ["healthcare", "data-centers", "manufacturing", "real-estate-commercial", "government-psu"],
    benefits: [
      "Single point of accountability from survey to sign-off",
      "Load-tested before handover, not just started and left",
      "Documentation package ready for insurance and compliance audits",
    ],
    faqs: [
      { question: "How long does installation take for a 125 kVA unit?", answer: "Typically 5–7 working days from site-ready to commissioning, depending on civil work and electrical interconnection complexity." },
      { question: "Do you handle the foundation and civil work?", answer: "We provide the foundation drawing and can either supervise your civil contractor or execute the civil work directly." },
      { question: "Is a load bank test included?", answer: "Yes — every commissioning includes an on-load acceptance test with a signed report, not just a no-load start." },
    ],
    relatedServices: ["load-bank-testing", "annual-maintenance-contracts"],
    icon: "Wrench",
  },
  {
    slug: "annual-maintenance-contracts",
    name: "Annual Maintenance Contracts",
    tagline: "Scheduled servicing that keeps warranty and uptime intact.",
    summary:
      "A fixed-schedule maintenance contract covering routine service, consumables, and priority breakdown response — sized to your genset's duty cycle.",
    problem:
      "Gensets that only get attention after they fail cost more in emergency callouts, unplanned downtime, and shortened engine life than a scheduled contract ever would.",
    solution:
      "Our AMC plans schedule service visits by run-hours or calendar interval, whichever comes first, and bundle consumables so there's no separate parts invoice for routine work.",
    process: [
      { step: 1, title: "Site Assessment", description: "Review genset model, run-hour history, and duty cycle to set the service schedule." },
      { step: 2, title: "Contract Setup", description: "Agree scope, visit frequency, and response-time SLA in writing." },
      { step: 3, title: "Scheduled Visits", description: "Preventive service performed on schedule, with a report after every visit." },
      { step: 4, title: "Priority Response", description: "AMC customers get priority slotting on the 24x7 breakdown line." },
      { step: 5, title: "Annual Review", description: "Run-hour trend and cost review at contract renewal." },
    ],
    applications: ["Standby gensets", "Prime power installations", "Multi-site fleets"],
    industries: ["healthcare", "manufacturing", "real-estate-commercial", "hospitality", "data-centers"],
    benefits: [
      "Predictable annual maintenance budget",
      "Priority breakdown response over non-AMC customers",
      "Service history maintained for warranty and resale value",
    ],
    faqs: [
      { question: "How many service visits are included?", answer: "Standard plans include quarterly visits; high-duty-cycle sites can move to bi-monthly or monthly schedules." },
      { question: "Are spare parts included in the AMC price?", answer: "Routine consumables (filters, oil) are bundled. Major component replacement is quoted separately at AMC customer rates." },
      { question: "Can I upgrade to AMC after buying a used unit?", answer: "Yes — a baseline inspection is required first to confirm the unit's condition before enrollment." },
    ],
    relatedServices: ["repair-overhauling", "load-bank-testing"],
    icon: "ClipboardCheck",
  },
  {
    slug: "repair-overhauling",
    name: "Repair & Overhauling",
    tagline: "From a single failed part to a full engine rebuild.",
    summary:
      "Diagnostic-led repair for breakdowns, plus full major overhauls for units approaching their engine's rebuild interval.",
    problem:
      "Deferred repairs compound — a minor cooling issue left unaddressed becomes a cracked head; a worn injector left in service drags down every other component around it.",
    solution:
      "Our technicians diagnose to root cause before quoting, and every major overhaul includes a load bank test before the unit is handed back into service.",
    process: [
      { step: 1, title: "Diagnosis", description: "On-site or workshop diagnosis to identify root cause, not just the symptom." },
      { step: 2, title: "Quotation", description: "Itemized quote covering parts, labor, and expected turnaround time." },
      { step: 3, title: "Repair or Overhaul", description: "Executed on-site for minor repairs, or at an SNJ workshop for full overhauls." },
      { step: 4, title: "Testing", description: "Load bank verification before the unit is returned to service." },
      { step: 5, title: "Warranty", description: "Workmanship and parts warranty issued on completion." },
    ],
    applications: ["Breakdown repair", "Major overhaul", "Pre-purchase inspection repair"],
    industries: ["manufacturing", "healthcare", "real-estate-commercial", "construction-infrastructure"],
    benefits: [
      "Root-cause diagnosis, not just part-swapping",
      "Load-tested before returning to service",
      "Workshop capacity for full engine overhauls up to 1,010 kVA",
    ],
    faqs: [
      { question: "Do you offer emergency repair outside AMC?", answer: "Yes, though AMC customers receive priority scheduling. Non-AMC emergency callouts are billed at standard emergency rates." },
      { question: "How long does a full overhaul take?", answer: "4–10 working days depending on genset size and parts availability, communicated upfront in the quote." },
      { question: "Is there a warranty on overhaul work?", answer: "Yes — 12 months on major overhauls, 6 months on standard repairs, covering both parts and labor." },
    ],
    relatedServices: ["load-bank-testing", "retrofit-automation"],
    icon: "Settings2",
  },
  {
    slug: "load-bank-testing",
    name: "Load Bank Testing",
    tagline: "Prove your standby genset will actually carry the load.",
    summary:
      "On-site resistive/reactive load bank testing that verifies real-world performance — required for many compliance and insurance audits.",
    problem:
      "A genset that only ever runs a no-load weekly test can pass every check and still fail under real load, because wet-stacking and unloaded operation hide problems that only show up under duty.",
    solution:
      "We bring a mobile load bank to site and run your genset at 25/50/75/100% of rated capacity, recording voltage, frequency, and temperature stability at each stage.",
    process: [
      { step: 1, title: "Scheduling", description: "Test scheduled around your operational hours to avoid disruption." },
      { step: 2, title: "Setup", description: "Mobile load bank connected and calibrated on site." },
      { step: 3, title: "Staged Loading", description: "Genset run through 25/50/75/100% load steps with readings logged at each stage." },
      { step: 4, title: "Reporting", description: "Signed test report issued, flagging any performance deviation." },
      { step: 5, title: "Remediation", description: "If issues are found, a repair quote is provided immediately." },
    ],
    applications: ["Compliance audits", "Insurance requirements", "Post-commissioning verification", "Pre-AMC baseline"],
    industries: ["healthcare", "data-centers", "government-psu", "manufacturing"],
    benefits: [
      "Independent, documented proof of standby capacity",
      "Surfaces wet-stacking and cooling issues before they cause an outage",
      "Required documentation for many facility compliance audits",
    ],
    faqs: [
      { question: "How long does a load bank test take?", answer: "Typically 2–4 hours depending on genset size and the number of load steps required." },
      { question: "Does the test affect our normal power supply?", answer: "No — the load bank test runs independent of your mains supply and doesn't interrupt building power." },
      { question: "How often should we run one?", answer: "Annually for most standby applications; more frequently for healthcare and data center facilities under regulatory requirements." },
    ],
    relatedServices: ["annual-maintenance-contracts", "installation-commissioning"],
    icon: "Gauge",
  },
  {
    slug: "retrofit-automation",
    name: "Retrofit & Automation Upgrades",
    tagline: "Bring an older genset up to modern control and monitoring standards.",
    summary:
      "AMF/ATS panel upgrades, remote monitoring retrofits, and synchronizing-panel additions for existing installations.",
    problem:
      "A perfectly mechanically sound genset can still be operationally unreliable if its control panel is obsolete, unmonitored, or can't talk to a modern BMS.",
    solution:
      "We retrofit modern control panels, add remote monitoring and alerting, and — where a site has grown — add synchronizing panels to parallel an existing set with a new one instead of a full replacement.",
    process: [
      { step: 1, title: "Assessment", description: "Evaluate existing control panel, wiring, and integration requirements." },
      { step: 2, title: "Design", description: "Scope the retrofit — panel replacement, monitoring add-on, or synchronizing upgrade." },
      { step: 3, title: "Installation", description: "Retrofit executed with minimal downtime, scheduled around a planned outage window." },
      { step: 4, title: "Commissioning", description: "Full functional test of new controls before handover." },
      { step: 5, title: "Training", description: "Facility team trained on the new panel and any monitoring dashboard." },
    ],
    applications: ["Panel modernization", "Remote monitoring retrofit", "Capacity expansion via paralleling"],
    industries: ["manufacturing", "real-estate-commercial", "data-centers", "government-psu"],
    benefits: [
      "Extends useful life of mechanically sound older units",
      "Adds remote visibility without a full genset replacement",
      "Often cheaper than buying additional standalone capacity",
    ],
    faqs: [
      { question: "Can any genset be retrofitted with remote monitoring?", answer: "Most brands and ages can, though very old mechanical-governor engines have limited data points available for monitoring." },
      { question: "Can two different-brand gensets be synchronized?", answer: "In most cases yes, with a synchronizing panel matched to both units' control interfaces — we confirm compatibility during assessment." },
    ],
    relatedServices: ["repair-overhauling", "installation-commissioning"],
    icon: "CircuitBoard",
  },
  {
    slug: "emergency-breakdown",
    name: "24x7 Emergency Breakdown",
    tagline: "A single number, answered around the clock.",
    summary:
      "Emergency breakdown response for any genset installation, AMC customer or not, with priority dispatch based on facility criticality.",
    problem:
      "A genset failure during an actual mains outage is the worst possible time to be searching for a phone number or waiting on a callback.",
    solution:
      "One phone line, staffed 24x7, routes your call to the nearest available SNJ technician with visibility into your unit's service history if you're an AMC customer.",
    process: [
      { step: 1, title: "Call In", description: "Call or WhatsApp the emergency line — no ticket form required first." },
      { step: 2, title: "Triage", description: "Facility criticality and fault symptoms assessed to prioritize dispatch." },
      { step: 3, title: "Dispatch", description: "Nearest available technician dispatched, typically within 3 hours in covered regions." },
      { step: 4, title: "Repair", description: "On-site diagnosis and repair, or temporary rental power arranged if parts are needed." },
      { step: 5, title: "Follow-up", description: "Incident report logged and shared, with root-cause recommendation." },
    ],
    applications: ["Total genset failure", "Failed auto-start on mains outage", "Fuel or cooling system failure"],
    industries: ["healthcare", "data-centers", "manufacturing", "real-estate-commercial"],
    benefits: [
      "Single number, staffed 24x7, no automated phone tree",
      "AMC customers get priority dispatch and known service history",
      "Emergency rental power arranged when on-site repair needs parts",
    ],
    faqs: [
      { question: "Is emergency breakdown only for AMC customers?", answer: "No — it's available to any customer, though AMC customers receive priority dispatch and faster diagnosis from an existing service history." },
      { question: "What's the average response time?", answer: "Under 3 hours within our primary service coverage areas; response time for outlying areas is confirmed at the time of the call." },
    ],
    relatedServices: ["repair-overhauling", "annual-maintenance-contracts"],
    icon: "Siren",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service) {
  return services.filter((s) => service.relatedServices.includes(s.slug));
}
