import { GiThreeLeaves } from "react-icons/gi";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const footerNav = [
  { label: "About Us", href: "#" },
  { label: "Our Products", href: "#" },
  { label: "Contact Us", href: "#" },
];

const productCategories = [
  { label: "Micro Nutrients", href: "#" },
  { label: "Liquid Fertilizers", href: "#" },
  { label: "Water Soluble Fertilizer", href: "#" },
  { label: "Bio Stimulants", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Services", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1920px] px-6 pt-14 sm:px-10 sm:pt-20">
        {/* Top area: logo/nav + info columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between lg:gap-16">
          {/* Logo + social icons + nav */}
          <div className="flex flex-col gap-10 lg:gap-14">
            <Image
              src="/crysenta-darkmode-logo.png"
              alt="company logo"
              width={300}
              height={100}
              priority
              className="h-auto w-40 sm:w-48 lg:w-[300px]"
            />

            <nav>
              <ul className="flex flex-wrap gap-6 text-neutral-300 sm:gap-8">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Product Category */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Product Category</h4>
              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500"></span>
            </div>
            <ul className="mt-10 space-y-3">
              {productCategories.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 transition-colors duration-300 hover:text-green-500"
                  >
                    <GiThreeLeaves className="text-green-500 transition-transform duration-300 group-hover:rotate-12" />{" "}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Contact Info</h4>
              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500"></span>
            </div>
            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href="tel:+91 9998945296"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-yellow-500"
                >
                  <FaPhone className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />{" "}
                  <span>+91 9998945296</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:crysenta@gmail.com"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-yellow-500"
                >
                  <FaEnvelope className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />{" "}
                  <span className="break-all">crysenta@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Address</h4>
              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500"></span>
            </div>
            <p className="mt-10 flex max-w-md items-start gap-3 text-neutral-100">
              <FaMapMarkerAlt className="shrink-0 text-yellow-500" size={25} />{" "}
              <span className="mt-0.5">
                Plot No. 10, Section-6, Jay Industrial Park, Dhoraji Junagadh
                Road, At. - Makhiyala, Tal. & Dist. - Junagadh - 362011,
                Gujarat, India.
              </span>
            </p>
          </div>
        </div>

        {/* Watermark heading */}
        <div className="mt-14 select-none overflow-hidden sm:mt-20 hidden md:block">
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <h2 className="text-4xl leading-none font-semibold whitespace-nowrap text-neutral-800 sm:text-6xl md:text-7xl lg:text-9xl">
              Crysenta International
            </h2>
            <h3 className="text-xl text-neutral-800 sm:text-3xl md:text-4xl lg:text-5xl">
              Extend <span className="font-bold">Production</span> Beyond Limit
            </h3>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-neutral-400 sm:py-10 md:flex-row md:text-left">
          <p>Copyright © 2026 Crysenta International. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}