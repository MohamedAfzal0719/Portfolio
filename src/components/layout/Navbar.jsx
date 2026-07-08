"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active Section Logic
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "Home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          if (window.scrollY >= absoluteTop - 150) {
            current = NAV_LINKS.find(l => l.href === `#${section}`)?.name || "Home";
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 pointer-events-none">
      <motion.div
        animate={{
          y: isScrolled ? 0 : 4,
          scale: isScrolled ? 0.98 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="glass dark:bg-slate-900/80 dark:backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center justify-between shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-5xl w-full pointer-events-auto transition-colors duration-300"
      >
        {/* Logo */}
        <Link href="#home" className="text-lg md:text-xl font-black text-slate-900 dark:text-slate-100 shrink-0">
          Afzal <span className="text-orange-500 font-extrabold text-[11px] md:text-xs uppercase tracking-wider ml-1 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">AI/ML Engineer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 px-3 text-sm font-medium transition-colors hover:text-orange-500 dark:hover:text-orange-400"
              onClick={() => setActiveSection(link.name)}
            >
              <span className={activeSection === link.name ? "text-orange-500 dark:text-orange-400 font-bold" : "text-slate-600 dark:text-slate-400 group-hover:text-orange-500 dark:group-hover:text-orange-400"}>
                {link.name}
              </span>

              {/* Animated Background Pill */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 dark:border-orange-500/30 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden h-9 w-9 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="absolute top-full left-0 right-0 mt-3 mx-2 glass dark:bg-slate-900/95 dark:backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 rounded-[2rem] p-5 md:hidden flex flex-col gap-3 shadow-xl"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold py-2.5 px-4 rounded-2xl transition-all ${activeSection === link.name
                      ? "bg-orange-500/15 text-orange-500 border border-orange-500/20"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}