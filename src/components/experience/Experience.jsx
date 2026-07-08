"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, ChevronDown, ChevronUp, Terminal, Star, Zap, CheckCircle2, Trophy } from "lucide-react";

const ROLE_OVERVIEW = "Designing and developing enterprise-grade AI applications, intelligent automation systems, and scalable backend solutions that transform business requirements into production-ready products.";

const RESPONSIBILITIES = [
  "Design and develop AI-powered applications for enterprise solutions.",
  "Build scalable backend APIs using FastAPI and Node.js.",
  "Develop Computer Vision systems using YOLOv8 and OpenCV.",
  "Create Retrieval-Augmented Generation (RAG) pipelines for AI assistants.",
  "Integrate Large Language Models (LLMs) using OpenAI, Hugging Face, and Llama.",
  "Design intelligent automation workflows to improve business operations.",
  "Optimize AI model inference and deployment for production environments.",
  "Develop real-time streaming and monitoring solutions.",
  "Work closely with cross-functional teams from research to deployment.",
  "Maintain clean, scalable, and production-ready codebases."
];

const TECHNOLOGIES = [
  "Python", "FastAPI", "Node.js", "JavaScript", "OpenAI API", "LangChain", 
  "LangGraph", "Llama", "Hugging Face", "YOLOv8", "OpenCV", "PostgreSQL", 
  "MongoDB", "Docker", "Git", "REST APIs", "Linux"
];

const CORE_EXPERTISE = [
  "Artificial Intelligence", "Machine Learning", "Computer Vision", 
  "Generative AI", "Large Language Models", "Retrieval-Augmented Generation", 
  "Backend Development", "Real-Time Streaming", "System Integration", "API Development"
];

const HIGHLIGHTS = [
  "Developed multiple enterprise-grade AI solutions from concept to deployment.",
  "Built scalable AI architectures integrating LLMs with backend services.",
  "Designed intelligent Computer Vision applications for real-world industrial use cases.",
  "Implemented AI-powered automation to improve operational efficiency.",
  "Collaborated across engineering teams to deliver production-ready software.",
  "Contributed to research, prototyping, development, testing, and deployment."
];

const METRICS = [
  { label: "Defect Detection", value: "96%", suffix: " Accuracy" },
  { label: "Processing Speed", value: "30+", suffix: " FPS" },
  { label: "Inspection Time", value: "-70%", suffix: " Reduction" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience" className="section relative z-10">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-6 cursor-default transition-transform text-slate-900 dark:text-slate-100"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Interactive Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative glass dark:bg-slate-900/40 dark:backdrop-blur-xl p-6 md:p-10 rounded-[2rem] group border border-slate-200 dark:border-slate-800 hover:border-orange-500/30 transition-all duration-500"
        >
          {/* Subtle Background Accent (Reduced glow) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-colors duration-700" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
            <div className="flex gap-5 items-start">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 shadow-sm"
              >
                <Building2 size={32} className="text-orange-600" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 cursor-default">
                  AI/ML Engineer
                </h3>
                <p className="text-lg text-orange-600 font-medium">Enarxi Innovations Private Limited</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-700 bg-orange-500/10 px-5 py-2.5 rounded-xl border border-orange-500/20 shrink-0 h-fit cursor-default shadow-sm">
              <Calendar size={18} className="text-orange-600" />
              <span className="font-semibold text-sm tracking-wide">Feb 2026 &ndash; Present</span>
            </div>
          </div>

          {/* Role Overview */}
          <div className="mb-10 relative z-10">
            <h4 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-3">Role Overview</h4>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {ROLE_OVERVIEW}
            </p>
          </div>

          {/* Metrics */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false }} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 relative z-10"
          >
            {METRICS.map((metric, idx) => (
              <motion.div 
                variants={itemVariants} 
                key={idx} 
                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-center items-center text-center transition-all duration-300 cursor-default shadow-sm"
              >
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500 mb-2">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">
                  {metric.label} <span className="text-orange-600">{metric.suffix}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <div className="mb-10 relative z-10">
            <h4 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-4">Technologies</h4>
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: false }} 
              className="flex flex-wrap gap-3"
            >
              {TECHNOLOGIES.slice(0, 10).map((tech, i) => (
                <motion.span 
                  variants={itemVariants} 
                  key={i} 
                  className="px-4 py-2 bg-orange-500/10 text-orange-600 border border-orange-500/20 rounded-xl text-xs font-bold uppercase tracking-wider cursor-default transition-colors shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
              {!isExpanded && (
                <motion.span 
                  variants={itemVariants} 
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider cursor-default transition-colors shadow-sm"
                >
                  +{TECHNOLOGIES.length - 10} More
                </motion.span>
              )}
              {isExpanded && TECHNOLOGIES.slice(10).map((tech, i) => (
                <motion.span 
                  variants={itemVariants} 
                  key={i + 10} 
                  className="px-4 py-2 bg-orange-500/10 text-orange-600 border border-orange-500/20 rounded-xl text-xs font-bold uppercase tracking-wider cursor-default transition-colors shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Expand/Collapse Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative z-10 w-full py-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase text-orange-600 hover:text-orange-700 bg-orange-500/10 hover:bg-orange-500/20 rounded-2xl transition-colors border border-orange-500/20 shadow-sm"
          >
            {isExpanded ? (
              <>Hide Full Details <ChevronUp size={20} /></>
            ) : (
              <>Explore Full Experience <ChevronDown size={20} /></>
            )}
          </button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden relative z-10"
              >
                <div className="pt-12 border-t border-slate-200 dark:border-slate-800 mt-10 space-y-12">
                  
                  {/* Grid for Responsibilities & Expertise */}
                  <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                        <Terminal className="text-orange-500" size={24} />
                        Key Responsibilities
                      </h4>
                      <motion.ul variants={containerVariants} initial="hidden" animate="show" className="space-y-5">
                        {RESPONSIBILITIES.map((item, idx) => (
                          <motion.li 
                            variants={itemVariants} 
                            key={idx} 
                            className="flex items-start gap-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors cursor-default"
                          >
                            <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Core Expertise */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                        <Star className="text-red-500" size={24} />
                        Core Expertise
                      </h4>
                      <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-4">
                        {CORE_EXPERTISE.map((item, idx) => (
                          <motion.div 
                            variants={itemVariants} 
                            key={idx} 
                            className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all cursor-default"
                          >
                            <Zap size={18} className="text-red-500 shrink-0" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide">{item}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                      <Trophy className="text-amber-500" size={24} />
                      Professional Highlights
                    </h4>
                    <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-5">
                      {HIGHLIGHTS.map((item, idx) => (
                        <motion.div 
                          variants={itemVariants} 
                          key={idx} 
                          className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-l-amber-500 dark:border-l-amber-500 transition-all cursor-default"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Achievement Footer */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 p-8 rounded-3xl border border-orange-500/20 text-center relative overflow-hidden cursor-default shadow-sm"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 blur-[50px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/20 blur-[50px] translate-y-1/2 -translate-x-1/2 rounded-full" />
                    <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-relaxed relative z-10">
                      "Successfully delivered AI-powered enterprise solutions involving Computer Vision, Large Language Models, Retrieval-Augmented Generation (RAG), backend APIs, and intelligent automation for real-world business applications."
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </motion.div>
      </div>
    </section>
  );
}
