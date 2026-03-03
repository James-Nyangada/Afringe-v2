"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const TAGS = [
  "Zero Downtime Achieved",
  "100% Data Compliance",
  "24/7 Threat Neutralization",
  "Cloud Infrastructure Scaled",
  "Seamless ERP Integrations",
];

export function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-hero-elem",
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
          duration: 30, // Slower for longer text
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col">
      <section className="relative flex min-h-[65dvh] w-full flex-col items-center justify-center overflow-hidden bg-midnight pt-32 pb-20 text-white">
        {/* Particle Network Overlay (Simulated with CSS/SVG) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-projects" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-projects)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-16 max-w-4xl">
          <p className="projects-hero-elem mb-6 font-mono text-sm uppercase tracking-widest text-white/50">
            <Link href="/" className="hover:text-azure transition-colors">Home</Link> &gt; <span className="text-azure">Our Projects</span>
          </p>
          <h1 className="projects-hero-elem font-sans text-6xl font-bold tracking-tight md:text-8xl mb-6">
            Featured Projects
          </h1>
          <p className="projects-hero-elem text-lg md:text-xl text-white/70 leading-relaxed font-sans max-w-2xl">
            Engineering digital resilience and scalable growth for forward-thinking enterprises.
          </p>
        </div>
      </section>

      {/* The Green Bar Ticker */}
      <div className="projects-hero-elem relative z-20 w-full overflow-hidden bg-[#00FF66] py-4">
        <div className="flex w-[200vw]" ref={tickerRef}>
          {[...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
            <div
              key={i}
              className="flex w-max items-center justify-center px-8 font-mono text-sm font-bold uppercase tracking-wider text-midnight"
            >
              {tag}
              <span className="ml-16 inline-block text-midnight/40 text-lg">*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
