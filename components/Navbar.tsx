"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -50px",
        end: 99999,
        onToggle: (self) => setIsScrolled(self.isActive),
        onEnter: () => {
          gsap.to(nav, {
            width: "min(800px, 90%)",
            marginTop: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "3rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            duration: 0.5,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(nav, {
            width: "100%",
            marginTop: "0",
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            border: "1px solid transparent",
            borderRadius: "0",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const linkHoverColor = theme === "dark" && !isScrolled ? "hover:text-azure" : "hover:text-azure";
  const linkTextColor = theme === "dark" && !isScrolled ? "text-white/80" : "text-midnight/80";

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full justify-center pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto flex w-full items-center justify-between px-8 py-6 transition-colors"
        style={{ width: "100%" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className={`relative flex items-center justify-center rounded-xl p-2 transition-all duration-300 ${theme === "dark" && !isScrolled ? "bg-white/95 shadow-lg" : "bg-transparent mix-blend-multiply"}`}>
            <Image 
              src="/logo.png" 
              alt="Afringe Logo" 
              width={200} 
              height={80} 
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {["About Us", "Our Services", "Our Projects"].map((item) => {
            let href = `/#${item.toLowerCase().replace(" ", "-")}`;
            if (item === "About Us") href = "/about";
            if (item === "Our Services") href = "/services";
            if (item === "Our Projects") href = "/projects";
            
            return (
              <Link
                key={item}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 ${linkTextColor} ${linkHoverColor}`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <Link href="/contact">
          <MagneticButton>Contact Us</MagneticButton>
        </Link>
      </nav>
    </div>
  );
}
