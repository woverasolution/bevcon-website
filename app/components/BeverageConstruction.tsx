"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Layers, FileSearch, HardHat, ClipboardCheck, Rocket, Network, ChevronRight, ChevronLeft } from "lucide-react";

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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const cardY = useTransform(scrollYProgress, [0.2, 0.6], ["100px", "0px"]);

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
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Full-Bleed Background Image */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Industrial construction site"
          fill
          className="object-cover opacity-60"
        />
      </motion.div>

      {/* Gradient Overlays - Darker for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-8 right-8 lg:top-16 lg:right-16"
      >
        <span className="text-[100px] lg:text-[150px] font-bold text-white/5 leading-none select-none">
          02
        </span>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="container-width w-full pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            {/* Main Content Card */}
            <motion.div
              style={{ y: cardY }}
              className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
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
                className="mt-3 text-xl font-semibold text-[#ffbb3a]"
              >
                From Concept to Operational Handover
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base text-gray-200 leading-relaxed max-w-lg"
              >
                We deliver beverage projects from concept to handover. As your independent engineering partner, we bring structure and execution discipline to complex plants, protecting your interests in cost, time, and quality.
              </motion.p>

              {/* Timeline Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 relative group/timeline"
              >
                {/* Scroll Button Left */}
                <AnimatePresence>
                  {canScrollLeft && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-20 flex items-center justify-start pl-0 pointer-events-none group-hover/timeline:pointer-events-auto"
                    >
                      <button
                        onClick={scrollLeft}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm"
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
                      className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-20 flex items-center justify-end pr-0 pointer-events-none group-hover/timeline:pointer-events-auto"
                    >
                      <button
                        onClick={scrollRight}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div 
                  ref={scrollContainerRef}
                  className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide px-1"
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
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                          <step.icon className="w-5 h-5 text-[#ffbb3a]" />
                        </div>
                        <span className="text-xs font-medium text-gray-300 whitespace-nowrap">
                          {step.label}
                        </span>
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div className="w-8 h-px bg-gradient-to-r from-[#ffbb3a]/50 to-white/10 mx-2 mt-[-20px]" />
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
              className="hidden lg:flex flex-col gap-4"
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
                  className="bg-slate-950/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg group hover:border-[#ffbb3a]/30 transition-colors"
                >
                  <p className="text-xl font-bold text-[#ffbb3a] group-hover:text-[#ffbb3a] transition-colors">{item.title}</p>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
