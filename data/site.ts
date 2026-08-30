import { siteConfig } from "@/config/site";

export const siteData = {
  name: siteConfig.name,

  handle: "@thaless.pinheiro",

  role: "Desenvolvedor, criador e explorador de ideias digitais",

  tagline:
    "Construindo tecnologia com imaginação, propósito e atmosfera.",

  description:
    "Portfólio, projetos, lives, astronomia, física e construção pública de ideias.",

  location: "Joinville, SC - Brasil",

  mission:
    "Construir tecnologia, conteúdo e experiências digitais que misturem criatividade, exploração e propósito.",

  social: {
    github: siteConfig.social.github,

    twitch: siteConfig.social.twitch,

    instagram: siteConfig.social.instagram,

    astronomy: siteConfig.social.astronomy,

    email: siteConfig.social.email,

    whatsapp: siteConfig.social.whatsapp,
  },
};
