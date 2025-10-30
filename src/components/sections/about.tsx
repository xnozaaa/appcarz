"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Custom hook to detect if an element is in view
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, inView };
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      if (end === 0) {
        setCount(0);
        return;
      }
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="inline-block">
      <span className="counter-number">{count}</span>
    </div>
  );
};


export default function About() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });
  const { ref: stat1Ref, inView: stat1InView } = useInView({ threshold: 0.2 });
  const { ref: stat2Ref, inView: stat2InView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="bg-brand-background-secondary py-20 lg:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/elegant-business-lady-white-looks-out-minivan-taxi-2.jpg"
              alt="A business woman in white clothing looking out from a luxury black minivan taxi"
              width={1080}
              height={720}
              className="rounded-lg object-cover w-full h-auto"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
          
          <div className="w-full flex flex-col">
            <div ref={titleRef} className={`${titleInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
              <h2 className="text-brand-text-secondary font-semibold text-[42px] leading-[1.3]">
              Discover Our Story
              </h2>
            </div>
            
            <div 
              ref={textRef} 
              className={`mt-5 ${textInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: textInView ? '0.2s': '0s' }}
            >
              <p className="text-brand-text-tertiary text-lg leading-[1.6]">
                At App Carz, we are committed to providing safe, reliable, and efficient transportation services that exceed customer expectations. Our mission is to ensure every journey is comfortable and tailored to your needs.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <div 
                ref={stat1Ref} 
                className={`${stat1InView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: stat1InView ? '0.4s': '0s' }}
              >
                <div className="flex items-baseline">
                  <AnimatedCounter end={5} />
                  <span className="text-2xl font-semibold text-brand-counter-text ml-2">values</span>
                </div>
                <p className="mt-4 counter-label text-brand-text-tertiary leading-[1.4]">
                  We uphold values such as Customer Satisfaction, Safety and Reliability, Professionalism, and Community Engagement, which guide our operations and interactions.
                </p>
              </div>
              
              <div 
                ref={stat2Ref} 
                className={`${stat2InView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: stat2InView ? '0.6s': '0s' }}
              >
                <div className="flex items-baseline">
                  <AnimatedCounter end={15} />
                  <span className="text-2xl font-semibold text-brand-counter-text ml-2">years</span>
                </div>
                <p className="mt-4 counter-label text-brand-text-tertiary leading-[1.4]">
                  With over 15 years of combined experience, our team is dedicated to maintaining the highest standards in the transport industry.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}