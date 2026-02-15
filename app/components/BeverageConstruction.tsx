"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Layers, FileSearch, HardHat, ClipboardCheck, Rocket, Network, ChevronRight, ChevronLeft } from "lucide-react";
import { useReducedMotion } from "@/app/lib/hooks/useReducedMotion";

const timelineSteps = [
  { icon: Layers, label: "Structure" },
  { icon: FileSearch, label: "Engineer" },
  { icon: ClipboardCheck, label: "Tender" },
  { icon: Network, label: "Coordinate" },
  { icon: HardHat, label: "Supervise" },
  { icon: Rocket, label: "Commission" },
];

export default function BeverageConstruction() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const cardY = useTransform(scrollYProgress, [0.2, 0.6], ["100px", "0px"]);
  const disableScrollLinkedMotion = prefersReducedMotion || isMobile;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }

    mediaQuery.addListener(updateIsMobile);
    return () => mediaQuery.removeListener(updateIsMobile);
  }, []);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px threshold
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Check initially
      checkScroll();
      // Check on resize
      window.addEventListener("resize", checkScroll);
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="construction"
      className="relative min-h-[100svh] overflow-x-hidden bg-slate-950 touch-pan-y"
    >
      {/* Full-Bleed Background Image */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: disableScrollLinkedMotion ? 1 : imageScale }}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Industrial construction site"
          fill
          className="object-cover opacity-60"
        />
      </motion.div>

      {/* Gradient Overlays - Darker for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 min-h-[100svh] flex items-start md:items-end">
        <div className="container-width w-full pt-12 sm:pt-16 md:pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-end">
            {/* Main Content Card */}
            <motion.div
              style={{ y: disableScrollLinkedMotion ? "0px" : cardY }}
              className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl"
            >
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Beverage
                <span className="block">Construction</span>
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-[#ffbb3a]"
              >
                From Concept to Operational Handover
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed"
              >
                We deliver beverage projects from concept to handover. As your independent engineering partner, we bring structure and execution discipline to complex plants, protecting your interests in cost, time, and quality.
              </motion.p>

              {/* Timeline Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 sm:mt-10 md:mt-12 relative group/timeline"
              >
                {/* Scroll Button Left */}
                <AnimatePresence>
                  {canScrollLeft && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-slate-950/95 to-transparent z-20 items-center justify-start pl-1"
                    >
                      <button
                        onClick={scrollLeft}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white/80 hover:text-white transition-all backdrop-blur-sm shadow-lg pointer-events-auto"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Scroll Button Right */}
                <AnimatePresence>
                  {canScrollRight && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden sm:flex absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-slate-950/95 to-transparent z-20 items-center justify-end pr-1"
                    >
                      <button
                        onClick={scrollRight}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white/80 hover:text-white transition-all backdrop-blur-sm shadow-lg pointer-events-auto"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  ref={scrollContainerRef}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-0 overflow-visible sm:overflow-x-auto pb-0 sm:pb-3 scrollbar-hide sm:scroll-smooth touch-pan-y"
                >
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center flex-shrink-0"
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#ffbb3a]" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">
                          {step.label}
                        </span>
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div className="hidden sm:block w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-[#ffbb3a]/50 to-white/10 mx-2 sm:mx-3 md:mx-4 mb-6 sm:mb-7 md:mb-8" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Impact/Highlights Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5"
            >
              {[
                { title: "Fewer Surprises", desc: "During installation & commissioning" },
                { title: "Interface Control", desc: "Process, packaging & utilities" },
                { title: "Faster Ramp-up", desc: "To stable production & performance" },
                { title: "Clear Accountability", desc: "From tender to final acceptance" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="bg-slate-950/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-lg group hover:border-[#ffbb3a]/30 transition-colors"
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#ffbb3a] group-hover:text-[#ffbb3a] transition-colors">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-1.5">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
