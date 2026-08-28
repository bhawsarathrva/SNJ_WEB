import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-14">
          <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl">
            Ready to size, quote, or service a generator?
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Talk to us before the next outage, not during it. Most quotes go out within one
            business day of a complete requirement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-12 px-6 text-base" render={<Link href="/quote" />}>
              Request a Quote
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              render={<Link href="/service-request" />}
            >
              Book a Service
            </Button>
          </div>
          <a
            href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Phone className="size-4" />
            Or call our 24x7 emergency line: {siteConfig.emergencyPhone}
          </a>
        </div>
      </Container>
    </section>
  );
}
