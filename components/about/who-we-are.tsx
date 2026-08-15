import { Award, Tractor, FlaskConical, Globe2 } from "lucide-react";

const highlights = [
  { icon: Award, label: "Quality-focused" },
  { icon: Tractor, label: "Farmer-oriented" },
  { icon: FlaskConical, label: "Science-driven" },
  { icon: Globe2, label: "Sustainability-conscious" },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT — eyebrow */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Who We Are
            </p>
            <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
              A closer look at the company behind the crop.
            </p>
          </div>

          {/* RIGHT — lead copy + highlights */}
          <div className="lg:col-span-9">
            <p className="text-2xl leading-snug font-medium tracking-tight text-[#16210d] sm:text-3xl lg:text-4xl">
              Crysenta International is dedicated to providing reliable and
              effective agricultural nutrition solutions for modern
              farming.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Our portfolio includes water-soluble fertilizers, NPK
              fertilizers, micronutrients, and specialized crop nutrition
              products designed to support farmers throughout the crop
              cycle, from the first watering to final harvest.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-[#6d8333]/30 bg-[#E9E8E4] px-4 py-3 sm:rounded-full sm:px-5 sm:py-2.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6d8333]/10 sm:h-auto sm:w-auto sm:rounded-none sm:bg-transparent">
                      <Icon className="h-4 w-4 text-[#6d8333]" />
                    </span>
                    <span className="text-xs leading-4 font-medium text-neutral-800 sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}