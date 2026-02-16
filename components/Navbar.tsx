"use client";

import {
  RiMenu2Fill,
  RiCloseLine,
} from "@remixicon/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { useDismiss } from "@/hooks/use-dismiss";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  useDismiss(containerRef, handleClose);

  return (
    <nav className="flex-center gap-5">
      {/* Desktop view */}
      <ul className="hidden md:flex gap-6">
        {NAV_LINKS.map(link => {
          const isActive =
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`)

          return (
            <Link
              key={link.label}
              href={link.href}
            >
              <li
                className={cn(
                  "text-brand/85 hover:text-brand text-sm font-semibold uppercase hover-effect relative",
                  isActive && "text-brand"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1.5 h-0.75 w-0 bg-primary-pink",
                    isActive && "w-full"
                  )}
                />
              </li>
            </Link>
          )
        })}
      </ul>

      {/* Mobile view */}
      <div
        className="relative"
        ref={containerRef}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 bg-stone-600 hover:opacity-85 text-white rounded-md",
            isOpen && "bg-destructive"
          )}
        >
          {isOpen ? (
            <RiCloseLine size={20} />
          ) : (
            <RiMenu2Fill size={20} />
          )}
        </button>

        <AnimatePresence initial={false} mode="popLayout">
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute md:hidden right-0 top-12 z-50 w-50 border bg-stone-100 dark:bg-gray-700 shadow-md rounded-md"
            >
              <ul className="py-1 font-medium">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                  >
                    <li className="block px-4 py-2 hover:bg-input hover:underline text-brand/85 hover:text-brand font-semibold">
                      {link.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ModeToggle />
    </nav>
  );
}
