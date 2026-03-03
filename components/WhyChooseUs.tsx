"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Network, ServerCog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-block",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-midnight md:text-6xl">
            Lets Elevate Your Business With{" "}
            <span className="font-serif italic text-azure">Strategic</span> IT
            Solutions
          </h2>
          <p className="text-xl leading-relaxed text-midnight/70">
            At Afringe, we understand that every business is unique, with its
            own set of challenges and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Block 1 */}
          <div className="feature-block group relative overflow-hidden rounded-[2.5rem] bg-midnight p-12 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-azure/20 opacity-50" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                <Network className="h-10 w-10 text-azure" />
              </div>
              <div>
                <h3 className="mb-4 font-sans text-3xl font-bold">
                  Network Infrastructure Solutions
                </h3>
                <p className="font-mono text-base leading-relaxed text-white/70">
                  Robust and secure network infrastructure tailored to your
                  business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="feature-block group relative overflow-hidden rounded-[2.5rem] bg-titanium p-12 text-midnight">
            <div className="absolute inset-0 bg-gradient-to-br from-titanium via-titanium to-white opacity-50" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                <ServerCog className="h-10 w-10 text-azure" />
              </div>
              <div>
                <h3 className="mb-4 font-sans text-3xl font-bold">
                  Managed IT Services
                </h3>
                <p className="font-mono text-base leading-relaxed text-midnight/70">
                  Focus on your core business activities while we manage your IT
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
