import { Sprout, Leaf } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* VISION — dark panel */}
        <div className="flex flex-col justify-center bg-black px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-14 lg:py-28">
          <div className="max-w-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6d8333]">
              <Sprout className="h-5 w-5 text-[#6d8333]" />
            </div>

            <h2 className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Our Vision
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              Our vision is to manufacture and supply speciality fertilizer
              products with the aim of providing complete nutrition to crops
              and enhancing crop productivity.
            </p>
          </div>
        </div>

        {/* MISSION — light panel */}
        <div className="flex flex-col justify-center bg-[#E9E8E4] px-6 py-16 text-black sm:px-10 sm:py-20 lg:px-14 lg:py-28 border-y border-[#6d8333]">
          <div className="max-w-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6d8333]">
              <Leaf className="h-5 w-5 text-[#6d8333]" />
            </div>

            <h2 className="mt-8 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Our Mission
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              We serve the agriculture market through continuous innovations
              with the latest technologies to ensure balanced nutrition for
              crops, resulting in nutritious food production and better
              human health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}