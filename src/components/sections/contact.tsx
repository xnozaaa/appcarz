"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BookingForm } from '@/components/booking-form';

interface ContactItem {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
}

const ContactSection = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      title: "Email Us",
      description: (
        <>
          For any inquiries or to book a ride, feel free to{' '}
          <a href="#booking-form" className="text-[#FF6B6B] hover:underline font-semibold">
            fill out our booking form
          </a>
          . Our team is ready to assist you with your transportation needs.
        </>
      ),
    },
    {
      icon: Phone,
      title: "Call Us",
      description: (
        <>
          You can contact us directly at{' '}
          <a href="tel:01922500500" className="text-[#FF6B6B] hover:underline font-semibold">
            01922 500 500
          </a>
          . Our friendly staff is available to take your calls and answer any questions you may have about our services.
        </>
      ),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: (
        <>
          We are located at{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=165+Stafford+Street,+Walsall,+West+Midlands,+WS2+8EA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B6B] hover:underline font-semibold"
          >
            165 Stafford Street, Walsall, West Midlands, WS2 8EA
          </a>
          . Feel free to stop by for any inquiries or to discuss your transportation needs in person.
        </>
      ),
    },
  ];

  const serviceAreas = [
    'Walsall',
    'Birmingham',
    'West Bromwich',
    'Wolverhampton',
    'Dudley',
    'Sandwell',
    'Solihull',
    'Birmingham Airport',
    'All West Midlands'
  ];

  return (
    <section id="contact" className="bg-white py-20 lg:py-32 font-poppins">
      <div className="container">
        {/* Booking Form Section */}
        <div id="booking-form" className="mb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0B2838] mb-4">
              Book Your Ride
            </h2>
            <p className="text-lg text-[#686868]">
              Fill out the form below to request a booking. We'll contact you shortly to confirm your reservation.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-gray-100">
            <BookingForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0B2838] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[#686868]">
              Prefer to contact us directly? We're here to help with any questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white border-2 border-gray-200 p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:border-[#FF6B6B]"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#0B2838] flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-[#0B2838]">{item.title}</h4>
                <p className="text-base leading-relaxed text-[#686868]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area Section */}
        <div className="rounded-2xl bg-[#0B2838] p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Areas We Serve
            </h3>
            <p className="text-lg text-white/80">
              Providing reliable transportation throughout the West Midlands region
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="rounded-full bg-white/10 px-6 py-3 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Don't see your area listed? <a href="tel:01922500500" className="text-[#FF6B6B] hover:underline font-semibold">Call us at 01922 500 500</a> to check if we can serve your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;