"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // We generate a trail of 5 dots. Each dot has a progressively higher spring damping/mass
  // to make them lag behind slightly more, creating a comet/snake trail effect.
  const trailCount = 5;

  return (
    <>
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] mix-blend-difference">
        {Array.from({ length: trailCount }).map((_, i) => {
          // The first dot is the core, the rest are the tail
          const isCore = i === 0;
          return (
            <motion.div
              key={i}
              className={`absolute top-0 left-0 rounded-full ${
                isCore ? "bg-orange-500" : "bg-orange-400"
              }`}
              animate={{
                x: mousePosition.x - (isCore ? 6 : 4 - i),
                y: mousePosition.y - (isCore ? 6 : 4 - i),
                width: isHovering && isCore ? 40 : (isCore ? 12 : 8 - i * 1.5),
                height: isHovering && isCore ? 40 : (isCore ? 12 : 8 - i * 1.5),
                opacity: isHovering && !isCore ? 0 : 1 - i * 0.15,
                borderRadius: isHovering && isCore ? "8px" : "50%",
                x: isHovering && isCore ? mousePosition.x - 20 : mousePosition.x - (isCore ? 6 : (8 - i * 1.5)/2),
                y: isHovering && isCore ? mousePosition.y - 20 : mousePosition.y - (isCore ? 6 : (8 - i * 1.5)/2),
              }}
              transition={{
                type: "spring",
                stiffness: isCore ? 1000 : 800 - i * 100,
                damping: isCore ? 40 : 50 + i * 10,
                mass: isCore ? 0.1 : 0.2 + i * 0.1,
              }}
              style={{
                border: isHovering && isCore ? "2px solid #F97316" : "none",
                backgroundColor: isHovering && isCore ? "transparent" : (isCore ? "#F97316" : "#EA580C"),
              }}
            />
          );
        })}
      </div>
    </>
  );
}
