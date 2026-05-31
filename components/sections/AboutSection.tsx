"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { NyxNote } from "../ui/NyxNote";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const journeyTopics = [
  "Tecnologia",
  "Astronomia",
  "Física",
  "Desenvolvimento",
  "Lives",
  "Criatividade",
  "Projetos",
  "Exploração",
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-28">
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-[#d8b46a]/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#b88952]/10 blur-3xl" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <SectionTitle
                badge="Sobre mim"
                title="Construindo um universo digital entre tecnologia e imaginação."
                description="Sou desenvolvedor, criador e explorador de ideias. Gosto de construir projetos que misturam utilidade, estética, atmosfera e personalidade."
              />

              <div className="mt-10 space-y-6 text-lg leading-8 text-[#f4e7c5]/70">
                <p>
                  Meu objetivo não é apenas programar aplicações, mas criar
                  experiências que transmitam identidade, criatividade e
                  significado.
                </p>

                <p>
                  Entre linhas de código, estudos, astronomia, física, design,
                  lives e projetos pessoais, este site funciona como um diário
                  vivo da minha jornada.
                </p>

                <p>
                  A Astronomy representa justamente isso: tecnologia construída
                  com imaginação.
                </p>
              </div>

              <div className="mt-10">
                <NyxNote
                  icon="🌙"
                  title="Arquivo inicial catalogado"
                >
                  A Oficial Nyx acompanha este universo digital como uma
                  navegadora de bordo: registrando projetos, observando ideias
                  e marcando cada nova descoberta da jornada.
                </NyxNote>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative">
              <div className="cartoon-ink relative overflow-hidden rounded-[2.5rem] p-8">
                <div className="absolute inset-0 opacity-[0.06]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <p className="cartoon-badge">
                    Registro de exploração
                  </p>

                  <h3 className="cartoon-title mt-5 text-4xl font-black uppercase leading-tight text-[#f4e7c5]">
                    Laboratório criativo orbital
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-8 text-[#f4e7c5]/65">
                    Um espaço para desenvolver aplicações, transmitir ideias,
                    criar experiências e documentar a construção de projetos.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {journeyTopics.map((topic) => (
                      <div
                        key={topic}
                        className="cartoon-badge"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>

                  <div className="vintage-rule mt-10" />

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#9f875f]">
                        Status
                      </p>

                      <p className="mt-2 text-lg font-black uppercase text-[#f4e7c5]">
                        Em construção constante
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="rubber-orbit flex h-20 w-20 items-center justify-center rounded-full"
                    >
                      <div className="h-8 w-8 rounded-full bg-[#d8b46a]/70" />
                    </motion.div>
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