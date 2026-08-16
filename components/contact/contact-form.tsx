"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const infoCards = [
  { icon: Phone, label: "Call Us", value: "+91 9998945296", href: "tel:+919998945296" },
  { icon: Mail, label: "Email Us", value: "crysenta@gmail.com", href: "mailto:crysenta@gmail.com" },
  { icon: MapPin, label: "Visit Us", value: "Junagadh, Gujarat", href: "#" },
];

const fieldClass =
  "!h-12 w-full rounded-xl border-stone-300 bg-white px-4 text-sm focus-visible:border-[#6d8333] focus-visible:ring-[#6d8333]/30";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#dedbd3]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">
        <div className="relative bottom-20 overflow-hidden border-r-2 border-r-[#6d8333] rounded-3xl bg-white shadow-xl">
          {/* glow accent */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#6d8333]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[340px_1fr]">
            {/* LEFT — dark info panel */}
            <div className="flex flex-col justify-between gap-10 bg-black p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-sm font-semibold text-white">
                  Reach Us Directly
                </p>
                <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/50">
                  Prefer a quick call or email? Choose whatever works best
                  for you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {infoCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors hover:border-[#6d8333]/60 hover:bg-white/[0.08]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6d8333]">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">{card.label}</p>
                        <p className="text-sm font-medium text-white">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-2xl leading-snug font-medium tracking-tight text-[#16210d] sm:text-3xl">
                Send us a message and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="mb-2 text-neutral-700">First Name *</Label>
                    <Input id="firstName" placeholder="Ex. John" required className={fieldClass} />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="mb-2 text-neutral-700">Last Name *</Label>
                    <Input id="lastName" placeholder="Ex. Doe" required className={fieldClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="mb-2 text-neutral-700">Email *</Label>
                    <Input id="email" type="email" placeholder="example@gmail.com" required className={fieldClass} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 text-neutral-700">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="Enter Phone Number" required className={fieldClass} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="mb-2 text-neutral-700">Subject *</Label>
                  <Input id="subject" placeholder="Let us know here" required className={fieldClass} />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 text-neutral-700">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Write here..."
                    required
                    className="min-h-[140px] w-full rounded-xl border-stone-300 bg-white px-4 py-3 text-sm focus-visible:border-[#6d8333] focus-visible:ring-[#6d8333]/30"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 h-auto w-fit rounded-full bg-[#6d8333] px-7 py-4 text-white hover:bg-[#5c7029]"
                >
                  Send a Message
                  <Send className="h-4 w-4" />
                </Button>

                {submitted && (
                  <p className="text-sm font-medium text-[#6d8333]">
                    Thanks — we&apos;ll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}