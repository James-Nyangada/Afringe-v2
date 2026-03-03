"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pulse animation for badge
      gsap.to(".badge-border", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });

      // Skill bars animation
      ScrollTrigger.create({
        trigger: barsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(".skill-fill", {
            width: (i, target) => target.dataset.width,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-us"
      ref={containerRef}
      className="relative w-full bg-white py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
        {/* Left: Image & Badge */}
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] lg:max-w-none">
          <Image
            src="https://picsum.photos/seed/professionals/800/800"
            alt="Professionals in office"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Badge */}
          <div className="absolute bottom-8 left-8 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-midnight text-white shadow-2xl">
            <div className="badge-border absolute inset-0 rounded-full border-2 border-azure" />
            <span className="font-sans text-3xl font-bold">25+</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-titanium">
              Years Exp.
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-midnight md:text-5xl">
            Empower Your Business With Our{" "}
            <span className="font-serif italic text-azure">Comprehensive</span>{" "}
            IT Solutions
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-midnight/70">
            At Afringe we align your business goals with cutting-edge technology
            solutions. We deliver IT services that empower you to stay ahead of
            the curve and achieve sustainable growth.
          </p>

          {/* Skill Bars */}
          <div ref={barsRef} className="mb-12 flex flex-col gap-6">
            <div>
              <div className="mb-2 flex justify-between font-mono text-sm font-medium">
                <span>IT Consulting</span>
                <span>88%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-titanium">
                <div
                  className="skill-fill h-full w-0 rounded-full bg-azure"
                  data-width="88%"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between font-mono text-sm font-medium">
                <span>Cyber Security</span>
                <span>95%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-titanium">
                <div
                  className="skill-fill h-full w-0 rounded-full bg-midnight"
                  data-width="95%"
                />
              </div>
            </div>
          </div>

          <div>
            <MagneticButton>Know More</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
