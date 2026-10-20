import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageButton } from "@/components/ui/VintageButton";
import { createLocalizedMetadata } from "@/lib/seo";

export const generateMetadata = createLocalizedMetadata("/astronomy");

const relatedProjects = [
  "NoxCare",
  "Backup Monitor",
  "Astronomy Studio",
  "Ferramentas e automações",
];

export default function AstronomyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              back={{ href: "/", label: "Voltar para início" }}
              badge="Laboratório criativo"
              title="Astronomy."
              description="A Astronomy nasceu como uma forma de transformar ideias em projetos reais. Um espaço para unir tecnologia, criatividade, design, automação, desenvolvimento e exploração digital."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  O que é
                </p>
                <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl">
                  Um laboratório de construção digital.
                </h2>
                <p className="mt-6 text-base leading-8 text-secondary">
                  Mais do que uma empresa, a Astronomy representa a vontade de
                  criar soluções úteis, experiências memoráveis e projetos que
                  conectem tecnologia com imaginação.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="related-projects-title">
                <h2 id="related-projects-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Projetos relacionados
                </h2>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {relatedProjects.map((project, index) => (
                    <li key={project} className="flex items-center gap-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {project}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <section className="mt-16 flex flex-col gap-8 border-t border-line pt-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Site oficial
                </p>
                <h2 className="mt-6 font-display text-2xl font-semibold uppercase text-foreground sm:text-3xl">
                  Conheça a Astronomy.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-secondary">
                  Para conhecer a marca, os serviços, os projetos e o futuro da
                  Astronomy, visite o site oficial.
                </p>
              </div>
              <VintageButton href="https://astronomytech.com.br">
                Visitar Astronomy
              </VintageButton>
            </section>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
