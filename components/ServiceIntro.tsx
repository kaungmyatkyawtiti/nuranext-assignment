"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function ServiceIntro() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <section className="relative min-h-screen overflow-hidden section-container col-center">
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothY }}
      >
        <Image
          src="/parallex.png"
          alt="parallax"
          fill
          className="object-cover object-[75%_30%]"
        />
      </motion.div>

      <div className="absolute inset-0 z-5 bg-black/45" />

      <div className="relative z-10 text-center">
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold text-white">
          BOOST YOUR
        </h2>
        <h2 className="text-[clamp(3.5rem,6vw,5rem)] text-cyan-500 text-shadow-black font-semibold">
          GROWTH
        </h2>
      </div>
    </section>
  );
}

