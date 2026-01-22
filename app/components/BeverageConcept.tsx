"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  TrendingUp,
  Landmark,
  Settings,
  CheckCircle2
} from "lucide-react";

const conceptPillars = [
  {
    icon: TrendingUp,
    title: "Market Strategy",
    description: "Demand realism, pricing logic, and achievable market positioning tailored to your geography."
  },
  {
    icon: Landmark,
    title: "Bankability",
    description: "Financial models designed for international lenders, integrating CAPEX, OPEX, and sensitivity analysis."
  },
  {
    icon: Settings,
    title: "Technical Concept",
    description: "Process selection, site layout, and utility planning ensuring technical and commercial alignment."
  }
];

const highlights = [
  { title: "Lender Accepted", desc: "Investment-grade studies trusted by major DFIs & ECAs" },
  { title: "Risk Reduction", desc: "Consistent alignment of market, technical & financial data" },
  { title: "Execution Ready", desc: "Concepts structured to move directly into engineering" },
];

export default function BeverageConcept() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      desktopVideoRef.current?.play();
      mobileVideoRef.current?.play();
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.6], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="concept"
      className="relative min-h-screen overflow-hidden bg-stone-50 flex items-center py-16 sm:py-20 lg:py-0"
    >
      {/* Background Elements - Desktop only */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white z-0 hidden lg:block" />

      {/* Dynamic Background Video - Desktop only (right side) */}
      <div className="absolute top-0 right-0 w-[45%] h-full z-0 overflow-hidden hidden lg:block">
        <motion.div className="relative w-full h-full" style={{ y: imageY, scale: 1.1 }}>
          <video
            ref={desktopVideoRef}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/beer-pour.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-stone-50" />
        </motion.div>
      </div>

      <div className="container-width w-full relative z-10 px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* Mobile Video Section - Stacked before content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden lg:hidden order-1"
          >
            <video
              ref={mobileVideoRef}
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/beer-pour.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Left Column: Main Content */}
          <motion.div
            style={{ y: contentY, opacity }}
            className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:pr-8 xl:pr-12 order-2 lg:order-none"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight"
              >
                Beverage
                <span className="block text-[#ffbb3a]">Concept</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-600 font-light max-w-2xl"
              >
                Turning ideas into <span className="text-stone-900 font-medium">robust, bankable concepts</span> by combining market insight, financial modelling, and practical engineering.
              </motion.p>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-6 sm:mt-7 md:mt-8">
              {conceptPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4 border-l-2 border-[#ffbb3a] pl-3 sm:pl-4">
                    <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffbb3a]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 sm:mb-3">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-5 sm:pt-6 border-t border-stone-200"
            >
               <p className="text-xs sm:text-sm text-stone-400 uppercase tracking-widest mb-3 sm:mb-4">Trusted by Financing Institutions</p>
               <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm font-medium text-stone-500">
                  {["Afrexim Bank", "DEG / KfW", "BOAD", "IFU", "Euler Hermes"].map(bank => (
                    <span key={bank} className="flex items-center gap-1.5 sm:gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffbb3a] flex-shrink-0" /> {bank}
                    </span>
                  ))}
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Strategic Outcomes (Overlapping the image area on desktop) */}
          <div className="relative lg:block order-3 lg:order-none">
            <div className="relative space-y-4 sm:space-y-5 lg:space-y-6 bg-white/80 backdrop-blur-md p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-xl lg:ml-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="relative pl-4 sm:pl-5 lg:pl-6 border-l-2 border-stone-200 hover:border-[#ffbb3a] transition-colors group py-1"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-1 group-hover:text-[#ffbb3a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
