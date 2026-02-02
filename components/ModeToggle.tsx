"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import ThemeSwitchBtn from "./ThemedSwitchBtn";

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
    <button
      onClick={handleSwitch}
      type="button"
      className="theme-switch-btn"
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
  )
};
