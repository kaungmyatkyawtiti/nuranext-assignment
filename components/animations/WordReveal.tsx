"use client";

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { HTMLAttributes, useRef } from 'react';

type WordRevealProps = HTMLAttributes<HTMLParagraphElement> & {
  para: string;
};

export default function WordReveal({
  para,
  ...props
}: WordRevealProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = para.split(" ")

  return (
    <p
      ref={targetRef}
      className="flex flex-wrap space-x-2 md:space-x-6"
      {...props}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({
  children,
  progress,
  range
}: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative inline-block mr-3 md:mr-6">
      <span className="absolute inset-0 opacity-20">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  )
}
