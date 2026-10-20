"use client";

import { ArrowUpRight, AtSign, Briefcase, CodeXml, Mail, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getSiteContent } from "@/content/site";
import { getLocaleFromPathname, isLocale } from "@/lib/i18n";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function Footer() {
  const pathname = usePathname();
  const content = getSiteContent(getLocaleFromPathname(pathname)).contact;
  const segments = pathname.split("/").filter(Boolean);
  const isLocalizedHome = segments.length === 1 && isLocale(segments[0]);

  const channels = [
    { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Briefcase, external: true },
    { label: "GitHub", href: siteConfig.social.github, icon: CodeXml, external: true },
    { label: "Instagram", href: siteConfig.social.instagram, icon: AtSign, external: true },
    { label: content.email, href: `mailto:${siteConfig.social.email}`, icon: Mail, external: false },
    { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: MessageCircle, external: true },
  ];

  return (
    <footer id="contato" className="relative border-t border-line bg-canvas" aria-labelledby="footer-title">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-16 lg:px-10">
        <div>
          <SectionEyebrow index={isLocalizedHome ? "07" : undefined}>{content.eyebrow}</SectionEyebrow>
          <h2
            id="footer-title"
            className="mt-6 font-display text-2xl font-semibold uppercase leading-none text-foreground sm:text-3xl"
          >
            {content.title}
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-5 lg:justify-self-end">
          {channels.map(({ label, href, icon: Icon, external }) => (
            <li key={href} className="bg-canvas last:col-span-2 sm:last:col-span-1">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex min-h-14 items-center justify-between gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                <span className="flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  {label}
                  {external && <span className="sr-only"> ({content.externalLink})</span>}
                </span>
                <ArrowUpRight size={14} className="text-muted" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-3 px-4 py-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>
            © 2026 {siteConfig.name}. {content.copyright}
          </p>
          <p>{content.signature}</p>
        </div>
      </div>
    </footer>
  );
}
