'use client';

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData: {
  value: string;
  question: string;
  answer: React.ReactNode;
}[] = [
  {
    value: "item-1",
    question: "What services do you offer?",
    answer: (
      <p>
        We provide a range of transportation services including private hire taxis, airport transfers, special event transportation, corporate travel, and wedding/party transport. All our services are available 24/7 throughout the West Midlands region.
      </p>
    ),
  },
  {
    value: "item-2",
    question: "How do I book a ride?",
    answer: (
      <>
        <p>
          You can easily book a ride through our online booking form on this website, by calling our customer service team on <a href="tel:01922500500" className="text-app-carz-primary hover:underline font-semibold">01922 500 500</a>, or by emailing us at <a href="mailto:appcarz4@gmail.com" className="text-app-carz-primary hover:underline">appcarz4@gmail.com</a>.
        </p>
        <p className="mt-4">
          We recommend booking in advance for the best availability, especially for airport transfers and special events.
        </p>
      </>
    ),
  },
  {
    value: "item-3",
    question: "What are your pricing options?",
    answer: (
      <p>
        Our pricing varies based on the type of service, distance, and vehicle selected. We offer competitive fixed rates for airport transfers and flexible pricing for private hire and event transportation. Contact us for a free, no-obligation quote tailored to your specific journey requirements.
      </p>
    ),
  },
  {
    value: "item-4",
    question: "What happens if my flight is delayed?",
    answer: (
      <>
        <p>
          We monitor all flight arrivals in real-time for airport pickups. If your flight is delayed, we'll automatically adjust your pickup time at no extra charge. There's no need to call us - our system tracks your flight status.
        </p>
        <p className="mt-4">
          For airport transfers, we include 60 minutes of complimentary waiting time from your scheduled landing time, giving you plenty of time to collect luggage and clear customs.
        </p>
      </>
    ),
  },
  {
    value: "item-5",
    question: "Are child seats available?",
    answer: (
      <p>
        Yes, we provide child seats and booster seats free of charge for children of all ages. Simply let us know your requirements when booking, including the age and weight of your child, and we'll ensure the appropriate seat is fitted and ready for your journey. Safety is our top priority.
      </p>
    ),
  },
  {
    value: "item-6",
    question: "What payment methods do you accept?",
    answer: (
      <p>
        We accept all major payment methods including cash, credit/debit cards (Visa, Mastercard, American Express), and bank transfers for corporate accounts. Payment can be made directly to the driver or arranged in advance for airport transfers and pre-booked journeys. Receipts are provided for all transactions.
      </p>
    ),
  },
  {
    value: "item-7",
    question: "How early should I book?",
    answer: (
      <>
        <p>
          For airport transfers and special events, we recommend booking at least 24-48 hours in advance to guarantee availability and secure the best rates.
        </p>
        <p className="mt-4">
          However, we also accommodate last-minute bookings when possible. For same-day service, please call us directly on <a href="tel:01922500500" className="text-app-carz-primary hover:underline font-semibold">01922 500 500</a> to check immediate availability.
        </p>
      </>
    ),
  },
  {
    value: "item-8",
    question: "What is your cancellation policy?",
    answer: (
      <p>
        We understand plans can change. Cancellations made more than 24 hours before your scheduled pickup are free of charge. Cancellations within 24 hours may incur a fee depending on the service booked. For full details on our cancellation policy, please contact our customer service team.
      </p>
    ),
  },
  {
    value: "item-9",
    question: "What types of vehicles do you have?",
    answer: (
      <p>
        Our diverse fleet includes standard saloon cars (4 passengers), executive vehicles for business travel, spacious estate cars (4-5 passengers), MPVs (6-7 passengers), and 8-seater minibuses for larger groups. All vehicles are modern, well-maintained, fully insured, and operated by licensed professional drivers.
      </p>
    ),
  },
  {
    value: "item-10",
    question: "Do you accommodate luggage and special items?",
    answer: (
      <p>
        Yes, all our vehicles have ample luggage space. For airport transfers, please inform us of the number of suitcases when booking. If you're traveling with special items such as sports equipment, musical instruments, or wheelchair accessibility needs, let us know in advance so we can arrange the most suitable vehicle.
      </p>
    ),
  },
  {
    value: "item-11",
    question: "Are your drivers licensed and insured?",
    answer: (
      <p>
        Absolutely. All our drivers are fully licensed by the local authority, have enhanced DBS checks, and carry comprehensive insurance. They undergo regular training in customer service, safe driving practices, and local area knowledge to ensure you receive the highest standard of service.
      </p>
    ),
  },
  {
    value: "item-12",
    question: "Can I book for someone else?",
    answer: (
      <p>
        Yes, you can book and pay for a journey on behalf of another person. Simply provide the passenger's name and contact number when booking. We'll send confirmation details to both you and the passenger to ensure smooth coordination.
      </p>
    ),
  },
];

const FaqSection = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 6);

  return (
    <section id="faq" className="bg-brand-background-secondary py-20 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[2.625rem] leading-[1.3] font-semibold text-brand-text-secondary mb-4">
            Questions?
          </h2>
          <p className="text-lg text-brand-text-tertiary mb-12 max-w-3xl mx-auto">
            Find answers to your most pressing questions about our services, pricing, and how to book your ride with App Carz. We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left text-brand-text-secondary text-xl font-semibold hover:no-underline [&>svg]:ml-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-brand-text-tertiary text-base leading-[1.6]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="bg-brand-button-primary text-brand-button-text text-base font-medium leading-none tracking-[0.03125em] px-8 py-4 rounded-[4px] hover:bg-brand-button-primary/90 transition-colors"
          >
            {showAll ? 'Show Less' : 'View More Questions'}
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-brand-text-tertiary">
            Still have questions? <a href="tel:01922500500" className="text-app-carz-primary hover:underline font-semibold">Call us at 01922 500 500</a> or <a href="mailto:appcarz4@gmail.com" className="text-app-carz-primary hover:underline font-semibold">email us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;