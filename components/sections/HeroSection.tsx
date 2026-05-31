"use client";

import { motion } from "framer-motion";
import { personalLinks } from "@/lib/constants";
import { Constellation } from "../ui/Constellation";
import { MissionPanel } from "../ui/MissionPanel";
import { OrbitalDecoration } from "../ui/OrbitalDecoration";
import { Parallax } from "../ui/Parallax";
import { SectionBadge } from "../ui/SectionBadge";
import { VintageButton } from "../ui/VintageButton";

const stars = [
  { left: "8%", top: "18%" },
  { left: "16%", top: "44%" },
  { left: "24%", top: "28%" },
  { left: "31%", top: "68%" },
  { left: "42%", top: "16%" },
  { left: "51%", top: "36%" },
  { left: "63%", top: "24%" },
  { left: "72%", top: "58%" },
  { left: "84%", top: "32%" },
  { left: "91%", top: "72%" },
  { left: "12%", top: "82%" },
  { left: "36%", top: "88%" },
  { left: "56%", top: "78%" },
  { left: "78%", top: "86%" },
  { left: "94%", top: "14%" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-32 h-28 w-28 rounded-full border border-[#f4e7c5]/30 bg-[#d8b46a]/20 blur-[1px]"
      />

      <motion.div
        animate={{
          y: [0, 24, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-40 h-40 w-40 rounded-full border border-[#f4e7c5]/20 bg-[#b88952]/10"
      />

      <Parallax offset={120}>
        <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d8b46a]/10 blur-3xl" />
      </Parallax>

      <div className="absolute inset-0 opacity-40">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-[#f4e7c5]"
            style={{
              left: star.left,
              top: star.top,
            }}
          />
        ))}
      </div>

      <OrbitalDecoration className="right-[-80px] top-32 hidden xl:block" />
      <OrbitalDecoration className="bottom-10 left-[-120px] hidden xl:block" />

      <Constellation className="left-10 top-32 hidden xl:block" />
      <Constellation className="bottom-16 right-20 hidden xl:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10"
        >
          <SectionBadge>Diário de bordo digital</SectionBadge>

          <h1
            className="mt-8 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#f4e7c5] sm:text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "Cinzel, serif",
            }}
          >
            Tecnologia, imaginação e exploração espacial.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f4e7c5]/70">
            Eu sou {personalLinks.name}. Este é meu universo digital: um
            laboratório retrofuturista onde tecnologia, astronomia, criatividade,
            projetos e lives coexistem como um diário vivo de exploração.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <VintageButton href="#projetos">
              Explorar projetos
            </VintageButton>

            <VintageButton href="#blog" variant="secondary">
              Abrir diário
            </VintageButton>
          </div>

          <MissionPanel />
        </motion.div>

        <Parallax offset={60}>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="vintage-card hand-drawn-border space-glow relative mx-auto aspect-square max-w-md rounded-[3rem] p-8"
            >
              <div className="absolute -left-8 top-10 rounded-full border border-[#f4e7c5]/30 bg-[#080706] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#d8b46a]">
                TRANSMISSÃO ORBITAL
              </div>

              <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-[#f4e7c5]/15 bg-[#080706]/40 text-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mb-8 h-28 w-28 rounded-full border-4 border-dashed border-[#f4e7c5]"
                />

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#9f875f]">
                  DEVELOPMENT • SPACE • LIVE
                </p>

                <h2
                  className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4e7c5]"
                  style={{
                    fontFamily: "Cinzel, serif",
                  }}
                >
                  ESTÚDIO ORBITAL
                </h2>

                <p className="mt-4 max-w-xs text-sm leading-6 text-[#f4e7c5]/60">
                  Um espaço para criar projetos, transmitir ideias, estudar
                  tecnologia e construir algo memorável.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}