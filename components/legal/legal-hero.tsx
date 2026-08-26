"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export default function LegalHero({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <section className="bg-[#E9E8E4]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-[900px] px-6 pt-32 pb-14 sm:px-10 sm:pt-40 sm:pb-16 lg:pt-48"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-sm text-neutral-500">
          Last updated: {updated}
        </motion.p>
      </motion.div>
    </section>
  );
}