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
import { submitQuoteRequest, initialActionState } from "@/lib/actions";
import { productCategories } from "@/data/product-categories";
import { industries } from "@/data/industries";

const applicationOptions = ["Standby", "Prime", "Continuous", "Rental"];

export function QuoteForm({ defaultCategory }: { defaultCategory?: string }) {
  const [state, formAction, isPending] = useActionState(
    submitQuoteRequest,
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
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" name="company" className="mt-1.5" />
          <FieldError messages={state.errors?.company} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1.5" />
          <FieldError messages={state.errors?.email} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1.5" />
          <FieldError messages={state.errors?.phone} />
        </div>
        <div>
          <Label htmlFor="productCategory">Product category</Label>
          <Select name="productCategory" defaultValue={defaultCategory} required>
            <SelectTrigger id="productCategory" className="mt-1.5 w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {productCategories.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError messages={state.errors?.productCategory} />
        </div>
        <div>
          <Label htmlFor="capacityKva">Capacity needed (kVA, if known)</Label>
          <Input id="capacityKva" name="capacityKva" type="number" min={0} className="mt-1.5" />
          <FieldError messages={state.errors?.capacityKva} />
        </div>
        <div>
          <Label htmlFor="application">Application</Label>
          <Select name="application">
            <SelectTrigger id="application" className="mt-1.5 w-full">
              <SelectValue placeholder="Standby, prime, continuous…" />
            </SelectTrigger>
            <SelectContent>
              {applicationOptions.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select name="industry">
            <SelectTrigger id="industry" className="mt-1.5 w-full">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((i) => (
                <SelectItem key={i.slug} value={i.slug}>
                  {i.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="city">Site city</Label>
          <Input id="city" name="city" required className="mt-1.5" />
          <FieldError messages={state.errors?.city} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Anything else we should know? (optional)</Label>
          <Textarea id="message" name="message" rows={4} className="mt-1.5" />
          <FieldError messages={state.errors?.message} />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending && <Loader2 className="size-4 animate-spin" />}
        Request a Quote
      </Button>
    </form>
  );
}
