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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="rounded-xl sm:rounded-2xl bg-slate-800 p-8 sm:p-10 md:p-12 border border-slate-700 text-center"
          >
            <Image
              src="/logos/DARK%20BG%20LOGO.svg"
              alt="BevCon"
              width={180}
              height={44}
              className="h-8 sm:h-10 md:h-12 w-auto mb-6 sm:mb-8 mx-auto"
            />
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6">
              Ready to transform your beverage project?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              Partner with BevCon to plan, structure, and deliver your next beverage facility with confidence. From concept to operation, we bring the engineering expertise and project discipline that investors trust.
            </p>
            <motion.a
              href="mailto:bier@bevcon.net"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-medium"
            >
              Get In Touch <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
