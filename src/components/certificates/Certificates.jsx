"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Award, Code2, Database, Network, Terminal, Table, BarChart, LineChart, Brain, RotateCcw } from "lucide-react";

const certificates = [
  {
    title: "Data Science",
    issuer: "Besant Technologies",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    description: "Learned data manipulation, statistical analysis, and predictive modeling using Python libraries like Pandas, NumPy, and Scikit-Learn."
  },
  {
    title: "Python",
    issuer: "Besant Technologies",
    icon: Terminal,
    color: "from-yellow-400 to-yellow-600",
    description: "Mastered core Python programming, data structures, object-oriented design, and scripting for automation."
  },
  {
    title: "Excel",
    issuer: "Besant Technologies",
    icon: Table,
    color: "from-emerald-400 to-emerald-600",
    description: "Developed advanced spreadsheet skills including PivotTables, VLOOKUP, macros, and data visualization techniques."
  },
  {
    title: "SQL",
    issuer: "Besant Technologies",
    icon: Database,
    color: "from-sky-400 to-sky-600",
    description: "Acquired database management skills, writing complex queries, joins, subqueries, and database optimization."
  },
  {
    title: "PowerBI",
    issuer: "Besant Technologies",
    icon: BarChart,
    color: "from-amber-400 to-amber-600",
    description: "Learned to create interactive dashboards, data models, and compelling data visualizations for business intelligence."
  },
  {
    title: "Tableau",
    issuer: "Besant Technologies",
    icon: LineChart,
    color: "from-indigo-400 to-indigo-600",
    description: "Studied visual analytics, dashboard creation, and data storytelling to transform raw data into actionable insights."
  },
  {
    title: "Machine Learning",
    issuer: "Besant Technologies",
    icon: Brain,
    color: "from-rose-400 to-rose-600",
    description: "Explored supervised and unsupervised learning algorithms, model evaluation, and deployment strategies."
  },
  {
    title: "Web Development",
    issuer: "NSP Nexus",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    description: "Gained hands-on experience in building responsive web applications using modern front-end and back-end technologies."
  },
  {
    title: "AI & ML",
    issuer: "NSP Nexus",
    icon: Network,
    color: "from-purple-500 to-pink-500",
    description: "Deepened knowledge in artificial intelligence concepts, neural networks, and developing intelligent models."
  },
  {
    title: "Web Development",
    issuer: "IBM",
    icon: Award,
    color: "from-blue-600 to-indigo-600",
    description: "Earned professional credential in web development fundamentals, focusing on enterprise-grade applications."
  }
];

function FlipCard({ cert, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, type: "spring" }}
      className="h-[280px] relative perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* FRONT FACE */}
      <motion.div
        className="absolute inset-0 backface-hidden bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-lg rounded-[2rem] p-6 hover:border-orange-500/50 transition-colors duration-300 group overflow-hidden flex flex-col items-center justify-center text-center"
        initial={false}
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-200 to-transparent dark:from-slate-800 opacity-50 rounded-bl-full pointer-events-none" />
        
        <div className="relative w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${cert.color} opacity-10 group-hover:opacity-30 transition-opacity duration-300 blur-md`} />
          <Icon className="w-10 h-10 text-slate-700 dark:text-slate-300 group-hover:text-orange-500 transition-colors duration-300 relative z-10" />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{cert.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm uppercase tracking-wider">{cert.issuer}</p>
        
        <div className="absolute bottom-4 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Tap to reveal details</span>
        </div>
      </motion.div>

      {/* BACK FACE */}
      <motion.div
        className="absolute inset-0 backface-hidden bg-slate-900 dark:bg-[#050812] border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.15)] rounded-[2rem] p-6 flex flex-col justify-center items-center text-center"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${cert.color} opacity-5 rounded-[2rem] pointer-events-none`} />
        
        <h4 className="text-orange-400 font-bold mb-4 text-lg border-b border-orange-500/20 pb-2 w-full">What I Learned</h4>
        <p className="text-slate-300 leading-relaxed text-sm relative z-10">{cert.description}</p>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 flex items-center gap-2 text-xs hover:text-orange-400 transition-colors">
          <RotateCcw size={14} /> Tap to flip back
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section relative z-10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Interactive credentials. <span className="font-semibold text-orange-500">Tap on any card</span> to see the details of what I learned.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <FlipCard key={index} cert={cert} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
