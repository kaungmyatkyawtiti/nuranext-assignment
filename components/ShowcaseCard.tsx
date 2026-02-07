"use client"

import Image from "next/image";
import { Project } from "@/types";
import { motion, MotionValue, useTransform } from "motion/react";

interface ShowcaseCardProps {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

export default function ShowcaseCard({
  project,
  i,
  progress,
  range,
  targetScale
}: ShowcaseCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(progress, range, [1.2, 1]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 py-90">
      <motion.div
        className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-lg border border-stone-600"
        style={{
          top: `calc(-5vh + ${i * 35}px)`,
          scale
        }}
      >
        {/* Image */}
        <div className="w-full relative aspect-square md:aspect-video overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text + Btn */}
          <div className="absolute bottom-6 left-6 right-6 space-y-4">
            <h2 className="text-[clamp(20px,3.6vw,1.6rem)] font-semibold text-white/90">
              {project.client}
            </h2>

            <p className="text-white/80 text-sm sm:text-base max-w-lg leading-relaxed font-semibold">
              {project.title}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
