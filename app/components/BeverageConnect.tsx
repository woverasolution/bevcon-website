"use client";

import { Users, Briefcase, Wrench, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

const assignmentTypes = [
  {
    title: "Interim Project & Technical Management",
    description: "Interim project managers, technical managers, and owner's engineers during critical project phases.",
    icon: Briefcase,
  },
  {
    title: "Commissioning & Start-up Support",
    description: "Commissioning engineers, ramp-up support, and performance stabilisation specialists.",
    icon: Wrench,
  },
  {
    title: "Operations & Maintenance Expertise",
    description: "Temporary deployment of operations, maintenance, and reliability experts to stabilise performance and reduce downtime.",
    icon: TrendingUp,
  },
  {
    title: "Transformation & Restructuring Support",
    description: "Expert support during organisational changes, plant expansions, and operational restructurings.",
    icon: Clock,
  },
  {
    title: "Peak Production & Capacity Support",
    description: "Short-term reinforcement during high-demand periods, product launches, or capacity constraints.",
    icon: Users,
  },
];

const benefits = [
  "Immediate access to trusted, senior expertise",
  "Rapid integration without lengthy onboarding",
  "Continuity during critical phases or personnel gaps",
  "Reduced operational and project risk",
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

export default function BeverageConnect() {
  return (
    <section id="connect" className="section-padding bg-white">
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
            Beverage Connect
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Expert Assignments for Short and Long-term Durations
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon provides experienced beverage professionals for targeted, short- and long-term expert assignments. Beverage Connect is not recruitment or staffing — it is the structured deployment of senior expertise to stabilise operations, bridge capability gaps, and support critical phases in beverage projects and operations.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            We support clients during peak workloads, complex project phases, restructurings, start-ups, and temporary personnel gaps caused by leave, illness, or organisational change. BevCon experts integrate quickly into existing teams and deliver immediate value without long onboarding periods.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {assignmentTypes.map((assignment, index) => (
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
                <assignment.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {assignment.title}
              </h3>
              <p className="text-sm text-slate-600">
                {assignment.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rounded-2xl border border-primary/30 bg-primary/5 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          whileHover={{ y: -3 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            What This Means for Beverage Projects
          </h3>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={listItemVariants}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
