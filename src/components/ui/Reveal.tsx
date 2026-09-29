"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance in pixels the content travels as it reveals. */
  y?: number;
}

/**
 * Wraps content in a single, restrained scroll-triggered fade/rise.
 * Used deliberately, not on every element — see the animation system
 * notes in the brief about avoiding scattered per-card effects.
 */
export function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
