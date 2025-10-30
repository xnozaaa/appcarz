"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The original site's data-settings has tenweb_sticky_effects_offset: 100
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`w-full top-0 left-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "fixed bg-[#0B2838] shadow-lg"
          : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex items-center justify-start h-[100px]">
          <Link
            href="/"
            className="font-poppins font-bold uppercase text-3xl lg:text-4xl"
          >
            <span className="text-white">App</span>
            <span className="text-[#FF6B6B]">Carz</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;