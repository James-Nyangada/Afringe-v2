"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function AboutTestimonials() {
  return (
    <section className="relative w-full bg-midnight py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-azure">
            Testimonials
          </p>
          <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl">
            See What Our <span className="font-serif italic text-azure">Customer</span> Says
          </h2>
        </div>

        <div className="relative flex items-center justify-center gap-8">
          {/* Faded Card */}
          <div className="hidden lg:flex w-[400px] shrink-0 flex-col justify-between rounded-[2rem] border border-white/5 bg-white/5 p-10 backdrop-blur-md opacity-40 scale-90 translate-x-12">
            <Quote className="mb-6 h-10 w-10 text-azure/50" />
            <p className="mb-8 font-mono text-sm leading-relaxed text-white/70">
              &quot;Afringe Limited was able to provide an innovative CCTV and access control solution that addressed our security vulnerabilities completely. Their dedication to client satisfaction and ongoing maintenance are truly commendable.&quot;
            </p>
            <div>
              <h4 className="font-sans text-lg font-bold">Harrison Mutua</h4>
              <p className="font-mono text-xs text-azure">Operations Director</p>
            </div>
          </div>

          {/* Primary Card */}
          <div className="relative z-10 flex w-full max-w-2xl shrink-0 flex-col justify-between rounded-[2.5rem] border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-xl">
            <Quote className="mb-8 h-12 w-12 text-azure" />
            <p className="mb-10 font-sans text-xl leading-relaxed md:text-2xl">
              &quot;Afringe has been our go-to partner for IT support for several years. Their team is highly responsive, knowledgeable, and delivers reliable business automation solutions that allow us to focus on growing our business.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-titanium overflow-hidden">
                <Image src="/office-work.png" alt="Scott Boland" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-sans text-xl font-bold">Scott Boland</h4>
                <p className="font-mono text-sm text-azure">Operations Manager, Logistics Africa</p>
              </div>
            </div>
          </div>
          
          {/* Right Faded Card */}
          <div className="hidden lg:flex w-[400px] shrink-0 flex-col justify-between rounded-[2rem] border border-white/5 bg-white/5 p-10 backdrop-blur-md opacity-40 scale-90 -translate-x-12">
            <Quote className="mb-6 h-10 w-10 text-azure/50" />
            <p className="mb-8 font-mono text-sm leading-relaxed text-white/70">
              &quot;The cybersecurity deployment from Afringe was flawless. Their seamless integration of zero-trust architecture and proactive monitoring have saved us countless hours of downtime.&quot;
            </p>
            <div>
              <h4 className="font-sans text-lg font-bold">Sarah Jenkins</h4>
              <p className="font-mono text-xs text-azure">CTO, Nairobi Financial Bank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
