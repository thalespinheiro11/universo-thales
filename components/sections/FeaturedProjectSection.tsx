import { getProjectCardContent, type ProjectCard } from "@/content/projects";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import type { Locale } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";
import { VintageButton } from "../ui/VintageButton";

type FeaturedProjectSectionProps = { locale: Locale };

function ProjectVisual({ project }: { project: ProjectCard }) {
  return (
    <div
      aria-hidden="true"
      className="section-grid relative flex min-h-64 items-end overflow-hidden border border-line bg-surface p-6 sm:min-h-72"
    >
      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-line-strong/50" />
      <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-dashed border-line-strong/40" />
      <div className="absolute inset-x-6 top-1/2 border-t border-line" />
      <div className="absolute bottom-8 left-1/2 h-36 border-l border-line" />
      <div className="relative z-10 w-full border-t border-line-strong pt-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted">
          Visual register // {project.slug}
        </p>
        <p className="mt-2 font-display text-2xl uppercase text-foreground sm:text-3xl">
          {project.title}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  explore,
  featured = false,
}: {
  project: ProjectCard;
  explore: string;
  featured?: boolean;
}) {
  const card = (
    <article
      className={`group relative h-full overflow-hidden border border-line bg-surface/80 p-6 transition-colors duration-300 hover:border-line-strong ${
        featured
          ? "grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10"
          : "flex flex-col"
      }`}
    >
      <div
        className={
          featured ? "flex flex-col justify-between" : "flex flex-1 flex-col"
        }
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted">
              {project.mission}
            </p>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {project.status}
            </span>
          </div>
          <h3
            className={`mt-8 font-display uppercase leading-none text-foreground ${
              featured ? "text-4xl sm:text-5xl" : "text-3xl"
            }`}
          >
            {project.title}
          </h3>
          <div className="mt-6 h-px w-20 bg-line-strong" />
          <p className="mt-6 text-sm leading-7 text-secondary">
            {project.description}
          </p>
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            {project.role}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-line px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
          {project.href ? (
            <Link
              href={project.href}
              className="mt-8 inline-flex min-h-11 items-center border-b border-foreground pb-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-secondary hover:text-secondary"
            >
              {explore} <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          ) : (
            <span className="mt-8 inline-flex min-h-11 items-center border-b border-line-strong pb-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {explore} <span className="ml-3" aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );

  return card;
}

export function FeaturedProjectSection({
  locale,
}: FeaturedProjectSectionProps) {
  const content = getProjectCardContent(locale);
  const [featuredProject, ...secondaryProjects] = content.cards;

  return (
    <section
      id="projetos-em-destaque"
      className="relative overflow-hidden py-28"
      aria-labelledby="featured-projects-title"
    >
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <SectionBadge>{content.eyebrow}</SectionBadge>
            <h2
              id="featured-projects-title"
              className="mt-8 max-w-xl font-display text-4xl uppercase leading-none text-foreground sm:text-5xl"
            >
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-7 text-secondary">
              {content.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ProjectCard
            project={featuredProject}
            explore={content.explore}
            featured
          />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0.18 + index * 0.08}>
              <ProjectCard project={project} explore={content.explore} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <VintageButton href="/projects" variant="secondary">
              {content.viewAll} <span aria-hidden="true">→</span>
            </VintageButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
