import { GiThreeLeaves } from "react-icons/gi";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Reveal from "../motion/reveal";

const footerNav = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    icon: <FaXTwitter />,
    label: "Twitter",
    link: "#",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    link: "https://www.facebook.com/p/Crysenta-International-61577856183937/",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://www.instagram.com/crysenta_international?igsi=ZGw5b3VybzFrZmxy",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    link: "https://wa.me/919998945296",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Services", href: "/terms-of-services" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1920px] px-6 pt-14 sm:px-10 sm:pt-20">
        {/* Top Footer */}
        <Reveal className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1.4fr] lg:gap-12">
          {/* Logo + Social */}
          <div className="flex flex-col items-start lg:-mt-10">
            {/* Logo */}
            <Link href="/" aria-label="Go to homepage" className="block">
              <Image
                src="/crysenta-darkmode-logo.png"
                alt="Crysenta International"
                width={300}
                height={100}
                priority
                className="h-auto w-45 sm:w-48 lg:w-[300px]"
                style={{ height: "auto" }}
              />
            </Link>

            {/* Social Links */}
            <div className="mt-5 space-y-10 lg:pl-6">
              <div className="relative">
                <h4 className="text-md text-neutral-500">Follow Us</h4>

                <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500" />
              </div>

              <nav aria-label="Social media links">
                <ul className="flex items-center gap-3">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.link}
                        target={
                          item.label === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={`Visit our ${item.label}`}
                        className="
                          group flex h-10 w-10 items-center justify-center
                          rounded-full
                          bg-neutral-900 text-neutral-300
                          hover:border-[#6d8333]
                          hover:bg-[#6d8333]
                          hover:text-white
                          sm:h-11 sm:w-11
                        "
                      >
                        <span className="text-lg transition-transform duration-300 group-hover:scale-110 sm:text-xl">
                          {item.icon}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Company</h4>

              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500" />
            </div>

            <ul className="mt-10 space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 transition-colors duration-300 hover:text-green-500"
                  >
                    <GiThreeLeaves className="text-green-500 transition-transform duration-300 group-hover:rotate-12" />

                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Contact Info</h4>

              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500" />
            </div>

            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href="tel:+919998945296"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-yellow-500"
                >
                  <FaPhone className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />

                  <span>+91 9998945296</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:crysenta@gmail.com"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-yellow-500"
                >
                  <FaEnvelope className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />

                  <span className="break-all">crysenta@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <div className="relative">
              <h4 className="text-md text-neutral-500">Address</h4>

              <span className="absolute -bottom-3 left-0 h-0.5 w-12 bg-green-500" />
            </div>

            <p className="mt-10 flex max-w-md items-start gap-3 text-neutral-100">
              <FaMapMarkerAlt className="shrink-0 text-yellow-500" size={25} />

              <span className="mt-0.5">
                Plot No. 10, Section-6, Jay Industrial Park, Dhoraji Junagadh
                Road, At. - Makhiyala, Tal. & Dist. - Junagadh - 362011,
                Gujarat, India.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Watermark */}
        <div
          className="hidden select-none overflow-hidden py-4 md:block"
          aria-hidden="true"
        >
          <h2 className="whitespace-nowrap bg-gradient-to-b from-neutral-800 to-transparent bg-clip-text text-6xl font-bold leading-none tracking-tight text-transparent lg:text-8xl xl:text-9xl">
            Crysenta International
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-neutral-400 sm:py-10 md:flex-row md:text-left">
          <p>
            Copyright © {new Date().getFullYear()} Crysenta International. All
            rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
