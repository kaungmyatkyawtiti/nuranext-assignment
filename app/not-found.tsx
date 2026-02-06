"use client";

import FloatingUFO from "@/components/animations/FloatingUFO";
import InteractiveBtn from "@/components/animations/InteractiveBtn";
import Magnetic from "@/components/animations/Magnetic";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {

  return (
    <main className="min-h-screen px-4 py-15">
      <div className="text-center max-w-7xl mx-auto">
        {/* UFO Floating */}
        <FloatingUFO />

        {/* 404 Text */}
        <h1 className="text-[clamp(4rem,6vw,6rem)] font-extrabold tracking-tight text-foreground">
          4
          <motion.span
            className="inline-block text-brand-primary"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            0
          </motion.span>
          4
        </h1>

        <p className="mt-4 sm:text-lg md:text-xl text-destructive">
          Oops! Looks like you’ve wandered into space 🌌
        </p>

        {/* Return Btn */}
        <div className="my-8 flex-center">
          <Link href="/">
            <InteractiveBtn>
              Return Home
            </InteractiveBtn>
          </Link>
        </div>

        {/* Astronaut */}
        <div className="flex-center">
          <Magnetic>
            <Image
              src={"/astronaut.png"}
              alt="Astronaut"
              width={65}
              height={65}
              className="w-auto h-auto object-cover rounded-full border border-border/70"
            />
          </Magnetic>
        </div>
      </div>
    </main>
  );
}
