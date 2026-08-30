"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { getSiteContent } from "@/content/site";
import {
  getLocaleFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

const navigationPaths = [
  ["projects", "/projects"],
  ["about", "/about"],
  ["blog", "/blog"],
  ["contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = getSiteContent(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const panel = mobilePanelRef.current;
    const menuButton = menuButtonRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [mobileMenuOpen]);

  const languageHref = (targetLocale: Locale) =>
    switchLocalePath(pathname, targetLocale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/88 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <LocalizedLink
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label={`${content.hero.title} — ${content.metadata.title}`}
        >
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong font-display text-sm font-semibold text-foreground transition-colors group-hover:bg-foreground group-hover:text-canvas">
            TP
            <span className="absolute -inset-1 rounded-full border border-line opacity-60" aria-hidden="true" />
          </span>
          <span className="min-w-0 leading-none">
            <strong className="block truncate font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground sm:text-xs">
              Thales Pinheiro
            </strong>
            <span className="mt-1.5 hidden text-[0.58rem] uppercase tracking-[0.24em] text-muted sm:block">
              Universo Digital
            </span>
          </span>
        </LocalizedLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={content.navigation.menuLabel}>
          {navigationPaths.map(([key, href]) => (
            <LocalizedLink
              key={key}
              href={href}
              className="px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary transition-colors hover:text-foreground"
            >
              {content.navigation[key]}
            </LocalizedLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            locale={locale}
            label={content.navigation.languageLabel}
            hrefFor={languageHref}
          />

          <span
            aria-disabled="true"
            title={`${content.navigation.resume} — ${content.navigation.unavailable}`}
            className="hidden cursor-not-allowed border border-line px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted lg:inline-flex"
          >
            {content.navigation.resume}
          </span>

          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-11 w-11 place-items-center border border-line-strong text-foreground transition-colors hover:bg-foreground hover:text-canvas lg:hidden"
            aria-label={
              mobileMenuOpen
                ? content.navigation.menuClose
                : content.navigation.menuOpen
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-canvas/96 lg:hidden">
          <div
            ref={mobilePanelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={content.navigation.menuLabel}
            className="mx-auto flex h-[calc(100svh-5rem)] max-w-lg flex-col px-6 py-8"
          >
            <nav className="flex flex-col border-t border-line" aria-label={content.navigation.menuLabel}>
              {navigationPaths.map(([key, href], index) => (
                <LocalizedLink
                  key={key}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-line py-5 font-display text-xl font-semibold uppercase tracking-[0.08em] text-foreground"
                >
                  <span>{content.navigation[key]}</span>
                  <span className="font-sans text-[0.6rem] tracking-[0.18em] text-muted" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </LocalizedLink>
              ))}
            </nav>

            <div className="mt-auto border-t border-line pt-6">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {content.navigation.resume}: {content.navigation.unavailable}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  hrefFor: (locale: Locale) => string;
};

function LanguageSwitcher({ locale, label, hrefFor }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1" role="group" aria-label={label}>
      {(["pt-br", "en"] as const).map((item) => (
        <Link
          key={item}
          href={hrefFor(item)}
          hrefLang={item === "pt-br" ? "pt-BR" : "en"}
          lang={item === "pt-br" ? "pt-BR" : "en"}
          aria-current={locale === item ? "page" : undefined}
          className={`px-1.5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
            locale === item ? "text-foreground" : "text-muted hover:text-secondary"
          }`}
        >
          {item === "pt-br" ? "PT" : "EN"}
        </Link>
      ))}
    </div>
  );
}
