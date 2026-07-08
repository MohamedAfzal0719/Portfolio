"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full overflow-hidden text-slate-600 hover:text-orange-500 hover:bg-orange-500/10 transition-colors dark:text-slate-300 dark:hover:text-orange-400 dark:hover:bg-orange-500/20"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 0 : 1,
          opacity: theme === "light" ? 0 : 1,
          rotate: theme === "light" ? -90 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        <Moon size={20} />
      </motion.div>
    </button>
  );
}
