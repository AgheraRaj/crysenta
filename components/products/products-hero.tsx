import Image from "next/image";
import { Leaf, Sprout, FlaskConical, Boxes } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="bg-[#E9E8E4]">
      {/* Text block */}
      <div className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20 lg:px-14 lg:pt-48 lg:pb-24">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          {/* LEFT — eyebrow label */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Our Products
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              Complete crop nutrition, formulated for every stage of growth.
            </p>
          </div>

          {/* RIGHT — heading */}
          <div className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              Crop Nutrition, Perfected.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 sm:text-lg">
              Explore our full range of speciality fertilizers, engineered for
              balanced nutrition, healthier soil, and stronger yields.
            </p>
          </div>
        </div>
      </div>

      {/* Trust / benefit showcase — three cards */}
      <div className="rounded-t-4xl bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
        <div>
          <p className="text-sm font-semibold text-white">Why It Works</p>
          <h2 className="mt-2 text-2xl leading-tight font-black tracking-tight text-neutral-500 sm:text-3xl lg:text-4xl">
            BUILT ON RESEARCH
            <br />
            TRUSTED IN <span className="text-[#6d8333]">EVERY FIELD</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.4fr_1fr]">
          {/* CARD 1 — redesigned to match reference */}
          <div className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] bg-[#e2e8d3] p-7 sm:min-h-[320px] sm:p-8">
            <Leaf
              className="pointer-events-none absolute right-4 bottom-4 h-24 w-24 text-neutral-900/[0.06]"
              aria-hidden="true"
              strokeWidth={1}
            />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/70">
              <Sprout className="h-5 w-5 text-neutral-900" />
            </div>

            <div className="relative mt-auto">
              <p className="text-6xl font-black tracking-tight text-neutral-900 sm:text-7xl">
                3
              </p>
              <span className="mt-2 block h-0.5 w-10 bg-[#6d8333]" />
              <h3 className="mt-4 text-xl leading-tight font-bold text-neutral-900">
                Crop Nutrition Categories
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Water soluble fertilizers, liquid fertilizers, and micronutrients designed for diverse crop nutrition needs.
              </p>
            </div>
          </div>

          {/* CARD 2 — photo-forward, unchanged */}
          <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[2rem] p-7 sm:min-h-[320px] sm:p-8">
            <Image
              src="/images/wheat-field-farmer-thumbsup.png"
              alt="Farmer approving healthy crops grown with Crysenta fertilizer"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="relative">
              <h3 className="text-2xl leading-tight font-bold text-white">
                Nutrition Designed for Every Stage
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                From seed to harvest, every formula is engineered to meet
                your crop&apos;s exact nutrient demands.
              </p>
            </div>
          </div>

          {/* CARD 3 — redesigned to match reference */}
          <div className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] bg-[#e2e8d3] p-7 sm:min-h-[320px] sm:p-8">
            <Boxes
              className="pointer-events-none absolute right-4 bottom-4 h-24 w-24 text-neutral-900/[0.06]"
              aria-hidden="true"
              strokeWidth={1}
            />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/70">
              <FlaskConical className="h-5 w-5 text-neutral-900" />
            </div>

            <div className="relative mt-auto">
              <p className="text-6xl font-black tracking-tight text-neutral-900 sm:text-7xl">
                11+
              </p>
              <span className="mt-2 block h-0.5 w-10 bg-[#6d8333]" />
              <h3 className="mt-4 text-xl leading-tight font-bold text-neutral-900">
                Crop Nutrition Products
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                A growing portfolio of NPK fertilizers, specialty nutrients, micronutrients, and liquid formulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}