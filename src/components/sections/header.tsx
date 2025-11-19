"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links when on home page
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    window.open(
      "https://appcarz.webbooker.icabbi.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#fleet", label: "Fleet" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

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
        <div className="flex items-center justify-between h-[80px] lg:h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-poppins font-bold uppercase text-2xl lg:text-4xl z-50"
          >
            <span className="text-white">App</span>
            <span className="text-[#FF6B6B]">Carz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-[#FF6B6B] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleBookNow}
              className="flex items-center gap-2 bg-[#FACC15] text-[#0B2838] px-6 py-3 rounded-lg hover:bg-[#F5C211] transition-colors font-medium"
            >
              Book Now
            </button>
            <a
              href="tel:01922500500"
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#FF6B6B]/90 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              01922 500 500
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0B2838] z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white hover:text-[#FF6B6B] transition-colors duration-200 text-2xl font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              handleBookNow();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 bg-[#FACC15] text-[#0B2838] px-8 py-4 rounded-lg hover:bg-[#F5C211] transition-colors font-medium text-xl mt-4"
          >
            Book Now
          </button>
          <a
            href="tel:01922500500"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-[#FF6B6B] text-white px-8 py-4 rounded-lg hover:bg-[#FF6B6B]/90 transition-colors font-medium text-xl"
          >
            <Phone className="h-5 w-5" />
            01922 500 500
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;