"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ServicesNewsletter() {
  return (
    <section className="relative w-full bg-titanium py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-midnight md:text-6xl">
          We are Committed To{" "}
          <span className="font-serif italic text-azure">Businesses</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-midnight/70">
          At Afringe IT Solutions, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.
        </p>

        <form
          className="mx-auto flex w-full max-w-2xl items-center rounded-full border border-midnight/10 bg-white p-2 shadow-sm transition-all focus-within:border-azure focus-within:ring-4 focus-within:ring-azure/20"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent px-6 py-4 font-mono text-sm text-midnight outline-none"
            required
          />
          <button className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-midnight px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-azure">
            Subscribe
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
