"use server";

import { prisma } from "@/lib/db";
import {
  quoteRequestSchema,
  serviceRequestSchema,
  contactSchema,
} from "@/lib/validations";

import {
  buildServiceWhatsAppUrl,
  generateTicketNumber,
  type ServiceBookingWhatsAppDetails,
} from "@/lib/whatsapp";
import type { ActionState } from "@/lib/action-state";

const urgencyMap = {
  standard: "STANDARD",
  urgent: "URGENT",
  emergency: "EMERGENCY",
} as const;

export async function submitQuoteRequest(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData);
  const parsed = quoteRequestSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.quoteRequest.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        company: parsed.data.company || undefined,
        productCategory: parsed.data.productCategory,
        capacityKva: parsed.data.capacityKva,
        application: parsed.data.application || undefined,
        industry: parsed.data.industry || undefined,
        city: parsed.data.city,
        message: parsed.data.message || undefined,
      },
    });
  } catch (error) {
    console.error("submitQuoteRequest failed", error);
    return {
      status: "error",
      message:
        "We couldn't submit your request online. Please call us directly and we'll get you sorted.",
    };
  }

  return {
    status: "success",
    message: "Thanks — our team will call you within one business day with a quote.",
  };
}

export async function submitServiceRequest(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData);
  const parsed = serviceRequestSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const clientTicket = (formData.get("ticketNumber") as string | null)?.trim();
  const ticketNumber = clientTicket && clientTicket.startsWith("SR-")
    ? clientTicket
    : generateTicketNumber();

  const bookingDetails: ServiceBookingWhatsAppDetails = {
    ticketNumber,
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email,
    requestType: parsed.data.requestType,
    machineModel: parsed.data.machineModel || undefined,
    serialNumber: parsed.data.serialNumber || undefined,
    city: parsed.data.city,
    address: parsed.data.address || undefined,
    preferredDate: parsed.data.preferredDate || undefined,
    urgency: parsed.data.urgency,
    message: parsed.data.message || undefined,
  };

  const whatsappUrl = buildServiceWhatsAppUrl(bookingDetails);

  try {
    await prisma.serviceRequest.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        requestType: parsed.data.requestType,
        machineModel: parsed.data.machineModel || undefined,
        serialNumber: parsed.data.serialNumber || undefined,
        city: parsed.data.city,
        address: parsed.data.address || undefined,
        preferredDate: parsed.data.preferredDate
          ? new Date(parsed.data.preferredDate)
          : undefined,
        urgency: urgencyMap[parsed.data.urgency],
        message: parsed.data.message || undefined,
        ticketNumber,
      },
    });
  } catch (error) {
    // Keep booking flow working even if local DB is unreachable
    console.error("submitServiceRequest prisma save failed (continuing to WhatsApp flow):", error);
  }

  return {
    status: "success",
    message: `Request received — ticket ${ticketNumber}. Details forwarded to WhatsApp (+91 9755515060).`,
    ticketNumber,
    whatsappUrl,
    bookingDetails,
  };
}

export async function submitContactMessage(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contactMessage.create({ data: parsed.data });
  } catch (error) {
    console.error("submitContactMessage failed", error);
    return {
      status: "error",
      message: "We couldn't send your message online. Please email or call us instead.",
    };
  }

  return {
    status: "success",
    message: "Message sent — we typically reply within one business day.",
  };
}
