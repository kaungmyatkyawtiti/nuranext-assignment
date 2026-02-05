"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ShimmerText {
  className?: string;
  text: string;
}

export default function ShimmerText({
  className,
  text,
}: ShimmerText) {
  return (
    <motion.h1
      className={cn(
        "bg-size-[200%_100%] bg-clip-text text-transparent",
        className
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.h1>
  );
}
