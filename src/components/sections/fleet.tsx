import React from 'react';
import Image from 'next/image';
import { Users, Briefcase, Luggage, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vehicles = [
  {
    name: "Standard Sedan",
    category: "Economy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/professional-black-standard-sedan-taxi-t-e2476b70-20251030133708.jpg",
    passengers: 4,
    luggage: 2,
    features: ["Air conditioning", "GPS navigation", "Phone charger", "Water bottles"],
    priceFrom: "£15",
    description: "Perfect for everyday travel and short trips around the West Midlands."
  },
  {
    name: "Executive Sedan",
    category: "Premium",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/luxury-black-mercedes-e-class-executive--1a0d5cb7-20251030133708.jpg",
    passengers: 4,
    luggage: 3,
    features: ["Leather seats", "Premium sound", "Climate control", "Complimentary Wi-Fi"],
    priceFrom: "£25",
    description: "Luxury Mercedes E-Class for business travel and special occasions.",
    featured: true
  },
  {
    name: "Estate / Wagon",
    category: "Standard",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/black-estate-car-taxi-spacious-wagon-veh-db7a6c5f-20251030133708.jpg",
    passengers: 4,
    luggage: 4,
    features: ["Extra luggage space", "Family friendly", "Air conditioning", "GPS navigation"],
    priceFrom: "£20",
    description: "Spacious estate car ideal for airport transfers with extra luggage."
  },
  {
    name: "Luxury Minivan",
    category: "Group",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/black-mercedes-v-class-luxury-minivan-ta-71aa1e8f-20251030133708.jpg",
    passengers: 8,
    luggage: 8,
    features: ["Mercedes V-Class", "Reclining seats", "Ambient lighting", "Premium comfort"],
    priceFrom: "£45",
    description: "Mercedes V-Class for groups, families, and executive team transport.",
    featured: true
  }
];

const FleetSection = () => {
  return (
    <section id="fleet" className="bg-brand-background-secondary py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-brand-text-secondary">
            Our Fleet
          </h2>
          <p className="mt-4 text-lg text-brand-text-tertiary">
            Explore our diverse range of vehicles, designed for safety and comfort. From standard sedans to luxury minivans, we have the perfect vehicle for every journey.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] hover:-translate-y-2 flex flex-col ${
                vehicle.featured ? 'ring-2 ring-[#FF6B6B]' : ''
              }`}
            >
              {/* Featured Badge */}
              {vehicle.featured && (
                <div className="bg-[#FF6B6B] text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              {/* Vehicle Image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#0B2838] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {vehicle.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-brand-text-secondary mb-2">
                  {vehicle.name}
                </h4>
                
                <p className="text-sm text-brand-text-tertiary mb-4 flex-grow">
                  {vehicle.description}
                </p>

                {/* Capacity Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FF6B6B]" />
                    <span className="text-sm font-medium text-brand-text-secondary">
                      {vehicle.passengers} Passengers
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage className="w-5 h-5 text-[#FF6B6B]" />
                    <span className="text-sm font-medium text-brand-text-secondary">
                      {vehicle.luggage} Bags
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-brand-text-tertiary">
                      <Star className="w-3 h-3 text-[#FACC15] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-auto">
                  <div className="text-center mb-3">
                    <span className="text-xs text-brand-text-tertiary">Starting from</span>
                    <div className="text-2xl font-bold text-[#FF6B6B]">{vehicle.priceFrom}</div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-[#0B2838] text-white hover:bg-[#0B2838]/90 transition-colors"
                  >
                    <a href="tel:01922500500">Book Now</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-[#0B2838] to-[#164B6B] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h4 className="text-xl font-semibold mb-2">All Vehicles Insured</h4>
              <p className="text-white/80 text-sm">
                Full comprehensive insurance and licensing for your safety and peace of mind.
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h4 className="text-xl font-semibold mb-2">Professional Drivers</h4>
              <p className="text-white/80 text-sm">
                All drivers are licensed, DBS checked, and trained to the highest standards.
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h4 className="text-xl font-semibold mb-2">Regular Maintenance</h4>
              <p className="text-white/80 text-sm">
                Our fleet is regularly serviced and maintained to ensure reliability and comfort.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-brand-text-tertiary mb-4">
            Need help choosing the right vehicle?
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#FF6B6B] text-white px-8 py-4 hover:bg-[#ff5252] transition-all"
          >
            <a href="tel:01922500500">Call Us: 01922 500 500</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;