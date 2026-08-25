"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#6d8333] text-white shadow-lg shadow-[#6d8333]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5c7029] hover:shadow-xl active:translate-y-0 sm:right-8 sm:bottom-8 sm:h-12 sm:w-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}