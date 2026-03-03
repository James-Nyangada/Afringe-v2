"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: "+", label: "Enterprise Deployments" },
  { value: 99.99, suffix: "%", label: "Uptime Engineered", isFloat: true },
  { value: 24, suffix: "/7", label: "Active Threat Monitoring" },
  { value: 25, suffix: "+", label: "Years Combined Expertise" },
];

export function ProjectsLedger() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const targetValue = stats[i].value;
        const isFloat = stats[i].isFloat;

        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: targetValue,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
            onUpdate: function () {
              const val = Number(this.targets()[0].innerHTML);
              this.targets()[0].innerHTML = isFloat ? val.toFixed(2) : Math.ceil(val).toString();
            },
          }
        );
      });

      gsap.fromTo(
        ".ledger-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-midnight py-24 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="ledger-item flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-2 flex items-baseline font-sans text-5xl font-bold tracking-tight text-white md:text-6xl">
                <span ref={(el) => { countersRef.current[i] = el; }}>0</span>
                <span className="text-azure">{stat.suffix}</span>
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
