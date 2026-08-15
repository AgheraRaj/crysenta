"use client";

import { useState } from "react";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const hours = [
  { day: "Monday - Friday", time: "9AM - 6PM", closed: false },
  { day: "Saturday", time: "9AM - 2PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

export default function ContactDetails() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#E9E8E4]">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — hours + map */}
          <div>
            <p className="text-sm font-semibold text-[#6d8333]">
              Our Working Time
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
              We&apos;re available during these hours to answer questions,
              take orders, and help plan your crop&apos;s nutrition
              schedule.
            </p>

            <ul className="mt-6 space-y-3">
              {hours.map((item) => (
                <li key={item.day} className="flex items-center gap-3">
                  {item.closed ? (
                    <X className="h-4 w-4 shrink-0 text-red-500" />
                  ) : (
                    <Clock className="h-4 w-4 shrink-0 text-[#6d8333]" />
                  )}
                  <span className="text-sm font-medium text-neutral-800">
                    {item.day}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm font-semibold text-[#6d8333]">
              Location
            </p>

            <div className="mt-4 h-[300px] w-full overflow-hidden rounded-3xl border-2 border-dashed border-[#6d8333]/40 sm:h-[340px]">
              <iframe
                title="Crysenta International location"
                src="https://www.google.com/maps?q=Junagadh,Gujarat,India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT — get in touch form */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#6d8333]/40 bg-white px-4 py-1.5 text-xs font-medium text-neutral-700">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              Get In Touch!
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5 rounded-[2rem] border-2 border-dashed border-[#6d8333]/40 bg-white p-6 sm:p-8"
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="border-dashed"
                  required
                />
              </div>

              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  className="border-dashed"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  className="border-dashed"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-auto w-fit rounded-full bg-[#6d8333] px-7 py-3.5 text-white hover:bg-[#5c7029]"
              >
                Submit Now
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
    </section>
  );
}