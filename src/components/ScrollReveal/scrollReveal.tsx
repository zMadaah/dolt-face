// src/components/ScrollReveal.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ children, direction = "up" }: Props) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1], // Ease sofisticado (Cubic Bezier)
        delay: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
};