"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "Python", "FastAPI", "YOLOv8", "OpenCV", "LangChain", "LangGraph",
  "Gemini LLM", "PostgreSQL", "Docker", "Node.js", "Next.js",
  "MongoDB", "PyTorch", "Linux", "REST APIs", "Git"
];

// Duplicate the array to create a seamless infinite scroll loop
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK];

export default function Achievements() {
  return (
    <section className="py-16 relative z-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle Header */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center text-xs font-black tracking-[0.3em] text-orange-500 uppercase mb-8"
      >
        Core Technologies & Architecture
      </motion.p>

      {/* Fade masks for the left and right edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Slow, premium scroll speed
          }}
        >
          {MARQUEE_ITEMS.map((tech, idx) => (
            <div 
              key={idx}
              className="mx-3 md:mx-6 flex items-center justify-center px-8 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm hover:bg-orange-500/10 dark:hover:bg-orange-500/20 hover:border-orange-500/40 dark:hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 cursor-default group"
            >
              <span className="text-lg font-black text-slate-500 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors tracking-wider">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
