"use client";

import { motion } from "framer-motion";

const missionData = [
  {
    label: "Missão atual",
    value: "Universo Digital",
  },
  {
    label: "Projeto em foco",
    value: "NoxCare",
  },
  {
    label: "Transmissão",
    value: "Offline",
  },
  {
    label: "Base",
    value: "Joinville, BR",
  },
];

export function MissionPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.35,
      }}
      className="cartoon-ink mt-10 max-w-2xl overflow-hidden rounded-[2rem] p-5"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#f4e7c5]/20 pb-4">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
            Mission Control
          </p>

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full border border-[#080706] bg-[#d8b46a]" />
            <span className="h-3 w-3 rounded-full border border-[#080706] bg-[#f4e7c5]/60" />
            <span className="h-3 w-3 rounded-full border border-[#080706] bg-[#f4e7c5]/30" />
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {missionData.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.25rem] border-2 border-[#f4e7c5]/20 bg-[#080706]/45 p-4 shadow-[3px_3px_0_rgba(8,7,6,0.8)]"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#9f875f]">
                {item.label}
              </p>

              <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#f4e7c5]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}