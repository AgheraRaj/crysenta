import { MessageCircle } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="bg-[#E9E8E4]">
            <div className="relative overflow-hidden px-6 pt-32 pb-50 sm:px-10 sm:pt-40 lg:px-14 lg:pt-48">
                {/* soft background mark */}
                <MessageCircle
                    className="pointer-events-none absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 text-[#6d8333] opacity-[0.05] sm:h-[410px] sm:w-[410px]"
                    aria-hidden="true"
                    strokeWidth={0.6}
                />

                <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
                    {/* LEFT — eyebrow label */}
                    <div className="lg:col-span-3">
                        <p className="text-sm font-semibold text-neutral-900">
                            Get in Touch
                        </p>
                        <p className="mt-3 max-w-[220px] text-sm leading-6 text-neutral-500">
                            Questions about our products or a custom nutrition plan?
                            We&apos;re here to help.
                        </p>
                    </div>

                    {/* RIGHT — heading */}
                    <div className="lg:col-span-9">
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
                            Contact Us
                        </h1>
                        <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 sm:text-lg">
                            Reach out to our team for product guidance, order support, or
                            a conversation with one of our agronomists.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}