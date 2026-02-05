"use client";

import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}

