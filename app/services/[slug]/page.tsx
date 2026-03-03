"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData.find((s) => s.slug === slug);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!service) return;

    let ctx = gsap.context(() => {
      // Hero Title Split Text Animation
      const titleWords = gsap.utils.toArray(".hero-title-word");
      gsap.fromTo(
        titleWords,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power3.out", delay: 0.2 }
      );

      // Hero Elements Fade In
      gsap.fromTo(
        ".hero-fade",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.6 }
      );

      // Current State Glow Pulse
      gsap.to(".current-state-glow", {
        opacity: 0.6,
        scale: 1.1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Bento Cards Stagger
      gsap.fromTo(
        ".bento-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".architecture-section",
            start: "top 75%",
          },
        }
      );

      // Metrics Fade Up
      gsap.fromTo(
        ".metric-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".metrics-section",
            start: "top 80%",
          },
        }
      );

      // Closing Protocol Terminal Reveal
      gsap.fromTo(
        ".terminal-window",
        { scale: 0.9, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".closing-protocol",
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [service, slug]);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-midnight p-6 font-mono text-white">
        <div className="w-full max-w-2xl rounded-xl border border-white/20 bg-black/50 p-8 backdrop-blur-md">
          <p className="mb-4 text-red-500">ERROR 404: SERVICE_NOT_FOUND</p>
          <p className="mb-8 text-white/70">
            The requested service protocol could not be located in the system registry.
          </p>
          <Link href="/">
            <MagneticButton>Return to Base</MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  // Split title into words for animation
  const titleWords = service.title.split(" ");

  return (
    <main ref={containerRef} className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar theme="dark" />

      {/* A. THE APEX HERO */}
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-midnight px-6 pt-32 text-center overflow-hidden">
        {/* Dynamic SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center">
          {slug === "business-automation" && (
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" className="text-azure" />
              <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" className="text-white" />
              <path d="M400 100 L400 700 M100 400 L700 400" stroke="currentColor" strokeWidth="1" className="text-azure/50" />
            </svg>
          )}
          {slug === "endpoint-cybersecurity" && (
            <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 100 L700 250 L700 550 L400 700 L100 550 L100 250 Z" stroke="currentColor" strokeWidth="2" className="text-[#00FF66] animate-pulse" />
              <circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="1" className="text-white/30" />
            </svg>
          )}
          {slug === "web-development-hosting" && (
            <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="200" y="200" width="400" height="400" rx="20" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <path d="M200 300 L600 300" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <circle cx="250" cy="250" r="10" fill="currentColor" className="text-white/50" />
              <circle cx="290" cy="250" r="10" fill="currentColor" className="text-white/50" />
              <circle cx="330" cy="250" r="10" fill="currentColor" className="text-white/50" />
            </svg>
          )}
          {slug === "data-privacy-compliance" && (
            <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="300" y="200" width="200" height="150" rx="20" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <path d="M350 200 V150 C350 120 450 120 450 150 V200" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <circle cx="400" cy="275" r="20" stroke="currentColor" strokeWidth="2" className="text-white" />
              <path d="M400 295 V320" stroke="currentColor" strokeWidth="2" className="text-white" />
            </svg>
          )}
          {slug === "cyber-awareness-training" && (
            <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="300" r="100" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <path d="M200 700 C200 500 600 500 600 700" stroke="currentColor" strokeWidth="2" className="text-azure" />
              <circle cx="400" cy="300" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="text-[#00FF66] animate-spin-slow" />
            </svg>
          )}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white to-transparent z-10" />

        <div className="relative z-20 flex max-w-4xl flex-col items-center">
          <div className="hero-fade mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60">
            <Link href="/" className="hover:text-azure transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
            <span>/</span>
            <span className="text-azure">{service.shortName}</span>
          </div>

          <p className="hero-fade mb-6 font-mono text-sm font-bold tracking-widest text-azure">
            {service.tagline}
          </p>

          <h1 className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-sans text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            {titleWords.map((word, i) => (
              <span key={i} className="hero-title-word inline-block">
                {word}
              </span>
            ))}
          </h1>

          <p className="hero-fade max-w-2xl font-sans text-lg text-white/80 md:text-xl leading-relaxed">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* B. THE CURRENT STATE */}
      <section className="relative flex w-full flex-col items-center justify-center bg-midnight px-6 py-32 overflow-hidden">
        {/* Ambient Glow */}
        <div className="current-state-glow absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-red-400">
            The Challenge
          </h2>
          <p className="font-serif text-3xl italic leading-relaxed text-white md:text-5xl">
            "{service.problemStatement}"
          </p>
        </div>
      </section>

      {/* C. THE ARCHITECTURE */}
      <section className="architecture-section relative w-full bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-mono text-sm uppercase tracking-widest text-azure">
              Our Technical Approach
            </h2>
            <p className="mt-4 font-sans text-4xl font-bold text-midnight">
              Core Capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.capabilities.map((cap, index) => {
              const IconComponent = (LucideIcons as any)[cap.icon] || LucideIcons.CheckCircle;
              return (
                <div
                  key={index}
                  className="bento-card group relative overflow-hidden rounded-3xl border border-midnight/5 bg-midnight/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-midnight hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-colors duration-500 group-hover:bg-azure">
                    <IconComponent className="h-6 w-6 text-midnight group-hover:text-white" />
                  </div>
                  <h3 className="mb-4 font-sans text-xl font-bold text-midnight transition-colors duration-500 group-hover:text-white">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-midnight/70 transition-colors duration-500 group-hover:text-white/70">
                    {cap.description}
                  </p>
                  
                  {/* Hover Reveal Sub-list (Simulated with a decorative line for now) */}
                  <div className="mt-8 h-[1px] w-0 bg-azure transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. THE METRICS */}
      <section className="metrics-section relative w-full border-t border-midnight/5 bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-midnight/10">
            {service.metrics.map((metric, index) => (
              <div key={index} className="metric-item flex flex-col items-center justify-center text-center pt-12 md:pt-0 px-6">
                <p className="font-sans text-3xl font-bold text-midnight md:text-4xl lg:text-5xl">
                  {metric}
                </p>
                <div className="mt-4 h-1 w-12 bg-azure rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. THE CLOSING PROTOCOL */}
      <section className="closing-protocol relative flex min-h-[80vh] w-full items-center justify-center bg-midnight px-6 py-24 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="terminal-window relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-2xl backdrop-blur-xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-xs text-white/50">afringe_deployment_protocol.exe</span>
          </div>
          
          {/* Terminal Body */}
          <div className="flex flex-col items-center p-12 text-center md:p-20">
            <h2 className="mb-6 font-sans text-3xl font-bold text-white md:text-5xl">
              Ready to deploy <span className="text-azure">{service.shortName}</span>?
            </h2>
            <p className="mb-12 max-w-xl font-mono text-sm leading-relaxed text-white/60">
              Initiate a secure connection with our engineering team to architect your custom solution. System resources are standing by.
            </p>
            
            <Link href={`/contact?intent=${slug}`}>
              <MagneticButton>
                <span className="flex items-center gap-2">
                  Initiate Consultation Protocol
                  <LucideIcons.ArrowUpRight className="h-5 w-5" />
                </span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
