"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Star, Phone } from "lucide-react";

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
            className="absolute left-1/2 -translate-x-1/2 top-full w-full h-auto mt-1"
            viewBox="0 0 190 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                ref={pathRef}
                d="M8 6C22.3333 1.33333 36.6667 1.33333 51 6C65.3333 10.6667 79.6667 10.6667 94 6C108.333 1.33333 122.667 1.33333 137 6C151.333 10.6667 165.667 10.6667 180 6"
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
    
    const usps = [
        { icon: Shield, text: "Licensed Drivers" },
        { icon: Clock, text: "24/7 Service" },
        { icon: CheckCircle2, text: "Fixed Airport Fares" },
        { icon: Star, text: "15+ Years Experience" }
    ];

    const handleBookNow = () => {
        window.open(
            "https://appcarz.webbooker.icabbi.com/",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-app-carz-background-primary font-poppins"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/professional-black-luxury-taxi-fleet-par-93de1207-20251030133458.jpg"
                    alt="Professional luxury taxi fleet"
                    fill
                    priority
                    className="object-cover transition-transform duration-100 ease-out"
                    style={{ transform: `scale(${scale})` }}
                    sizes="100vw"
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B2838]/90 via-[#0B2838]/80 to-[#0B2838]/90" />
            </div>

            {/* Dotted pattern overlay */}
            <div
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"
            />
            
            <div className="relative z-10 flex flex-col items-center px-4 pt-32 pb-8 md:pt-24 lg:pt-4 text-center max-w-5xl mx-auto">
                {/* Desktop heading - line under just "Services" */}
                <h1 className="hidden md:block text-4xl font-semibold text-white tracking-[-0.025em] md:text-5xl lg:text-[60px] lg:leading-[1.2] drop-shadow-lg">
                    Experience Exceptional Transport <span className="relative inline-block">Services<ZigzagUnderline /></span>
                </h1>

                {/* Mobile heading - line under "Transport Services" */}
                <h1 className="block md:hidden text-4xl font-semibold text-white tracking-[-0.025em] leading-[1.2] drop-shadow-lg">
                    Experience Exceptional <span className="relative inline-block whitespace-nowrap">Transport Services<ZigzagUnderline /></span>
                </h1>

                <p className="mt-6 max-w-[680px] text-lg text-white/90 drop-shadow-md">
                    Discover the premier private hire taxi experience in West Midlands. Our professional drivers ensure a safe and comfortable journey tailored to your needs.
                </p>

                {/* USPs Display */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
                    {usps.map((usp, index) => (
                        <div 
                            key={index}
                            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <usp.icon className="w-8 h-8 text-[#FACC15]" />
                            <span className="text-white text-sm font-medium text-center">{usp.text}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <Button 
                        onClick={handleBookNow}
                        size="lg" 
                        className="h-auto rounded-md bg-[#FACC15] px-10 py-4 text-base font-semibold text-[#0B2838] shadow-lg hover:bg-[#F5C211] transition-all duration-300 hover:scale-105"
                    >
                        Book Now
                    </Button>
                    <Button asChild size="lg" className="h-auto rounded-md bg-[#FF6B6B] px-10 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#ff5252] transition-all duration-300 hover:scale-105">
                        <Link href="tel:01922500500" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            01922 500 500
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="h-auto rounded-md bg-white px-10 py-4 text-base font-semibold text-[#0B2838] shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                        <Link href="#services">View Our Services</Link>
                    </Button>
                </div>

                {/* App Download Buttons */}
                <div className="mt-8 flex flex-col items-center gap-3">
                    <p className="text-white/80 text-sm font-medium">Download Our App</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                            href="https://apps.apple.com/gb/app/app-carz/id1550577371"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            <div className="flex flex-col items-start">
                                <span className="text-xs">Download on the</span>
                                <span className="text-lg font-semibold leading-tight">App Store</span>
                            </div>
                        </a>
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.icabbi.walsallradiocars&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <div className="flex flex-col items-start">
                                <span className="text-xs">GET IT ON</span>
                                <span className="text-lg font-semibold leading-tight">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;