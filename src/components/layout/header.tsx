"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/layout/container";
import { mainNav, headerActions } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openNow(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-sm" : "border-transparent"
      )}
    >
      {/* Utility strip */}
      <div className="hidden border-b border-border bg-foreground text-background md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <span className="font-data uppercase tracking-wide text-background/70">
            {siteConfig.stats[0].value} in operation &middot; {siteConfig.stats[1].value} gensets deployed
          </span>
          <a
            href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-data uppercase tracking-wide text-background/90 hover:text-primary"
          >
            <Phone className="size-3.5" />
            24x7 Emergency: {siteConfig.emergencyPhone}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {mainNav.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => openNow(group.label)}
              onMouseLeave={closeSoon}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-foreground",
                  openGroup === group.label && "bg-muted text-foreground"
                )}
                aria-expanded={openGroup === group.label}
                onClick={() =>
                  setOpenGroup(openGroup === group.label ? null : group.label)
                }
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform",
                    openGroup === group.label && "rotate-180"
                  )}
                />
              </button>

              {openGroup === group.label && (
                <div
                  className="absolute left-0 top-full z-50 w-[340px] pt-2"
                  onMouseEnter={() => openNow(group.label)}
                  onMouseLeave={closeSoon}
                >
                  <div className="overflow-hidden rounded-lg border border-border bg-popover shadow-lg ring-1 ring-foreground/5">
                    <ul className="grid gap-0.5 p-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex flex-col gap-0.5 rounded-md px-3 py-2 text-sm hover:bg-muted"
                          >
                            <span className="font-medium text-foreground">{item.label}</span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {group.href && (
                      <Link
                        href={group.href}
                        className="flex items-center justify-between border-t border-border bg-muted/50 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-primary hover:bg-muted"
                      >
                        View all {group.label.toLowerCase()}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" render={<Link href={headerActions.service.href} />}>
            {headerActions.service.label}
          </Button>
          <Button size="sm" render={<Link href={headerActions.quote.href} />}>
            {headerActions.quote.label}
          </Button>
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button size="icon-sm" render={<Link href={headerActions.quote.href} />} aria-label="Request a Quote">
            <ArrowRight />
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </Button>
            <SheetContent side="right" className="w-[85%] overflow-y-auto p-0">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                <Accordion className="w-full">
                  {mainNav.map((group) => (
                    <AccordionItem value={group.label} key={group.label}>
                      <AccordionTrigger className="text-sm font-medium">
                        {group.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-1 pl-2">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Button render={<Link href={headerActions.quote.href} />}>
                    {headerActions.quote.label}
                  </Button>
                  <Button variant="outline" render={<Link href={headerActions.service.href} />}>
                    {headerActions.service.label}
                  </Button>
                  <a
                    href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                    className="mt-1 flex items-center justify-center gap-2 text-sm font-medium text-primary"
                  >
                    <Phone className="size-4" />
                    24x7 Emergency: {siteConfig.emergencyPhone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
