// lib/motion-variants.ts
import { type Variants } from "motion/react";

export type { Variants };

// Subtle fade + slight upward slide — used for most section/content reveals
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Plain fade — use for images, backgrounds, or anything where a slide feels off
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Wrap a group of children with this on the parent, and fadeInUp on each child,
// to get a staggered reveal (e.g. feature list, card grid)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};