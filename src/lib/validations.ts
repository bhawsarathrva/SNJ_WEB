import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20, "Enter a valid phone number."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  productCategory: z.string().min(1, "Select a product category."),
  capacityKva: z.coerce.number().int().positive().optional(),
  application: z.string().optional().or(z.literal("")),
  industry: z.string().optional().or(z.literal("")),
  city: z.string().trim().min(2, "Enter your city."),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

export const serviceRequestTypes = [
  "installation",
  "amc",
  "repair",
  "inspection",
  "load-bank-testing",
  "retrofit",
  "emergency",
  "consultation",
] as const;

export const serviceRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20, "Enter a valid phone number."),
  requestType: z.enum(serviceRequestTypes, {
    error: "Select a request type.",
  }),
  machineModel: z.string().trim().max(120).optional().or(z.literal("")),
  serialNumber: z.string().trim().max(80).optional().or(z.literal("")),
  city: z.string().trim().min(2, "Enter the site city."),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  preferredDate: z.string().optional().or(z.literal("")),
  urgency: z.enum(["standard", "urgent", "emergency"]).default("standard"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Enter a subject."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
