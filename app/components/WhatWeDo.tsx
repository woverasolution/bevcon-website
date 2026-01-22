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
import { cn } from "../lib/utils";

const services = [
  {
    title: "Concept",
    description: "Market strategy, technical concepts, and feasibility studies to launch your vision.",
    icon: Lightbulb,
    id: "concept",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Construction",
    description: "Project execution, engineering oversight, and delivery.",
    icon: HardHat,
    id: "construction",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Contracts",
    description: "FIDIC administration, claims management, and dispute resolution.",
    icon: FileText,
    id: "contracts",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Confidence",
    description: "Bankability, risk reduction, and investor readiness.",
    icon: ShieldCheck,
    id: "confidence",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Consulting",
    description: "Independent expertise, strategic governance, and auditing.",
    icon: Briefcase,
    id: "consulting",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Control",
    description: "Financial governance, cost control, and performance assurance.",
    icon: Settings,
    id: "control",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Connect",
    description: "Stakeholder alignment, networking, and partnership building.",
    icon: Users,
    id: "connect",
    className: "md:col-span-2 md:row-span-1",
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
    <section id="services" className="section-padding relative overflow-hidden bg-[#0B1120] py-16 sm:py-20 md:py-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png"
          alt="Industrial Background"
          fill
          className="object-cover opacity-20 grayscale mix-blend-overlay"
          priority={false}
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]" />

        {/* Subtle animated grain/noise */}
         <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#ffbb3a] mb-3 sm:mb-4 shadow-black drop-shadow-md">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4">
              What We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed px-4">
              We turn the complexities of the beverage industry into clear advantages by handling the important <span className="font-semibold text-[#ffbb3a]">C's</span> related to your project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[minmax(200px,auto)] sm:auto-rows-[minmax(220px,auto)] md:auto-rows-[minmax(240px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(service.id)}
              className={cn(
                "group cursor-pointer relative overflow-hidden",
                "bg-slate-900/40 backdrop-blur-md",
                "rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8",
                "border border-white/5 hover:border-white/20",
                "transition-all duration-500 ease-out",
                "hover:shadow-[0_0_40px_-10px_rgba(255,187,58,0.1)]",
                "hover:bg-slate-800/50",
                "flex flex-col justify-between",
                service.className
              )}
            >
              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:bg-[#ffbb3a] group-hover:text-slate-900 transition-all duration-300 shadow-sm">
                    <service.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-slate-300 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffbb3a]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#ffbb3a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-200 transition-colors font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner glow - Simplified to single accent color */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ffbb3a]/5 blur-[60px] rounded-full group-hover:bg-[#ffbb3a]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        
         <div className="mt-12 sm:mt-14 md:mt-16 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-xs sm:text-sm text-slate-500 font-medium px-4"
            >
              Select a service above to explore details
            </motion.p>
         </div>
      </div>
    </section>
  );
}
