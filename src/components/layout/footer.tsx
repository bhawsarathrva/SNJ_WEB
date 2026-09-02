import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="flex flex-col gap-5">
          <Logo dark />
          <p className="max-w-xs text-base text-background/75">{siteConfig.description}</p>
          <ul className="flex flex-col gap-3 text-base text-background/85">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-5 shrink-0 text-primary" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-5 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2.5 pt-1">
            {[
              { href: siteConfig.social.linkedin, label: "LinkedIn", initials: "in" },
              { href: siteConfig.social.facebook, label: "Facebook", initials: "f" },
              { href: siteConfig.social.youtube, label: "YouTube", initials: "yt" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full border border-background/20 font-data text-sm text-background/70 hover:border-primary hover:text-primary"
              >
                {social.initials}
              </a>
            ))}
          </div>
        </div>

        {footerNav.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white">
              {group.label}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-background/85 hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-background/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-sm text-background/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/resources/faq" className="hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary">
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
