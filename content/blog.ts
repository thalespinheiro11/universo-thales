import { blogPosts } from "@/data/blog";
import {
  contentLocales,
  locales,
  type ContentLocale,
  type Locale,
} from "@/lib/i18n";

type BlogPost = (typeof blogPosts)[number];

export type LocalizedBlogPost = {
  id: string;
  translations: Partial<Record<ContentLocale, BlogPost>>;
};

export const localizedBlogPosts: LocalizedBlogPost[] = blogPosts.map((post) => ({
  id: post.slug,
  translations: { "pt-BR": post },
}));

export function getBlogPostTranslation(id: string, locale: Locale) {
  const entry = localizedBlogPosts.find((post) => post.id === id);
  return entry?.translations[contentLocales[locale]];
}

export function getBlogPostLocales(id: string): Locale[] {
  const entry = localizedBlogPosts.find((post) => post.id === id);
  if (!entry) return [];

  return locales.filter((locale) => Boolean(entry.translations[contentLocales[locale]]));
}

// Registros exibidos na Home. O artigo do Backup Monitor fica de fora até ser anonimizado.
const homeBlogPostIds = [
  "construindo-universo-digital",
  "desenvolver-software-e-como-explorar-o-espaco",
  "bastidores-do-noxcare",
];

export type HomeBlogPost = BlogPost & { locale: ContentLocale };

export function getHomeBlogPosts(locale: Locale): HomeBlogPost[] {
  const contentLocale = contentLocales[locale];
  return homeBlogPostIds.flatMap((id) => {
    const entry = localizedBlogPosts.find((post) => post.id === id);
    const translated = entry?.translations[contentLocale];
    if (translated) return [{ ...translated, locale: contentLocale }];

    const fallback = entry?.translations["pt-BR"];
    return fallback ? [{ ...fallback, locale: "pt-BR" as const }] : [];
  });
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const contentLocale = contentLocales[locale];
  return localizedBlogPosts.flatMap((entry) => {
    const post = entry.translations[contentLocale] ?? entry.translations["pt-BR"];
    return post ? [post] : [];
  });
}
