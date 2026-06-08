"use client";

import { motion } from "framer-motion";

export default function FloatingOrb() {
  return (
    <motion.div
      animate={{
        y: [0, -25, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="
        absolute
        w-[450px]
        h-[450px]
        rounded-full
        bg-cyan-500/20
        blur-[120px]
      "
    />
  );
}