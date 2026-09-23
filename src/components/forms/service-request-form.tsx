"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Loader2,
  CheckCircle2,
  RotateCcw,
  ExternalLink,
  MapPin,
  Wrench,
  User,
  Phone,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "@/components/forms/field-error";
import { submitServiceRequest } from "@/lib/actions";
import { initialActionState } from "@/lib/action-state";
import { serviceRequestTypes } from "@/lib/validations";
import {
  requestTypeLabels,
  urgencyLabels,
  buildServiceWhatsAppUrl,
  generateTicketNumber,
  WHATSAPP_NUMBER,
  type ServiceBookingWhatsAppDetails,
} from "@/lib/whatsapp";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

const urgencyOptions = [
  { value: "standard", label: "Standard", hint: "Within a few days" },
  { value: "urgent", label: "Urgent", hint: "Within 24 hours" },
  { value: "emergency", label: "Emergency", hint: "Breakdown — need help now" },
] as const;

export function ServiceRequestForm() {
  const [ticketNumber, setTicketNumber] = useState<string>(() => generateTicketNumber());
  const [selectedService, setSelectedService] = useState<string>("");
  const [state, formAction, isPending] = useActionState(
    submitServiceRequest,
    initialActionState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [clientSubmittedDetails, setClientSubmittedDetails] =
    useState<ServiceBookingWhatsAppDetails | null>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error" && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    const formData = new FormData(form);
    const details: ServiceBookingWhatsAppDetails = {
      ticketNumber: ticketNumber || generateTicketNumber(),
      name: (formData.get("name") as string) || "",
      phone: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || "",
      requestType: (formData.get("requestType") as string) || selectedService,
      machineModel: (formData.get("machineModel") as string) || undefined,
      serialNumber: (formData.get("serialNumber") as string) || undefined,
      preferredDate: (formData.get("preferredDate") as string) || undefined,
      city: (formData.get("city") as string) || "",
      address: (formData.get("address") as string) || undefined,
      urgency: (formData.get("urgency") as string) || "standard",
      message: (formData.get("message") as string) || undefined,
    };

    setClientSubmittedDetails(details);

    // Synchronously open WhatsApp directly during user click to bypass popup blockers
    const whatsappUrl = buildServiceWhatsAppUrl(details);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setClientSubmittedDetails(null);
    setSelectedService("");
    setTicketNumber(generateTicketNumber());
    formRef.current?.reset();
  };

  const activeDetails: ServiceBookingWhatsAppDetails | null =
    state.status === "success"
      ? state.bookingDetails || clientSubmittedDetails
      : null;

  // SUCCESS CONFIRMATION VIEW
  if (activeDetails) {
    const whatsappUrl =
      state.whatsappUrl || buildServiceWhatsAppUrl(activeDetails);
    const serviceLabel =
      requestTypeLabels[activeDetails.requestType as keyof typeof requestTypeLabels] ||
      activeDetails.requestType;
    const urgencyLabel =
      urgencyLabels[activeDetails.urgency] || activeDetails.urgency;

    return (
      <div className="flex flex-col gap-6 py-2 animate-in fade-in-50 duration-300">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-8" />
          </div>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Service Request Registered!
          </h3>

          <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-background/80 px-3 py-1 font-mono text-sm font-semibold border border-border shadow-xs">
            <span>Ticket:</span>
            <span className="text-primary">{activeDetails.ticketNumber || state.ticketNumber}</span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
            Your booking details have been prepared for direct dispatch to our service support desk on WhatsApp number{" "}
            <span className="font-semibold text-foreground">+{WHATSAPP_NUMBER}</span>.
          </p>
        </div>

        {/* PRIMARY WHATSAPP ACTION */}
        <div className="rounded-xl border-2 border-[#25D366]/40 bg-[#25D366]/5 p-5 sm:p-6 flex flex-col items-center text-center gap-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#25D366]">
            Direct WhatsApp Booking
          </span>
          <h4 className="text-base font-semibold text-foreground">
            Continue on WhatsApp to coordinate immediately with our technician team
          </h4>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#20ba59] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <WhatsAppIcon className="size-6" />
            <span>Open WhatsApp (+91 9755515060)</span>
            <ExternalLink className="size-4 opacity-80" />
          </a>

          <p className="text-xs text-muted-foreground">
            Tap the button above if WhatsApp didn&apos;t open automatically. All your service details are pre-filled.
          </p>
        </div>

        {/* DETAILS SUMMARY */}
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Submitted Service Details
          </h4>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <User className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs block">Contact Person</span>
                <span className="font-medium text-foreground">{activeDetails.name}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs block">Phone Number</span>
                <span className="font-medium text-foreground">{activeDetails.phone}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Wrench className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs block">Service Type</span>
                <span className="font-medium text-foreground">{serviceLabel}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <AlertTriangle className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs block">Urgency</span>
                <span className="font-medium text-foreground">{urgencyLabel}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs block">Location</span>
                <span className="font-medium text-foreground">
                  {activeDetails.city}
                  {activeDetails.address ? ` — ${activeDetails.address}` : ""}
                </span>
              </div>
            </div>

            {activeDetails.preferredDate && (
              <div className="flex items-start gap-2">
                <Calendar className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <span className="text-muted-foreground text-xs block">Preferred Date</span>
                  <span className="font-medium text-foreground">{activeDetails.preferredDate}</span>
                </div>
              </div>
            )}

            {activeDetails.machineModel && (
              <div className="flex items-start gap-2 sm:col-span-2">
                <Wrench className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <span className="text-muted-foreground text-xs block">Genset Model / Serial</span>
                  <span className="font-medium text-foreground">
                    {activeDetails.machineModel}
                    {activeDetails.serialNumber ? ` (S/N: ${activeDetails.serialNumber})` : ""}
                  </span>
                </div>
              </div>
            )}

            {activeDetails.message && (
              <div className="sm:col-span-2 rounded-md bg-background p-3 border border-border/60">
                <span className="text-muted-foreground text-xs block mb-1">Issue Description</span>
                <p className="text-xs text-foreground whitespace-pre-line">{activeDetails.message}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="size-4" />
            Book Another Service
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="ticketNumber" value={ticketNumber} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required className="mt-1.5" placeholder="e.g. Rajesh Sharma" />
          <FieldError messages={state.errors?.name} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1.5" placeholder="e.g. 9876543210" />
          <FieldError messages={state.errors?.phone} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="e.g. name@company.com" />
          <FieldError messages={state.errors?.email} />
        </div>
        <div>
          <Label htmlFor="requestType">What do you need?</Label>
          <Select
            name="requestType"
            value={selectedService}
            onValueChange={(val) => setSelectedService(val ?? "")}
            required
          >
            <SelectTrigger id="requestType" className="mt-1.5 w-full">
              <SelectValue placeholder="Select a service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceRequestTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {requestTypeLabels[type]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError messages={state.errors?.requestType} />
        </div>
        <div>
          <Label htmlFor="machineModel">Genset model (optional)</Label>
          <Input id="machineModel" name="machineModel" className="mt-1.5" placeholder="e.g. Kirloskar 125 kVA" />
        </div>
        <div>
          <Label htmlFor="serialNumber">Serial number (optional)</Label>
          <Input id="serialNumber" name="serialNumber" className="mt-1.5" placeholder="e.g. KG-2023-8891" />
        </div>
        <div>
          <Label htmlFor="preferredDate">Preferred date (optional)</Label>
          <Input id="preferredDate" name="preferredDate" type="date" className="mt-1.5" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="city">Site city</Label>
          <Input id="city" name="city" required className="mt-1.5" placeholder="e.g. Indore, Dewas, Pithampur" />
          <FieldError messages={state.errors?.city} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="address">Site address (optional)</Label>
          <Input id="address" name="address" className="mt-1.5" placeholder="Factory / Site location, Landmark" />
        </div>
        <div className="sm:col-span-2">
          <Label>Urgency</Label>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {urgencyOptions.map((option, index) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-2 rounded-lg border border-border p-3 text-sm has-checked:border-primary has-checked:bg-primary/5 transition-colors"
              >
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  defaultChecked={index === 0}
                  className="mt-0.5 accent-primary"
                />
                <span>
                  <span className="block font-medium">{option.label}</span>
                  <span className="block text-xs text-muted-foreground">{option.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Describe the issue or request (optional)</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1.5"
            placeholder="Provide any details about the breakdown, service needs, error codes, or requirements..."
          />
          <FieldError messages={state.errors?.message} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border/60">
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold gap-2.5 shadow-sm"
        >
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <WhatsAppIcon className="size-5" />
          )}
          <span>Submit &amp; Send to WhatsApp</span>
        </Button>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <WhatsAppIcon className="size-4 text-[#25D366] shrink-0" />
          <span>Direct routing to <strong>+91 9755515060</strong></span>
        </div>
      </div>
    </form>
  );
}
