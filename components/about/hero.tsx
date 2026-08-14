import Image from "next/image";
import { Leaf } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-[#E9E8E4]">
      {/* Text block */}
      <div className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20 lg:px-14 lg:pt-48 lg:pb-24">
        {/* soft background mark */}
        <Leaf
          className="pointer-events-none absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 text-[#6d8333] opacity-[0.05] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]"
          aria-hidden="true"
          strokeWidth={0.6}
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          {/* LEFT — eyebrow label */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Who we are?
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              <span className="font-medium text-neutral-700">
                Crysenta International
              </span>{" "}
              formulates specialty crop nutrition and publishes agronomic
              research across the regions we serve.
            </p>
          </div>

          {/* RIGHT — heading */}
          <div className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              We nurture a sustainable agricultural future
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 sm:text-lg">
              We formulate crop nutrition across every stage of growth, from
              seed to harvest.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed image */}
      <div className="relative h-[70vh] min-h-[420px] w-full sm:h-[75vh] lg:h-[85vh]">
        <Image
          src="/images/aerial-farm-tractor-field.png"
          alt="Aerial view of farmland with agricultural machinery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
