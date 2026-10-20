import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getPagesContent } from "@/content/pages";
import {
  getProjectLocales,
  getProjects,
  getProjectTranslation,
} from "@/content/projects";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { localizedLanguages, localizedUrl } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageButton } from "@/components/ui/VintageButton";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const localizedProjects = getProjects(locale);
  const project = localizedProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const missionNumber = localizedProjects.findIndex((item) => item.slug === slug) + 1;
  const content = getPagesContent(locale).projectDetail;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <PageIntro
                back={{ href: "/projects", label: content.back }}
                badge={`${content.mission} ${String(missionNumber).padStart(3, "0")}`}
                title={project.title}
                description={project.description}
              >
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <VintageButton href="/projects">{content.allMissions}</VintageButton>
                  <VintageButton href="/contact" variant="secondary">
                    {content.contactCta}
                  </VintageButton>
                </div>
              </PageIntro>
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="mission-file-title">
                <p id="mission-file-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.file}
                </p>

                <dl className="mt-6 grid gap-px border border-line bg-line">
                  {[
                    { label: content.status, value: project.status },
                    { label: content.year, value: project.year },
                    { label: content.category, value: project.category },
                  ].map((item) => (
                    <div key={item.label} className="bg-canvas p-5">
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                        {item.label}
                      </dt>
                      <dd className="mt-2 font-display text-lg font-semibold uppercase text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                  <div className="bg-canvas p-5">
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                      {content.stack}
                    </dt>
                    <dd className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-line px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <section className="mt-16 border-l border-line-strong pl-6 sm:pl-8" aria-labelledby="mission-objective-title">
              <h2 id="mission-objective-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {content.objective}
              </h2>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-foreground sm:text-xl sm:leading-10">
                {project.objective}
              </p>
            </section>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              { title: content.learnings, items: project.learnings },
              { title: content.nextSteps, items: project.nextSteps },
            ].map((group, groupIndex) => (
              <Reveal key={group.title} delay={0.1 + groupIndex * 0.1}>
                <section className="h-full border border-line bg-surface/80 p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold uppercase text-foreground">
                    {group.title}
                  </h2>
                  <ul className="mt-6 divide-y divide-line border-t border-line">
                    {group.items.map((item, index) => (
                      <li key={item} className="flex gap-4 py-4 text-sm leading-7 text-secondary">
                        <span className="font-mono text-[0.62rem] leading-7 tracking-[0.16em] text-muted" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const project = getProjects(locale).find((item) => item.slug === slug);
  if (!project) return {};

  const hasTranslation = Boolean(getProjectTranslation(slug, locale));
  const canonicalLocale = hasTranslation ? locale : defaultLocale;
  const path = `/projects/${slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: localizedUrl(canonicalLocale, path),
      languages: localizedLanguages(path, getProjectLocales(slug)),
    },
    robots: { index: hasTranslation, follow: true },
  };
}
