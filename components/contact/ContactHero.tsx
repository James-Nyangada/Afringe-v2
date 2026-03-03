"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const TAGS = [
  "24/7 Threat Neutralization",
  "Strategic IT Consulting",
  "Enterprise Automation",
  "Rapid Deployment",
  "Zero-Trust Architecture",
];

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-elem",
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
          duration: 30,
          repeat: -1,
        });
      }
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col">
      <section className="relative flex min-h-[65dvh] w-full flex-col items-center justify-center overflow-hidden bg-midnight pt-32 pb-20 text-white">
        {/* Interactive SVG Network Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            ref={svgRef}
            className="h-full w-full transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid-contact" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <circle cx="100" cy="100" r="2" fill="rgba(255,255,255,0.3)" />
                <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.3)" />
                <path d="M 0 0 L 100 100" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
                <path d="M 100 0 L 0 100" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-16 max-w-4xl">
          <p className="contact-hero-elem mb-6 font-mono text-sm uppercase tracking-widest text-white/50">
            <Link href="/" className="hover:text-azure transition-colors">Home</Link> &gt; <span className="text-azure">Contact Us</span>
          </p>
          <h1 className="contact-hero-elem font-sans text-6xl font-bold tracking-tight md:text-8xl mb-6">
            Initiate Secure Comms
          </h1>
          <p className="contact-hero-elem text-lg md:text-xl text-white/70 leading-relaxed font-sans max-w-2xl">
            Partner with our engineers to secure your infrastructure, automate your workflows, and scale your digital presence.
          </p>
        </div>
      </section>

      {/* The Green Bar Ticker */}
      <div className="contact-hero-elem relative z-20 w-full overflow-hidden bg-[#00FF66] py-4">
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
