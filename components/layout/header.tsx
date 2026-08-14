"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-19 transition-all duration-300 ${
        scrolled
          ? `border-b border-neutral-200 ${mobileOpen ? "bg-white" : "bg-white/70"} backdrop-blur-md`
          : `border-b border-transparent ${mobileOpen ? "bg-white" : "bg-transparent"}`
      }`}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-10">
        <Image
          src="/crysenta-logo.png"
          alt="company logo"
          width={160}
          height={80}
          className="h-12 w-auto md:h-16"
          priority
        />

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Button size="lg" className="hidden rounded-full p-5 md:inline-flex">
          <Phone /> Contact
        </Button>

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
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 py-6 md:hidden">
          <ul className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-6 w-full rounded-full p-5">
            <Phone /> Contact
          </Button>
        </div>
      )}
    </header>
  );
}