import { Leaf, Sprout, Droplets, Star, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#E9E8E4]">
      <div className="px-6 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pt-45">
        <div className="grid grid-cols-1 gap-12 lg:h-screen lg:grid-cols-12 lg:gap-0">
          {/* LEFT */}
          <div className="relative z-20 order-1 flex flex-col justify-between lg:order-none lg:col-span-7">
            <div>
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
                Smarter Plant Nutrition, Better Harvests.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-neutral-700 sm:mt-8 sm:text-lg sm:leading-8 lg:mt-10">
                Crysenta delivers innovative plant nutrition solutions that
                improve soil health, strengthen crop growth, and maximize yields
                for sustainable farming.
              </p>

              <Button
                size="lg"
                className="mt-8 rounded-full p-5 sm:p-6 lg:mt-12"
              >
                View Products
                <MoveRight />
              </Button>
            </div>
          </div>

          {/* CENTER IMAGE — as background */}
          {/* <div className="relative order-2 h-56 sm:h-72 md:h-96 lg:order-none lg:col-span-2 lg:h-auto">
            <div
              className="mx-auto h-full w-full max-w-xs bg-contain bg-center bg-no-repeat sm:max-w-sm md:max-w-md lg:absolute lg:left-[-690px] lg:top-[-20px] lg:mx-0 lg:h-[950px] lg:w-[1200px] lg:max-w-none lg:bg-left-top"
              style={{ backgroundImage: "url('/images/hero-seedling.png')" }}
            />
          </div> */}

          <div className="relative order-2 h-56 sm:h-72 md:h-96 lg:order-none lg:col-span-2 lg:h-full">
            <div
              className="mx-auto h-full w-full max-w-xs bg-contain bg-center bg-no-repeat sm:max-w-sm md:max-w-md lg:absolute lg:left-[-690px] lg:top-1/2 lg:mx-0 lg:h-[950px] lg:w-[1200px] lg:max-w-none lg:-translate-y-1/2 lg:bg-left-top"
              style={{ backgroundImage: "url('/images/hero-seedling.png')" }}
            />
          </div>

          {/* RIGHT */}
          <div className="z-20 order-3 flex flex-col justify-between gap-10 lg:order-none lg:col-span-3 lg:gap-0 lg:py-24">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <Feature icon={<Leaf />} title="Increases Yield Potential" />
              <Feature icon={<Sprout />} title="Enhances Root Development" />
              <Feature icon={<Droplets />} title="Improves Water Retention" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-stone-300 pb-5 sm:pb-6">
      <h3 className="text-base font-medium sm:text-lg">{title}</h3>
      <div className="text-[#6d8333]">{icon}</div>
    </div>
  );
}
