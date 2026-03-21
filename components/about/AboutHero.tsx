"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const TAGS = [
  "Software Development",
  "Cloud Solutions",
  "Cyber Security",
  "Data Analytics",
  "Managed Services",
  "Network Solution",
  "Consulting Services",
];

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-elem",
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abouthero.png"
            alt="About us hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-16">
          <p className="about-hero-elem mb-6 font-mono text-sm uppercase tracking-widest text-white/50">
            <Link href="/" className="hover:text-azure transition-colors">Home</Link> &gt; <span className="text-azure">About Us</span>
          </p>
          <h1 className="about-hero-elem font-sans text-6xl font-bold tracking-tight md:text-8xl">
            About Us
          </h1>
        </div>
      </section>

      {/* The Green Bar Ticker */}
      <div className="about-hero-elem relative z-20 w-full overflow-hidden bg-[#00FF66] py-4">
        <div className="flex w-[200vw]" ref={tickerRef}>
          {[...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
            <div
              key={i}
              className="flex w-max items-center justify-center px-6 font-mono text-sm font-bold uppercase tracking-wider text-midnight"
            >
              {tag}
              <span className="ml-12 inline-block text-midnight/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
