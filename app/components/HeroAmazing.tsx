"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, ChevronDown, PlayCircle } from "lucide-react";
import { cn } from "@/app/lib/utils";

/**
 * Animated Text Component that reveals words character by character
 */
const AnimatedTitle = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
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
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * Mouse-tracking spotlight effect for the "Start" button
 */
const SpotlightButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string, onClick?: () => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-slate-800 bg-slate-900 overflow-hidden rounded-md px-8 py-4 transition-colors hover:bg-slate-800/80 cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,187,58,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex items-center gap-2 text-white font-semibold tracking-wide uppercase text-sm">
        {children}
      </div>
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yContent = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] w-full overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Layer with Parallax & Overlay */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-image-1.png"
          alt="Industrial Beverage Facility"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        
        {/* Animated Grain/Texture Overlay (Optional - adds 'film' feel) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yContent, opacity: opacityHero }}
        className="relative z-10 container-width h-full flex flex-col justify-center"
      >
        <div className="max-w-4xl space-y-8 pt-20">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              Global Beverage Engineering
            </span>
          </motion.div>

          {/* Main Headline with Staggered Reveal */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl tracking-tight text-white">
            <AnimatedTitle text="From Concept" className="block" />
            <span className="flex items-center gap-4 text-slate-500">
               <motion.span 
                 initial={{ scaleX: 0 }} 
                 animate={{ scaleX: 1 }} 
                 transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                 className="h-[2px] w-12 md:w-24 bg-amber-500 origin-left inline-block" 
               />
               <AnimatedTitle text="to First Bottle" className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600" />
            </span>
          </h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-xl text-lg text-slate-300 md:text-xl font-light leading-relaxed border-l-2 border-white/10 pl-6"
          >
            We partner with investors to plan, structure, and deliver beverage projects worldwide. 
            <span className="block mt-2 text-white font-medium">Precision engineering. Executive confidence.</span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <SpotlightButton>
              Start Your Project <ArrowRight className="h-4 w-4" />
            </SpotlightButton>
            
            <button className="group flex items-center gap-3 rounded-md px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:text-amber-400">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:border-amber-500/50 group-hover:bg-amber-500/10">
                <PlayCircle className="h-5 w-5" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Metrics / Social Proof Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/5 bg-slate-950/80 backdrop-blur-sm"
      >
        <div className="container-width flex flex-col md:flex-row items-center justify-between py-6 gap-6 md:gap-0">
           <div className="flex gap-12 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold text-white">180+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">$4.2B</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Capital Managed</p>
              </div>
               <div className="hidden md:block">
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Countries</p>
              </div>
           </div>
           
           <div className="hidden lg:flex items-center gap-4 text-xs font-medium text-slate-400">
             <span className="uppercase tracking-widest">Trusted By</span>
             <div className="h-px w-12 bg-white/10"></div>
             {/* Simple Logo Placeholders */}
             <div className="flex gap-6 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
               <span>Coca-Cola</span>
               <span>Heineken</span>
               <span>Diageo</span>
               <span>PepsiCo</span>
             </div>
           </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 right-10 z-20 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500 rotate-90 origin-right translate-x-2 mb-8">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-amber-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
