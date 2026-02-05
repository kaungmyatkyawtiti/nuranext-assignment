"use client";

import { splitString } from "@/lib/split-string";
import { HTMLMotionProps, motion } from "motion/react";

const charVariants = {
  hidden: { opacity: 0.3 },
  reveal: { opacity: 1 },
}

type FadeInTextProps = HTMLMotionProps<"p"> & {
  para: string;
};

export default function FadeInText({
  para,
  ...props
}: FadeInTextProps) {
  const chars = splitString(para);

  const TOTAL_DURATION = 3;
  const stagger = TOTAL_DURATION / chars.length;

  return (
    <motion.p
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true }}
      transition={{ staggerChildren: stagger }}
      {...props}
    >
      {chars.map((char, i) => {
        if (char === "\n") {
          return <span key={i} className="block h-10" />;
        }

        return (
          <motion.span
            key={i}
            transition={{ duration: 0.3 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        )
      })}
    </motion.p>
  )
}
