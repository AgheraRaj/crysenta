"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sprout, ShieldCheck, Droplets } from "lucide-react";
import StaggerReveal from "@/components/motion/stagger-reveal";
import StaggerItem from "@/components/motion/stagger-item";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export default function ProductsHero() {
  return (
    <section className="bg-[#E9E8E4]">
      {/* Text block */}
      <div className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20 lg:px-14 lg:pt-48 lg:pb-24">
        <Droplets
          className="pointer-events-none absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 text-[#6d8333] opacity-[0.05] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
          aria-hidden="true"
          strokeWidth={0.6}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6"
        >
          {/* LEFT — eyebrow label */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Our Products
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              Complete crop nutrition, formulated for every stage of growth.
            </p>
          </motion.div>

          {/* RIGHT — heading */}
          <motion.div variants={fadeInUp} className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              Crop Nutrition, Perfected.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 sm:text-lg">
              Explore our full range of speciality fertilizers, engineered for
              balanced nutrition, healthier soil, and stronger yields.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust / benefit showcase — three cards */}
      <div className="rounded-t-[2.5rem] bg-black px-6 py-14 sm:rounded-t-[3rem] sm:px-10 sm:py-20 lg:rounded-t-4xl lg:px-14 lg:py-28">
        <div>
          <p className="text-sm font-semibold text-white">Why It Works</p>
          <h2 className="mt-2 text-3xl leading-tight font-black tracking-tight text-neutral-400 sm:text-3xl lg:text-4xl">
            BUILT ON RESEARCH
            <br />
            TRUSTED IN <span className="text-[#6d8333]">EVERY FIELD</span>
          </h2>
        </div>

        <StaggerReveal className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* CARD 1 — stat card */}
          <StaggerItem className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[2rem] bg-[#e2e8d3] p-6 sm:min-h-[260px] sm:p-7 lg:min-h-[320px] lg:p-8">
            <Sprout
              className="pointer-events-none absolute right-3 bottom-3 h-16 w-16 text-neutral-900/[0.06] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              aria-hidden="true"
              strokeWidth={1}
            />

            <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 sm:h-11 sm:w-11">
              <Sprout className="h-4.5 w-4.5 text-neutral-900 sm:h-5 sm:w-5" />
            </div>

            <div className="relative mt-auto pr-14 sm:pr-16 lg:pr-0">
              <p className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                3
              </p>
              <span className="mt-2 block h-0.5 w-10 bg-[#6d8333]" />
              <h3 className="mt-4 text-lg leading-tight font-bold text-neutral-900 sm:text-xl">
                Specialized Nutrient Formulas
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Advanced formulations for calcium, NPK, and micronutrient nutrition.
              </p>
            </div>
          </StaggerItem>

          {/* CARD 2 — photo-forward */}
          <StaggerItem className="relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[2rem] p-6 sm:min-h-[300px] sm:p-7 lg:min-h-[320px] lg:p-8">
            <Image
              src="/images/wheat-field-farmer-thumbsup.png"
              alt="Farmer approving healthy crops grown with Crysenta fertilizer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="relative">
              <h3 className="text-xl leading-tight font-bold text-white sm:text-2xl">
                Grown With Purpose
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                Every formula is field-tested to help farmers get more from
                every acre, season after season.
              </p>
            </div>
          </StaggerItem>

          {/* CARD 3 — stat card */}
          <StaggerItem className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[2rem] bg-[#e2e8d3] p-6 sm:min-h-[260px] sm:p-7 lg:min-h-[320px] lg:p-8">
            <ShieldCheck
              className="pointer-events-none absolute right-3 bottom-3 h-16 w-16 text-neutral-900/[0.06] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              aria-hidden="true"
              strokeWidth={1}
            />

            <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 sm:h-11 sm:w-11">
              <ShieldCheck className="h-4.5 w-4.5 text-neutral-900 sm:h-5 sm:w-5" />
            </div>

            <div className="relative mt-auto pr-14 sm:pr-16 lg:pr-0">
              <p className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                99.9%
              </p>
              <span className="mt-2 block h-0.5 w-10 bg-[#6d8333]" />
              <h3 className="mt-4 text-lg leading-tight font-bold text-neutral-900 sm:text-xl">
                Fully Chelated Micronutrients
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                EDTA-chelated formulations ensure nutrients stay readily
                available and absorbable to the plant.
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}