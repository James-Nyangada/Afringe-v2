"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Globe, ShieldCheck, Radar, BookOpenCheck } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Automation",
    desc: "Automate business processes like HR, procurement, e-commerce, and compliance.",
    icon: Settings,
    colSpan: "col-span-1 md:col-span-6 lg:col-span-5", // Wider
    slug: "business-automation",
  },
  {
    title: "Website Development, Optimization, Maintenance, and Hosting",
    desc: "Comprehensive website services including development, optimization, maintenance, and hosting.",
    icon: Globe,
    colSpan: "col-span-1 md:col-span-6 lg:col-span-7", // Wider
    slug: "web-development-hosting",
  },
  {
    title: "Data Privacy Compliance",
    desc: "Ensure compliance with GDPR, CCPA, HIPAA, and other data protection regulations.",
    icon: ShieldCheck,
    colSpan: "col-span-1 md:col-span-4 lg:col-span-4", // Narrower
    slug: "data-privacy-compliance",
  },
  {
    title: "Endpoint Protection and Cybersecurity Solutions",
    desc: "Comprehensive cybersecurity solutions to safeguard businesses against cyber threats.",
    icon: Radar,
    colSpan: "col-span-1 md:col-span-4 lg:col-span-4", // Narrower
    slug: "endpoint-cybersecurity",
  },
  {
    title: "Cybersecurity Awareness Trainings",
    desc: "Implement cybersecurity awareness programs to educate employees.",
    icon: BookOpenCheck,
    colSpan: "col-span-1 md:col-span-4 lg:col-span-4", // Narrower
    slug: "cyber-awareness-training",
  },
];

export function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      const cards = document.querySelectorAll(".bento-card");
      cards.forEach((card) => {
        const icon = card.querySelector(".bento-icon");
        if (!icon) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.3, ease: "back.out(1.5)" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-titanium py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                href={`/services/${svc.slug}`}
                key={i}
                className={`bento-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-transparent bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-azure/30 hover:shadow-xl ${svc.colSpan}`}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-titanium text-azure transition-colors group-hover:bg-azure/10">
                  <Icon className="bento-icon h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-4 font-sans text-2xl font-bold leading-snug text-midnight">
                    {svc.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-midnight/60">
                    {svc.desc}
                  </p>
                </div>
                {/* Decorative corner glow */}
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-azure/5 blur-3xl transition-all duration-500 group-hover:bg-azure/20" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
