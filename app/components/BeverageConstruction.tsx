"use client";

import { HardHat, ClipboardCheck, Wrench, CheckCircle2, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const responsibilities = [
  "Project structuring and execution planning",
  "Engineering management",
  "Tendering and procurement support",
  "Supplier and interface coordination",
  "Site supervision and quality control",
  "Commissioning, testing, and acceptance",
  "Documentation and handover readiness",
];

const benefits = [
  "Fewer surprises during installation and commissioning",
  "Better control of interfaces between process, packaging, utilities, and automation",
  "Faster ramp-up to stable production and specified performance",
  "Clear accountability from tender to acceptance",
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

export default function BeverageConstruction() {
  return (
    <section id="construction" className="section-padding bg-[#F7F4F0]">
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
            Beverage Construction
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Project Development, Tender, Supervision, Testing, Acceptance
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon delivers beverage projects from concept to operational handover. We act as an independent engineering and project development partner, bringing structure, transparency, and execution discipline to complex, interface-heavy beverage plants.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            Our focus is practical: clear scope definition, robust tendering, strong supplier coordination, and on-site supervision that ensures engineering intent becomes reality. From first layouts to final acceptance, we protect the Employer's interests in cost, time, quality, and performance – and we ensure that commissioning and start-up are planned as a project phase, not left to chance.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: HardHat, title: "Project Structuring", desc: "Work breakdown, milestones, interface management, project organisation, schedules and reporting lines." },
                { icon: ClipboardCheck, title: "Engineering Management", desc: "Basic and detailed engineering coordination across process, packaging, utilities, automation, and buildings." },
                { icon: FileCheck, title: "Tendering & Procurement", desc: "Tender documentation, bid evaluation, technical clarifications, contract-ready scope definition, vendor alignment." },
                { icon: Wrench, title: "Site Supervision", desc: "Site presence, progress verification, quality inspections, FAT/SAT support, construction readiness checks." },
              ].map((card, i) => (
                <motion.div
                  key={i}
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
                    <card.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Typical BevCon Responsibilities
              </h3>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-primary/30 bg-primary/5 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                What This Means for Beverage Projects
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
