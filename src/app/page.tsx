import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import About from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import FleetSection from "@/components/sections/fleet";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <About />
        <ServicesSection />
        <FleetSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}