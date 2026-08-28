import Link from "next/link";
import { Calculator, ArrowRight, ListFilter, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const steps = [
  { icon: ListFilter, label: "Tell us your load", detail: "Quick facility estimate or a detailed equipment list." },
  { icon: Calculator, label: "Get a sized recommendation", detail: "kVA rating with a 25% safety margin, calculated instantly." },
  { icon: ClipboardCheck, label: "Compare & request a quote", detail: "See 2–3 matching models and send your requirement to sales." },
];

export function CalculatorTeaser() {
  return (
    <section className="border-b border-border bg-foreground py-16 text-background sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow mb-2 text-primary">Free Tool</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Don&apos;t guess the kVA. Calculate it.
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-background/70">
            Undersizing risks nuisance trips under motor inrush. Oversizing wastes capital. Our
            Power Requirement Calculator gets you within range in under two minutes.
          </p>
          <Button size="lg" className="mt-6 h-12 px-6 text-base" render={<Link href="/tools/calculator" />}>
            Open the Calculator
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="grid gap-3">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="flex items-start gap-4 rounded-xl border border-background/15 bg-background/5 p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-background/20 font-data text-sm">
                {index + 1}
              </span>
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <step.icon className="size-4 text-primary" />
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-background/60">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
