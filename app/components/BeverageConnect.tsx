"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Wrench, TrendingUp } from "lucide-react";

const assignmentTypes = [
  { icon: Briefcase, label: "Project Management" },
  { icon: Wrench, label: "Commissioning Support" },
  { icon: TrendingUp, label: "Operations Expertise" },
];

export default function BeverageConnect() {
  return (
    <section id="connect" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container-width relative z-10">
        {/* Asymmetric Image Gallery Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[150px]">
          {/* Large Image - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 row-span-3 relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Professional team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 md:col-span-4 row-span-2 relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80"
              alt="Engineer inspection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </motion.div>

          {/* Small Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-6 md:col-span-3 row-span-2 relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80"
              alt="Professional at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
          </motion.div>

          {/* Content Card - Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-7 row-span-2 glass-subtle rounded-3xl p-8 md:p-10 shadow-xl border border-white/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Beverage
              <span className="block text-primary">Connect</span>
            </h2>
            <p className="mt-3 text-xl font-semibold text-accent">
              Expert Assignments
            </p>
            <p className="mt-4 text-slate-600">
              Senior expertise. Rapid integration. Immediate value.
            </p>

            {/* Assignment Types */}
            <div className="mt-8 flex flex-wrap gap-3">
              {assignmentTypes.map((type, index) => (
                <motion.div
                  key={type.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-slate-100"
                >
                  <type.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-700">{type.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Accent Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block col-span-5 row-span-1 relative rounded-3xl overflow-hidden bg-slate-900"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/80 text-sm font-medium">
                Trusted professionals for critical phases
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Benefits Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "Immediate access",
            "Rapid integration",
            "Continuity assured",
            "Reduced risk",
          ].map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="text-center py-4 px-2 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100"
            >
              <p className="text-sm font-medium text-slate-700">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
