import { projects } from "@/data/projects";
import {
  contentLocales,
  locales,
  type ContentLocale,
  type Locale,
} from "@/lib/i18n";

type Project = (typeof projects)[number];

export type LocalizedProject = {
  id: string;
  translations: Partial<Record<ContentLocale, Project>>;
};

export const localizedProjects: LocalizedProject[] = projects.map((project) => ({
  id: project.slug,
  translations: { "pt-BR": project },
}));

export function getProjectTranslation(id: string, locale: Locale) {
  const entry = localizedProjects.find((project) => project.id === id);
  return entry?.translations[contentLocales[locale]];
}

export function getProjectLocales(id: string): Locale[] {
  const entry = localizedProjects.find((project) => project.id === id);
  if (!entry) return [];

  return locales.filter((locale) => Boolean(entry.translations[contentLocales[locale]]));
}

export function getProjects(locale: Locale): Project[] {
  const contentLocale = contentLocales[locale];
  return localizedProjects.flatMap((entry) => {
    const project = entry.translations[contentLocale] ?? entry.translations["pt-BR"];
    return project ? [project] : [];
  });
}
