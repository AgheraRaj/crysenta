import { Award, Tractor, Lightbulb, Globe2, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    icon: Award,
    title: "Quality",
    meaning: "Consistent and dependable fertilizer solutions, batch after batch.",
  },
  {
    icon: Tractor,
    title: "Farmers First",
    meaning: "Solutions designed around real farming needs, not lab assumptions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    meaning: "Continuously improving agricultural nutrition through research.",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    meaning: "Supporting responsible, efficient farming for the long term.",
  },
  {
    icon: Handshake,
    title: "Trust",
    meaning: "Building long-term relationships with the farmers we serve.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT — eyebrow, matches Hero/Who We Are rhythm */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              What Drives Us
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              Five principles behind every product we make.
            </p>
          </div>

          {/* RIGHT — principle cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`group gap-0 rounded-xl bg-[#e9e8e4] p-7 transition-all duration-300 ${
                      i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6d8333] text-[#6d8333] transition-colors duration-300 group-hover:bg-[#6d8333] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium text-neutral-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {item.meaning}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}