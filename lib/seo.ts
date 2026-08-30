import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { isLocale, locales, localizedPath, type Locale } from "@/lib/i18n";

type LocaleMetadataProps = {
  params: Promise<{ locale: string }>;
};

export function localizedUrl(locale: Locale, path: string) {
  return `${siteConfig.url}${localizedPath(locale, path)}`;
}

export function localizedLanguages(path: string, availableLocales: readonly Locale[]) {
  const languages: Record<string, string> = {};

  if (availableLocales.includes("pt-br")) {
    languages["pt-BR"] = localizedUrl("pt-br", path);
    languages["x-default"] = localizedUrl("pt-br", path);
  }

  if (availableLocales.includes("en")) {
    languages.en = localizedUrl("en", path);
  }

  return languages;
}

export function createLocalizedMetadata(path: string) {
  return async function generateMetadata({
    params,
  }: LocaleMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale)) return {};

    return {
      alternates: {
        canonical: localizedUrl(locale, path),
        languages: localizedLanguages(path, locales),
      },
    };
  };
}
