"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 3,
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