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
      {/* Nebulosa superior */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#d8b46a]/5 blur-3xl" />

      {/* Nebulosa direita */}
      <div className="absolute right-[-200px] top-[30%] h-[600px] w-[600px] rounded-full bg-[#b88952]/5 blur-3xl" />

      {/* Nebulosa esquerda */}
      <div className="absolute left-[-200px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#f4e7c5]/3 blur-3xl" />

      {/* Estrelas */}
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
          className="absolute rounded-full bg-[#f4e7c5]"
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