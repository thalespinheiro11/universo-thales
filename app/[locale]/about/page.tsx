import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageButton } from "@/components/ui/VintageButton";
import { createLocalizedMetadata } from "@/lib/seo";

export const generateMetadata = createLocalizedMetadata("/about");

const values = [
  "Criatividade com propósito",
  "Tecnologia útil e humana",
  "Construção constante",
  "Imaginação como ferramenta",
  "Presença, família e legado",
];

const interests = [
  "Desenvolvimento",
  "Astronomia",
  "Física",
  "Lives",
  "Música",
  "Design",
  "Projetos",
  "Produtividade",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              back={{ href: "/", label: "Voltar para início" }}
              badge="Manifesto pessoal"
              title="Um explorador digital construindo tecnologia com imaginação."
              description="Eu sou Thales Pinheiro. Este espaço existe para reunir minha jornada, meus projetos, minhas ideias e a forma como enxergo tecnologia, criatividade, astronomia e construção de futuro."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-who-title">
                <h2 id="about-who-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Quem sou eu
                </h2>

                <div className="mt-6 space-y-6 text-base leading-8 text-secondary">
                  <p>
                    Gosto de construir coisas. Sistemas, ideias, experiências,
                    páginas, automações, cenas de live, projetos e pequenos
                    universos digitais.
                  </p>

                  <p>
                    Para mim, tecnologia não é só ferramenta. É uma forma de dar
                    corpo para ideias, resolver problemas reais e criar algo que
                    carregue identidade.
                  </p>

                  <p>
                    A astronomia entra como inspiração: escala, silêncio,
                    exploração, mistério e a sensação de que sempre existe algo
                    maior para descobrir.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  O que estou construindo
                </p>

                <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl">
                  Um ecossistema pessoal de projetos, conteúdo e tecnologia.
                </h2>

                <p className="mt-6 text-base leading-8 text-secondary">
                  NoxCare, Backup Monitor, Astronomy, lives, blog pessoal e
                  automações fazem parte de uma mesma direção: transformar
                  aprendizado, criatividade e trabalho técnico em algo concreto.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VintageButton href="/projects">
                    Ver projetos
                  </VintageButton>

                  <VintageButton href="/blog" variant="secondary">
                    Ler diário
                  </VintageButton>
                </div>
              </section>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-values-title">
                <h2 id="about-values-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Valores
                </h2>

                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {values.map((value, index) => (
                    <li
                      key={value}
                      className="flex items-center gap-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground"
                    >
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-interests-title">
                <h2 id="about-interests-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Interesses orbitais
                </h2>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="border border-line px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-secondary"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
