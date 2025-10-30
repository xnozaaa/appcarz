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
        We provide a range of transportation services including private hire taxis, airport transfers, and special event transportation tailored to your needs.
      </p>
    ),
  },
  {
    value: "item-2",
    question: "How do I book a ride?",
    answer: (
      <>
        <p>
          You can easily book a ride through our app or by calling our customer service team on 01922 500 500.
        </p>
        <p className="mt-4">
          We recommend booking in advance for the best availability.
        </p>
      </>
    ),
  },
  {
    value: "item-3",
    question: "What are your pricing options?",
    answer: (
      <p>
        Our pricing varies based on the type of service and distance. For detailed pricing information, please visit our Services page.
      </p>
    ),
  },
];

const FaqSection = () => {
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
            {faqData.map((item) => (
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
          <Button className="bg-brand-button-primary text-brand-button-text text-base font-medium leading-none tracking-[0.03125em] px-8 py-4 rounded-[4px] hover:bg-brand-button-primary/90 transition-colors">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;