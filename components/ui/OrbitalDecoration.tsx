"use client";

import { motion } from "framer-motion";

type OrbitalDecorationProps = {
  className?: string;
};

export function OrbitalDecoration({
  className = "",
}: OrbitalDecorationProps) {
  return (
    <div
      className={`pointer-events-none absolute opacity-30 ${className}`}
    >
      {/* ORBITA 1 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative h-56 w-56 rounded-full border border-[#f4e7c5]/20"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d8b46a]" />

        <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-[#f4e7c5]" />
      </motion.div>

      {/* ORBITA 2 */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d8b46a]/20"
      />

      {/* CENTRO */}
      <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4e7c5]/80 shadow-[0_0_20px_rgba(244,231,197,0.5)]" />
    </div>
  );
}