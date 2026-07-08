"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-default pointer-events-none"
      >
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-400 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}