import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative bg-white">
      <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
        <iframe
          title="Crysenta International location"
          src="https://www.google.com/maps?q=Junagadh,Gujarat,India&output=embed"
          className="h-full w-full border-0 grayscale-[20%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* floating location badge */}
        <div className="absolute top-6 right-6 items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:top-8 sm:right-8 hidden md:flex">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6d8333]">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              Crysenta International
            </p>
            <p className="text-xs text-neutral-500">
              Junagadh, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}