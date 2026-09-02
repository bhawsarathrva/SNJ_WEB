"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/forms/field-error";
import { submitContactMessage, initialActionState } from "@/lib/actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
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
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1.5" />
          <FieldError messages={state.errors?.email} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" required className="mt-1.5" />
          <FieldError messages={state.errors?.subject} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={5} required className="mt-1.5" />
          <FieldError messages={state.errors?.message} />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
