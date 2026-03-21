"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parallax-img-1", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".parallax-img-2", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".parallax-img-3", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-titanium py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-azure">
            Our IT Solution
          </p>
          <h2 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-midnight md:text-5xl">
            Lets Elevate Your Business With{" "}
            <span className="font-serif italic text-azure">Strategic</span> IT Solutions
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-midnight/70">
            At Afringe, we understand that every business is unique, which is why we offer a range of flexible IT solutions designed to address your specific challenges and goals.
          </p>

          <ul className="mb-12 flex flex-col gap-4">
            {[
              {
                title: "Network Infrastructure Solutions",
                desc: "Build a robust and secure network infrastructure that connects your business operations seamlessly.",
              },
              {
                title: "Managed IT Services",
                desc: "Focus on your core business activities while we take care of your IT needs with our managed IT services.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-transparent p-6 transition-all duration-300 hover:border-azure/20 hover:bg-white hover:shadow-md hover:translate-x-2"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-azure" />
                <div>
                  <h4 className="mb-2 font-sans text-xl font-bold text-midnight transition-colors group-hover:text-azure">
                    {item.title}
                  </h4>
                  <p className="font-mono text-sm leading-relaxed text-midnight/60">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <MagneticButton>Discover More</MagneticButton>
          </div>
        </div>

        {/* Right: Parallax Collage */}
        <div className="relative h-[600px] w-full order-1 lg:order-2">
          <div className="parallax-img-1 absolute left-0 top-0 h-[300px] w-[60%] overflow-hidden rounded-[2rem] shadow-xl z-10">
            <Image src="/image-1.jpg" alt="Collaboration" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="parallax-img-2 absolute right-0 top-[20%] h-[350px] w-[50%] overflow-hidden rounded-[2rem] shadow-xl z-20">
            <Image src="/data-center.png" alt="Collaboration" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="parallax-img-3 absolute bottom-0 left-[10%] h-[250px] w-[55%] overflow-hidden rounded-[2rem] shadow-xl z-30">
            <Image src="/abouthero.png" alt="Collaboration" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

      </div>
    </section>
  );
}
