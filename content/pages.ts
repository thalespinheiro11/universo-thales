import type { Locale } from "@/lib/i18n";
import { pagesContent as en } from "./en/pages";
import { pagesContent as ptBR } from "./pt-BR/pages";

export type PagesContent = typeof ptBR;

const pagesContent: Record<Locale, PagesContent> = { "pt-br": ptBR, en };

export function getPagesContent(locale: Locale) {
  return pagesContent[locale];
}
