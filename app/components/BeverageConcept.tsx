"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
      className="relative min-h-screen overflow-hidden bg-slate-50 flex items-center py-20 lg:py-0"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white z-0 hidden lg:block" />
      
      {/* Dynamic Background Image - Right Side */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full z-0 overflow-hidden">
        <motion.div className="relative w-full h-full" style={{ y: imageY, scale: 1.1 }}>
          <Image
            src="/images/beverage1.jpg"
            alt="Beverage concept planning and engineering"
            fill
            className="object-cover opacity-10 lg:opacity-100"
            priority
          />
          {/* Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-50 lg:via-white/20 lg:to-slate-50" />
        </motion.div>
      </div>

      <div className="container-width w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Main Content */}
          <motion.div 
            style={{ y: contentY, opacity }}
            className="flex flex-col gap-8 lg:pr-12"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Beverage
                <span className="block text-[#ffbb3a]">Concept</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl"
              >
                Turning ideas into <span className="text-slate-900 font-medium">robust, bankable concepts</span> by combining market insight, financial modelling, and practical engineering.
              </motion.p>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
              {conceptPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4 border-l-2 border-[#ffbb3a] pl-4">
                    <pillar.icon className="w-6 h-6 text-[#ffbb3a]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-slate-200"
            >
               <p className="text-sm text-slate-400 uppercase tracking-widest mb-4">Trusted by Financing Institutions</p>
               <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                  {["Afrexim Bank", "DEG / KfW", "BOAD", "IFU", "Euler Hermes"].map(bank => (
                    <span key={bank} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ffbb3a]" /> {bank}
                    </span>
                  ))}
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Strategic Outcomes (Overlapping the image area on desktop) */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100 shadow-xl ml-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="relative pl-6 border-l-2 border-slate-200 hover:border-[#ffbb3a] transition-colors group py-1"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#ffbb3a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm">
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
