import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqPreview() {
  const preview = faqItems.slice(0, 5);

  return (
    <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Answers before you have to ask"
          cta={{ label: "View full FAQ", href: "/resources/faq" }}
          align="left"
        />
        <Accordion className="mt-8 w-full">
          {preview.map((item, index) => (
            <AccordionItem value={`faq-${index}`} key={item.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
