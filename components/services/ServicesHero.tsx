"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const TAGS = [
  "Software Development",
  "Cloud Solution",
  "Cyber Security",
  "Data Analytics",
  "Manage IT Services",
  "Network Solutio",
  "Consulting Service",
  "Software Develop",
];

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-hero-elem",
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
      <section className="relative flex min-h-[60dvh] w-full flex-col items-center justify-center overflow-hidden bg-midnight pt-32 pb-20 text-white">
        {/* Particle Network Overlay (Simulated with CSS/SVG) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <circle cx="60" cy="60" r="1.5" fill="rgba(255,255,255,0.2)" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-16">
          <p className="services-hero-elem mb-6 font-mono text-sm uppercase tracking-widest text-white/50">
            <Link href="/" className="hover:text-azure transition-colors">Home</Link> &gt; <span className="text-azure">Our Services</span>
          </p>
          <h1 className="services-hero-elem font-sans text-6xl font-bold tracking-tight md:text-8xl">
            Our Services
          </h1>
        </div>
      </section>

      {/* The Green Bar Ticker */}
      <div className="services-hero-elem relative z-20 w-full overflow-hidden bg-[#00FF66] py-4">
        <div className="flex w-[200vw]" ref={tickerRef}>
          {[...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
            <div
              key={i}
              className="flex w-max items-center justify-center px-6 font-mono text-sm font-bold uppercase tracking-wider text-midnight"
            >
              {tag}
              <span className="ml-12 inline-block text-midnight/40 text-lg">*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
