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
      className="vintage-card hand-drawn-border mt-10 max-w-2xl rounded-[2rem] p-5"
    >
      <div className="flex items-center justify-between border-b border-[#f4e7c5]/10 pb-4">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
          Mission Control
        </p>

        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-[#d8b46a]" />
          <span className="h-2 w-2 rounded-full bg-[#f4e7c5]/40" />
          <span className="h-2 w-2 rounded-full bg-[#f4e7c5]/20" />
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {missionData.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.25rem] border border-[#f4e7c5]/10 bg-[#080706]/35 p-4"
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
    </motion.div>
  );
}