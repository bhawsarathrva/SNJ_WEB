export type ProductCategorySlug =
  | "diesel-generator-sets"
  | "gas-generator-sets"
  | "industrial-diesel-engines"
  | "controls-accessories"
  | "spare-parts"
  | "used-refurbished"
  | "rental-generators";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  shortName: string;
  summary: string;
  icon: string;
  image: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategorySlug;
  tagline: string;
  description: string;
  kvaRange?: [number, number];
  fuelType: "Diesel" | "Gas" | "Dual Fuel" | "N/A";
  phase: "Single Phase" | "Three Phase" | "Both" | "N/A";
  applications: string[];
  industries: string[];
  specs: ProductSpec[];
  features: string[];
  icon: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  process: ServiceProcessStep[];
  applications: string[];
  industries: string[];
  benefits: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
  icon: string;
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  description: string;
  challenges: string[];
  recommendedProductCategories: ProductCategorySlug[];
  recommendedServiceSlugs: string[];
  typicalCapacity: string;
  icon: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  location: string;
  capacity: string;
  year: number;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  productCategory: ProductCategorySlug;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  body: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceBranch {
  slug: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  coverageRadiusKm: number;
  services: string[];
  emergencyAvailable: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items: NavLink[];
}

export type RequestUrgency = "standard" | "urgent" | "emergency";

export type ServiceRequestType =
  | "installation"
  | "amc"
  | "repair"
  | "inspection"
  | "load-bank-testing"
  | "retrofit"
  | "emergency"
  | "consultation";
