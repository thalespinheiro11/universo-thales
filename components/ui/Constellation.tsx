"use client";

import { motion } from "framer-motion";

type ConstellationProps = {
  className?: string;
};

export function Constellation({
  className = "",
}: ConstellationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className={`pointer-events-none absolute opacity-40 ${className}`}
    >
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
      >
        {/* LINHAS */}
        <motion.path
          d="M40 120 L100 80 L180 110 L240 70 L280 140"
          stroke="rgba(244,231,197,0.3)"
          strokeWidth="1"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M100 80 L120 170 L200 220 L260 190"
          stroke="rgba(216,180,106,0.2)"
          strokeWidth="1"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* ESTRELAS */}
        {[
          [40, 120],
          [100, 80],
          [180, 110],
          [240, 70],
          [280, 140],
          [120, 170],
          [200, 220],
          [260, 190],
        ].map(([x, y], index) => (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="3"
            fill="#f4e7c5"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: index * 0.15,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}