"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";
import { getSiteContent } from "@/content/site";
import { getLocaleFromPathname, isLocale } from "@/lib/i18n";

export function FloatingContact() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const isLocalizedHome = segments.length === 1 && isLocale(segments[0]);

  if (isLocalizedHome) return null;
  const content = getSiteContent(getLocaleFromPathname(pathname)).contact;

  return (
    <a
      href={siteData.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[80] inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong bg-canvas/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-[0_16px_50px_rgb(0_0_0_/_0.42)] backdrop-blur-md transition-colors hover:bg-foreground hover:text-canvas"
    >
      <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
      <span className="hidden sm:inline">{content.floating}</span>
      <span className="sm:hidden">{content.eyebrow}</span>
      <span className="sr-only"> — WhatsApp ({content.externalLink})</span>
    </a>
  );
}
