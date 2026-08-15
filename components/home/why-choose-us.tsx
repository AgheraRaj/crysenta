import Image from "next/image";
import { Leaf, HeartHandshake, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Leaf,
    title: "Soil Friendly",
    description: "Formulated to protect long-term soil health, not just one season's yield.",
  },
  {
    icon: HeartHandshake,
    title: "Farmer Focused",
    description: "Every formula is developed around real field conditions, not lab assumptions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — image with floating testimonial */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-neutral-200 sm:aspect-[3/4]">
              <Image
                src="/images/farmer.jpeg"
                alt="Crysenta agronomist applying fertilizer to healthy crops"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* floating testimonial card */}
            <div className="absolute bottom-6 left-6 max-w-[280px] rounded-2xl bg-white p-5 shadow-xl sm:bottom-8 sm:left-8 sm:p-6">
              <p className="text-sm leading-6 font-medium text-neutral-900 sm:text-base">
                &ldquo;Reliable results and real support made the switch to
                Crysenta easy.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6d8333] text-xs font-semibold text-white">
                  RP
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Ramesh Patel
                  </p>
                  <p className="text-xs text-neutral-500">
                    Junagadh, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — text */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d8333]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#6d8333] uppercase">
                About Us
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              Why choose us?
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Every batch is tested for purity and nutrient balance before
              it leaves our facility, so what&apos;s on the label is
              exactly what reaches your soil.
            </p>

            <div className="mt-10 flex flex-col gap-7">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6d8333]/30 bg-[#6d8333]/10 text-[#6d8333]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="mt-10 h-auto w-fit rounded-full bg-[#6d8333] px-7 py-4 text-white hover:bg-[#5c7029]"
            >
              Get in Touch
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}