"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const JOURNEY_STEPS = [
  {
    year: "2019 - 2020",
    title: "Secondary School Certificate (X)",
    institution: "ST. Sebastian Mat. Hr. Sec School, Chennai",
    description: "Built a strong foundation in science and mathematics, completing secondary education with 82%.",
    icon: <Award size={24} />,
    color: "from-orange-400 to-orange-600",
  },
  {
    year: "2021 - 2022",
    title: "Higher Secondary Certificate (XII)",
    institution: "ST. Sebastian Mat. Hr. Sec School, Chennai",
    description: "Focused on computer science and core sciences, completing higher secondary education with 80%.",
    icon: <Award size={24} />,
    color: "from-red-400 to-red-600",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    institution: "BS Abdur Rahman Crescent Institute Of Science and Technology",
    description: "Deep-dived into AI, Machine Learning, and Software Engineering, building multiple real-world projects and participating in hackathons.",
    icon: <GraduationCap size={24} />,
    color: "from-amber-400 to-amber-600",
  },
  {
    year: "Feb 2026 - Present",
    title: "AI/ML Engineer",
    institution: "ENARXI INNOVATION PVT LTD, Chennai",
    description: "Architecting and developing enterprise-grade AI solutions, computer vision pipelines, and multi-agent generative AI systems for real-world impact.",
    icon: <Briefcase size={24} />,
    color: "from-orange-500 to-red-500",
  }
];

const JourneyCard = ({ step }) => (
  <div className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl p-6 lg:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group flex-shrink-0 h-full">
    <div className="flex flex-col gap-2 mb-4 relative z-10">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {step.icon}
      </div>
      <span className="inline-block px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold w-fit border border-orange-100 dark:border-orange-500/20 shadow-sm">
        {step.year}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mt-2">
        {step.title}
      </h3>
      <h4 className="text-[14px] md:text-[15px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
        {step.institution}
      </h4>
    </div>
    
    <p className="text-slate-600 dark:text-slate-300 text-[15px] md:text-base leading-relaxed relative z-10">
      {step.description}
    </p>

    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 blur-[40px] transition-opacity duration-500 rounded-full pointer-events-none z-0`} />
  </div>
);

export default function Journey() {
  // Shuffle/Offset the columns so they don't look identical side-by-side
  const col1 = [JOURNEY_STEPS[0], JOURNEY_STEPS[1], JOURNEY_STEPS[2], JOURNEY_STEPS[3]];
  const col2 = [JOURNEY_STEPS[2], JOURNEY_STEPS[3], JOURNEY_STEPS[0], JOURNEY_STEPS[1]];
  const col3 = [JOURNEY_STEPS[1], JOURNEY_STEPS[2], JOURNEY_STEPS[3], JOURNEY_STEPS[0]];

  return (
    <section id="journey" className="section relative z-10 bg-slate-50 dark:bg-transparent border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Roadmap</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            The milestones and experiences that shaped my career in Artificial Intelligence.
          </p>
        </motion.div>

        {/* Ticker Scroll Container */}
        <div className="relative h-[650px] md:h-[750px] overflow-hidden rounded-[2rem] bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 shadow-inner p-4 md:p-8">
          {/* Gradient Overlays for smooth fade out at top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-20 pointer-events-none rounded-t-[2rem]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-20 pointer-events-none rounded-b-[2rem]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full relative z-10">
            
            {/* Column 1 */}
            <div className="flex flex-col overflow-hidden relative h-full">
              <div className="animate-ticker-up hover:[animation-play-state:paused] flex-shrink-0">
                {[...col1, ...col1].map((step, idx) => (
                  <div key={`col1-${idx}`} className="pb-6">
                    <JourneyCard step={step} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="hidden md:flex flex-col overflow-hidden relative h-full">
              <div className="animate-ticker-down hover:[animation-play-state:paused] flex-shrink-0">
                {[...col2, ...col2].map((step, idx) => (
                  <div key={`col2-${idx}`} className="pb-6">
                    <JourneyCard step={step} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="hidden lg:flex flex-col overflow-hidden relative h-full">
              <div className="animate-ticker-up hover:[animation-play-state:paused] flex-shrink-0" style={{ animationDelay: '-20s' }}>
                {[...col3, ...col3].map((step, idx) => (
                  <div key={`col3-${idx}`} className="pb-6">
                    <JourneyCard step={step} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
