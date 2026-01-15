"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function HeroOption3() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Construction", "Contracts", "Consulting", "Concept", "Confidence", "Control", "Connect"],
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
    <section className={`relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1C2331] ${montserrat.variable} ${openSans.variable}`}>
      {/* Background - Image with Deep Slate Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png"
          alt="BevCon Industrial Facility"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Deep Slate Charcoal Overlay/Tint */}
        <div className="absolute inset-0 bg-[#1C2331]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#1C2331]/60"></div>
      </div>

      <div className="relative z-10 container-width text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Static Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-[family-name:var(--font-montserrat)] tracking-tight uppercase leading-tight drop-shadow-xl">
            Next Generation<br />
            Beverage Solutions.
          </h1>
          
          {/* Dynamic Sub-headline */}
          <div className="text-xl md:text-2xl text-white font-[family-name:var(--font-open-sans)] max-w-4xl mx-auto leading-relaxed flex flex-col md:block items-center justify-center gap-2 drop-shadow-md">
            <span>Delivering global projects through expert</span>
            <span className="inline-flex relative h-[1.2em] w-[180px] md:w-[220px] justify-start overflow-visible ml-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={titleNumber}
                  className="absolute left-0 font-bold text-primary"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  {titles[titleNumber]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
