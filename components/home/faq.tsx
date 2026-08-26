"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/motion/reveal";

const faqs = [
  {
    question: "What is water-soluble fertilizer made from?",
    answer:
      "Our water-soluble fertilizers are formulated from fully refined mineral salts that dissolve completely in water, delivering precise nutrition directly to the root zone with zero residue.",
  },
  {
    question: "How is it different from conventional fertilizers?",
    answer:
      "Unlike granular fertilizers that release nutrients slowly and unevenly, our formulas dissolve instantly and are absorbed faster, giving you more control over exactly when and how much your crop receives.",
  },
  {
    question: "What are the benefits of using Crysenta products?",
    answer:
      "Improved nutrient uptake, stronger root development, higher yields, and better resistance to environmental stress, all while supporting long-term soil health.",
  },
  {
    question: "Is it safe for all types of crops?",
    answer:
      "Yes, our formulations are developed to suit a wide range of crops and growth stages. Our agronomists can also recommend a tailored nutrient plan for your specific soil and crop.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#E9E8E4]">
      <div className="mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10 sm:py-28 lg:py-32">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Answers to the questions we hear most from farmers, distributors, and
            agronomists about our crop nutrition products and how to get the best
            results from them.
          </p>
        </Reveal>

        {/* Accordion */}
        <div className="mt-14 flex flex-col gap-4 text-left sm:mt-16">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${isOpen
                    ? "border-[#6d8333] bg-[#E9E8E4]"
                    : "border-stone-300 bg-[#E9E8E4]"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-neutral-900 sm:text-xl">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-neutral-900">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-6 text-neutral-600 sm:px-8 sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}