"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Antenna, Server, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax for images
      gsap.to(".matrix-img-1", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".matrix-img-2", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".matrix-img-3", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Button Magnetic Effect
      const button = buttonRef.current;
      if (button) {
        button.addEventListener("mousemove", (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.2,
            y: y * 0.2,
            scale: 1.02,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        button.addEventListener("mouseenter", () => {
          gsap.to(arrowRef.current, { x: 2, y: -2, duration: 0.3, ease: "power2.out" });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)",
          });
          gsap.to(arrowRef.current, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        });
      }

      // Feature Rows Interaction
      const rows = document.querySelectorAll(".feature-row");
      rows.forEach((row) => {
        const icon = row.querySelector(".feature-icon");
        if (!icon) return;

        row.addEventListener("mouseenter", () => {
          gsap.to(icon, { rotation: 15, scale: 1.1, duration: 0.3, ease: "back.out(2)" });
        });
        row.addEventListener("mouseleave", () => {
          gsap.to(icon, { rotation: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
        
        {/* Left: Imagery Collage */}
        <div className="relative h-[600px] w-full">
          <div className="matrix-img-1 absolute left-0 top-0 h-[350px] w-[65%] overflow-hidden rounded-[2rem] shadow-xl z-10">
            <Image src="https://picsum.photos/seed/matrix1/600/500" alt="IT Professionals" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="matrix-img-2 absolute right-0 top-[15%] h-[300px] w-[50%] overflow-hidden rounded-[2rem] shadow-xl z-20">
            <Image src="https://picsum.photos/seed/matrix2/500/400" alt="Data Analysis" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="matrix-img-3 absolute bottom-0 left-[15%] h-[250px] w-[60%] overflow-hidden rounded-[2rem] shadow-xl z-30 border-4 border-white">
            <Image src="https://picsum.photos/seed/matrix3/600/300" alt="Dual Monitor Setup" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Right: Content and Features */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-[#00FF66]">
            Best IT Solution
          </p>
          <h2 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-midnight md:text-5xl">
            Lets Elevate Your Business With{" "}
            <span className="font-serif italic text-azure">Strategic</span> IT Solutions
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-midnight/70">
            At Afringe, we understand that every business is unique, which is why we offer a range of flexible IT solutions designed to address your specific challenges and goals.
          </p>

          <div className="mb-12 flex flex-col gap-4">
            {/* Feature Row 1 */}
            <div className="feature-row group flex cursor-pointer items-start gap-5 rounded-2xl p-5 transition-colors duration-300 hover:bg-titanium/50">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-titanium text-azure transition-colors group-hover:bg-white group-hover:shadow-sm">
                <Antenna className="feature-icon h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 font-sans text-xl font-bold text-midnight transition-colors group-hover:text-azure">
                  Network Infrastructure Solutions
                </h4>
                <p className="font-mono text-sm leading-relaxed text-midnight/60">
                  Build a reliable and secure network infrastructure that supports your business operations enables seamless...
                </p>
              </div>
            </div>

            {/* Feature Row 2 */}
            <div className="feature-row group flex cursor-pointer items-start gap-5 rounded-2xl p-5 transition-colors duration-300 hover:bg-titanium/50">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-titanium text-azure transition-colors group-hover:bg-white group-hover:shadow-sm">
                <Server className="feature-icon h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 font-sans text-xl font-bold text-midnight transition-colors group-hover:text-azure">
                  Managed IT Services
                </h4>
                <p className="font-mono text-sm leading-relaxed text-midnight/60">
                  Focus on your core business activities while we take care of your IT needs with our managed IT services.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              ref={buttonRef}
              className="relative overflow-hidden rounded-full bg-midnight px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-azure flex items-center gap-2"
            >
              Discover More
              <ArrowUpRight ref={arrowRef} className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
