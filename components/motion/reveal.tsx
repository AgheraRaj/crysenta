"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp, type Variants } from "@/lib/motion-variants";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

// Animates children in once, when they scroll into view.
// `once: true` avoids re-triggering on every scroll up/down — feels more professional, less distracting.
export default function Reveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}