import { Leaf, Droplets, FlaskConical, Sprout } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Reveal from "@/components/motion/reveal";
import StaggerReveal from "@/components/motion/stagger-reveal";
import StaggerItem from "@/components/motion/stagger-item";

const offerings = [
  {
    code: "MN · 01",
    icon: Leaf,
    title: "Micro Nutrients",
    description:
      "Essential trace elements that correct deficiencies and support healthy plant development at every growth stage.",
  },
  {
    code: "LF · 02",
    icon: Droplets,
    title: "Liquid Fertilizers",
    description:
      "Fast-absorbing nutrient blends formulated for quick uptake, ideal for foliar and fertigation application.",
  },
  {
    code: "WSF · 03",
    icon: FlaskConical,
    title: "Water Soluble Fertilizer",
    description:
      "Fully soluble formulations that deliver precise nutrition through irrigation systems with zero residue.",
  },
  {
    code: "BS · 04",
    icon: Sprout,
    title: "Bio Stimulants",
    description:
      "Natural, plant-based compounds that strengthen root systems and improve resilience to environmental stress.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        {/* Header */}
        <Reveal className="flex flex-col justify-between gap-8">
          <div>
            <div className="relative w-fit">
              <span className="text-sm font-medium tracking-[0.2em] text-[#6d8333] uppercase">
                What We Offer
              </span>
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-[#6d8333]" />
            </div>

            <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              A complete nutrition lineup for every stage of growth.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            From soil to harvest, our product range is engineered to work
            together, closing nutrient gaps and building stronger yields
            season after season.
          </p>
        </Reveal>

        {/* Grid */}
        <StaggerReveal className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Card className="group h-full bg-[#E9E8E4] p-8 transition-colors hover:border-[#6d8333]">
                  <CardHeader className="flex justify-between items-center p-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#6d8333] text-[#6d8333] transition-colors group-hover:bg-[#6d8333] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-neutral-400">
                      {item.code}
                    </span>
                  </CardHeader>

                  <CardContent className="mt-8 p-0">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-3">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}