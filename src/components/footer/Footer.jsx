"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-16 pb-8">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-slate-200 dark:border-slate-800/50 pb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="#home" className="text-3xl font-black text-slate-900 dark:text-slate-100 inline-block mb-4">
              Afzal<span className="text-orange-500">.</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
              Building intelligent, enterprise-grade AI solutions for a better tomorrow.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="https://github.com/MohamedAfzal0719" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-afzal-6732a7202/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:afzalmohamed098@gmail.com" className="h-10 w-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>&copy; {currentYear} Mohamed Afzal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
