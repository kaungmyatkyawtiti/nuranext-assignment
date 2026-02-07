"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
