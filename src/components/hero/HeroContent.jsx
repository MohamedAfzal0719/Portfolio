"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Stagger variants for the container to orchestrate child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HeroContent() {
  const name = "Mohamed Afzal";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 relative z-10"
    >
      {/* Greeting */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <motion.div 
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
          className="text-2xl origin-bottom-right inline-block"
        >
          👋
        </motion.div>
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">
          HELLO, I'M
        </p>
      </motion.div>

      {/* Name */}
      <motion.div variants={itemVariants} className="space-y-1">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.04, ease: "easeOut" }}
              className="inline-block hover:text-orange-500 hover:scale-110 transition-all duration-300"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Title */}
      <motion.div variants={itemVariants} className="min-h-[80px] md:min-h-[90px]">
        <TypeAnimation
          sequence={[
            "AI Engineer", 2500,
            "Computer Vision Engineer", 2500,
            "Generative AI Engineer", 2500,
            "LLM Application Developer", 2500,
            "RAG Systems Developer", 2500,
            "Machine Learning Engineer", 2500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
        />
      </motion.div>

      {/* Description */}
      <motion.p variants={itemVariants} className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light">
        I build intelligent applications that bridge the gap between complex AI models and <span className="text-slate-900 dark:text-white font-medium">real-world enterprise solutions</span>. Specializing in Computer Vision and Large Language Models.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
        <a
          href="#projects"
          className="group relative px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold overflow-hidden transition-all hover:scale-105 shadow-md hover:shadow-lg"
        >
          <span className="relative z-10">View Projects</span>
          <div className="absolute inset-0 h-full w-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>

        <a
          href="/resume.pdf"
          download="Afzal_Resume.pdf"
          className="px-7 py-3.5 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-bold hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all hover:scale-105 shadow-sm"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
        {[
          { icon: <FaGithub size={24} />, href: "https://github.com/MohamedAfzal0719" },
          { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/mohamed-afzal-6732a7202/" },
          { icon: <FaEnvelope size={24} />, href: "mailto:afzalmohamed098@gmail.com" }
        ].map((social, idx) => (
          <motion.a 
            key={idx}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(249,115,22,0)] hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}