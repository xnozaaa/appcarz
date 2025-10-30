import Image from 'next/image';

const services = [
  {
    title: "Reliable Private Hire Taxi Service",
    description: "Our private hire taxi service offers a comfortable and reliable way to travel around the West Midlands. Enjoy flexible scheduling and professional drivers ready to assist you.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_RUAC4ZVRM-3.webp",
    link: "#",
  },
  {
    title: "Seamless Airport Transfers",
    description: "Experience stress-free airport transfers with App Carz. Our punctual drivers ensure on-time pickups and a smooth journey to and from major airports.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_R4HD9C2Z3-4.webp",
    link: "#",
  },
  {
    title: "Special Event Transportation",
    description: "Make your special events memorable with our dedicated transportation services. Arrive in style and comfort, whether it's a wedding or a corporate event.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/electric-mercedes-benz-e-class-front-720x405px-5.jpg",
    link: "#",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#f9faff] py-[100px]">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-[#0B2838]">
            Explore Our Premier Transportation Services
          </h2>
          <p className="mt-4 text-lg text-[#686868]">
            At App Carz, we offer a range of transportation services tailored to meet your needs. Whether you’re heading to the airport, attending a business meeting, or celebrating a special event, our professional drivers ensure a seamless and comfortable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] hover:scale-105"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={720}
                height={405}
                className="w-full h-auto"
              />
              <div className="p-8 flex flex-col flex-grow">
                <h5 className="text-[#0B2838] mb-3">{service.title}</h5>
                <p className="text-base text-[#686868] flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href={service.link}
                    className="inline-block bg-[#0B2838] text-white py-3 px-8 rounded-md text-base font-medium transition-colors hover:bg-opacity-90"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;