"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Shield, 
  Scale, 
  FileSignature, 
  CheckCircle2, 
  Gavel, 
  Briefcase,
  AlertTriangle,
  FileText,
  Users
} from "lucide-react";

const roles = [
  {
    title: "Employer’s Representative",
    subtitle: "FIDIC Silver Book · EPC / Turnkey",
    icon: Shield,
    description: "Safeguarding the Employer’s interests within a clearly defined contractual framework.",
    points: [
      "No duty of neutrality",
      "Enforces risk allocation",
      "Strict contractual discipline",
      "Day-to-day administration"
    ],
    color: "bg-slate-900 text-white",
    iconColor: "text-[#ffbb3a]",
    borderColor: "border-slate-800"
  },
  {
    title: "The Engineer",
    subtitle: "FIDIC Red, Yellow & Green Books",
    icon: Scale,
    description: "Acting fairly, neutrally, and independently to ensure balanced project delivery.",
    points: [
      "Balanced decision-making",
      "Technical correctness",
      "Dispute avoidance",
      "Fair determinations"
    ],
    color: "bg-white text-slate-900",
    iconColor: "text-blue-600",
    borderColor: "border-slate-200"
  }
];

const duties = [
  {
    title: "Contract Administration",
    desc: "Notices, instructions, approvals, and formal correspondence.",
    icon: FileSignature
  },
  {
    title: "Submissions Review",
    desc: "Design docs, programs, and method statements compliance.",
    icon: FileText
  },
  {
    title: "Payments & Claims",
    desc: "Certification, advance payments, and structured claim handling.",
    icon: Briefcase
  },
  {
    title: "Determinations",
    desc: "Neutral or entitlement-based decisions on time and cost.",
    icon: Gavel
  },
  {
    title: "Testing & Completion",
    desc: "Oversight of tests, taking-over, and operational readiness.",
    icon: CheckCircle2
  },
  {
    title: "Dispute Avoidance",
    desc: "Risk identification and support of DAAB procedures.",
    icon: AlertTriangle
  }
];

export default function BeverageContracts() {
  return (
    <section id="contracts" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: "radial-gradient(#000 1px, transparent 1px)", 
             backgroundSize: "32px 32px" 
           }} 
      />

      {/* Section Number */}
      <div className="absolute top-8 right-8 lg:top-16 lg:right-16 z-0 pointer-events-none">
        <span className="text-[100px] lg:text-[150px] font-bold text-slate-900/5 leading-none">
          03
        </span>
      </div>

      <div className="container-width relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Beverage <span className="text-blue-600">Contracts</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              We turn FIDIC frameworks into practical tools for success, tailoring international standards to the <span className="font-semibold text-slate-900">realities of beverage plants.</span>
            </p>
          </motion.div>
        </div>

        {/* Roles Split Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-24">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`
                relative p-8 lg:p-10 rounded-3xl border shadow-xl flex flex-col
                ${role.color} ${role.borderColor}
              `}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${index === 0 ? 'bg-white/10' : 'bg-blue-50'}`}>
                <role.icon className={`w-8 h-8 ${role.iconColor}`} />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">{role.title}</h3>
              <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${index === 0 ? 'text-slate-400' : 'text-blue-600'}`}>
                {role.subtitle}
              </p>
              
              <p className={`text-lg leading-relaxed mb-8 flex-grow ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                {role.description}
              </p>

              <ul className="space-y-4">
                {role.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-[#ffbb3a]' : 'bg-blue-600'}`} />
                    <span className={`font-medium ${index === 0 ? 'text-slate-200' : 'text-slate-700'}`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Management Duties Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900"
            >
              End-to-End Contract Management
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 mt-4 max-w-2xl mx-auto"
            >
              Structured, disciplined execution covering the full project lifecycle.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {duties.map((duty, index) => (
              <motion.div
                key={duty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <duty.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{duty.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{duty.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Benefits Bar */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-20 bg-slate-900 rounded-2xl p-8 lg:p-12 text-center lg:text-left relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffbb3a]/10 blur-[100px] rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What This Means for Your Project
              </h3>
              <p className="text-slate-300 leading-relaxed">
                BevCon combines contractual clarity with hands-on beverage engineering experience. We ensure reduced claims exposure, clear separation of roles, and engineering-led management grounded in reality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex-1 min-w-[200px]">
                 <div className="text-[#ffbb3a] font-bold text-lg mb-1">Reduced Risk</div>
                 <div className="text-slate-400 text-sm">Minimised claims & disputes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex-1 min-w-[200px]">
                 <div className="text-blue-400 font-bold text-lg mb-1">Total Clarity</div>
                 <div className="text-slate-400 text-sm">Defined roles & responsibilities</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
