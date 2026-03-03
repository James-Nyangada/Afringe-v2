"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "James Nyabande",
    role: "Chief Executive Officer (CEO)",
    image: "https://picsum.photos/seed/ceo/600/800",
  },
  {
    name: "Mark Nyabande",
    role: "Chief Operations Officer (COO)",
    image: "https://picsum.photos/seed/coo/600/800",
  },
  {
    name: "James Ochieng",
    role: "Software Developer",
    image: "https://picsum.photos/seed/dev/600/800",
  },
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-20 font-sans text-4xl font-bold tracking-tight text-midnight md:text-5xl">
          Meet With Our <span className="font-serif italic text-azure">Expert</span> Team
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card group relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-titanium"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-700 ease-in-out grayscale group-hover:scale-105 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-left text-white">
                <h3 className="mb-2 font-sans text-2xl font-bold">
                  {member.name}
                </h3>
                <p className="font-mono text-sm text-azure">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
