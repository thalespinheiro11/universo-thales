"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const journeyItems = [
  {
    year: "2024",
    title: "Fundação técnica",
    description:
      "Aprofundamento em tecnologia, suporte, desenvolvimento e criação de soluções práticas para problemas reais.",
  },
  {
    year: "2025",
    title: "Ideias ganhando forma",
    description:
      "Projetos pessoais, estudos de frontend, identidade visual, automações e primeiros passos na construção de uma marca criativa.",
  },
  {
    year: "2026",
    title: "Universo em construção",
    description:
      "NoxCare, Backup Monitor, Astronomy, lives, blog pessoal e um ecossistema digital próprio começam a se conectar.",
  },
];

export function JourneySection() {
  return (
    <section id="jornada" className="relative overflow-hidden py-28">
      <Container>
        <Reveal>
          <SectionTitle
            badge="Linha do tempo"
            title="Uma jornada em construção, projeto por projeto."
            description="Este espaço não é só um portfólio. Ele registra a evolução de uma trajetória criativa, técnica e pessoal."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#d8b46a] via-[#f4e7c5]/20 to-transparent md:block" />

          <div className="space-y-8">
            {journeyItems.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.12}>
                <div className="relative grid gap-6 md:grid-cols-[120px_1fr] md:pl-12">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: -2,
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#f4e7c5]/30 bg-[#080706]/70 text-2xl font-black text-[#d8b46a]"
                  >
                    {item.year}
                  </motion.div>

                  <article className="vintage-card hand-drawn-border rounded-[2rem] p-6 md:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                      Registro orbital #{index + 1}
                    </p>

                    <h3 className="mt-4 text-3xl font-black uppercase text-[#f4e7c5]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-[#f4e7c5]/65">
                      {item.description}
                    </p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}