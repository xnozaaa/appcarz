import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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
          <a href="tel:01922500500" className="text-app-carz-primary hover:underline">
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

  return (
    <section id="contact" className="bg-app-carz-background-secondary py-20 lg:py-24 font-poppins">
      <div className="container">
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
    </section>
  );
};

export default ContactSection;