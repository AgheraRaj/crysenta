import { Star, Quote } from "lucide-react";

export default function BuildTrust() {
  return (
    <section className="bg-[#E9E8E4]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        {/* Header */}
        <div className="relative w-fit">
          <span className="text-sm font-medium tracking-[0.2em] text-[#6d8333] uppercase">
            Trusted By Farmers
          </span>
          <span className="absolute -bottom-2 left-0 h-0.5 w-10 bg-[#6d8333]" />
        </div>

        <h2 className="mt-8 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Trust, grown over time.
        </h2>

        {/* Testimonial */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-black lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
            {/* Quote side */}
            <div className="relative p-8 sm:p-12 lg:p-16">
              <Quote
                className="pointer-events-none absolute top-2 left-8 h-28 w-28 text-white/15 sm:h-40 sm:w-40"
                fill="currentColor"
                strokeWidth={0}
              />

              <div className="relative flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="relative mt-6 max-w-2xl text-2xl leading-snug font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                “ક્રિસેન્ટાના ખાતરનો ઉપયોગ કર્યા પછી મારા કપાસના પાકમાં નોંધપાત્ર સુધારો જોવા મળ્યો. પાકની વૃદ્ધિ અને ગુણવત્તા બંને સારી રહી.”
              </p>

              <p className="relative mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                યોગ્ય પોષણ • સારો પાક • વિશ્વાસપાત્ર પરિણામ
              </p>
            </div>

            {/* Author side */}
            <div className="flex flex-col justify-center gap-6 border-t border-white/10 bg-[#6d8333] p-8 sm:p-12 lg:border-t-0 lg:border-l lg:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
                RP
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  Ramesh Patel
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Cotton Farmer
                </p>
                <p className="text-sm text-white/75">
                  Junagadh, Gujarat
                </p>
              </div>

              <div className="border-t border-white/15 pt-6">
                <p className="text-3xl font-extrabold tracking-tight text-white">
                  +30%
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Yield increase, one season
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}