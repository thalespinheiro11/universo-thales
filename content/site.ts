import type { Locale } from "@/lib/i18n";
import { siteContent as en } from "./en/site";
import { siteContent as ptBR } from "./pt-BR/site";

const siteContent = { "pt-br": ptBR, en } as const;

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
