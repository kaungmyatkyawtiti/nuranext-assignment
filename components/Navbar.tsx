"use client";

import {
  RiMenu2Fill,
  RiCloseLine,
  RiGithubFill,
} from "@remixicon/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { useDismiss } from "@/hooks/use-dismiss";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  useDismiss(containerRef, handleClose);

  return (
    <nav className="flex-center gap-4">
      {/* Desktop view */}
      <div className="hidden md:block">
        <ul className="flex gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.label} className="relative">
              <Link
                href={link.href}
                className="text-brand-blue text-sm font-semibold uppercase group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand-blue group-hover:w-full hover-effect" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

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

        {isOpen && (
          <div
            className="absolute md:hidden right-0 top-12 z-50 w-50 border bg-stone-100 dark:bg-stone-700 shadow-md rounded-md"
          >
            <ul className="py-1 font-medium">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                >
                  <li className="block px-4 py-2 hover:bg-input hover:underline text-brand-blue font-[550]">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ModeToggle />
    </nav>
  );
}
