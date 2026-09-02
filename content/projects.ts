import { projects } from "@/data/projects";
import {
  contentLocales,
  locales,
  type ContentLocale,
  type Locale,
} from "@/lib/i18n";

export type ProjectCard = {
  slug: string;
  mission: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  status: string;
  href?: string;
};

export type ProjectCardContent = {
  eyebrow: string;
  title: string;
  intro: string;
  explore: string;
  viewAll: string;
  cards: ProjectCard[];
};

export const localizedProjectCards: Record<Locale, ProjectCardContent> = {
  "pt-br": {
    eyebrow: "Projetos selecionados",
    title: "Trabalhos em destaque",
    intro:
      "Produtos e ferramentas construídos para transformar problemas concretos em experiências digitais mais claras.",
    explore: "Explorar projeto",
    viewAll: "Ver todos os projetos",
    cards: [
      {
        slug: "mokupuni-vaa",
        mission: "Missão 001",
        title: "Mokupuni Va'a",
        description:
          "Plataforma web desenvolvida para digitalizar o agendamento e a gestão de experiências de canoa havaiana, conectando a experiência do cliente às necessidades operacionais do negócio.",
        role: "Produto · Front-end · UX/UI",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "Em desenvolvimento",
      },
      {
        slug: "noxcare",
        mission: "Missão 002",
        title: "NoxCare",
        description:
          "Toolkit para Windows criado para centralizar rotinas de diagnóstico, manutenção e suporte técnico em uma interface mais simples, segura e acessível.",
        role: "Produto · Desenvolvimento · UX/UI",
        stack: ["C#", "WPF", "PowerShell"],
        status: "Em desenvolvimento",
        href: "/projects/noxcare",
      },
      {
        slug: "backup-monitor",
        mission: "Missão 003",
        title: "Backup Monitor",
        description:
          "Ferramenta interna desenvolvida para centralizar o acompanhamento de rotinas de backup, facilitando a identificação de atrasos e possíveis falhas em um ambiente corporativo.",
        role: "Desenvolvimento · Automação · UX/UI",
        stack: ["Python", "Flask", "HTML/CSS"],
        status: "Funcional",
        href: "/projects/backup-monitor",
      },
    ],
  },
  en: {
    eyebrow: "Selected projects",
    title: "Featured work",
    intro:
      "Products and tools built to turn concrete problems into clearer digital experiences.",
    explore: "Explore project",
    viewAll: "View all projects",
    cards: [
      {
        slug: "mokupuni-vaa",
        mission: "Mission 001",
        title: "Mokupuni Va'a",
        description:
          "Web platform built to digitize scheduling and management for Hawaiian canoe experiences, connecting the customer journey with the operational needs of the business.",
        role: "Product · Front-end · UX/UI",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "In development",
      },
      {
        slug: "noxcare",
        mission: "Mission 002",
        title: "NoxCare",
        description:
          "Windows toolkit created to bring diagnostics, maintenance, and technical support routines together in a simpler, safer, and more accessible interface.",
        role: "Product · Development · UX/UI",
        stack: ["C#", "WPF", "PowerShell"],
        status: "In development",
        href: "/projects/noxcare",
      },
      {
        slug: "backup-monitor",
        mission: "Mission 003",
        title: "Backup Monitor",
        description:
          "Internal tool built to centralize backup routines, making it easier to identify delays and potential failures in a corporate environment.",
        role: "Development · Automation · UX/UI",
        stack: ["Python", "Flask", "HTML/CSS"],
        status: "Functional",
        href: "/projects/backup-monitor",
      },
    ],
  },
};

export function getProjectCardContent(locale: Locale): ProjectCardContent {
  return localizedProjectCards[locale];
}

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
