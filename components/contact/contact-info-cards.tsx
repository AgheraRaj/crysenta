import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "+91 9998945296",
    description: "Reach our support line for quick answers on products and orders.",
    highlight: false,
  },
  {
    icon: Mail,
    title: "crysenta@gmail.com",
    description: "Send us your requirements and we'll respond within a day.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Junagadh, Gujarat",
    description: "Visit our facility or schedule a meeting with our team.",
    highlight: false,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-[#E9E8E4]">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="relative -mt-16 grid grid-cols-1 gap-5 sm:-mt-20 sm:grid-cols-3 sm:gap-6 lg:-mt-24">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-3xl border-2 border-dashed p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                  card.highlight
                    ? "border-white/20 bg-[#3a4a22] text-white sm:-mt-4"
                    : "border-[#6d8333]/40 bg-white text-neutral-900"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    card.highlight ? "bg-white/15" : "bg-[#6d8333]/10"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      card.highlight ? "text-white" : "text-[#6d8333]"
                    }`}
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{card.title}</h3>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    card.highlight ? "text-white/70" : "text-neutral-500"
                  }`}
                >
                  {card.description}
                </p>

                <a
                  href="#"
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${
                    card.highlight
                      ? "text-white hover:text-white/80"
                      : "text-[#6d8333] hover:text-[#5c7029]"
                  }`}
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}