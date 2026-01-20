"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Scale } from "lucide-react";

export default function BeverageContracts() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="contracts"
      className="relative overflow-hidden bg-white"
    >
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Content Panel */}
        <div className="relative z-10 flex items-center bg-white py-20 lg:py-0">
          <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Beverage
                <span className="block text-[#ffbb3a]">Contracts</span>
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
                FIDIC contracts optimised for beverage plants. We go beyond drafting — assuming defined contractual roles from award through final acceptance.
              </p>
            </motion.div>

            {/* Two Roles */}
            <div className="mt-10 lg:mt-12 space-y-6 lg:space-y-8">
              {/* Employer's Representative */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 lg:gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#ffbb3a]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ffbb3a]">
                    Silver Book · EPC
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mt-1">
                    Employer&apos;s Representative
                  </h3>
                  <p className="text-slate-500 mt-1.5 text-sm lg:text-base leading-relaxed">
                    Safeguarding your interests in turnkey projects. No neutrality — enforcing agreed risk allocation with contractual discipline.
                  </p>
                </div>
              </motion.div>

              {/* Engineer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 lg:gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Red · Yellow · Green Books
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mt-1">
                    Engineer
                  </h3>
                  <p className="text-slate-500 mt-1.5 text-sm lg:text-base leading-relaxed">
                    Fair, neutral, independent determinations for traditional and design-build models. Protecting all parties&apos; rights.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 lg:mt-12 pt-8 border-t border-slate-200"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:gap-6">
                {[
                  { value: "Reduced", label: "Claims Exposure" },
                  { value: "Clear", label: "Role Separation" },
                  { value: "Consistent", label: "Procedures" },
                  { value: "Engineering-led", label: "Management" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <p className="text-base lg:text-lg font-bold text-slate-900">{item.value}</p>
                    <p className="text-xs lg:text-sm text-slate-500">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="relative h-[50vh] lg:h-auto lg:min-h-screen order-first lg:order-last">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
              alt="Contract negotiation and documentation"
              fill
              className="object-cover scale-110"
            />
          </motion.div>

          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-slate-900/10" />

          {/* Accent stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffbb3a]" />
        </div>
      </div>
    </section>
  );
}
