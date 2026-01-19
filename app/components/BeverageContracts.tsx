"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, Shield, FileCheck } from "lucide-react";

export default function BeverageContracts() {
  return (
    <section id="contracts" className="relative py-20 md:py-28 bg-[#F7F4F0] overflow-hidden">
      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-8 right-8 lg:top-16 lg:right-16 z-0"
      >
        <span className="text-[100px] lg:text-[150px] font-bold text-slate-900/5 leading-none select-none">
          03
        </span>
      </motion.div>

      <div className="container-width relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Hero Image Cell - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3 md:row-span-2 relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
              alt="Contract negotiation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

            {/* Stat Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <p className="text-4xl lg:text-5xl font-bold text-white">20+ Years</p>
              <p className="text-white/70 mt-1">FIDIC Contract Expertise</p>
            </motion.div>
          </motion.div>

          {/* Title Cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 rounded-3xl bg-white p-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Beverage
              <span className="block text-primary">Contracts</span>
            </h2>
            <p className="mt-3 text-xl font-semibold text-accent">
              FIDIC Expertise for Beverage Projects
            </p>
            <p className="mt-4 text-slate-600">
              Internationally recognised standards, tailored to beverage plant realities.
            </p>
          </motion.div>

          {/* Silver Book Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-900 text-white p-8 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Employer's Representative</h3>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mt-2">
              Silver Book · EPC
            </p>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed flex-grow">
              Safeguarding your interests in turnkey projects with disciplined contract administration.
            </p>
          </motion.div>

          {/* Red/Yellow/Green Book Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col shadow-lg"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Scale className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Engineer</h3>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mt-2">
              Red · Yellow · Green Books
            </p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
              Fair, neutral, independent decision-making for traditional and design-build models.
            </p>
          </motion.div>

          {/* Services List Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <FileCheck className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-slate-900">Core Services</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "Contract Admin",
                "Payments & Claims",
                "Submissions",
                "Testing",
                "Determinations",
                "Close-Out",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
