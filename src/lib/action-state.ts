import type { ServiceBookingWhatsAppDetails } from "@/lib/whatsapp";

export interface ActionState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
  ticketNumber?: string;
  whatsappUrl?: string;
  bookingDetails?: ServiceBookingWhatsAppDetails;
}

export const initialActionState: ActionState = { status: "idle", message: "" };
