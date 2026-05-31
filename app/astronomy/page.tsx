import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { VintageButton } from "@/components/ui/VintageButton";

export default function AstronomyPage() {
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
              <SectionBadge>Laboratório criativo</SectionBadge>

              <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                Astronomy.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f4e7c5]/70">
                A Astronomy nasceu como uma forma de transformar ideias em
                projetos reais. Um espaço para unir tecnologia, criatividade,
                design, automação, desenvolvimento e exploração digital.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="vintage-card hand-drawn-border rounded-[2.5rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  O que é
                </p>

                <h2 className="mt-6 text-4xl font-black uppercase text-[#f4e7c5]">
                  Um laboratório de construção digital.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#f4e7c5]/70">
                  Mais do que uma empresa, a Astronomy representa a vontade de
                  criar soluções úteis, experiências memoráveis e projetos que
                  conectem tecnologia com imaginação.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="vintage-card hand-drawn-border rounded-[2.5rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Projetos relacionados
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-[#f4e7c5]/10 p-4">
                    NoxCare
                  </div>

                  <div className="rounded-2xl border border-[#f4e7c5]/10 p-4">
                    Backup Monitor
                  </div>

                  <div className="rounded-2xl border border-[#f4e7c5]/10 p-4">
                    Astronomy Studio
                  </div>

                  <div className="rounded-2xl border border-[#f4e7c5]/10 p-4">
                    Ferramentas e automações
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 rounded-[2.5rem] border border-[#d8b46a]/20 bg-[#d8b46a]/10 p-10 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                Site oficial
              </p>

              <h2 className="mt-6 text-4xl font-black uppercase text-[#f4e7c5]">
                Conheça a Astronomy.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f4e7c5]/70">
                Para conhecer a marca, os serviços, os projetos e o futuro da
                Astronomy, visite o site oficial.
              </p>

              <div className="mt-10 flex justify-center">
                <VintageButton href="https://astronomytech.com.br">
                  Visitar Astronomy
                </VintageButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}