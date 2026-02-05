"use client";

import { HTMLMotionProps, motion, useScroll } from "motion/react";
import { useRef } from "react";

type ParagraphRevealProps = HTMLMotionProps<"p"> & {
  para: string;
};

export function ParagraphReveal({
  para,
  ...props
}: ParagraphRevealProps) {
  const targetRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"]
  })

  return (
    <motion.p
      ref={targetRef}
      style={{ opacity: scrollYProgress }}
      {...props}
    >
      {para}
    </motion.p>
  )
}
