"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: "01",
    title: "Operation Sentinel: Regional Bank Security Overhaul",
    tags: "Cybersecurity • Endpoint Protection",
    desc: "Deployed a zero-trust network architecture and advanced endpoint detection to neutralize targeted ransomware threats, achieving 100% compliance with NDPA and international financial regulations.",
    metric: "Zero breaches since deployment.",
    image: "/tech-setup.png",
    align: "left",
    slug: "operation-sentinel",
  },
  {
    id: "02",
    title: "Cloud Nexus: High-Traffic Retail Scaling",
    tags: "Cloud Solutions • Web Development",
    desc: "Migrated a legacy e-commerce platform to a fully automated, auto-scaling cloud environment. Reduced page load times by 65% and maintained zero downtime during peak holiday traffic spikes.",
    metric: "Supported 500% traffic increase.",
    image: "/abouthero.png",
    align: "right",
    slug: "cloud-nexus",
  },
  {
    id: "03",
    title: "Automated Enterprise: Logistics Workflow Integration",
    tags: "Business Automation • IT Consulting",
    desc: "Streamlined procurement and HR processes through custom business automation software, eliminating data silos and providing real-time analytics to the executive dashboard.",
    metric: "Saved 40+ hours of manual data entry weekly.",
    image: "/work-setup.png",
    align: "left",
    slug: "automated-enterprise",
  },
];

export function ProjectsCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const containers = document.querySelectorAll(".parallax-container");
      
      containers.forEach((container) => {
        const img = container.querySelector(".parallax-img");
        if (!img) return;

        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const cards = document.querySelectorAll(".glass-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-midnight py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-6">
        {caseStudies.map((study, i) => {
          const isLeft = study.align === "left";

          return (
            <div
              key={study.id}
              className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                isLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Container with Parallax */}
              <div className="parallax-container relative h-[500px] w-full overflow-hidden rounded-[2rem] lg:h-[700px] lg:w-2/3">
                <div className="absolute inset-0 z-10 bg-midnight/20 mix-blend-multiply" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="parallax-img object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Glass Text Block */}
              <div
                className={`glass-card relative z-20 w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl lg:absolute lg:w-[45%] lg:p-12 ${
                  isLeft ? "lg:-right-4" : "lg:-left-4"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00FF66]">
                    {study.tags}
                  </span>
                  <span className="font-serif text-2xl italic text-white/30">
                    {study.id}
                  </span>
                </div>
                <h3 className="mb-6 font-sans text-3xl font-bold leading-tight text-white md:text-4xl">
                  {study.title}
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/70">
                  {study.desc}
                </p>
                <div className="mb-10 border-l-2 border-azure pl-4">
                  <p className="font-mono text-sm uppercase tracking-widest text-white">
                    Key Metric
                  </p>
                  <p className="font-sans text-xl font-medium text-azure mt-1">
                    {study.metric}
                  </p>
                </div>
                <Link href={`/projects/${study.slug}`} className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-white transition-colors hover:text-azure">
                  Read Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
