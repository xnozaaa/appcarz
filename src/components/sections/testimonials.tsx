'use client';

import { Star, Quote, Shield, Award, Clock, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Executive",
    rating: 5,
    text: "Outstanding service! The driver was professional, punctual, and the Mercedes was immaculate. I use App Carz for all my airport transfers now.",
    image: "/testimonials/avatar-1.jpg"
  },
  {
    name: "David Thompson",
    role: "Event Organizer",
    rating: 5,
    text: "Booked App Carz for our corporate event. They handled transport for 30+ guests seamlessly. Highly recommend for special occasions!",
    image: "/testimonials/avatar-2.jpg"
  },
  {
    name: "Priya Patel",
    role: "Regular Customer",
    rating: 5,
    text: "Been using App Carz for over 2 years. Always reliable, fair prices, and friendly drivers. The best taxi service in West Midlands!",
    image: "/testimonials/avatar-3.jpg"
  },
  {
    name: "James Wilson",
    role: "Airport Traveller",
    rating: 5,
    text: "Flight was delayed by 3 hours - the driver waited patiently and helped with luggage. Excellent customer service that goes above and beyond.",
    image: "/testimonials/avatar-4.jpg"
  }
];

const credentials = [
  {
    icon: Shield,
    title: "Fully Licensed",
    description: "Licensed by West Midlands Transport Authority"
  },
  {
    icon: Award,
    title: "DBS Checked",
    description: "All drivers undergo enhanced DBS clearance"
  },
  {
    icon: ThumbsUp,
    title: "Insured",
    description: "Comprehensive insurance coverage"
  },
  {
    icon: Clock,
    title: "15+ Years",
    description: "Combined driver experience"
  }
];

const stats = [
  { number: "50,000+", label: "Happy Customers" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "98%", label: "On-Time Arrivals" },
  { number: "24/7", label: "Availability" }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f9faff] py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-[#0B2838]">
            Trusted by Thousands
          </h2>
          <p className="mt-4 text-lg text-[#686868]">
            Don't just take our word for it. Here's what our customers say about their experience with App Carz.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#686868] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FF6B6B]/10" />
              
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#ff5252] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-semibold text-[#0B2838] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#686868]">{testimonial.role}</p>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-[#686868] leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="bg-gradient-to-r from-[#0B2838] to-[#164B6B] rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-semibold text-center text-white mb-3">
            Your Safety is Our Priority
          </h3>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            We maintain the highest standards of safety, professionalism, and compliance with all regulatory requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <credential.icon className="w-10 h-10 text-[#FACC15]" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {credential.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-16 text-center">
          <p className="text-[#686868] text-sm font-semibold mb-8 uppercase tracking-wide">
            Serving Passengers From
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-[#0B2838]">Birmingham Airport</div>
            <div className="text-2xl font-bold text-[#0B2838]">East Midlands Airport</div>
            <div className="text-2xl font-bold text-[#0B2838]">Manchester Airport</div>
            <div className="text-2xl font-bold text-[#0B2838]">NEC Birmingham</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;