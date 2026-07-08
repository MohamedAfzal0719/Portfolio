"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export default function TiltCard({ children, className = "", ...props }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values to track absolute position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform coordinates into degrees of rotation (max 12deg tilt)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  // Transform coordinates into spotlight coordinates for the shine overlay
  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Width and height of the card
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card top-left
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to range -0.5 to 0.5 (relative to center)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* 3D Content Wrapper */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>

      {/* Radial Spot Light / Shine Overlay */}
      <motion.div
        style={{
          left: shineX,
          top: shineY,
          opacity: isHovered ? 0.15 : 0,
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)",
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none rounded-full blur-2xl z-20 mix-blend-overlay transition-opacity duration-300"
      />
    </motion.div>
  );
}
