"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 h-19 transition-all duration-300 ${scrolled
        ? `border-b border-neutral-200 ${mobileOpen ? "bg-white" : "bg-white/70"} backdrop-blur-md`
        : `border-b border-transparent ${mobileOpen ? "bg-white" : "bg-transparent"}`
        }`}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-10">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/crysenta-logo.png"
            alt="company logo"
            width={160}
            height={80}
            className="h-12 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`transition-colors ${pathname === link.href
                    ? "text-[#6d8333] font-semibold"
                    : "text-neutral-700 hover:text-[#6d8333]"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact">
          <Button size="lg" className="hidden rounded-full p-5 md:inline-flex cursor-pointer">
            <Phone /> Contact
          </Button>
        </Link>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-neutral-200 bg-white px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-md transition-colors ${pathname === link.href
                        ? "font-semibold text-[#6d8333]"
                        : "text-neutral-700"
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button size="lg" className="mt-6 w-full rounded-full p-5" onClick={() => setMobileOpen(false)}>
                <Phone /> Contact
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}