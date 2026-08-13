import Image from "next/image";
import { Recycle, CloudSun, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Recycle,
    color: "bg-teal-500",
    title: "100% Organic Base",
    description: "Made from composted natural inputs, safe for soil life.",
  },
  {
    icon: CloudSun,
    color: "bg-amber-500",
    title: "All-Weather Formula",
    description: "Stable performance across humid, dry, and monsoon conditions.",
  },
  {
    icon: ShieldCheck,
    color: "bg-black",
    title: "Certified Quality",
    description: "Every batch tested against national fertilizer standards.",
  },
];

export default function AboutFertilizer() {
  return (
    <section className="relative bg-[#E9E8E4]">

      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — text */}
          <div className="order-1 lg:order-none lg:col-span-4">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              About Fertilizer
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Crop nutrition shouldn&apos;t be complicated. Crysenta&apos;s
              flagship blend delivers a full nutrient spectrum in a single
              application, built for soil health as much as short-term
              yield.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Formulated with our research team over three growing seasons,
              it&apos;s the product our own agronomists recommend first.
            </p>

            <Button
              size="lg"
              className="mt-8 h-auto w-fit rounded-full px-7 py-4"
            >
              View Products
            </Button>
          </div>

          {/* CENTER — product image */}
          <div className="order-2 flex justify-center lg:order-none lg:col-span-4">
            <div className="relative h-[340px] w-[220px] sm:h-[420px] sm:w-[270px] lg:h-[480px] lg:w-[300px]">
              <Image
                src="/images/19-19-19.png"
                alt="Crysenta fertilizer bag"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT — feature list */}
          <div className="order-3 flex flex-col gap-8 lg:order-none lg:col-span-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${feature.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}