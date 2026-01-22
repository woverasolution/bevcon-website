"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

// --- Animated Components ---

const AnimatedTextWord = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay + 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", columnGap: "0.25em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const RotatingText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block align-baseline overflow-hidden">
      {/* Invisible spacer to set container dimensions based on longest word */}
      <span className="invisible opacity-0 pointer-events-none">
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbb3a] to-[#e5a834] font-bold"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax for Background Video
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  // Parallax for Content (slower)
  const yContent = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center py-8 sm:py-12 lg:py-20"
    >
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
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Subtle overlay to harmonize with site colors */}
          <div className="absolute inset-0 bg-[#455660]/10 mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>

      {/* Mobile Video Background (Optional - lighter version or keeping it clean? Let's show it but with heavy overlay) */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F4F0]/90 z-10" />
        <Image
          src="/images/beverage-visual-01.png"
          alt="Beverage Concept Visual"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* 3. Main Content Content */}
      <div className="container-width max-w-[95%] xl:max-w-[1600px] relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full px-4 sm:px-6">

        {/* Left Column: Text & CTA */}
        <motion.div style={{ y: yContent }} className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-2xl lg:max-w-[90%] xl:max-w-2xl lg:pr-8 xl:pr-12">

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 pl-0 pr-3 sm:pr-4 py-1"
          >
            <span className="h-[1px] w-6 sm:w-8 bg-[#ffbb3a]"></span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] text-[#455660] uppercase">
              Global Beverage Engineering
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#455660]">
              <AnimatedTextWord text="From Concept" delay={0.4} />
              <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 lg:gap-x-4">
                <span className="text-[#9a9a9a] font-light">to</span>
                <RotatingText words={["First Bottle", "Market Leader", "Full Capacity", "Peak Efficiency"]} />
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm sm:text-base text-[#455660]/80 md:text-lg lg:text-xl font-light leading-relaxed max-w-lg"
          >
            We partner with investors to plan, structure, and deliver beverage projects worldwide.
            <span className="block mt-2 font-medium text-[#455660]">Precision engineering. Executive confidence.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.6 }}
             className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5 pt-2"
          >
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
          </motion.div>


        </motion.div>

        {/* Right Column - Spacer to push text left */}
        <div className="hidden lg:block" />

      </div>

    </section>
  );
}