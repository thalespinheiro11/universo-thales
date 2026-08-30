export const locales = ["pt-br", "en"] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-br";

export const contentLocales = { "pt-br": "pt-BR", en: "en" } as const;
export type ContentLocale = (typeof contentLocales)[Locale];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const candidate = pathname.split("/")[1];
  return isLocale(candidate) ? candidate : defaultLocale;
}

export function localizedPath(locale: Locale, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") return `/${locale}`;
  if (locales.some((item) => normalizedPath === `/${item}` || normalizedPath.startsWith(`/${item}/`))) {
    return normalizedPath;
  }
  return `/${locale}${normalizedPath}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1] ?? "")) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }
  return localizedPath(locale, pathname);
}
