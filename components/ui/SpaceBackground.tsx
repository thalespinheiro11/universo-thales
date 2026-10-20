"use client";

import { motion } from "framer-motion";

// Gerador com semente fixa: servidor e cliente precisam produzir as mesmas estrelas na hidratação.
function seededRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(26);
const round = (value: number) => Math.round(value * 1000) / 1000;

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${round(random() * 100)}%`,
  top: `${round(random() * 100)}%`,
  size: round(random() * 3 + 1),
  duration: round(random() * 4 + 3),
}));

export function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-foreground/[0.018] blur-3xl" />

      <div className="absolute -right-50 top-[30%] h-150 w-150 rounded-full bg-foreground/[0.014] blur-3xl" />

      <div className="absolute -left-50 bottom-[10%] h-125 w-125 rounded-full bg-foreground/1 blur-3xl" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-foreground"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
}