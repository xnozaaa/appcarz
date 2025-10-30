import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import About from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import FleetSection from "@/components/sections/fleet";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App Carz - Premier Private Hire Taxi Service | West Midlands & Birmingham Airport',
  description: 'Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events. Licensed drivers, modern fleet, competitive rates. Call 01922 500 500.',
  keywords: 'private hire taxi Walsall, Birmingham Airport transfers, West Midlands taxi service, airport taxi Birmingham, corporate transportation, licensed taxi drivers',
  openGraph: {
    title: 'App Carz - Premier Private Hire Taxi Service',
    description: 'Professional transportation across West Midlands with 15 years experience',
    type: 'website',
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "App Carz",
    "description": "Professional private hire taxi service in West Midlands offering airport transfers, corporate travel, and special event transportation",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "165 Stafford Street",
      "addressLocality": "Walsall",
      "addressRegion": "West Midlands",
      "postalCode": "WS2 8EA",
      "addressCountry": "GB"
    },
    "telephone": "+441922500500",
    "email": "appcarz4@gmail.com",
    "url": "https://appcarz.co.uk",
    "priceRange": "££",
    "openingHours": "Mo-Su 00:00-23:59",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.586",
      "longitude": "-1.983"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Walsall"
      },
      {
        "@type": "City",
        "name": "Birmingham"
      },
      {
        "@type": "City",
        "name": "Wolverhampton"
      },
      {
        "@type": "City",
        "name": "West Bromwich"
      },
      {
        "@type": "City",
        "name": "Dudley"
      },
      {
        "@type": "City",
        "name": "Solihull"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Hire Taxi Service",
            "description": "Professional private hire taxi for all journeys across West Midlands"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfers",
            "description": "Reliable airport transfers to Birmingham Airport with flight monitoring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Special Event Transportation",
            "description": "Transportation for weddings, corporate events, and special occasions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      <main>
        <HeroSection />
        <About />
        <ServicesSection />
        <FleetSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}