"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ZigzagUnderline = () => {
    const pathRef = useRef<SVGPathElement>(null);
    useEffect(() => {
        const path = pathRef.current;
        if(path) {
            const timer = setTimeout(() => {
                const pathLength = path.getTotalLength();
                path.style.strokeDasharray = `${pathLength} ${pathLength}`;
                path.style.strokeDashoffset = `${pathLength}`;
                
                path.style.transition = "stroke-dashoffset 1s ease-out 0.5s";
                path.style.strokeDashoffset = "0";

            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <svg
            className="absolute left-0 top-full w-full h-auto mt-1"
            viewBox="0 0 190 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                ref={pathRef}
                d="M2 6C16.3333 1.33333 30.6667 1.33333 45 6C59.3333 10.6667 73.6667 10.6667 88 6C102.333 1.33333 116.667 1.33333 131 6C145.333 10.6667 159.667 10.6667 174 6"
                stroke="#FACC15"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
};

const HeroSection = () => {
    const [scale, setScale] = useState(1.1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const effectRange = 500;
            const newScale = Math.max(1, 1.1 - (scrollY / effectRange) * 0.1);
            setScale(newScale);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-app-carz-background-primary font-poppins"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] transition-transform duration-100 ease-out"
                style={{ transform: `scale(${scale})` }}
            />
            
            <div className="relative z-10 flex flex-col items-center p-4 text-center">
                <h1 className="text-4xl font-semibold text-app-carz-text-primary tracking-[-0.025em] md:text-5xl lg:text-[60px] lg:leading-[1.2]">
                    Experience{" "}
                    <span className="relative inline-block">
                        Exceptional
                        <ZigzagUnderline />
                    </span>{" "}
                    Transport Services
                </h1>

                <p className="mt-6 max-w-[640px] text-lg text-slate-300">
                    Discover the premier private hire taxi experience in West Midlands. Our professional drivers ensure a safe and comfortable journey tailored to your needs.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-auto rounded-[4px] bg-white px-8 py-3 text-base font-medium text-app-carz-button-primary transition-colors hover:bg-gray-200">
                        <Link href="/about-us">Learn More</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-auto rounded-[4px] border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white hover:text-app-carz-button-primary">
                        <Link href="/services">Our Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;