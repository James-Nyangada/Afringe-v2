"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

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
    <>
      <div className="fixed top-0 left-0 z-50 flex w-full justify-center pointer-events-none">
        <nav
          ref={navRef}
          className="pointer-events-auto flex w-full items-center justify-between px-8 py-6 transition-colors"
          style={{ width: "100%" }}
        >
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative flex items-center justify-center rounded-xl transition-all duration-300 bg-transparent flex-shrink-0">
              <div className="relative w-40 h-10 md:w-52 md:h-12 flex items-center justify-center">
                <Image 
                  src="/Afringe limited logo.png" 
                  alt="Afringe Logo" 
                  width={500}
                  height={500}
                  className="h-full w-auto object-contain scale-[2.2] md:scale-[2.8] pointer-events-none origin-center"
                  priority
                />
              </div>
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

          <div className="hidden md:block">
            <Link href="/contact">
              <MagneticButton>Contact Us</MagneticButton>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 -mr-2 rounded-lg transition-colors ${linkTextColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 backdrop-blur-md transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } ${theme === "dark" ? "bg-black/95" : "bg-white/95"}`}
      >
        <div className="flex flex-col items-center gap-8 p-8 w-full max-w-sm mt-12">
          {["About Us", "Our Services", "Our Projects"].map((item) => {
            let href = `/#${item.toLowerCase().replace(" ", "-")}`;
            if (item === "About Us") href = "/about";
            if (item === "Our Services") href = "/services";
            if (item === "Our Projects") href = "/projects";
            
            return (
              <Link
                key={item}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium hover:text-azure transition-colors duration-300 ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                {item}
              </Link>
            );
          })}
          
          <div onClick={() => setIsMobileMenuOpen(false)} className="mt-8 w-full flex justify-center">
            <Link href="/contact">
              <MagneticButton>Contact Us</MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
