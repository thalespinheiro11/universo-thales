import { notFound } from "next/navigation";
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
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              badge="Arquivo de projetos"
              title="Sistemas, ideias e experimentos em construção."
              description="Esta página reúne os projetos que fazem parte do meu universo pessoal digital: ferramentas, aplicações, automações, conteúdo, estudos e iniciativas ligadas à Astronomy."
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StatStrip
              items={[
                { label: "Total de missões", value: projects.length },
                { label: "Status geral", value: "Ativo" },
                { label: "Arquivo", value: "Orbital" },
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
