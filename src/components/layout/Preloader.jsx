"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    let startTimestamp = null;
    const duration = 2000; // 2 seconds to load

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);

      // Custom easing for the counter (easeOutExpo)
      const easeProgress = currentProgress === 100
        ? 100
        : 100 * (1 - Math.pow(2, -10 * (currentProgress / 100)));

      setProgress(Math.floor(easeProgress));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        setProgress(100);
        // Wait briefly at 100% before triggering exit animation
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 400);
      }
    };

    window.requestAnimationFrame(step);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-slate-50 dark:bg-slate-950 p-6 md:p-12"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top Info Bar */}
          <div className="flex justify-end items-start text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium tracking-widest uppercase">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Portfolio v1.0
            </motion.div>
          </div>

          {/* Center Cinematic Counter */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-slate-100 dark:to-slate-600 tracking-tighter leading-none"
              >
                {progress}
                <span className="text-4xl md:text-7xl align-top text-orange-500">%</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-orange-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]"
            >
              Welcome to My Portfolio
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Footer */}
          <div className="w-full">
            <div className="h-[2px] w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            <div className="flex justify-between mt-6 text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase">
              <span>AI/ML ENGINEER</span>
              <span>{new Date().getFullYear()}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
