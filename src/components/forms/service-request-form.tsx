"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
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
import { submitServiceRequest, initialActionState } from "@/lib/actions";
import { serviceRequestTypes } from "@/lib/validations";

const requestTypeLabels: Record<(typeof serviceRequestTypes)[number], string> = {
  installation: "Installation & Commissioning",
  amc: "Annual Maintenance Contract",
  repair: "Repair & Overhauling",
  inspection: "Inspection / Load Bank Testing",
  "load-bank-testing": "Load Bank Testing",
  retrofit: "Retrofit & Automation",
  emergency: "Emergency Breakdown",
  consultation: "General Consultation",
};

const urgencyOptions = [
  { value: "standard", label: "Standard", hint: "Within a few days" },
  { value: "urgent", label: "Urgent", hint: "Within 24 hours" },
  { value: "emergency", label: "Emergency", hint: "Breakdown — need help now" },
] as const;

export function ServiceRequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitServiceRequest,
    initialActionState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error" && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required className="mt-1.5" />
          <FieldError messages={state.errors?.name} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1.5" />
          <FieldError messages={state.errors?.phone} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1.5" />
          <FieldError messages={state.errors?.email} />
        </div>
        <div>
          <Label htmlFor="requestType">What do you need?</Label>
          <Select name="requestType" required>
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
          <Input id="machineModel" name="machineModel" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="serialNumber">Serial number (optional)</Label>
          <Input id="serialNumber" name="serialNumber" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="preferredDate">Preferred date (optional)</Label>
          <Input id="preferredDate" name="preferredDate" type="date" className="mt-1.5" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="city">Site city</Label>
          <Input id="city" name="city" required className="mt-1.5" />
          <FieldError messages={state.errors?.city} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="address">Site address (optional)</Label>
          <Input id="address" name="address" className="mt-1.5" />
        </div>
        <div className="sm:col-span-2">
          <Label>Urgency</Label>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {urgencyOptions.map((option, index) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-2 rounded-lg border border-border p-3 text-sm has-checked:border-primary has-checked:bg-primary/5"
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
          <Textarea id="message" name="message" rows={4} className="mt-1.5" />
          <FieldError messages={state.errors?.message} />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending && <Loader2 className="size-4 animate-spin" />}
        Submit Service Request
      </Button>
    </form>
  );
}
