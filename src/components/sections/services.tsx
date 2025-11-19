import Image from 'next/image';
import { Search, Phone, Car, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const howItWorksSteps = [
  {
    icon: Search,
    number: "1",
    title: "Choose Service",
    description: "Select from airport transfers, private hire, or event transport"
  },
  {
    icon: Phone,
    number: "2",
    title: "Request Quote",
    description: "Call us or book online for instant pricing"
  },
  {
    icon: Car,
    number: "3",
    title: "Car Arrives",
    description: "Professional driver arrives on time at your location"
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Enjoy Journey",
    description: "Relax in comfort and arrive safely at your destination"
  }
];

const services = [
  {
    title: "Reliable Private Hire Taxi Service",
    description: "Our private hire taxi service offers a comfortable and reliable way to travel around the West Midlands. Enjoy flexible scheduling and professional drivers ready to assist you.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_RUAC4ZVRM-3.webp",
    features: ["Door-to-door service", "Flexible scheduling", "All West Midlands areas", "Professional drivers"],
    link: "#",
  },
  {
    title: "Seamless Airport Transfers",
    description: "Experience stress-free airport transfers with App Carz. Our punctual drivers ensure on-time pickups and a smooth journey to and from major airports.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/professional-airport-terminal-scene-with-a34550bc-20251031164953.jpg",
    features: ["Flight monitoring", "Meet & greet service", "Fixed airport fares", "Luggage assistance"],
    link: "#",
  },
  {
    title: "Special Event Transportation",
    description: "Make your special events memorable with our dedicated transportation services. Arrive in style and comfort, whether it's a wedding or a corporate event.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/electric-mercedes-benz-e-class-front-720x405px-5.jpg",
    features: ["Luxury vehicles", "Multiple passenger options", "Professional chauffeurs", "Special event packages"],
    link: "#",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#f9faff] py-[100px]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-[#0B2838]">
            Explore Our Premier Transportation Services
          </h2>
          <p className="mt-4 text-lg text-[#686868]">
            At App Carz, we offer a range of transportation services tailored to meet your needs. Whether you're heading to the airport, attending a business meeting, or celebrating a special event, our professional drivers ensure a seamless and comfortable journey.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-semibold text-center text-[#0B2838] mb-3">
            How It Works
          </h3>
          <p className="text-center text-[#686868] mb-12 max-w-2xl mx-auto">
            Booking with App Carz is simple and straightforward. Follow these easy steps to get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B2838] text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#0B2838] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#686868] text-sm">
                  {step.description}
                </p>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-[#FF6B6B]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] hover:scale-105 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h5 className="text-[#0B2838] mb-3 text-xl font-semibold">{service.title}</h5>
                <p className="text-base text-[#686868] mb-4">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="mb-6 space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#686868]">
                      <CheckCircle className="w-5 h-5 text-[#FF6B6B] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-[#0B2838] text-white py-3 px-6 rounded-md text-base font-medium transition-colors hover:bg-[#0B2838]/90"
                  >
                    <a href={service.link}>
                      Learn More
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-2 border-[#0B2838] text-[#0B2838] py-3 px-6 rounded-md text-base font-medium hover:bg-[#0B2838] hover:text-white transition-colors"
                  >
                    <a href="tel:01922500500">
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0B2838] to-[#164B6B] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-semibold mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us for personalized pricing for group travel, corporate accounts, or regular bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FACC15] text-[#0B2838] px-8 py-4 rounded-md hover:bg-[#FACC15]/90 transition-all font-medium"
            >
              <a href="https://appcarz.webbooker.icabbi.com/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B6B] text-white px-8 py-4 rounded-md hover:bg-[#ff5252] transition-all flex items-center gap-2"
            >
              <a href="tel:01922500500">
                <Phone className="w-5 h-5" />
                01922 500 500
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#0B2838] transition-all"
            >
              <a href="mailto:appcarz4@gmail.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;import Image from 'next/image';
import { Search, Phone, Car, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const howItWorksSteps = [
  {
    icon: Search,
    number: "1",
    title: "Choose Service",
    description: "Select from airport transfers, private hire, or event transport"
  },
  {
    icon: Phone,
    number: "2",
    title: "Request Quote",
    description: "Call us or book online for instant pricing"
  },
  {
    icon: Car,
    number: "3",
    title: "Car Arrives",
    description: "Professional driver arrives on time at your location"
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Enjoy Journey",
    description: "Relax in comfort and arrive safely at your destination"
  }
];

const services = [
  {
    title: "Reliable Private Hire Taxi Service",
    description: "Our private hire taxi service offers a comfortable and reliable way to travel around the West Midlands. Enjoy flexible scheduling and professional drivers ready to assist you.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_RUAC4ZVRM-3.webp",
    features: ["Door-to-door service", "Flexible scheduling", "All West Midlands areas", "Professional drivers"],
    link: "#",
  },
  {
    title: "Seamless Airport Transfers",
    description: "Experience stress-free airport transfers with App Carz. Our punctual drivers ensure on-time pickups and a smooth journey to and from major airports.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/professional-airport-terminal-scene-with-a34550bc-20251031164953.jpg",
    features: ["Flight monitoring", "Meet & greet service", "Fixed airport fares", "Luggage assistance"],
    link: "#",
  },
  {
    title: "Special Event Transportation",
    description: "Make your special events memorable with our dedicated transportation services. Arrive in style and comfort, whether it's a wedding or a corporate event.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/electric-mercedes-benz-e-class-front-720x405px-5.jpg",
    features: ["Luxury vehicles", "Multiple passenger options", "Professional chauffeurs", "Special event packages"],
    link: "#",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#f9faff] py-[100px]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-[#0B2838]">
            Explore Our Premier Transportation Services
          </h2>
          <p className="mt-4 text-lg text-[#686868]">
            At App Carz, we offer a range of transportation services tailored to meet your needs. Whether you're heading to the airport, attending a business meeting, or celebrating a special event, our professional drivers ensure a seamless and comfortable journey.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-semibold text-center text-[#0B2838] mb-3">
            How It Works
          </h3>
          <p className="text-center text-[#686868] mb-12 max-w-2xl mx-auto">
            Booking with App Carz is simple and straightforward. Follow these easy steps to get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B2838] text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#0B2838] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#686868] text-sm">
                  {step.description}
                </p>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-[#FF6B6B]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] hover:scale-105 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h5 className="text-[#0B2838] mb-3 text-xl font-semibold">{service.title}</h5>
                <p className="text-base text-[#686868] mb-4">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="mb-6 space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#686868]">
                      <CheckCircle className="w-5 h-5 text-[#FF6B6B] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-[#0B2838] text-white py-3 px-6 rounded-md text-base font-medium transition-colors hover:bg-[#0B2838]/90"
                  >
                    <a href={service.link}>
                      Learn More
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-2 border-[#0B2838] text-[#0B2838] py-3 px-6 rounded-md text-base font-medium hover:bg-[#0B2838] hover:text-white transition-colors"
                  >
                    <a href="https://appcarz.webbooker.icabbi.com/" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0B2838] to-[#164B6B] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-semibold mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us for personalized pricing for group travel, corporate accounts, or regular bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FACC15] text-[#0B2838] px-8 py-4 rounded-md hover:bg-[#FACC15]/90 transition-all font-medium"
            >
              <a href="https://nothingtoseehere.icabbi.com/secureshare/993a4bfd56a79dfbd014921791e60e6dc04033366b67e0671d678f6f6e26862e/59c38d8b4ab91f2799a746151b074ce6ceb521d9e92b3a33f162a42d4a40dac8" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B6B] text-white px-8 py-4 rounded-md hover:bg-[#ff5252] transition-all flex items-center gap-2"
            >
              <a href="tel:01922500500">
                <Phone className="w-5 h-5" />
                01922 500 500
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#0B2838] transition-all"
            >
              <a href="mailto:appcarz4@gmail.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;