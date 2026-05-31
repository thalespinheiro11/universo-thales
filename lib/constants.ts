import { siteData } from "@/data/site";

export const personalLinks = {
  name: siteData.name,

  handle: siteData.handle,

  role: siteData.role,

  astronomy: "Astronomy",

  tagline: siteData.tagline,
};

export const navigationItems = [
  {
    label: "Início",
    href: "/#inicio",
  },
  {
    label: "Ao Vivo",
    href: "/#ao-vivo",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
  {
    label: "Sobre",
    href: "/about",
  },
  {
  label: "Astronomy",
  href: "/astronomy",
  },
  {
    label: "Jornada",
    href: "/#jornada",
  },
  {
    label: "Mídia",
    href: "/#midia",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contato",
    href: "/contact",
  },
];