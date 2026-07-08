"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section relative z-10">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A relentless drive for building scalable AI solutions and intelligent systems.
          </p>
        </motion.div>

        {/* Bio Box */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm p-8 md:p-12 lg:p-16 rounded-[2rem] relative overflow-hidden group hover:shadow-md transition-shadow dark:backdrop-blur-xl"
        >
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 relative z-10">
            The Journey So Far
          </h3>
          
          <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed text-lg relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I chose AI and Machine Learning because it empowers technology to think, learn, and solve complex, real-world problems. My passion lies in bridging the gap between theoretical machine learning research and scalable enterprise impact.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Currently working as an <span className="text-orange-600 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">AI/ML Engineer at Enarxi Innovation</span>, I specialize in architecting highly accurate computer vision pipelines, multi-agent AI systems, and robust LLM applications. I thrive on building intelligent systems from the ground up.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My technical expertise centers around state-of-the-art architectures, including <span className="text-slate-900 dark:text-slate-100 font-bold">YOLOv8</span> for high-speed, real-time object detection, <span className="text-slate-900 dark:text-slate-100 font-bold">LangGraph</span> for orchestrating complex multi-agent workflows, and advanced <span className="text-slate-900 dark:text-slate-100 font-bold">RAG (Retrieval-Augmented Generation)</span> pipelines utilizing <span className="text-slate-900 dark:text-slate-100 font-bold">Gemini LLMs</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I believe in an engineering philosophy where performance is just as critical as accuracy. Whether it's optimizing models for 30+ FPS processing, achieving <span className="text-slate-900 dark:text-slate-100 font-bold">99% accuracy</span> in classification, or deploying sub-second inference APIs via <span className="text-slate-900 dark:text-slate-100 font-bold">FastAPI</span>, my goal is to deliver highly reliable, production-ready AI systems.
            </motion.p>

            {/* Core Focus Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 flex flex-wrap gap-3"
            >
              {["Computer Vision", "Generative AI", "LLM Orchestration", "Scalable Systems"].map((focus, idx) => (
                <motion.span 
                  key={idx} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-orange-500/40 dark:hover:border-orange-500/40 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 shadow-sm transition-colors rounded-full text-sm font-semibold tracking-wide cursor-default"
                >
                  {focus}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
