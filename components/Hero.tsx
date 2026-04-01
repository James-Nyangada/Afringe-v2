"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticButton } from "./MagneticButton";
import Image from "next/image";

const TAGS = [
  "Software Development",
  "Cloud Solutions",
  "IT Solution",
  "Data Analytics",
  "Technology",
  "Cyber Security",
  "Consulting Services",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered fade up for text elements
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Ticker animation
      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col">
      <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-titanium pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/office-work.png"
            alt="IT solutions and cybersecurity team in Nairobi Kenya — Afringe Limited"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          ref={textRef}
          className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center mt-32"
        >
          <div className="hero-element mb-6 flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-widest text-azure bg-midnight/5 px-4 py-1 rounded-full border border-midnight/10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Nairobi, Kenya
          </div>
          <p className="hero-element mb-12 max-w-3xl font-mono text-sm uppercase tracking-widest text-black leading-relaxed">
            Nairobi&apos;s trusted IT partner for cybersecurity, business automation, CCTV installation, software development, and managed IT services — serving enterprises, SMEs, and government agencies across Kenya and East Africa.
          </p>
          <h1 className="hero-element mb-12 flex flex-col items-center gap-4 font-sans text-5xl font-bold tracking-tight text-midnight md:text-7xl lg:text-8xl">
            <span>Empowering your</span>
            <span className="font-serif italic text-azure leading-none py-2">digital transformation</span>
            <span>journey.</span>
          </h1>
          <div className="hero-element mt-8">
            <MagneticButton className="px-10 py-4 text-base">
              Get Started
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Animated Ticker - Moved below the hero section */}
      <div className="hero-element relative z-20 w-full overflow-hidden border-y border-black/5 bg-azure/70 py-6">
        <div className="flex w-[200vw]" ref={tickerRef}>
          {[...TAGS, ...TAGS].map((tag, i) => (
            <div
              key={i}
              className="flex w-max items-center justify-center px-8 font-mono text-sm uppercase tracking-wider text-black"
            >
              {tag}
              <span className="ml-16 inline-block h-1.5 w-1.5 rounded-full bg-azure/50" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="w-full bg-midnight py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 text-center text-white/80 font-mono text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2"><span className="text-[#00FF66] font-bold">10+</span> Years in IT</div>
          <div className="hidden md:block w-px h-5 bg-white/20"></div>
          <div className="flex items-center gap-2"><span className="text-[#00FF66] font-bold">50+</span> Projects Delivered</div>
          <div className="hidden md:block w-px h-5 bg-white/20"></div>
          <div className="flex items-center gap-2"><span className="text-[#00FF66] font-bold">24/7</span> Security Monitoring</div>
          <div className="hidden lg:block w-px h-5 bg-white/20"></div>
          <div className="flex items-center gap-2">Serving Government & Enterprise</div>
        </div>
      </div>
    </div>
  );
}
