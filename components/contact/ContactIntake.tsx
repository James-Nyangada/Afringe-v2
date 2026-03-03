"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Shield, Server, Settings, MessageSquare, ArrowUpRight } from "lucide-react";

const intents = [
  { id: "cyber", label: "Cybersecurity Audit", icon: Shield },
  { id: "cloud", label: "Cloud & Network Infrastructure", icon: Server },
  { id: "automation", label: "Business Automation", icon: Settings },
  { id: "consulting", label: "General IT Consulting", icon: MessageSquare },
  { id: "webapp", label: "Web App Development", icon: Server },
  { id: "mobileapp", label: "Mobile App Development", icon: Server },
];

export function ContactIntake() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedIntent && formRef.current) {
      gsap.fromTo(
        formRef.current,
        { height: 0, opacity: 0, overflow: "hidden" },
        {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(formRef.current, { overflow: "visible" });
          }
        }
      );
    }
  }, [selectedIntent]);

  return (
    <section ref={containerRef} className="relative w-full bg-midnight py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 shadow-2xl">
          
          {/* Step 1: Intent Selection */}
          <div className="relative z-10">
            <h2 className="mb-8 font-sans text-2xl font-bold tracking-tight text-white md:text-3xl text-center">
              What are we building or securing today?
            </h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {intents.map((intent) => {
                const Icon = intent.icon;
                const isSelected = selectedIntent === intent.id;
                
                return (
                  <button
                    key={intent.id}
                    onClick={() => setSelectedIntent(intent.id)}
                    className={`group relative flex items-center gap-4 rounded-xl border p-6 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-[#00FF66] bg-[#00FF66]/10"
                        : "border-white/10 bg-white/5 hover:-translate-y-1 hover:border-azure/50 hover:bg-white/10"
                    }`}
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isSelected ? "bg-[#00FF66] text-midnight" : "bg-white/10 text-white group-hover:bg-azure group-hover:text-white"
                    }`}>
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className={`font-sans text-lg font-medium transition-colors duration-300 ${
                      isSelected ? "text-[#00FF66]" : "text-white"
                    }`}>
                      {intent.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Secure Data Transmission (The Form) */}
          <div ref={formRef} className="relative z-10 h-0 opacity-0 overflow-hidden">
            <div className="mt-12 pt-12 border-t border-white/10">
              <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-azure">
                Step 2: Secure Data Transmission
              </h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="[ Full Name ]"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-4 font-mono text-sm text-white outline-none transition-colors focus:border-[#00FF66] focus:bg-[#00FF66]/5"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="[ Corporate Email ]"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-4 font-mono text-sm text-white outline-none transition-colors focus:border-[#00FF66] focus:bg-[#00FF66]/5"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="[ Company Name ]"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 font-mono text-sm text-white outline-none transition-colors focus:border-[#00FF66] focus:bg-[#00FF66]/5"
                    required
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    placeholder="[ Mission Details (Optional) ]"
                    rows={4}
                    className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 font-mono text-sm text-white outline-none transition-colors focus:border-[#00FF66] focus:bg-[#00FF66]/5"
                  />
                </div>

                <div className="mt-8 flex flex-col items-center gap-6">
                  <button className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-azure px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#00FF66] hover:text-midnight sm:w-auto">
                    <span className="relative z-10 flex items-center gap-2">
                      Transmit Request
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    {/* Sweeping Highlight */}
                    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                  </button>
                  
                  <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF66] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FF66]"></span>
                    </span>
                    System SLA: Our engineers respond to all inquiries within 2 hours.
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
