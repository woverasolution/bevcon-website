"use client";

import {
  Lightbulb,
  ShieldCheck,
  Users,
  HardHat,
  Briefcase,
  FileText,
  Settings,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Concept",
    description: "Market strategy, technical concepts, and feasibility studies.",
    icon: Lightbulb,
    id: "concept",
  },
  {
    title: "Construction",
    description: "Project execution, engineering oversight, and delivery.",
    icon: HardHat,
    id: "construction",
  },
  {
    title: "Contracts",
    description: "FIDIC administration, claims management, and dispute resolution.",
    icon: FileText,
    id: "contracts",
  },
  {
    title: "Confidence",
    description: "Bankability, risk reduction, and investor readiness.",
    icon: ShieldCheck,
    id: "confidence",
  },
  {
    title: "Consulting",
    description: "Independent expertise, strategic governance, and auditing.",
    icon: Briefcase,
    id: "consulting",
  },
  {
    title: "Control",
    description: "Financial governance, cost control, and performance assurance.",
    icon: Settings,
    id: "control",
  },
  {
    title: "Connect",
    description: "Stakeholder alignment, networking, and partnership building.",
    icon: Users,
    id: "connect",
  },
];

export default function WhatWeDo() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-[#0B1120]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png" 
          alt="Industrial Background"
          fill
          className="object-cover opacity-30 grayscale mix-blend-overlay"
          priority={false}
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/95 to-[#0B1120]" />
        
        {/* Subtle animated grain/noise */}
         <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#ffbb3a] mb-4 shadow-black drop-shadow-md">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              What We Do
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              We turn the complexities of the beverage industry into clear advantages by handling the critical <span className="font-semibold text-[#ffbb3a]">"Cons"</span> related to your project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(service.id)}
              className={`
                group cursor-pointer relative 
                bg-slate-800/20 backdrop-blur-sm 
                rounded-2xl p-8 
                border border-white/5
                shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)]
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                hover:-translate-y-2 hover:bg-slate-800/60 hover:border-[#ffbb3a]/40
                transition-all duration-300 ease-out
                flex flex-col
                ${index >= 4 ? 'lg:col-span-1' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-700/30 border border-white/5 flex items-center justify-center group-hover:bg-[#ffbb3a] group-hover:border-[#ffbb3a] transition-all duration-300 shadow-sm">
                  <service.icon className="w-7 h-7 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-[#ffbb3a]" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffbb3a] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-grow group-hover:text-white transition-colors font-light">
                {service.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#ffbb3a]/0 group-hover:bg-[#ffbb3a] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
            </motion.div>
          ))}
        </div>
        
         <div className="mt-16 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-sm text-slate-500 font-medium"
            >
              Select a service above to explore details
            </motion.p>
         </div>
      </div>
    </section>
  );
}
