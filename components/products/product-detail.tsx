"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, FileDown } from "lucide-react";
import type { Product } from "@/lib/products";
import { STANDARD_STORAGE } from "@/lib/products";
import ProductCard, { categoryPill } from "@/components/products/product-card";
import Reveal from "@/components/motion/reveal";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion-variants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activePack, setActivePack] = useState(product.packs[0]);

  const hasUsageInfo = Boolean(
    product.directions || product.compatibility || product.doseNotes || product.doseTable
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-[#E9E8E4]">
        <div className="mx-auto max-w-[1600px] px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20 lg:px-14 lg:pt-40 lg:pb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-[#5c7029]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all products
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* IMAGE */}
            <motion.div
              variants={fadeIn}
              className="relative h-80 rounded-3xl bg-white sm:h-[420px] lg:h-[520px]"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-10 sm:p-14"
              />
            </motion.div>

            {/* INFO */}
            <motion.div variants={fadeInUp} className="flex flex-col justify-center">
              <span
                className={`w-fit rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${categoryPill[product.category] ?? "border-neutral-200 text-neutral-600"}`}
              >
                {product.category}
              </span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <p className="mt-1 text-sm font-medium text-neutral-500">
                {product.fertilizerType}
              </p>

              <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600">
                {product.longDesc ?? product.desc}
              </p>

              {/* Pack size selector */}
              {product.packs.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-semibold text-neutral-900">
                    Pack Size
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.packs.map((pack) => {
                      const isActive = pack === activePack;
                      return (
                        <button
                          key={pack}
                          onClick={() => setActivePack(pack)}
                          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${isActive
                            ? "border-[#6d8333] bg-[#6d8333] text-white"
                            : "border-stone-300 bg-white text-neutral-700 hover:border-[#6d8333] hover:text-[#5c7029]"
                            }`}
                        >
                          {pack}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full bg-[#6d8333] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5c7029]"
                >
                  Enquire Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {product.brochure && (
                  <a
                    href={product.brochure}
                    download
                    className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-[#6d8333] hover:text-[#5c7029]"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span> Brochure
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPOSITION + BENEFITS */}
      <section className="bg-[#dedbd3]">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* LEFT — benefits + crops */}
            <Reveal className="lg:col-span-2">
              {product.benefits && product.benefits.length > 0 && (
                <>
                  <h2 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
                    Key Benefits
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6d8333]">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-sm leading-6 text-neutral-700 sm:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.majorCrops && product.majorCrops.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Recommended For
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.majorCrops.map((crop) => (
                      <span
                        key={crop}
                        className="rounded-full bg-[#E9E8E4] px-3.5 py-1.5 text-xs font-medium text-neutral-700"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.doseNotes && product.doseNotes.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Dosage
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {product.doseNotes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-sm leading-6 text-neutral-700 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6d8333]" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.doseTable && product.doseTable.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Crop, Time of Application &amp; Dosage
                  </h3>
                  <div className="mt-4 overflow-x-auto rounded-2xl bg-[#E9E8E4]">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-neutral-300/60 text-xs font-semibold text-neutral-500">
                          <th className="px-4 py-3">Crop</th>
                          <th className="px-4 py-3">Application Stage</th>
                          <th className="px-4 py-3">Dose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-300/40">
                        {product.doseTable.map((row) => (
                          <tr key={row.crop}>
                            <td className="px-4 py-3 font-medium text-neutral-900">
                              {row.crop}
                            </td>
                            <td className="px-4 py-3 text-neutral-600">
                              {row.stage}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-neutral-600">
                              {row.dose}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </Reveal>

            {/* RIGHT — composition + usage sidebar */}
            <Reveal className="space-y-6">
              <div className="rounded-3xl bg-[#E9E8E4] p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Nutrient Composition
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  As per FCO specification
                </p>
                <dl className="mt-5 divide-y divide-neutral-300/60">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <dt className="text-sm text-neutral-500">{spec.label}</dt>
                      <dd className="text-sm font-medium text-neutral-900 sm:text-right sm:whitespace-nowrap">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-center justify-between border-t border-neutral-300/60 pt-4 text-sm">
                  <span className="text-neutral-500">Packing</span>
                  <span className="font-medium text-neutral-900">
                    {product.packing}
                  </span>
                </div>
              </div>

              {hasUsageInfo && (
                <div className="rounded-3xl bg-[#E9E8E4] p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Directions &amp; Storage
                  </h3>
                  {product.directions && (
                    <p className="mt-4 text-sm leading-6 text-neutral-700">
                      <span className="font-semibold text-neutral-900">
                        Directions for use:{" "}
                      </span>
                      {product.directions}
                    </p>
                  )}
                  {product.compatibility && (
                    <p className="mt-4 text-sm leading-6 text-neutral-700">
                      <span className="font-semibold text-neutral-900">
                        Compatibility:{" "}
                      </span>
                      {product.compatibility}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-6 text-neutral-700">
                    <span className="font-semibold text-neutral-900">
                      Storage:{" "}
                    </span>
                    {STANDARD_STORAGE}
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#E9E8E4]">
          <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <Reveal>
              <Carousel opts={{ align: "start", loop: false }}>
                <div className="flex items-end justify-between gap-4">
                  <div className="relative w-fit">
                    <h2 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
                      You Might Also Like
                    </h2>
                    <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-[#6d8333]" />
                  </div>

                  <div className="hidden items-center gap-2 sm:flex">
                    <CarouselPrevious className="static size-9 translate-y-0 border-stone-300 bg-white text-neutral-700 hover:border-[#6d8333] hover:text-[#6d8333]" />
                    <CarouselNext className="static size-9 translate-y-0 border-stone-300 bg-white text-neutral-700 hover:border-[#6d8333] hover:text-[#6d8333]" />
                  </div>
                </div>

                <CarouselContent className="mt-8 sm:mt-10">
                  {related.map((item) => (
                    <CarouselItem
                      key={item.slug}
                      className="basis-[90%] pb-1 sm:basis-1/2 lg:basis-1/4"
                    >
                      <ProductCard product={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}