"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiArrowRightLongLine } from "@remixicon/react";

interface ContactCTAProps {
  className?: string;
}

export default function ContactCTA({ className }: ContactCTAProps) {
  return (
    <Link href="/contact" className="inline-block">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn("primary-btn mt-10 inline-flex items-center gap-2", className)}
      >
        GET IN TOUCH
        <RiArrowRightLongLine />
      </motion.button>
    </Link>
  );
}
