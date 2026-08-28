import { Clock, ShieldCheck, Wrench, MapPinned } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";

const reasons = [
  {
    icon: Clock,
    title: "Sub-3-hour emergency response",
    description:
      "One number, staffed 24x7, dispatching the nearest available technician — not a call center reading a script.",
  },
  {
    icon: ShieldCheck,
    title: "Load-tested, not just started",
    description:
      "Every installation and every major repair is verified with an on-load acceptance test before we call it done.",
  },
  {
    icon: Wrench,
    title: "One team, every stage",
    description:
      "The people who size your genset are accountable for installing, maintaining, and repairing it — no handoffs between vendors.",
  },
  {
    icon: MapPinned,
    title: "6 service centers, one schedule",
    description:
      "Multi-site customers get a single AMC schedule and a single point of contact across every branch we cover.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why SNJ Diesel"
          title="Twenty years of not being the vendor you have to chase"
          align="left"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-card">
                <reason.icon className="size-5 text-primary" />
              </span>
              <h3 className="text-base font-semibold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
