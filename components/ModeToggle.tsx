"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import ThemeSwitchBtn from "./ThemedSwitchBtn";
import { AnimatePresence, motion } from "motion/react";

export default function ModeToggle() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  // console.log("theme", theme);
  // console.log("systemTheme", systemTheme);

  const handleSwitch = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  };

  if (!mount) return <ThemeSwitchBtn />

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={currentTheme}
        style={{ display: 'inline-block' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={handleSwitch}
          type="button"
          className="theme-switch"
        >
          <RiMoonClearLine
            size={20}
            className="dark:hidden"
          />
          <RiSunLine
            size={20}
            className="hidden dark:block"
          />
        </button>
      </motion.div>
    </AnimatePresence>
  )
};
