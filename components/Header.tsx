"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useEffect, useState } from "react"

import Logo from './Logo';
import Navbar from './Navbar';

const HEADER_HEIGHT = 65

const Header = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    const delta = current - previous;

    if (Math.abs(delta) < 8) return;

    if (delta > 0 && current > 150) setHidden(true);
    if (delta < 0) setHidden(false);
  })

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      hidden ? "0px" : `${HEADER_HEIGHT}px`
    )
  }, [hidden])

  return (
    <motion.header
      animate={{
        y: hidden ? -HEADER_HEIGHT : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo */}
      <Logo className="text-[1.7rem]" />

      {/* Navbar */}
      <Navbar />
    </motion.header>
  );
};

export default Header;
