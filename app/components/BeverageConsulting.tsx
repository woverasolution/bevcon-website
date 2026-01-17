"use client";

import { Search, Factory, Package, Shield, Zap, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const auditCategories = [
  {
    title: "Plant & Technology Audits",
    audits: ["Plant Audit", "Technology Audit"],
    icon: Factory,
  },
  {
    title: "Production & Packaging Audits",
    audits: ["Line Audit", "Process Audit"],
    icon: Package,
  },
  {
    title: "Quality & Compliance Audits",
    audits: ["Quality Assurance & Quality Control Audit", "Food Safety & Hygiene Audit"],
    icon: Shield,
  },
  {
    title: "Utilities & Infrastructure Audits",
    audits: ["Utility Audit", "Energy & Sustainability Audit"],
    icon: Zap,
  },
  {
    title: "Maintenance & Asset Management Audits",
    audits: ["Maintenance Organisation Audit", "Maintenance Audit", "Asset Lifecycle & Spare Parts Audit"],
    icon: Wrench,
  },
  {
    title: "Commercial & Performance Audits",
    audits: ["OPEX Audit", "Capacity & Throughput Audit", "Operational Readiness Audit"],
    icon: CheckCircle2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

export default function BeverageConsulting() {
  return (
    <section id="consulting" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Beverage Consulting
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Independent Audits
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon delivers independent, structured audits for breweries and beverage plants worldwide. Our audits are fact-based, performance-driven, and focused on identifying improvement potential – not theoretical compliance.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            We combine hands-on beverage engineering experience with operational and commercial understanding. Each audit delivers clear findings, quantified risks, and practical recommendations that enable management to prioritise investments, improve efficiency, and safeguard long-term asset value.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            Audits can be performed as standalone assessments or combined into integrated programmes, depending on project phase, operational maturity, or strategic objectives.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {auditCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 mb-4"
              >
                <category.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.audits.map((audit, auditIndex) => (
                  <motion.li
                    key={auditIndex}
                    custom={auditIndex}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{audit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          whileHover={{ y: -3 }}
        >
          <div className="flex items-start gap-4">
            <Search className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Comprehensive Audit Coverage
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Our audit portfolio covers every aspect of beverage plant operations, from process technology and packaging lines to utilities, maintenance, and commercial performance. Each audit is tailored to your specific needs and delivers actionable insights backed by industry benchmarks and engineering expertise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
