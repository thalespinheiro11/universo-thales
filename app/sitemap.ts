import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thalespinheiro.com.br",
    },

    {
      url: "https://thalespinheiro.com.br/about",
    },

    {
      url: "https://thalespinheiro.com.br/projects",
    },

    {
      url: "https://thalespinheiro.com.br/blog",
    },

    {
      url: "https://thalespinheiro.com.br/contact",
    },
  ];
}