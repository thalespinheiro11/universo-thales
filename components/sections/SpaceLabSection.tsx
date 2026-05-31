"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const formulas = ["E = mc²", "F = G(m₁m₂/r²)", "v = λf", "Δt"];

const discoveries = [
  {
    title: "Astronomia",
    description:
      "Exploração espacial, observação do cosmos e fascínio pelo desconhecido.",
  },
  {
    title: "Física",
    description:
      "Leis, fórmulas, movimento, energia e compreensão do universo.",
  },
  {
    title: "Imaginação",
    description:
      "A criatividade como combustível para construir experiências e projetos.",
  },
];

export function SpaceLabSection() {
  return (
    <section id="space-lab" className="relative overflow-hidden py-32">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#f4e7c5]/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[-260px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-dashed border-[#d8b46a]/10"
      />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <SectionTitle
                badge="Space Lab"
                title="Um laboratório entre ciência, criatividade e exploração."
                description="Astronomia e física não aparecem aqui apenas como estética. Elas fazem parte da forma como enxergo tecnologia, imaginação e construção de projetos."
              />

              <div className="mt-10 grid gap-4">
                {discoveries.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 p-5"
                  >
                    <h3 className="text-xl font-black uppercase text-[#f4e7c5]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#f4e7c5]/65">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative">
              <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-8">
                <svg
                  className="absolute inset-0 h-full w-full opacity-20"
                  viewBox="0 0 800 800"
                >
                  <line
                    x1="120"
                    y1="160"
                    x2="240"
                    y2="260"
                    stroke="#f4e7c5"
                    strokeWidth="1"
                  />

                  <line
                    x1="240"
                    y1="260"
                    x2="360"
                    y2="220"
                    stroke="#f4e7c5"
                    strokeWidth="1"
                  />

                  <line
                    x1="360"
                    y1="220"
                    x2="500"
                    y2="340"
                    stroke="#f4e7c5"
                    strokeWidth="1"
                  />

                  <circle cx="120" cy="160" r="4" fill="#f4e7c5" />
                  <circle cx="240" cy="260" r="4" fill="#f4e7c5" />
                  <circle cx="360" cy="220" r="4" fill="#f4e7c5" />
                  <circle cx="500" cy="340" r="4" fill="#f4e7c5" />
                </svg>

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d8b46a]">
                    Arquivos científicos
                  </p>

                  <h3 className="mt-5 text-4xl font-black uppercase leading-tight text-[#f4e7c5]">
                    Observatório retrofuturista
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-[#f4e7c5]/65">
                    Uma mistura de diário científico, exploração espacial e
                    laboratório criativo para documentar ideias, descobertas e
                    projetos.
                  </p>

                  <div className="mt-12 grid grid-cols-2 gap-4">
                    {formulas.map((formula) => (
                      <motion.div
                        key={formula}
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="rounded-[1.25rem] border border-[#f4e7c5]/10 bg-[#080706]/40 p-5 text-center"
                      >
                        <p className="text-2xl font-black text-[#f4e7c5]">
                          {formula}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 h-px w-full bg-gradient-to-r from-[#d8b46a] via-[#f4e7c5]/30 to-transparent" />

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                        Exploração
                      </p>

                      <p className="mt-2 text-lg font-black uppercase text-[#f4e7c5]">
                        Em andamento
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-16 w-16 rounded-full border-2 border-dashed border-[#f4e7c5]/40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}