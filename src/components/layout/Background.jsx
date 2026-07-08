"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background({ className = "fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#03050d]" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={className}>
      
      {/* 
        PREMIUM FLUID GRADIENTS (LAVA LAMP EFFECT)
        These heavy blurs create a gorgeous, smooth, high-end colorful background
        that drifts slowly, giving a very premium "Apple/Stripe" aesthetic.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-normal">
        
        {/* Core Orange Glow */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-orange-500/20 dark:bg-orange-600/10 blur-[120px]"
        />

        {/* Deep Red/Crimson Accent */}
        <motion.div
          animate={{
            x: [0, -150, 80, 0],
            y: [0, 120, -120, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-rose-500/20 dark:bg-rose-600/10 blur-[130px]"
        />

        {/* Purple/Indigo Depth */}
        <motion.div
          animate={{
            x: [0, 120, -100, 0],
            y: [0, 50, -80, 0],
            scale: [1, 1.4, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-violet-500/15 dark:bg-violet-600/10 blur-[100px]"
        />
        
        {/* Subtle Amber Core */}
        <motion.div
          animate={{
            x: [0, -80, 100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.85, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-amber-400/15 dark:bg-amber-500/10 blur-[90px]"
        />
      </div>

      {/* Floating Particles / Dust */}
      {mounted && (
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-slate-400 dark:bg-slate-300"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * -200 - 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      )}

      {/* Interactive Interactive Spotlight */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full mix-blend-overlay pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Noise Texture Overlay to prevent banding and add premium grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}