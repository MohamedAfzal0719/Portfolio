"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Briefcase } from "lucide-react";
import TiltCard from "@/components/layout/TiltCard";

const SKILL_CATEGORIES = [
  {
    title: "Core AI & Data Science",
    icon: <BrainCircuit size={28} className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />,
    colorGlow: "bg-orange-500/10",
    borderHover: "hover:border-orange-500/40",
    shadowHover: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    skills: [
      "Python", "Artificial Intelligence", "Generative AI",
      "RAG Systems", "Machine Learning", "Computer Vision",
      "Large Language Models (LLMs)", "Deep Learning", "Agentic Workflows"
    ],
  },
  {
    title: "Engineering & Backend",
    icon: <Database size={28} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />,
    colorGlow: "bg-red-500/10",
    borderHover: "hover:border-red-500/40",
    shadowHover: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    skills: [
      "FastAPI", "REST APIs",
      "PostgreSQL", "MongoDB", "Git & GitHub", "Docker",
    ],
  },
  {
    title: "Professional Skills",
    icon: <Briefcase size={28} className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />,
    colorGlow: "bg-amber-500/10",
    borderHover: "hover:border-amber-500/40",
    shadowHover: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    skills: [
      "System Architecture", "Cross-Functional Collaboration",
      "Research to Production", "Technical Communication",
      "Agile Methodologies", "Problem Solving"
    ],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

export default function Skills() {
  return (
    <section id="skills" className="section relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-5xl font-black mb-6 cursor-default transition-transform text-slate-900 dark:text-slate-100"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Skills</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * catIdx }}
              className="h-full"
            >
              <TiltCard
                className={`relative bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] h-full border border-slate-200 dark:border-slate-800 transition-all duration-500 cursor-default shadow-sm ${category.borderHover} ${category.shadowHover} group overflow-hidden`}
              >
                {/* Subtle Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-colors duration-500 ${category.colorGlow} opacity-0 group-hover:opacity-100`} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800/50 pb-6 relative z-10">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Interactive Skill Chips */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-50px" }}
                  className="flex flex-wrap gap-3 relative z-10"
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      variants={itemVariants}
                      key={skillIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-orange-500/30 dark:hover:border-orange-500/30 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 rounded-xl text-sm font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
