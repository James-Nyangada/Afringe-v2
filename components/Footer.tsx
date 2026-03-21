"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full rounded-t-[4rem] bg-midnight pt-32 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 max-w-fit">
              <div className="relative flex items-center justify-center rounded-xl bg-transparent">
                <div className="relative w-44 h-12 md:w-56 md:h-14 flex items-center justify-center">
                  <Image 
                    src="/Afringe limited logo.png" 
                    alt="Afringe Logo" 
                    width={500}
                    height={500}
                    className="h-full w-auto object-contain scale-[2.4] md:scale-[3] pointer-events-none origin-center"
                  />
                </div>
              </div>
            </Link>
            <p className="font-mono text-sm leading-relaxed text-white/60">
              At Afringe IT Solutions we are passionate about driving innovation
              through technology solutions that address the unique needs of
              businesses we serve.
            </p>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="mb-6 font-sans text-lg font-bold">Services</h4>
            <ul className="flex flex-col gap-4 font-mono text-sm text-white/60">
              <li className="transition-colors hover:text-azure">
                <Link href="/services/business-automation">Business Automation</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/services/web-development-hosting">Web & Hosting Solutions</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/services/data-privacy-compliance">Data Privacy Compliance</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/services/endpoint-cybersecurity">Endpoint Cybersecurity</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/services/cyber-awareness-training">Cyber Awareness Training</Link>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="mb-6 font-sans text-lg font-bold">Company</h4>
            <ul className="flex flex-col gap-4 font-mono text-sm text-white/60">
              <li className="transition-colors hover:text-azure">
                <Link href="/about">About Us</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/projects">Our Projects</Link>
              </li>
              <li className="transition-colors hover:text-azure">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="mb-6 font-sans text-lg font-bold">Contact</h4>
            <ul className="flex flex-col gap-4 font-mono text-sm text-white/60">
              <li>Nairobi, Kenya</li>
              <li>0720837270</li>
              <li className="transition-colors hover:text-azure">
                <a href="mailto:info@afringe.co.ke">info@afringe.co.ke</a>
              </li>
              <li>Mon - Fri, 8:00am - 5:00pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-white/40 md:flex-row">
          <p>Copyright © 2024 Afringe Limited.</p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-white/80">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
