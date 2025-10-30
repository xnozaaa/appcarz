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
          For any inquiries or to book a ride, feel free to reach out via email at{' '}
          <a href="mailto:appcarz4@gmail.com" className="text-app-carz-primary hover:underline">
            appcarz4@gmail.com
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
          <a href="tel:01922500500" className="text-app-carz-primary hover:underline font-semibold">
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
            className="text-app-carz-primary hover:underline"
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
    <section id="contact" className="bg-app-carz-background-secondary py-20 lg:py-32 font-poppins">
      <div className="container">
        {/* Booking Form Section */}
        <div className="mb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-semibold text-app-carz-text-secondary mb-4">
              Book Your Ride
            </h2>
            <p className="text-lg text-app-carz-text-tertiary">
              Fill out the form below to request a booking. We'll contact you shortly to confirm your reservation.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <BookingForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-semibold text-app-carz-text-secondary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-app-carz-text-tertiary">
              Prefer to contact us directly? We're here to help with any questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <item.icon className="h-12 w-12 text-app-carz-text-secondary" />
                </div>
                <h4 className="mb-4 text-xl font-semibold text-app-carz-text-secondary">{item.title}</h4>
                <p className="text-base leading-relaxed text-app-carz-text-tertiary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area Section */}
        <div className="rounded-2xl bg-app-carz-background-primary p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h3 className="text-3xl font-semibold text-app-carz-text-primary mb-4">
              Areas We Serve
            </h3>
            <p className="text-lg text-app-carz-text-primary/80">
              Providing reliable transportation throughout the West Midlands region
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="rounded-full bg-white/10 px-6 py-3 text-app-carz-text-primary font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-app-carz-text-primary/70 text-sm">
              Don't see your area listed? <a href="tel:01922500500" className="text-app-carz-primary hover:underline font-semibold">Call us at 01922 500 500</a> to check if we can serve your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;