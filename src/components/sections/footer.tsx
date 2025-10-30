import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B2838] text-white font-poppins">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/WhatsApp-Image-2023-10-29-at-16_20_44_e459623b-1.jpg"
                alt="App Carz Logo"
                width={160}
                height={100}
                className="h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed pr-4">
              Discover the premier private hire taxi experience in West Midlands. Our professional drivers ensure a safe and comfortable journey tailored to your needs.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Company</h5>
            <ul className="space-y-3 text-base">
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Services</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Our Fleet</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Support</h5>
            <ul className="space-y-3 text-base">
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">FAQ</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Booking Info</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors duration-300">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h5 className="font-semibold text-[20px] leading-snug mb-5">Stay Updated</h5>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex w-full max-w-xs">
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
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2024 App Carz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;