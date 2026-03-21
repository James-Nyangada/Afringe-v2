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
            alt="Afringe Hero Digital Transformation"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          ref={textRef}
          className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center mt-32"
        >
          <p className="hero-element mb-12 font-mono text-sm uppercase tracking-widest text-black">
            A strategy to make your strategic technology solutions partner
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
    </div>
  );
}
