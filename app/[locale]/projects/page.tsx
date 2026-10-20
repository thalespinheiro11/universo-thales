import { notFound } from "next/navigation";
import { getPagesContent } from "@/content/pages";
import { getProjects } from "@/content/projects";
import { isLocale } from "@/lib/i18n";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro, StatStrip } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageCard } from "@/components/ui/VintageCard";
import { createLocalizedMetadata } from "@/lib/seo";

type ProjectsPageProps = { params: Promise<{ locale: string }> };

export const generateMetadata = createLocalizedMetadata("/projects");

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const projects = getProjects(locale);
  const pages = getPagesContent(locale);
  const content = pages.projects;
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              badge={content.badge}
              title={content.title}
              description={content.description}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StatStrip
              items={[
                { label: content.totalLabel, value: projects.length },
                { label: content.statusLabel, value: content.statusValue },
                { label: content.archiveLabel, value: content.archiveValue },
              ]}
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <VintageCard
                  title={project.title}
                  category={`${project.category} • ${project.status}`}
                  description={project.description}
                  href={`/projects/${project.slug}`}
                  actionLabel={pages.common.openFile}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
