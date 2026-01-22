"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";
import HeroVideo from "./HeroVideo";
import HeroHeadline from "./HeroHeadline";
import HeroMetrics from "./HeroMetrics";
import { useReducedMotion } from "@/app/lib/hooks/useReducedMotion";

/**
 * Enhanced hero section with stunning visual effects, animated elements, and captivating design
 * Features gradient overlays, floating particles, and dynamic interactions
 */
export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Enhanced parallax effects
  const backgroundY = useTransform(
    scrollY,
    [0, 1000],
    [0, prefersReducedMotion ? 0 : 400]
  );

  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "auto"
      });
    }
  };

  // Floating particles for visual interest
  const particles = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Enhanced Video Background with Multiple Layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[140%]"
      >
        <HeroVideo
          // videoSrc="/videos/hero-bg.mp4" // Uncomment when video is available
          fallbackImage="/hero-bg.jpg"
        />
        
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_55%,rgba(2,6,23,0.85)_100%)]" />
      </motion.div>

      {/* Floating Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced Content Container */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-between py-24 md:py-28"
      >
        <div className="flex-shrink-0" />

        {/* Main Content - Enhanced Layout */}
        <div className="flex-grow flex flex-col items-center justify-center space-y-10 md:space-y-12">
          <HeroHeadline />

          {/* CTA Buttons */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 px-4 items-center"
          >
            <motion.a
              href="#services"
              onClick={(e) => handleHashClick(e, "#services")}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 flex items-center gap-3"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.05, y: -3 }
              }
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Explore Our Services
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => handleHashClick(e, "#contact")}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-3 shadow-xl"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.05, y: -3 }
              }
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Start a Project
              <ArrowDown className="w-4 h-4 rotate-90" />
            </motion.a>
          </motion.div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 px-4"
          >
            {["ISO Certified", "Bank-Ready Projects", "Global Expertise"].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 text-white/70 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Metrics at Bottom */}
        <div className="flex-shrink-0 w-full flex justify-center">
          <HeroMetrics />
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 15, 0],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-widest font-medium">Discover</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
}
