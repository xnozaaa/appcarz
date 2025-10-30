import React from 'react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Locations - App Carz Private Hire | West Midlands Taxi Service',
  description: 'App Carz serves Walsall, Birmingham, Wolverhampton, and all West Midlands areas. Professional taxi service with airport transfers, private hire, and event transportation.',
  keywords: 'Walsall taxi, Birmingham taxi, West Midlands private hire, airport transfers Birmingham, Wolverhampton taxi service',
};

const locations = [
  {
    name: 'Walsall',
    description: 'Our home base in Walsall offers comprehensive private hire taxi services to residents and businesses. From quick local trips to long-distance journeys, we\'re your trusted transportation partner in Walsall.',
    highlights: [
      '24/7 availability',
      'Local area expertise',
      'Fast response times',
      'Competitive pricing'
    ],
    postcodes: ['WS1', 'WS2', 'WS3', 'WS4', 'WS5', 'WS9']
  },
  {
    name: 'Birmingham',
    description: 'Serving Birmingham and surrounding areas with reliable taxi services including airport transfers, business travel, and special event transportation. We know Birmingham\'s roads inside out.',
    highlights: [
      'Airport transfers to Birmingham Airport',
      'City center pickups',
      'Business district service',
      'Event and concert transportation'
    ],
    postcodes: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10-B50']
  },
  {
    name: 'Wolverhampton',
    description: 'Professional private hire service throughout Wolverhampton. Whether you need a ride to the train station, airport, or anywhere across the West Midlands, we\'ve got you covered.',
    highlights: [
      'Train station transfers',
      'Regular business contracts',
      'Shopping trip services',
      'Medical appointment transport'
    ],
    postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV10', 'WV11']
  },
  {
    name: 'West Bromwich',
    description: 'Covering West Bromwich and Sandwell with dependable taxi services for all occasions. From everyday journeys to special events, our drivers provide safe and comfortable transportation.',
    highlights: [
      'Local and long-distance trips',
      'Hospital transfers',
      'Shopping center pickups',
      'Reliable school runs'
    ],
    postcodes: ['B70', 'B71']
  },
  {
    name: 'Dudley',
    description: 'Serving Dudley with professional private hire taxis. Our experienced drivers ensure punctual, safe journeys whether you\'re heading to work, the airport, or a night out.',
    highlights: [
      'Evening and night service',
      'Tourist attraction trips',
      'Corporate accounts available',
      'Fixed-price airport runs'
    ],
    postcodes: ['DY1', 'DY2', 'DY3']
  },
  {
    name: 'Solihull',
    description: 'Quality taxi service in Solihull with a focus on comfort and professionalism. Ideal for Birmingham Airport transfers and business travel throughout the region.',
    highlights: [
      'Birmingham Airport proximity',
      'Executive vehicle options',
      'Business travel specialists',
      'Meet and greet service'
    ],
    postcodes: ['B90', 'B91', 'B92', 'B93', 'B94']
  },
  {
    name: 'Birmingham Airport',
    description: 'Specialist airport transfer service to and from Birmingham Airport. We monitor flight times, offer meet and greet, and provide comfortable vehicles for all group sizes.',
    highlights: [
      'Flight monitoring included',
      '60 minutes free waiting time',
      'Meet and greet service',
      'All terminals covered',
      'Fixed competitive rates'
    ],
    postcodes: ['B26', 'B33', 'B37']
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0B2838] py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
                Areas We Serve
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Professional private hire taxi service across the West Midlands region
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:01922500500" className="hover:text-[#FF6B6B] transition-colors">
                    01922 500 500
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 lg:gap-10">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 lg:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-[#FF6B6B] flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-3xl font-semibold text-[#0B2838] mb-3">
                        {location.name}
                      </h2>
                      <p className="text-lg text-[#686868] mb-6">
                        {location.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B2838] mb-4">
                        Service Highlights
                      </h3>
                      <ul className="space-y-3">
                        {location.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                            <span className="text-[#686868]">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#0B2838] mb-4">
                        Postcodes Covered
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.postcodes.map((postcode, idx) => (
                          <span 
                            key={idx}
                            className="bg-[#0B2838] text-white px-4 py-2 rounded-lg text-sm font-medium"
                          >
                            {postcode}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0B2838] py-20 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-semibold text-white mb-6">
                Don't See Your Location?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                We may still be able to serve your area. Give us a call to discuss your transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:01922500500"
                  className="btn-text inline-block bg-white text-[#0B2838] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Call 01922 500 500
                </a>
                <a 
                  href="/#contact"
                  className="btn-text inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}