import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { VintageButton } from "@/components/ui/VintageButton";

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

      <OrbitalDecoration className="right-[-120px] top-40 hidden xl:block" />
      <Constellation className="left-10 top-44 hidden xl:block" />

      <section className="relative px-6 pb-24 pt-40">
        <Container>
          <Reveal>
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a] transition hover:text-[#f4e7c5]"
            >
              ← Voltar para início
            </Link>

            <div className="mt-10">
              <SectionBadge>Manifesto pessoal</SectionBadge>

              <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                Um explorador digital construindo tecnologia com imaginação.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f4e7c5]/70">
                Eu sou Thales Pinheiro. Este espaço existe para reunir minha
                jornada, meus projetos, minhas ideias e a forma como enxergo
                tecnologia, criatividade, astronomia e construção de futuro.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="vintage-card hand-drawn-border rounded-[2.5rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Quem sou eu
                </p>

                <div className="mt-6 space-y-6 text-base leading-8 text-[#f4e7c5]/70">
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
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="vintage-card hand-drawn-border rounded-[2.5rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  O que estou construindo
                </p>

                <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-[#f4e7c5]">
                  Um ecossistema pessoal de projetos, conteúdo e tecnologia.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#f4e7c5]/70">
                  NoxCare, Backup Monitor, Astronomy, lives, blog pessoal e
                  automações fazem parte de uma mesma direção: transformar
                  aprendizado, criatividade e trabalho técnico em algo concreto.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <VintageButton href="/projects">
                    Ver projetos
                  </VintageButton>

                  <VintageButton href="/blog" variant="secondary">
                    Ler diário
                  </VintageButton>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[2rem] border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Valores
                </p>

                <div className="mt-6 grid gap-3">
                  {values.map((value) => (
                    <div
                      key={value}
                      className="rounded-2xl border border-[#f4e7c5]/10 bg-[#080706]/40 px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#f4e7c5]/75"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[#d8b46a]/20 bg-[#d8b46a]/10 p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Interesses orbitais
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-[#f4e7c5]/15 bg-[#080706]/40 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#f4e7c5]/75"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}