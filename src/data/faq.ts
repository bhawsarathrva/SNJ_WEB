import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    category: "Buying",
    question: "How do I know what size generator I need?",
    answer:
      "Use our free Power Requirement Calculator — enter a detailed load list or a quick facility-type estimate, and it recommends a kVA rating along with matching models. For anything above 250 kVA, we recommend a site visit to confirm the number before ordering.",
  },
  {
    category: "Buying",
    question: "What's the difference between standby, prime, and continuous ratings?",
    answer:
      "Standby power is for backup use during outages with variable load, typically limited to a maximum annual run-hour allowance. Prime power is for unlimited hours with variable load, used when a genset is a primary power source. Continuous power is for constant, unchanging load 24/7. Always size against the rating that matches your actual use case.",
  },
  {
    category: "Buying",
    question: "Do you offer financing?",
    answer:
      "Yes, we work with financing partners for both new and certified-used units. Financing details are discussed as part of the quote process once your requirement is confirmed.",
  },
  {
    category: "Installation",
    question: "How long does installation typically take?",
    answer:
      "Most standard installations (up to 250 kVA) take 5–7 working days from a site-ready state to full commissioning, depending on civil work and electrical interconnection complexity. Larger multi-unit installations take longer and are scoped individually.",
  },
  {
    category: "Installation",
    question: "Do I need planning approval or pollution clearance?",
    answer:
      "Requirements vary by state and local authority, and by genset size. We provide the technical documentation needed for your application and can guide you through the process, though the application itself is typically filed by the site owner or their consultant.",
  },
  {
    category: "Service",
    question: "What's included in an Annual Maintenance Contract?",
    answer:
      "Standard AMC plans include scheduled preventive service visits (quarterly by default), bundled consumables for routine service, a signed report after every visit, and priority access to our 24x7 emergency breakdown line.",
  },
  {
    category: "Service",
    question: "What if my genset isn't an SNJ unit?",
    answer:
      "We service most major generator brands, not just units we've sold. A baseline inspection is required before AMC enrollment to confirm the unit's condition and establish a service history.",
  },
  {
    category: "Service",
    question: "How fast is your emergency response?",
    answer:
      "Under 3 hours within our primary service coverage areas — see our Service Coverage Map for details by region. AMC customers receive priority dispatch.",
  },
  {
    category: "Parts",
    question: "Are your spare parts OEM-approved?",
    answer:
      "Yes, all spare parts we supply are OEM-approved or, for remanufactured components like injectors and alternators, tested to OEM tolerance before dispatch with a documented warranty.",
  },
  {
    category: "Rental",
    question: "What's the minimum rental period?",
    answer:
      "This varies by unit size — smaller units (up to 125 kVA) can be rented for as little as a single day, while larger units typically have a 3–7 day minimum. See individual rental listings for specifics.",
  },
  {
    category: "Rental",
    question: "Do you handle delivery and collection?",
    answer:
      "Yes, delivery and collection within our service coverage area is included in rental pricing. Sites outside our standard coverage area are quoted individually.",
  },
  {
    category: "Company",
    question: "What areas do you service?",
    answer:
      "See our Service Coverage Map for a full list of branches and coverage regions. If your site falls outside a listed coverage area, contact us — we take on select projects beyond our standard footprint.",
  },
];

export function getFaqsByCategory() {
  const categories = Array.from(new Set(faqItems.map((f) => f.category)));
  return categories.map((category) => ({
    category,
    items: faqItems.filter((f) => f.category === category),
  }));
}
