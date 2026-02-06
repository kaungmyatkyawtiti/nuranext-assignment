"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useEffect, useRef, useState } from "react"

import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    const delta = current - previous;

    if (Math.abs(delta) < 8) return;

    if (delta > 0 && current > 150) setHidden(true);
    if (delta < 0) setHidden(false);
  })

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);

      document.documentElement.style.setProperty(
        "--header-height",
        hidden ? "0px" : `${height}px`
      );
    }
  }, [hidden]);

  // Resizing
  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (headerRef.current) {
  //       setHeaderHeight(headerRef.current.offsetHeight);
  //     }
  //   };
  //
  //   window.addEventListener("resize", updateHeight);
  //   updateHeight();
  //
  //   return () => window.removeEventListener("resize", updateHeight);
  // }, []);

  return (
    <motion.header
      ref={headerRef}
      animate={{
        y: hidden ? -headerHeight : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4">
        {/* Logo */}
        <Logo className="text-[1.7rem]" />

        {/* Navbar */}
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Header;
