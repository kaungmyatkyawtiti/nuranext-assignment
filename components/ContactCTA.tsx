"use client";

import Link from "next/link";
import { RiArrowRightLongLine } from "@remixicon/react";
import InteractiveBtn from "./animations/InteractiveBtn";

export default function ContactCTA() {
  return (
    <Link href="/contact">
      <InteractiveBtn>
        GET IN TOUCH
        <RiArrowRightLongLine />
      </InteractiveBtn>
    </Link >
  );
}
