import React from 'react';

const FleetSection = () => {
  return (
    <section id="fleet" className="bg-brand-background-secondary py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center animate-fadeInUp">
          <h2 className="text-[42px] font-semibold leading-[1.3] text-brand-text-secondary">
            Our Fleet
          </h2>
          <p className="mt-4 text-lg text-brand-text-tertiary">
            Explore our diverse range of vehicles, designed for safety and comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;