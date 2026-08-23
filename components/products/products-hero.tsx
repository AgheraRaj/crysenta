import Image from "next/image";
import { Droplets } from "lucide-react";


const categories = [
  "Water Soluble Fertilizer",
  "Micronutrient",
  "Liquid Fertilizer",
];

export default function ProductsHero() {
  return (
    <section className="bg-[#E9E8E4]">
      {/* Text block */}
      <div className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20 lg:px-14 lg:pt-48 lg:pb-24">
        <Droplets
          className="pointer-events-none absolute top-1/2 left-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 text-[#6d8333] opacity-[0.045] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
          aria-hidden="true"
          strokeWidth={0.6}
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          {/* LEFT — eyebrow label */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Our Products
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              Complete crop nutrition, formulated for every stage of
              growth.
            </p>
          </div>

          {/* RIGHT — heading */}
          <div className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              Crop Nutrition, Perfected.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 sm:text-lg">
              Explore our full range of speciality fertilizers, engineered
              for balanced nutrition, healthier soil, and stronger yields.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed image — left-side hero content + product features card */}
      <div className="relative px-6 sm:px-10 lg:px-14 pb-16 sm:pb-20 lg:pb-24">
        <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden rounded-4xl sm:h-[85vh] lg:h-[92vh]">
          <Image
            src="/images/wheat-field-farmer-thumbsup.png"
            alt="Crysenta fertilizer products displayed in a healthy crop field"
            fill
            priority
            className="object-cover object-[68%_center] sm:object-center"
            sizes="100vw"
          />

          {/* legibility gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/60 to-transparent sm:h-64" />

          {/* Left content: tagline + heading */}
          <div className="relative z-10 flex h-full flex-col px-6 pt-10 md:pt-20 sm:px-10 lg:px-14">
            <p
              className="mb-4 text-2xl text-[#d7e896] sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              grown with care
            </p>

            <div className="relative mt-3 inline-block max-w-xs sm:max-w-md lg:max-w-lg">
              <span
                className="absolute -top-2 -left-5 h-14 w-14 rounded-full bg-[#6d8333] sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                aria-hidden="true"
              />
              <h2 className="relative text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                Nutrition Designed
                <br />
                For Every Stage.
              </h2>
            </div>
          </div>

          {/* Category pills + formula count, bottom of photo */}
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:justify-between lg:inset-x-10 lg:bottom-10">
            <div className="flex max-w-full flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-white/95 px-3.5 py-2 text-[11px] font-medium text-neutral-800 backdrop-blur sm:px-4 sm:text-xs"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="w-fit rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:px-5 sm:py-4">
              <p className="text-lg font-semibold text-neutral-900 sm:text-xl">
                10+ Formulas
              </p>
              <p className="mt-0.5 text-[11px] text-neutral-500 sm:text-xs">
                Tailored to every growth stage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}