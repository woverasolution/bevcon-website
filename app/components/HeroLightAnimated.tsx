"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

// --- Animated Components ---

const RotatingText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  useEffect(() => {
    if (words.length < 2) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-grid align-baseline overflow-hidden">
      {/* Reserve width to avoid layout shift when words rotate */}
      <span className="col-start-1 row-start-1 invisible opacity-0 pointer-events-none">
        {longestWord}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbb3a] to-[#e5a834] font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const StaticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string, onClick?: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn("relative z-10", className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// --- Main Hero Component ---

export default function HeroLightAnimated() {
  const { scrollY } = useScroll();
  
  // Parallax for Background Video
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  // Parallax for Content (slower)
  const yContent = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section className="relative w-full overflow-hidden flex items-start lg:items-center justify-center lg:h-[100svh] lg:min-h-screen">
      {/* 1. Textured Background Layer */}
      <div className="absolute inset-0 bg-[#F7F4F0] z-0">
        <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        {/* Animated Gradient Orbs - Adjusted for video presence */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px]"
        />
      </div>

      {/* 2. Parallax Video Layer (Right Side / Background) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] z-0 overflow-hidden hidden lg:block"
      >
        <div 
          className="relative w-full h-full"
          style={{ 
            maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)"
          }}
        >
           <Image
            src="/images/beverage-visual-01.png"
            alt="Beverage Concept Visual"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Subtle overlay to harmonize with site colors */}
          <div className="absolute inset-0 bg-[#455660]/10 mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>

      {/* 3. Main Content Content */}
      <div className="container-width max-w-[95%] xl:max-w-[1600px] relative z-10 grid w-full lg:h-full lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:py-20">

        {/* Left Column: Text & CTA */}
        <motion.div style={{ y: yContent }} className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-2xl lg:max-w-[90%] xl:max-w-2xl lg:pr-8 xl:pr-12">

          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 pl-0 pr-3 sm:pr-4 py-1">
            <span className="h-[1px] w-6 sm:w-8 bg-[#ffbb3a]"></span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] text-[#455660] uppercase">
              Global Beverage Engineering
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#455660]">
              <span className="block">From Concept</span>
              <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 lg:gap-x-4">
                <span className="text-[#9a9a9a] font-light">to</span>
                <RotatingText words={["First Bottle", "Market Leader", "Full Capacity", "Peak Efficiency"]} />
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#455660]/80 md:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
            We partner with investors to plan, structure, and deliver beverage projects worldwide.
            <span className="block mt-2 font-medium text-[#455660]">Precision engineering. Executive confidence.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5 pt-2">
            <StaticButton
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#455660] hover:bg-[#3b4b53] rounded-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Discuss Your Project
            </StaticButton>

            {/* Removed Explore Services button */}
          </div>


        </motion.div>

        {/* Mobile visual sits below hero copy instead of overlapping it */}
        <div className="lg:hidden w-full">
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-2xl border border-[#455660]/10 shadow-[0_24px_60px_-32px_rgba(69,86,96,0.5)]">
            <Image
              src="/images/beverage-visual-01.png"
              alt="Beverage Concept Visual"
              fill
              className="absolute inset-0 w-full h-full object-cover object-center"
              sizes="(max-width: 1024px) 95vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4F0]/35 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Column - Spacer to push text left */}
        <div className="hidden lg:block" />

      </div>

    </section>
  );
}
