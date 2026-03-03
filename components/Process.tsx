"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    title: "Discovery & Consultation",
    desc: "Deeply understanding your business goals and challenges to map out the best strategy.",
    num: "01",
  },
  {
    title: "Implementation & Integration",
    desc: "Seamless integration into your current environment with minimal disruption.",
    num: "02",
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Ensuring protection against threats and compliance with industry regulations.",
    num: "03",
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Rigorous testing of all systems to ensure optimal performance and security.",
    num: "04",
  },
  {
    title: "Deployment & Training",
    desc: "Smooth deployment and comprehensive training for your team to maximize value.",
    num: "05",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Scale down previous cards slightly as new ones stack on top
        if (i > 0) {
          gsap.to(cardsRef.current[i - 1], {
            scale: 0.95,
            opacity: 0.5,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-midnight py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-32 text-center">
          <h2 className="font-sans text-4xl font-bold tracking-tight md:text-6xl">
            Unlocking Success: The Path To{" "}
            <span className="font-serif italic text-azure">Seamless</span> Solutions
          </h2>
        </div>

        <div className="relative flex flex-col gap-12 pb-32">
          {processes.map((proc, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="sticky top-[120px] flex min-h-[40vh] w-full flex-col justify-between rounded-[2.5rem] border border-white/10 bg-midnight p-12 shadow-2xl backdrop-blur-xl md:flex-row md:items-center"
              style={{ zIndex: i }}
            >
              <div className="mb-8 md:mb-0 md:w-1/2">
                <span className="mb-6 block font-mono text-6xl font-bold text-azure/30 md:text-8xl">
                  {proc.num}
                </span>
                <h3 className="font-sans text-3xl font-bold leading-tight md:text-5xl">
                  {proc.title}
                </h3>
              </div>
              <div className="md:w-5/12">
                <p className="font-mono text-lg leading-relaxed text-white/70">
                  {proc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
