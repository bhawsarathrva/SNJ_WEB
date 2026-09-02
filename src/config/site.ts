export const siteConfig = {
  name: "SNJ Diesel",
  legalName: "SNJ Diesel Power Systems",
  tagline: "One Roof Solution Of All Your Power Requirements",
  description:
    "SNJ Diesel sizes, sells, installs, and services diesel and gas generator sets for hospitals, data centers, manufacturers, and commercial sites — backed by 24x7 breakdown response.",
  url: "https://www.snjdiesel.com",
  ogImage: "/og-image.png",
  phone: "+91-9755515060",
  emergencyPhone: "+91-9755515060",
  email: "snjdieselindore@gmail.com",
  supportEmail: "snjdieselindore@gmail.com",
  whatsapp: "https://wa.me/919755515060",
  address: {
    line1: "PQ9Q+MFC, Bada Bangarda, Kordia Barda",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452005",
    country: "India",
  },
  founded: 2003,
  stats: [
    { label: "Years in operation", value: "20+" },
    { label: "Gensets deployed", value: "3,400+" },
    { label: "Service centers", value: "6" },
    { label: "Average emergency response", value: "< 3 hrs" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/snj-diesel",
    facebook: "https://www.facebook.com/snjdiesel",
    youtube: "https://www.youtube.com/@snjdiesel",
  },
} as const;

export type SiteConfig = typeof siteConfig;
