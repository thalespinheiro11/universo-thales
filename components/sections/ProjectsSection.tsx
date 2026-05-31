import { projects } from "@/data/projects";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { VintageCard } from "../ui/VintageCard";

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative overflow-hidden py-28">
      <Container>
        <Reveal>
          <SectionTitle
            badge="Projetos em destaque"
            title="Máquinas, sistemas e experimentos digitais."
            description="Projetos construídos entre tecnologia, criatividade, automação, design e exploração de ideias."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.12}>
              <VintageCard
                title={project.title}
                category={project.category}
                description={project.shortDescription}
                href={`/projects/${project.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}