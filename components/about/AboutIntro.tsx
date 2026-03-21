"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function AboutIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".badge-pulse", {
        scale: 1.05,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      ScrollTrigger.create({
        trigger: barsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(".skill-fill-about", {
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
    <section ref={containerRef} className="relative w-full bg-white py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
        {/* Left: Image & Badge */}
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] lg:max-w-none">
          <Image
            src="/tech-setup.png"
            alt="Office Technology Setup"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Badge */}
          <div className="absolute bottom-8 right-8 flex h-40 w-40 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-2xl">
            <div className="badge-pulse absolute inset-0 rounded-2xl border border-white/40" />
            <span className="font-sans text-4xl font-bold">24/7</span>
            <span className="mt-2 text-center font-mono text-xs uppercase tracking-wider text-white/80">
              Availability
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-azure">
            Our Service
          </p>
          <h2 className="mb-8 font-sans text-4xl font-bold leading-tight tracking-tight text-midnight md:text-5xl">
            Empower Your Business With Our{" "}
            <span className="font-serif italic text-azure">Comprehensive</span>{" "}
            IT Solutions
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-midnight/70 relative">
            Welcome to Afringe, your premier destination for cutting edge technology solutions and IT services. At Afringe, we are passionate about harnessing the power of technology to empower businesses like...
            <span className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent" />
          </p>

          {/* Skill Bars */}
          <div ref={barsRef} className="mb-12 flex flex-col gap-8">
            <div>
              <div className="mb-3 flex justify-between font-mono text-sm font-medium text-midnight">
                <span>IT Consulting</span>
                <span>100%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-titanium">
                <div
                  className="skill-fill-about h-full w-0 rounded-full bg-azure"
                  data-width="100%"
                />
              </div>
            </div>
            <div>
              <div className="mb-3 flex justify-between font-mono text-sm font-medium text-midnight">
                <span>Cyber Security</span>
                <span>90%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-titanium">
                <div
                  className="skill-fill-about h-full w-0 rounded-full bg-midnight"
                  data-width="90%"
                />
              </div>
            </div>
          </div>

          <div>
            <MagneticButton>Learn More</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
