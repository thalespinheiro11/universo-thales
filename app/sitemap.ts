import type { MetadataRoute } from "next";
import { getBlogPostLocales, localizedBlogPosts } from "@/content/blog";
import { getProjectLocales, localizedProjects } from "@/content/projects";
import { locales, type Locale } from "@/lib/i18n";
import { localizedLanguages, localizedUrl } from "@/lib/seo";

const staticPaths = ["", "/about", "/projects", "/blog", "/contact", "/astronomy"];

function alternates(path: string, availableLocales: readonly Locale[] = locales) {
  return {
    languages: localizedLanguages(path, availableLocales),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: localizedUrl(locale, path),
      alternates: alternates(path),
    })),
  );

  const projectEntries = localizedProjects.flatMap(({ id }) => {
    const availableLocales = getProjectLocales(id);
    return availableLocales.map((locale) => {
      const path = `/projects/${id}`;
      return {
        url: localizedUrl(locale, path),
        alternates: alternates(path, availableLocales),
      };
    });
  });

  const blogEntries = localizedBlogPosts.flatMap(({ id }) => {
    const availableLocales = getBlogPostLocales(id);
    return availableLocales.map((locale) => {
      const path = `/blog/${id}`;
      return {
        url: localizedUrl(locale, path),
        alternates: alternates(path, availableLocales),
      };
    });
  });

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
