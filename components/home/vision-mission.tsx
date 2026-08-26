import Image from "next/image";
import Reveal from "@/components/motion/reveal";

const panels = [
  {
    label: "Mission",
    description:
      "We serve the agriculture market through continuous innovations with the latest technologies to ensure balanced nutrition for crops, resulting in nutritious food production and better human health.",
    image: "/images/mission-image.png",
    imageAlt: "Hands holding fresh soil",
    reverse: false,
  },
  {
    label: "Vision",
    description:
      "Our vision is to manufacture and supply speciality fertilizer products with the aim of providing complete nutrition to crops and enhancing crop productivity.",
    image: "/images/vision-image.png",
    imageAlt: "Agricultural research and planning",
    reverse: true,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#E9E8E4]">
      <div className="flex flex-col">
        {panels.map((panel, i) => (
          <Reveal
            key={panel.label}
            className={`relative flex items-center gap-8 bg-[#E9E8E4] px-6 sm:px-10 lg:gap-16 lg:px-14 ${
              panel.reverse ? "flex-row-reverse" : "flex-row"
            } ${
              i === 0
                ? "pt-14 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10"
                : "pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
            }`}
          >
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-8 ring-white sm:h-48 sm:w-48 lg:h-64 lg:w-64">
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                sizes="(min-width: 1024px) 256px, (min-width: 640px) 192px, 128px"
                className="object-cover"
              />
            </div>

            <div
              className={`max-w-xl ${panel.reverse ? "text-right" : "text-left"}`}
            >
              <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {panel.label}
              </h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                {panel.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
