"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let ctx = gsap.context(() => {
      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.2,
          y: y * 0.2,
          scale: 1.02,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(textRef.current, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      button.addEventListener("mouseenter", () => {
        gsap.to(bgRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power3.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(textRef.current, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(bgRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power3.out",
        });
      });
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden rounded-full bg-midnight px-8 py-3 text-sm font-medium text-white transition-colors",
        className
      )}
      {...props}
    >
      <span
        ref={bgRef}
        className="absolute inset-0 -translate-y-full rounded-full bg-azure"
      />
      <span ref={textRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
