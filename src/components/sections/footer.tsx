import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
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
              <p className="text-sm text-white/70 mb-2">24/7 Available</p>
              <a 
                href="tel:01922500500"
                className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#FF6B6B]/90 transition-colors font-medium"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2024 App Carz. All Rights Reserved. | Professional Private Hire Service in West Midlands</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;