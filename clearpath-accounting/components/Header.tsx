"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Smartphone } from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-teal-50/70 backdrop-blur-md shadow-sm my-0 border-b border-teal-100/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <h5 className="font-heading text-base sm:text-2xl text-cyan-700 font-black tracking-tighter">
          Clearpath <span className="text-teal-600">Accounting</span>
        </h5>

        <nav>
          <Link
            href="tel:099999999"
            className="flex items-center gap-0.5 sm:gap-3 text-teal-950 font-medium text-sm sm:text-lg hover:text-teal-200 transition-all"
          >
            <Smartphone className="h-4 sm:h-6" /> 09 999 9999
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
