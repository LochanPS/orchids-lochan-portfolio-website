"use client";

import React from "react";

/**
 * SeedFundingMarquee Component
 * A seamless, infinite scrolling marquee for seed funding announcement.
 * 
 * Design characteristics:
 * - Continuous, uninterrupted motion
 * - Pure black background
 * - High-contrast white text
 */
export default function SeedFundingMarquee() {
  const sentence = "Currently Exploring Seed Funding for AutoCDA.";
  // Duplicate enough times to ensure it covers the screen width and loops seamlessly
  const instances = Array(8).fill(sentence);

  return (
    <section className="bg-black py-8 border-y border-[#1a1a1a] overflow-hidden select-none">
      <div className="relative flex">
        {/* The animation moves the container by -50%, so we need two identical sets of content */}
        <div className="flex animate-marquee-seamless whitespace-nowrap">
          {instances.map((text, idx) => (
            <span 
              key={`set1-${idx}`} 
              className="inline-block mx-12 text-[2.5rem] md:text-[4rem] font-black uppercase tracking-tighter text-white"
            >
              {text}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {instances.map((text, idx) => (
            <span 
              key={`set2-${idx}`} 
              className="inline-block mx-12 text-[2.5rem] md:text-[4rem] font-black uppercase tracking-tighter text-white"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-seamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-seamless {
          animation: marquee-seamless 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
