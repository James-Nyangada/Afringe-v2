"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Newsletter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".newsletter-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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
    <section ref={containerRef} className="relative w-full bg-titanium py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="newsletter-content">
          <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-midnight md:text-6xl">
            We are Committed To{" "}
            <span className="font-serif italic text-azure">Businesses</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-midnight/70">
            At Afringe IT Solutions we are passionate about driving innovation
            through technology solutions that address your unique business needs.
          </p>

          <form
            className="mx-auto flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-full border border-midnight/10 bg-white px-6 py-4 font-mono text-sm text-midnight outline-none transition-all focus:border-azure focus:ring-2 focus:ring-azure/20"
              required
            />
            <MagneticButton className="w-full sm:w-auto">
              Subscribe
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
