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
import { buttonVariants } from "../ui/button";

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

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
      <Container className="flex h-20 items-center justify-between gap-4">
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
                  "flex items-center gap-1 rounded-md px-3 py-2 text-base font-bold text-foreground/85 transition-colors hover:bg-muted hover:text-foreground",
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
                            <span className="font-bold text-foreground">{item.label}</span>
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
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:9755515060"
            className="group inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-700 transition-all hover:border-amber-500/50 hover:bg-amber-500/20 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-400 dark:hover:bg-amber-500/25"
          >
            <span className="flex size-6 items-center justify-center rounded-md bg-amber-500 text-slate-950 shadow-xs transition-transform group-hover:scale-105">
              <Phone className="size-3.5 fill-current" />
            </span>
            <span className="font-data text-sm font-bold tracking-tight text-foreground">
              9755515060
            </span>
          </a>

          <Link
            href={headerActions.service.href}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "font-semibold shadow-xs",
            })}
          >
            {headerActions.service.label}
          </Link>
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:9755515060"
            className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 text-xs font-bold text-amber-700 dark:text-amber-400"
            aria-label="Call 9755515060"
          >
            <Phone className="size-3.5 fill-current text-amber-600 dark:text-amber-400" />
            <span className="font-data font-bold">9755515060</span>
          </a>
          <Link
            href={headerActions.service.href}
            className={buttonVariants({
              size: "sm",
              className: "text-xs px-2.5",
            })}
          >
            Book Service
          </Link>
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

                <div className="flex flex-col gap-2.5 border-t border-border pt-4">
                  <Link
                    href={headerActions.service.href}
                    className={buttonVariants({
                      variant: "default",
                      size: "default",
                      className: "w-full justify-center font-semibold",
                    })}
                  >
                    {headerActions.service.label}
                  </Link>
                  <a
                    href="tel:9755515060"
                    className="flex items-center justify-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 py-2.5 text-sm font-bold text-amber-700 dark:text-amber-400 transition-colors hover:bg-amber-500/20"
                  >
                    <Phone className="size-4 fill-current" />
                    Call: 9755515060
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
