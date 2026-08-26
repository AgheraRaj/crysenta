import { CheckCircle2, Droplets, FlaskConical, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/motion/reveal";
import StaggerReveal from "@/components/motion/stagger-reveal";
import StaggerItem from "@/components/motion/stagger-item";

const points = [
  {
    icon: CheckCircle2,
    title: "Quality-Controlled Products",
    description: "Every batch is inspected before it leaves our facility.",
  },
  {
    icon: Droplets,
    title: "Water-Soluble Solutions",
    description: "Formulated for precise, fast-absorbing application.",
  },
  {
    icon: FlaskConical,
    title: "Macro & Micronutrients",
    description: "A complete nutrient profile in every formula.",
  },
  {
    icon: Gauge,
    title: "Consistent Standards",
    description: "The same reliable results, region after region.",
  },
];

export default function QualityCommitment() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT — eyebrow + stat */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-white">
              Quality &amp; Commitment
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/50">
              Quality you can count on, from formula to field.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
                100%
              </p>
              <p className="mt-2 text-sm text-white/50">
                Batches quality-tested before dispatch
              </p>
            </div>
          </div>

          {/* RIGHT — checklist grid */}
          <div className="lg:col-span-9">
            <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <StaggerItem key={point.title}>
                    <Card className="group gap-0 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d8333]/60 hover:bg-white/[0.06]">
                      <CardContent className="p-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6d8333] text-white transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-white">
                          {point.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/60">
                          {point.description}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}