"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import { Settings, Code2, Lock, Radar, ShieldAlert } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Automation",
    desc: "Automate business processes for enhanced efficiency and ROI.",
    icon: Settings,
    animClass: "gear-spin",
    slug: "business-automation",
  },
  {
    title: "Website Development & Hosting",
    desc: "Comprehensive website solutions tailored to your unique needs.",
    icon: Code2,
    animClass: "code-slide",
    slug: "web-development-hosting",
  },
  {
    title: "Data Privacy Compliance",
    desc: "Ensure compliance with GDPR, NDPA, and other data protection regulations.",
    icon: Lock,
    animClass: "lock-padlock",
    slug: "data-privacy-compliance",
  },
  {
    title: "Endpoint Protection",
    desc: "Comprehensive cybersecurity solutions designed to protect business-critical assets.",
    icon: Radar,
    animClass: "radar-sweep",
    slug: "endpoint-cybersecurity",
  },
  {
    title: "Cybersecurity Awareness Trainings",
    desc: "Empower your workforce with knowledge to identify and stop cyber attacks.",
    icon: ShieldAlert,
    animClass: "shield-pulse",
    slug: "cyber-awareness-training",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered entrance
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Micro-interactions on hover
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((card) => {
        const icon = card.querySelector(".service-icon");
        if (!icon) return;

        card.addEventListener("mouseenter", () => {
          if (icon.classList.contains("gear-spin")) {
            gsap.to(icon, { rotation: "+=180", duration: 1, ease: "power2.out" });
          } else if (icon.classList.contains("code-slide")) {
            gsap.to(icon, { x: 10, yoyo: true, repeat: 1, duration: 0.3 });
          } else if (icon.classList.contains("lock-padlock")) {
            gsap.to(icon, { y: -5, yoyo: true, repeat: 1, duration: 0.2 });
          } else if (icon.classList.contains("radar-sweep")) {
            gsap.to(icon, { rotation: 360, duration: 2, ease: "linear", repeat: -1 });
          } else if (icon.classList.contains("shield-pulse")) {
            gsap.to(icon, { scale: 1.2, yoyo: true, repeat: 1, duration: 0.3 });
          }
        });

        card.addEventListener("mouseleave", () => {
          if (icon.classList.contains("radar-sweep")) {
            gsap.killTweensOf(icon);
            gsap.to(icon, { rotation: 0, duration: 0.5 });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-services"
      ref={containerRef}
      className="relative w-full bg-titanium py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-midnight md:text-5xl">
            Our <span className="font-serif italic text-azure">Services</span>
          </h2>
          <MagneticButton>View All Services</MagneticButton>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                href={`/services/${svc.slug}`}
                key={i}
                className="service-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-titanium text-azure transition-colors group-hover:bg-azure group-hover:text-white">
                  <Icon className={`service-icon h-8 w-8 ${svc.animClass}`} />
                </div>
                <div>
                  <h3 className="mb-4 font-sans text-xl font-bold leading-snug text-midnight">
                    {svc.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-midnight/60">
                    {svc.desc}
                  </p>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-azure/5 blur-2xl transition-all group-hover:bg-azure/20" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
