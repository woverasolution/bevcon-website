"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["cept", "struction", "tracts", "fidence", "sulting", "trol", "nect"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png"
          alt="BevCon Industrial Facility"
          fill
          className="object-cover object-center blur-[2px]"
          priority
        />
        
        {/* Dark Overlay for maximum text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container-width text-center">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col items-center">
            {/* Top Label */}
            <span className="block mb-4 text-2xl md:text-3xl font-medium tracking-normal text-white uppercase drop-shadow-lg">
              Next Generation
            </span>

            {/* Split Layout for Stability */}
            <div className="flex flex-col items-center w-full max-w-[90vw] mx-auto gap-2 sm:gap-4">
              {/* Static Line 1 */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl whitespace-nowrap">
                <span className="text-primary">BEV</span>ERAGE
              </div>

              {/* Dynamic Line 2: Centered Split Layout */}
              <div className="flex justify-center items-center w-full">
                 {/* Left Side: "CON" (Right Aligned to Center) */}
                <div className="flex justify-end w-[40%]">
                   <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary drop-shadow-2xl text-right whitespace-nowrap">
                    CON
                  </span>
                </div>

                {/* Right Side: Suffix (Left Aligned from Center) */}
                <div className="flex justify-start w-[60%]">
                  <div className="relative h-[1.3em] w-full text-left overflow-visible flex items-center">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={titleNumber}
                        className="absolute left-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl whitespace-nowrap"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -60, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      >
                        {titles[titleNumber].toUpperCase()}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light pt-4">
            BevCon partners with investors to plan, structure, and deliver beverage projects worldwide.
          </p>
          
          <div className="pt-8">
            <Link href="#contact" className="btn-primary inline-block min-w-[200px] text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
