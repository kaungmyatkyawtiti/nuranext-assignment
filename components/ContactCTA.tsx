import { cn } from "@/lib/utils";
import { RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";

interface ContactCTAProps {
  className?: string;
}

export default function ContactCTA({ className }: ContactCTAProps) {
  return (
    <Link
      href={"/contact"}
      className={cn("primary-btn mt-10", className)}
    >
      GET IN TOUCH
      <RiArrowRightLongLine />
    </Link>
  )
}

