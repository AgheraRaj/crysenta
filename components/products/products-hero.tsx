import { Droplets } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#E9E8E4]">
      <Droplets
        className="pointer-events-none absolute top-1/2 left-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 text-[#6d8333] opacity-[0.045] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
        aria-hidden="true"
        strokeWidth={0.6}
      />

      <div className="relative px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20 lg:px-14 lg:pt-48 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
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
    </section>
  );
}