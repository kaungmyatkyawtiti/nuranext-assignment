"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function ServiceIntro() {
  const { scrollY } = useScroll();

  const imageY = useSpring(
    useTransform(scrollY, [0, 500], [0, 150]),
    { stiffness: 60, damping: 15 }
  );

  const textY = useSpring(
    useTransform(scrollY, [0, 500], [0, 300]),
    { stiffness: 200, damping: 30 }
  );

  return (
    <section className="relative min-h-screen overflow-hidden section-container col-center">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src="/parallex.png"
          alt="parallax"
          fill
          className="object-cover object-[75%_30%]"
        />
      </motion.div>

      <div className="absolute inset-0 z-5 bg-black/45" />

      <motion.div
        className="relative z-10 text-center"
        style={{ y: textY }}
      >
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold text-white">
          BOOST YOUR
        </h2>
        <h2 className="text-[clamp(3.5rem,6vw,5rem)] text-cyan-500 text-shadow-black font-semibold">
          GROWTH
        </h2>
      </motion.div>
    </section>
  );
}
