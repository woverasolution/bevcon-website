"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      
    },
  },
};

export default function CTASection() {
  return (
    <section className="section-padding bg-slate-900 text-white py-16 sm:py-20 md:py-28">
      <div className="container-width">
        <motion.div
          className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="rounded-xl sm:rounded-2xl bg-slate-800 p-6 sm:p-8 md:p-10 border border-slate-700"
          >
            <Image
              src="/logos/DARK%20BG%20LOGO.svg"
              alt="BevCon"
              width={140}
              height={34}
              className="h-6 sm:h-7 md:h-8 w-auto mb-4 sm:mb-5 md:mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-3 sm:mb-4">
              Ready to transform your beverage project?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 sm:mb-6">
              Partner with BevCon to plan, structure, and deliver your next beverage facility with confidence. From concept to operation, we bring the engineering expertise and project discipline that investors trust.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between gap-5 sm:gap-6 rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-800 p-6 sm:p-8 md:p-10"
          >
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4">
                Next Generation Beverage Solutions
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Concept, Construction & Confidence
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                BevCon are beverage engineers and project developers partnering with investors to plan, structure, and deliver beverage projects worldwide.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300 border-t border-slate-700 pt-5 sm:pt-6">
              <p className="font-medium">Global Operations</p>
              <p>contact@bevcon.com</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-3 sm:mt-4 rounded-sm border border-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
