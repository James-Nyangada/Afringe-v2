"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, User } from "lucide-react";

const team = [
  {
    name: "James Nyangada",
    role: "Director Systems & Innovation",
    image: "https://picsum.photos/seed/jamesn/600/800",
  },
  {
    name: "Mark Nyangada",
    role: "Director Infrastructure Services",
    image: "https://picsum.photos/seed/markn/600/800",
  },
  {
    name: "James Oywang",
    role: "Director Operations",
    image: null, // Silhouette
  },
];

export function AboutTeam() {
  return (
    <section className="relative w-full bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-azure">
          Our Team
        </p>
        <h2 className="mb-20 font-sans text-4xl font-bold tracking-tight text-midnight md:text-5xl">
          Meet With Our <span className="font-serif italic text-azure">Expert</span> Team
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-titanium"
            >
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-midnight/5 transition-transform duration-700 ease-out group-hover:scale-105">
                  <User className="h-32 w-32 text-midnight/20" />
                </div>
              )}
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent p-8 text-left text-white opacity-90 transition-opacity duration-500">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-2 font-sans text-2xl font-bold">
                    {member.name}
                  </h3>
                  <p className="mb-6 font-mono text-sm text-azure">
                    {member.role}
                  </p>
                  
                  {/* Social Links sliding up */}
                  <div className="flex items-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-colors hover:bg-azure">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
