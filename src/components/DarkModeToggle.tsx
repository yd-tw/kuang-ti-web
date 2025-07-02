"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="aspect-square p-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="dark:hidden">
        <Sun className="h-5 w-5" />
      </span>
      <span className="hidden dark:block">
        <Moon className="h-5 w-5" />
      </span>
    </button>
  );
}
