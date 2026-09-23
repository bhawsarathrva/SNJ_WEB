import { siteConfig } from "@/config/site";
import { serviceRequestTypes } from "@/lib/validations";

export const requestTypeLabels: Record<(typeof serviceRequestTypes)[number], string> = {
  installation: "Installation & Commissioning",
  amc: "Annual Maintenance Contract (AMC)",
  repair: "Repair & Overhauling",
  inspection: "Inspection / Load Bank Testing",
  "load-bank-testing": "Load Bank Testing",
  retrofit: "Retrofit & Automation",
  emergency: "Emergency Breakdown Support",
  consultation: "General Consultation",
};

export const urgencyLabels: Record<string, string> = {
  standard: "Standard (Within a few days)",
  urgent: "Urgent (Within 24 hours)",
  emergency: "Emergency (Breakdown — immediate response)",
};

export interface ServiceBookingWhatsAppDetails {
  ticketNumber?: string;
  name: string;
  phone: string;
  email: string;
  requestType: string;
  machineModel?: string | null;
  serialNumber?: string | null;
  preferredDate?: string | null;
  city: string;
  address?: string | null;
  urgency: string;
  message?: string | null;
}

export const WHATSAPP_NUMBER = "919755515060";
export const WHATSAPP_DISPLAY = "9755515060";

export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateTicketNumber(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SR-${stamp}-${rand}`;
}

export function formatServiceWhatsAppMessage(details: ServiceBookingWhatsAppDetails): string {
  const serviceLabel =
    requestTypeLabels[details.requestType as keyof typeof requestTypeLabels] ||
    details.requestType;
  const urgencyLabel = urgencyLabels[details.urgency] || details.urgency;

  const lines: string[] = [
    "🛠️ *NEW SERVICE REQUEST — SNJ DIESEL*",
    "━━━━━━━━━━━━━━━━━━━━━━",
  ];

  if (details.ticketNumber) {
    lines.push(`📋 *Ticket ID:* ${details.ticketNumber}`);
  }

  lines.push(
    `👤 *Customer Name:* ${details.name.trim()}`,
    `📞 *Phone Number:* ${details.phone.trim()}`,
    `✉️ *Email:* ${details.email.trim()}`,
    `⚙️ *Service Required:* ${serviceLabel}`,
    `⚡ *Urgency Level:* ${urgencyLabel}`,
    `🏙️ *Site City:* ${details.city.trim()}`
  );

  if (details.address && details.address.trim()) {
    lines.push(`📍 *Site Address:* ${details.address.trim()}`);
  }

  if (details.machineModel && details.machineModel.trim()) {
    lines.push(`🚜 *Genset Model:* ${details.machineModel.trim()}`);
  }

  if (details.serialNumber && details.serialNumber.trim()) {
    lines.push(`🔢 *Serial Number:* ${details.serialNumber.trim()}`);
  }

  if (details.preferredDate && details.preferredDate.trim()) {
    lines.push(`📅 *Preferred Date:* ${details.preferredDate.trim()}`);
  }

  if (details.message && details.message.trim()) {
    lines.push(`📝 *Issue / Request Notes:*\n${details.message.trim()}`);
  }

  lines.push(
    "━━━━━━━━━━━━━━━━━━━━━━",
    `🌐 *Sent from:* ${siteConfig.url}/service-request`
  );

  return lines.join("\n");
}

export function buildServiceWhatsAppUrl(details: ServiceBookingWhatsAppDetails): string {
  const text = formatServiceWhatsAppMessage(details);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
