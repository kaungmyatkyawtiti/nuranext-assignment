"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";

interface InteractiveBtnProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
}

export default function InteractiveBtn({
  className,
  children,
  ...props
}: InteractiveBtnProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        ease: "easeIn",
        duration: 0.2
      }}
      className={cn(
        "px-3 md:px-4 py-1.5 md:py-2 rounded-sm text-[13px] md:text-sm font-semibold flex-center gap-2 border text-brand hover:bg-brand hover:text-brand-accent",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
