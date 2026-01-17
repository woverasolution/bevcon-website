"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown, CheckCircle2 } from "lucide-react";
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
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
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
    <div className="relative inline-grid items-center justify-start overflow-hidden">
      {/* Invisible spacer to set container dimensions based on longest word */}
      <span className="invisible col-start-1 row-start-1 opacity-0 pointer-events-none pb-2 pr-2">
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
      
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbb3a] to-[#e5a834] font-bold pb-2 pr-2"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
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
  
  // Parallax for Background Image
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  // Parallax for Content (slower)
  const yContent = useTransform(scrollY, [0, 1000], [0, 50]);
  // Blur effect on scroll
  const blurBg = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(4px)"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center py-12 lg:py-20"
    >
      {/* 1. Textured Background Layer */}
      <div className="absolute inset-0 bg-[#F7F4F0] z-0">
        <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        {/* Animated Gradient Orbs */}
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
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-slate-200/60 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. Parallax Image Layer (Right Side / Background) */}
      <motion.div 
        style={{ y: yBg, filter: blurBg }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] z-0 overflow-hidden hidden lg:block"
      >
         {/* Mask Image with Gradient to fade into texture */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#F7F4F0] via-[#F7F4F0]/60 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F7F4F0] via-transparent to-[#F7F4F0]" />
        
        <Image
          src="/images/hero-image-1.png"
          alt="Industrial Beverage Plant"
          fill
          className="object-cover object-left opacity-80"
          priority
        />
      </motion.div>

      {/* 3. Main Content Content */}
      <div className="container-width max-w-[95%] xl:max-w-[1600px] relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center h-full">
        
        {/* Left Column: Text & CTA */}
        <motion.div style={{ y: yContent }} className="space-y-6 lg:space-y-8 max-w-3xl">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 pl-0 pr-4 py-1"
          >
            <span className="h-[1px] w-8 bg-[#ffbb3a]"></span>
            <span className="text-sm font-medium tracking-[0.2em] text-[#455660] uppercase">
              Global Beverage Engineering
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl tracking-tight text-[#455660]">
              <AnimatedTextWord text="From Concept" delay={0.4} />
              <div className="flex flex-wrap items-center gap-x-3 lg:gap-x-4">
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
            className="text-base text-[#455660]/80 md:text-lg lg:text-xl font-light leading-relaxed max-w-lg"
          >
            We partner with investors to plan, structure, and deliver beverage projects worldwide. 
            <span className="block mt-1 lg:mt-2 font-medium text-[#455660]">Precision engineering. Executive confidence.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.6 }}
             className="flex flex-wrap items-center gap-4 lg:gap-5 pt-1 lg:pt-2"
          >
            <StaticButton className="btn-primary shadow-glow hover:shadow-glow-primary px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base bg-[#455660] hover:bg-[#3b4b53] rounded-sm uppercase tracking-wider font-bold">
              Start Your Project
            </StaticButton>
            
            <StaticButton className="group flex items-center gap-3 px-5 py-3 lg:px-6 lg:py-4 text-sm font-semibold text-[#455660] transition-colors hover:text-[#3b4b53] uppercase tracking-wider">
               <div className="relative flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-[#9a9a9a]/30 bg-white shadow-sm transition-transform group-hover:scale-110">
                <PlayCircle className="h-4 w-4 lg:h-5 lg:w-5 text-[#ffbb3a] fill-[#ffbb3a]/10" />
              </div>
              <span className="underline-offset-4 group-hover:underline">View Portfolio</span>
            </StaticButton>
          </motion.div>

           {/* Trusted By (Mini) */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.4 }}
             className="pt-6 lg:pt-8 border-t border-[#9a9a9a]/30 flex flex-col sm:flex-row gap-5 sm:items-center"
           >
              <span className="text-[10px] lg:text-xs uppercase tracking-widest text-[#9a9a9a] font-medium">Trusted by Industry Leaders</span>
              <div className="flex gap-4 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                 {/* Placeholder Logos */}
                 <div className="h-5 w-16 lg:h-6 lg:w-20 bg-[#455660]/20 rounded"></div>
                 <div className="h-5 w-16 lg:h-6 lg:w-20 bg-[#455660]/20 rounded"></div>
                 <div className="h-5 w-16 lg:h-6 lg:w-20 bg-[#455660]/20 rounded"></div>
              </div>
           </motion.div>

        </motion.div>

        {/* Right Column - Removed Card to show full image */}
        <div className="hidden lg:block" />

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#9a9a9a]">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-[#9a9a9a]" />
        </motion.div>
      </motion.div>
    </section>
  );
}