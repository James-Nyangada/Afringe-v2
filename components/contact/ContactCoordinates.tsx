"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactCoordinates() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".coord-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-midnight py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Side - The Coordinates */}
          <div className="flex flex-col gap-10">
            <h2 className="coord-item font-sans text-4xl font-bold tracking-tight text-white md:text-5xl">
              Global Reach. <br />
              <span className="font-serif italic text-azure">Local Expertise.</span>
            </h2>

            <div className="coord-item flex flex-col gap-6">
              {/* Location Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azure/20 text-azure">
                  <MapPin className="h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-azure/40" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-semibold text-white">Nairobi, Kenya</h3>
                  <p className="mt-1 font-mono text-sm text-white/50">The Address Building, 4th Floor<br />Muthangari Drive, Westlands</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6">
                  <Phone className="h-6 w-6 text-azure" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Direct Line</p>
                    <p className="mt-1 font-sans font-medium text-white">0720837270</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6">
                  <Mail className="h-6 w-6 text-azure" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Email Routing</p>
                    <p className="mt-1 font-sans font-medium text-white">info@afringelimited.co.ke</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6">
                <Clock className="h-6 w-6 text-azure" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-white/50">Operating Hours</p>
                  <p className="mt-1 font-sans font-medium text-white">Mon - Fri, 8:00am - 5:00pm (EAT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Abstract Map */}
          <div className="coord-item relative h-[500px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-8 flex items-center justify-center">
            {/* Abstract Node Network SVG */}
            <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              {/* Generate some random paths and nodes to look like a global network */}
              <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
                <path d="M 100 100 Q 200 50 300 150 T 500 200" />
                <path d="M 50 300 Q 150 400 250 250 T 450 350" />
                <path d="M 200 100 Q 300 250 400 100" />
                <path d="M 150 350 Q 250 200 350 300" />
                <path d="M 300 150 L 250 250 L 350 300 Z" fill="rgba(255,255,255,0.02)" />
              </g>
              <g fill="rgba(255,255,255,0.4)">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="150" r="4" />
                <circle cx="500" cy="200" r="3" />
                <circle cx="50" cy="300" r="3" />
                <circle cx="250" cy="250" r="5" />
                <circle cx="450" cy="350" r="4" />
                <circle cx="200" cy="100" r="3" />
                <circle cx="400" cy="100" r="3" />
                <circle cx="150" cy="350" r="3" />
                <circle cx="350" cy="300" r="4" />
              </g>
            </svg>

            {/* Pulsing Beacon over "Nairobi" */}
            <div className="relative z-10 flex flex-col items-center translate-x-12 translate-y-8">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#00FF66] opacity-40 duration-1000" />
                <div className="absolute inset-2 animate-ping rounded-full bg-[#00FF66] opacity-60 duration-700 delay-150" />
                <div className="relative h-3 w-3 rounded-full bg-[#00FF66] shadow-[0_0_15px_#00FF66]" />
              </div>
              <div className="mt-2 rounded bg-black/80 px-2 py-1 border border-[#00FF66]/30 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#00FF66]">Nairobi Node Active</p>
              </div>
            </div>
            
            {/* Scanline overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
