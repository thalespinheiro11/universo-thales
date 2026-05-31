"use client";

import { motion } from "framer-motion";

const stars = [
  { left: "6%", top: "12%", size: "2px" },
  { left: "14%", top: "36%", size: "1px" },
  { left: "22%", top: "72%", size: "2px" },
  { left: "34%", top: "18%", size: "1px" },
  { left: "47%", top: "54%", size: "2px" },
  { left: "58%", top: "26%", size: "1px" },
  { left: "66%", top: "78%", size: "2px" },
  { left: "74%", top: "44%", size: "1px" },
  { left: "86%", top: "16%", size: "2px" },
  { left: "94%", top: "68%", size: "1px" },
];

export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#d8b46a]/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[45%] h-[520px] w-[520px] rounded-full bg-[#b88952]/10 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[30%] h-[560px] w-[560px] rounded-full bg-[#f4e7c5]/5 blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f4e7c5]/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d8b46a]/10"
      />

      {stars.map((star, index) => (
        <motion.span
          key={index}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + index * 0.2,
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