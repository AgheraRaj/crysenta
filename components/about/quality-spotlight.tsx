import Image from "next/image";
import { Wheat, Leaf, Sprout, Award, Globe2, FlaskConical } from "lucide-react";
import Reveal from "@/components/motion/reveal";
import StaggerReveal from "@/components/motion/stagger-reveal";
import StaggerItem from "@/components/motion/stagger-item";
import { fadeIn } from "@/lib/motion-variants";

const badgeIcons = [Wheat, Leaf, Sprout];

const stats = [
  { icon: Award, value: "15+", label: "Years of Research" },
  { icon: Globe2, value: "12", label: "Countries Served" },
  { icon: FlaskConical, value: "100%", label: "Batch Tested" },
];

export default function QualitySpotlight() {
  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-6 pb-20 sm:px-10 sm:pb-28 lg:px-14 lg:pb-32">
        <Reveal
          variants={fadeIn}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] sm:min-h-[600px] lg:min-h-[680px]"
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/farmer-in-field.png"
            alt="Crysenta agronomist inspecting a healthy crop field"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60" />

          {/* brand mark */}
          <span className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-neutral-900 backdrop-blur-sm sm:top-8 sm:right-8">
            Crysenta
          </span>

          {/* top text */}
          <div className="absolute top-6 left-6 right-6 sm:top-10 sm:left-10 sm:right-24">
            <p className="max-w-[180px] text-xs leading-5 text-white/80 sm:text-sm">
              Consistency, certification, and care in every delivery.
            </p>

            <h2 className="mt-4 max-w-md text-xl leading-snug font-medium tracking-tight text-white sm:mt-6 sm:max-w-lg sm:text-2xl lg:max-w-xl lg:text-3xl">
              We ensure high product quality, stable deliveries, and
              compliance with international standards.
            </h2>
          </div>

          {/* icon badges */}
          <StaggerReveal className="absolute bottom-6 left-6 flex gap-3 sm:bottom-10 sm:left-10">
            {badgeIcons.map((Icon, i) => (
              <StaggerItem
                key={i}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm sm:h-16 sm:w-16"
              >
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Reveal>
      </div>
    </section>
  );
}