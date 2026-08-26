"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { staggerContainer } from "@/lib/motion-variants";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

// Wraps a group of <StaggerItem> children — triggers them in sequence
// when scrolled into view. Use for card grids, feature lists, etc.
export default function StaggerReveal({ children, className }: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}