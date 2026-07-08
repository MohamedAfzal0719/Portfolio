"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0 lg:ml-10">

      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-gradient-to-tr from-orange-500/30 to-red-500/30 rounded-full blur-[80px]"
      />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-[2rem] p-2 glass group"
      >
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#040718]">

          <Image
            src="/images/profile.png"
            alt="Mohamed Afzal"
            fill
            sizes="(max-width: 768px) 160px, 220px"
            className="object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            priority
          />

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500/50 rounded-tl-[1.5rem] m-5 opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-[1.5rem] m-5 opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
        </div>
      </motion.div>

    </div>
  );
}