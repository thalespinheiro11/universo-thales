import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { VintageButton } from "@/components/ui/VintageButton";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const missionNumber = projects.findIndex((item) => item.slug === slug) + 1;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <OrbitalDecoration className="right-[-120px] top-40 hidden xl:block" />
      <Constellation className="left-10 top-44 hidden xl:block" />

      <section className="relative px-6 pb-24 pt-40">
        <Container>
          <Reveal>
            <Link
              href="/projects"
              className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a] transition hover:text-[#f4e7c5]"
            >
              ← Voltar para projetos
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <div>
                <SectionBadge>
                  Missão {String(missionNumber).padStart(3, "0")}
                </SectionBadge>

                <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                  {project.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f4e7c5]/70">
                  {project.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <VintageButton href="/projects">
                    Todas as missões
                  </VintageButton>

                  <VintageButton href="/contact" variant="secondary">
                    Abrir contato
                  </VintageButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-8">
                <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border border-[#d8b46a]/20" />
                <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-[#d8b46a]/5 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                    Arquivo da missão
                  </p>

                  <div className="mt-8 grid gap-5">
                    <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#080706]/40 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                        Status
                      </p>

                      <p className="mt-2 text-xl font-black uppercase text-[#f4e7c5]">
                        {project.status}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#080706]/40 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                        Ano
                      </p>

                      <p className="mt-2 text-xl font-black uppercase text-[#f4e7c5]">
                        {project.year}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#080706]/40 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                        Categoria
                      </p>

                      <p className="mt-2 text-xl font-black uppercase text-[#f4e7c5]">
                        {project.category}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#080706]/40 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                        Stack / Ferramentas
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#f4e7c5]/15 bg-[#f4e7c5]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f4e7c5]/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="mt-16 rounded-[2.5rem] border border-[#d8b46a]/20 bg-[#d8b46a]/10 p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                Objetivo da missão
              </p>

              <p className="mt-6 max-w-5xl text-xl leading-10 text-[#f4e7c5]/75">
                {project.objective}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="vintage-card rounded-[2rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Aprendizados registrados
                </p>

                <ul className="mt-8 space-y-5">
                  {project.learnings.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-base leading-7 text-[#f4e7c5]/70"
                    >
                      <span className="mt-1 text-[#d8b46a]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="vintage-card rounded-[2rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Próximos passos
                </p>

                <ul className="mt-8 space-y-5">
                  {project.nextSteps.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-base leading-7 text-[#f4e7c5]/70"
                    >
                      <span className="mt-1 text-[#d8b46a]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}