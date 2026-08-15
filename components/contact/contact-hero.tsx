import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black sm:min-h-[560px] lg:min-h-[620px]">
      <Image
        src="/images/contact-agronomist.png"
        alt="Lush green crop field"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative mx-auto flex min-h-[520px] max-w-[1600px] flex-col items-center justify-center px-6 pt-24 text-center sm:min-h-[560px] sm:px-10 lg:min-h-[620px] lg:px-14">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-sm"
        >
          Learn More About Crysenta
        </a>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Contact Us
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          Have a question about our crop nutrition products? Our team is
          ready to help you find the right solution for your fields.
        </p>
      </div>

      {/* organic bottom edge */}
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 h-8 w-full text-[#E9E8E4] sm:h-12"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 L0,18 C40,2 80,2 120,14 C160,26 200,10 240,6 C280,2 320,22 360,26 C400,30 440,8 480,4 C520,0 560,20 600,22 C640,24 680,4 720,2 C760,0 800,18 840,22 C880,26 920,6 960,4 C1000,2 1040,20 1080,24 C1120,28 1160,10 1200,6 L1200,40 Z"
        />
      </svg>
    </section>
  );
}