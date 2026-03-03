"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, CloudRain, Network, ShieldCheck, Atom, Hexagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "AWS", icon: Cloud },
  { name: "Microsoft Azure", icon: CloudRain },
  { name: "Cisco", icon: Network },
  { name: "Fortinet", icon: ShieldCheck },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Hexagon },
];

export function ProjectsTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-item",
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
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
    <section ref={containerRef} className="relative w-full bg-midnight py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-16 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
          Powered by <span className="font-serif italic text-azure">Industry-Leading</span> Technology
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="tech-item group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-8 transition-all duration-500 hover:border-azure/30 hover:bg-azure/5"
              >
                <Icon className="h-12 w-12 text-white/30 transition-colors duration-500 group-hover:text-azure" strokeWidth={1.5} />
                <span className="font-mono text-xs uppercase tracking-widest text-white/30 transition-colors duration-500 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
