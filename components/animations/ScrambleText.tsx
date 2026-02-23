"use client";

import { splitString } from "@/lib/split-string";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

type ScrambleTextProps = {
  text: string;
  duration?: number;
  className?: string;
};

export default function ScrambleText({
  text,
  duration = 2,
  className,
}: ScrambleTextProps) {
  const chars = splitString(text);

  const stagger = duration / chars.length;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotate: -8,
      scale: 0.8,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 180,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {chars.map((char, i) => {
        if (char === "\n") {
          return <span key={i} className="block h-4" />
        }

        return (
          <motion.span
            key={i}
            variants={child}
          >
            {char}
          </motion.span>
        )
      })}
    </motion.div>
  );
}

