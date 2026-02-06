"use client";

import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "motion/react";
import { useRef } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  animatedOptions?: KeyframeOptions;
}

export default function AnimatedCounter({
  from,
  to,
  animatedOptions
}: AnimatedCounterProps) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(targetRef, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = targetRef.current;

    if (!element) return;
    if (!inView) return;

    // if (window.matchMedia("(prefers-reduced-motion)").matches) {
    //   element.textContent = String(to);
    //   return;
    // }

    element.textContent = String(from)

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animatedOptions,
      onUpdate(value) {
        // console.log("value", value);
        element.textContent = value.toFixed(0);
      }
    });

    return () => {
      controls.stop();
    }
  }, [targetRef, inView, from, to])

  return <span ref={targetRef} />;
}
