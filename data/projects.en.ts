import type { projects } from "./projects";

type Project = (typeof projects)[number];

// Traduções em inglês dos cases de `data/projects.ts`, ligadas pelo slug.
export const projectsEn: Project[] = [
  {
    slug: "noxcare",
    title: "NoxCare",
    category: "Application",
    status: "In development",
    year: "2026",
    shortDescription:
      "A safe maintenance and optimization tool for Windows.",
    description:
      "NoxCare is a tool built to turn technical Windows maintenance routines into a visual, simple, and safe experience. The idea is to help everyday users and support technicians run cleanups, adjustments, and checks without relying on scattered commands or confusing processes.",
    objective:
      "Build a premium, friendly, and reliable application for computer maintenance, combining technical automation, clear explanations, and an interface that is easy to understand.",
    stack: ["C#", "WPF", "PowerShell", "Windows", "UI Design"],
    learnings: [
      "Turning technical commands into understandable visual flows.",
      "Thinking about safety before applying any system optimization.",
      "Designing an interface that works for both non-technical users and technical support.",
      "Organizing features into clear categories, such as cleanup, maintenance, and diagnostics.",
    ],
    nextSteps: [
      "Refine the visual interface to feel more premium.",
      "Build a reliable installer.",
      "Add detailed explanations for each action.",
      "Create an advanced mode for technicians.",
      "Prepare a more commercial future version.",
    ],
  },

  {
    slug: "backup-monitor",
    title: "Backup Monitor",
    category: "Internal system",
    status: "Functional",
    year: "2026",
    shortDescription:
      "A visual system for tracking backups in a corporate environment.",
    description:
      "Backup Monitor started as a practical solution for tracking backup status in a work environment. The idea was to create a simple view, accessible over the local network, that would help quickly identify disks, dates, and possible backup failures.",
    objective:
      "Reduce the risk of failures going unnoticed and make the daily backup check visual, fast, and straightforward.",
    stack: ["Python", "Flask", "HTML", "CSS", "Local network"],
    learnings: [
      "Building a working solution for a real infrastructure problem.",
      "Presenting technical information in a visual and accessible way.",
      "Designing for practical use within a corporate routine.",
      "Creating a system that is easy to access from other computers on the network.",
    ],
    nextSteps: [
      "Improve the interface's responsiveness.",
      "Add a visual backup history.",
      "Create alerts for late backups.",
      "Package the system for simpler installation.",
      "Improve the usage documentation.",
    ],
  },

  {
    slug: "astronomy",
    title: "Astronomy",
    category: "Creative brand",
    status: "In progress",
    year: "2026",
    shortDescription:
      "A creative lab for technology, design, content, and digital products.",
    description:
      "Astronomy is my creative lab. A space to turn ideas into real projects, bringing together technology, design, development, content, automations, and digital experiences. It works as a bridge between creativity, usefulness, and brand building.",
    objective:
      "Build a brand that unites technology, imagination, and purpose, creating memorable products, websites, tools, content, and digital experiences.",
    stack: ["Branding", "Frontend", "Design", "Content", "Digital products"],
    learnings: [
      "Building a visual identity of my own.",
      "Thinking of technology as product, content, and experience.",
      "Organizing ideas into a brand with a clear direction.",
      "Bridging personal projects, services, and future products.",
    ],
    nextSteps: [
      "Strengthen the official Astronomy website.",
      "Publish content on Instagram.",
      "Organize digital services and products.",
      "Create original projects tied to the brand.",
      "Turn Astronomy into a creative ecosystem.",
    ],
  },

  {
    slug: "live-setup",
    title: "Live Setup",
    category: "Content",
    status: "Evolving",
    year: "2026",
    shortDescription:
      "A visual framework for live streams with a cinematic space aesthetic.",
    description:
      "Live Setup brings together the visual and technical side of my live streams. The idea is to create a stream experience with its own identity, blending development, technology, a space atmosphere, a vintage aesthetic, and the behind the scenes of building projects.",
    objective:
      "Create a memorable live presence, where the look of the stream is also part of the experience and of my personal brand.",
    stack: ["OBS", "Design", "Streaming", "Motion", "Visual identity"],
    learnings: [
      "Designing screens and overlays for streaming.",
      "Applying visual identity to live content.",
      "Organizing scenes, webcam, music, and graphic elements.",
      "Building a visual experience consistent with my personal brand.",
    ],
    nextSteps: [
      "Create a complete scene pack.",
      "Add a music widget.",
      "Improve the webcam's visual quality.",
      "Create Starting Soon, Be Right Back, and ending screens.",
      "Better integrate Twitch and social media.",
    ],
  },

  {
    slug: "automacoes",
    title: "Automations",
    category: "Productivity",
    status: "Ongoing",
    year: "2026",
    shortDescription:
      "Scripts and systems to reduce repetitive tasks.",
    description:
      "Automations gathers scripts, ideas, and small tools built to solve practical problems. They come from the need to save time, reduce manual work, and turn repetitive processes into reusable solutions.",
    objective:
      "Create simple, efficient tools to improve technical routines, productivity, and everyday processes.",
    stack: ["PowerShell", "Python", "Scripts", "Windows", "Processes"],
    learnings: [
      "Building quick solutions for real problems.",
      "Spotting repetitive tasks that can become tools.",
      "Documenting technical workflows for reuse.",
      "Thinking of automation as part of building products.",
    ],
    nextSteps: [
      "Organize scripts by category.",
      "Create visual interfaces for some automations.",
      "Document the purpose, usage, and risks of each script.",
      "Separate personal, professional, and commercial automations.",
    ],
  },
];
