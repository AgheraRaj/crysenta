import Image from "next/image";
import { Star, Check, MoveRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reasons = [
  "ISO-certified manufacturing with strict quality checks",
  "Custom nutrient blends for soil-specific conditions",
  "Dedicated agronomist support, from sowing to harvest",
];

export default function WhyChooseUs() {
  return (
    <section className="relative min-h-[600px] overflow-hidden sm:min-h-[650px] lg:min-h-[750px]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/granules-plants.png"
        alt="granules plants"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* dark overlay for text contrast on smaller screens where card sits over the image */}
      <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />

      {/* CARD */}
      <div className="relative mx-auto flex min-h-[600px] max-w-[1600px] items-end px-4 py-10 sm:min-h-[650px] sm:items-center sm:px-8 sm:py-16 lg:min-h-[750px] lg:justify-end lg:px-14 lg:py-20">
        <Card className="w-full gap-0 rounded-2xl border-0 bg-[#6d8333] p-6 sm:max-w-lg sm:p-10 md:p-12 lg:flex lg:w-[450px] lg:flex-col lg:justify-between lg:p-10 xl:w-[520px] xl:p-12">
          <CardHeader className="block p-0">
            <h2 className="text-2xl font-medium leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              Quality You Can Grow On
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400 sm:size-[18px]"
                  />
                ))}
              </div>
              <Badge>500+ Farms Nourished</Badge>
            </div>
          </CardHeader>

          <CardContent className="mt-4 p-0 sm:mt-6">
            <p className="text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Every batch is tested for purity and nutrient balance before it
              leaves our facility, so what&apos;s on the label is exactly what
              reaches your soil.
            </p>

            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-sm leading-6 text-white sm:text-[15px] sm:leading-6 md:text-base">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>

          <Button
            size="lg"
            className="h-auto w-fit rounded-full bg-black px-7 py-4 text-white hover:bg-black/90 mt-8 sm:mt-10"
          >
            Explore Our Products
            <MoveRight />
          </Button>
        </Card>
      </div>
    </section>
  );
}
