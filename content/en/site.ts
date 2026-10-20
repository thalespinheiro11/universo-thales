export const siteContent = {
  metadata: {
    title: "Personal Digital Universe",
    description:
      "Portfolio, projects, live streams, astronomy, physics, and ideas built in public.",
  },
  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    resume: "Résumé",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuLabel: "Primary navigation",
    languageLabel: "Select language",
    resumeHint: "PDF, opens in a new tab",
  },
  hero: {
    eyebrow: "Software developer",
    title: "Thales Pinheiro",
    description:
      "I build digital applications and experiences by combining code, creativity, clarity, and problem-solving.",
    stackLabel: "Core stack",
    stack: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
    projectsCta: "View projects",
    resumesCta: "Résumés",
    nyxRole: "Nyx // Navigation Officer",
    nyxStatus: "Systems operational. Route established.",
    coordinates: "Earth orbit // Sector 026",
  },
  positioning: {
    eyebrow: "Positioning",
    statement:
      "I build modern web applications focused on clarity, experience, and problem-solving.",
    pillars: [
      { title: "User experience" },
      { title: "Clean code" },
      { title: "Real results" },
    ],
  },
  journey: {
    eyebrow: "Journey",
    title: "Every stage added a new perspective.",
    steps: [
      { title: "Design", description: "Visual communication and experience" },
      { title: "Copy", description: "Words that connect and transform" },
      { title: "IT", description: "Logic, systems, and structure" },
      { title: "Development", description: "Ideas turned into digital solutions" },
    ],
    summary:
      "Every stage gave me a new perspective. All of them brought me here.",
    cta: "More about me",
  },
  records: {
    eyebrow: "Blog / Logs",
    title: "Recent logs",
    viewAll: "View all logs",
    read: "Read log",
    translationNote: "Available in Portuguese",
  },
  availability: {
    eyebrow: "Availability",
    title: "Open to professional opportunities",
    description: "Let's build something great together.",
    resumes: [
      { label: "Résumé PT-BR", lang: "pt-BR", fileName: "Thales-Pinheiro-Curriculo-PT-BR.pdf" },
      { label: "Résumé EN", lang: "en", fileName: "Thales-Pinheiro-Resume-EN.pdf" },
    ],
    view: "View",
    download: "Download",
    newTab: "opens in a new tab",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    email: "Email",
    copyright: "All rights reserved.",
    signature: "Made with code, purpose, and coffee.",
    externalLink: "opens in a new tab",
    floating: "Direct line",
  },
} as const;
