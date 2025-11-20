"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleBookNow = () => {
    window.open(
      "https://appcarz.webbooker.icabbi.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-[#0B2838] text-white font-poppins">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block font-poppins font-bold uppercase text-3xl">
              <span className="text-white">App</span>
              <span className="text-[#FF6B6B]">Carz</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Discover the premier private hire taxi experience in West Midlands. Our professional drivers ensure a safe and comfortable journey tailored to your needs.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <a href="tel:01922500500" className="flex items-center gap-2 text-sm text-white/90 hover:text-[#FF6B6B] transition-colors">
                <Phone className="h-4 w-4" />
                <span>01922 500 500</span>
              </a>
              <a href="mailto:appcarz4@gmail.com" className="flex items-center gap-2 text-sm text-white/90 hover:text-[#FF6B6B] transition-colors">
                <Mail className="h-4 w-4" />
                <span>appcarz4@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>165 Stafford Street, Walsall, WS2 8EA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Company</h5>
            <ul className="space-y-3 text-base">
              <li><Link href="/#about" className="hover:text-brand-primary transition-colors duration-300">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-brand-primary transition-colors duration-300">Services</Link></li>
              <li><Link href="/#fleet" className="hover:text-brand-primary transition-colors duration-300">Our Fleet</Link></li>
              <li><Link href="/locations" className="hover:text-brand-primary transition-colors duration-300">Locations</Link></li>
              <li><Link href="/#contact" className="hover:text-brand-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Support</h5>
            <ul className="space-y-3 text-base">
              <li><Link href="/#faq" className="hover:text-brand-primary transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-brand-primary transition-colors duration-300">Blog & Tips</Link></li>
              <li><Link href="/#contact" className="hover:text-brand-primary transition-colors duration-300">Book a Ride</Link></li>
              <li><Link href="/#testimonials" className="hover:text-brand-primary transition-colors duration-300">Testimonials</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Stay Updated</h5>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex w-full max-w-xs mb-6">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="w-full flex-grow px-4 py-2 bg-white/10 border border-r-0 border-white/20 rounded-l-md text-base text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button
                type="submit"
                className="bg-brand-primary text-white font-medium text-base px-5 py-2 rounded-r-md hover:bg-red-500 transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                Go
              </button>
            </form>

            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3">24/7 Available</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleBookNow}
                  className="inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#0B2838] px-6 py-3 rounded-lg hover:bg-[#F5C211] transition-colors font-medium"
                >
                  Book Now
                </button>
                <a 
                  href="tel:01922500500"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#FF6B6B]/90 transition-colors font-medium"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* App Download Buttons */}
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3">Download Our App</p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://apps.apple.com/app/appcarz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-tight">Download on the</span>
                    <span className="text-sm font-semibold leading-tight">App Store</span>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.appcarz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-tight">GET IT ON</span>
                    <span className="text-sm font-semibold leading-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2024 App Carz. All Rights Reserved. | Professional Private Hire Service in West Midlands</p>
          
          {/* Designer Credit */}
          <p className="mt-3 text-xs opacity-60 hover:opacity-100 transition-opacity duration-300">
            <a 
              href="https://instagram.com/DesignsByNLY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#FF6B6B] transition-all duration-300"
            >
              Website by DesignsByNLY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;