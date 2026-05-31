import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";
import { VintageButton } from "../ui/VintageButton";

export function FeaturedProjectSection() {
  const featuredProject = projects.find((project) => project.slug === "noxcare");

  if (!featuredProject) {
    return null;
  }

  return (
    <section id="projeto-em-foco" className="relative overflow-hidden py-28">
      <Container>
        <Reveal>
          <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border border-[#d8b46a]/20" />
            <div className="absolute bottom-[-140px] left-[-140px] h-96 w-96 rounded-full bg-[#d8b46a]/5 blur-3xl" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionBadge>Projeto em foco</SectionBadge>

                <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                  {featuredProject.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f4e7c5]/70">
                  {featuredProject.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#f4e7c5]/15 bg-[#080706]/40 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#f4e7c5]/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <VintageButton href={`/projects/${featuredProject.slug}`}>
                    Abrir missão
                  </VintageButton>

                  <VintageButton href="/projects" variant="secondary">
                    Ver todos
                  </VintageButton>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#f4e7c5]/10 bg-[#080706]/45 p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Arquivo da missão
                </p>

                <div className="mt-8 grid gap-5">
                  <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                      Status
                    </p>
                    <p className="mt-2 text-xl font-black uppercase text-[#f4e7c5]">
                      {featuredProject.status}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                      Objetivo
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#f4e7c5]/70">
                      {featuredProject.objective}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="rounded-2xl border border-[#d8b46a]/30 bg-[#d8b46a]/10 p-5 text-sm font-black uppercase tracking-[0.2em] text-[#f4e7c5] transition hover:bg-[#d8b46a]/20"
                  >
                    Ler arquivo completo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}