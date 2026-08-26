"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp, type Variants } from "@/lib/motion-variants";

interface StaggerItemProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

// Use only inside <StaggerReveal> — it inherits hidden/visible state
// from the parent, so it doesn't need its own scroll trigger.
export default function StaggerItem({ children, variants = fadeInUp, className }: StaggerItemProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}