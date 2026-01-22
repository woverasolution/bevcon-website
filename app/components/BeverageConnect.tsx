"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Wrench, TrendingUp, CheckCircle2, Users, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@/app/lib/utils";

const services = [
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Senior leadership to drive schedule, budget, and stakeholder alignment."
  },
  {
    icon: Wrench,
    title: "Commissioning Support",
    description: "Technical experts to ensure seamless startup and handover."
  },
  {
    icon: TrendingUp,
    title: "Operations Expertise",
    description: "Interim management to optimize performance and train staff."
  }
];

const benefits = [
  "Immediate Availability",
  "Industry Veterans",
  "Flexible Duration",
  "Risk Mitigation"
];

export default function BeverageConnect() {
  return (
    <section id="connect" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Beverage Industry Professionals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Card: Expert Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:bottom-8 md:-right-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-[260px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden relative">
                   <Image 
                     src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&q=80"
                     alt="Expert Engineer"
                     width={48}
                     height={48}
                     className="object-cover w-full h-full"
                   />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Senior Engineer</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs text-slate-500">Available Now</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Deploying technical expertise exactly when you need it."
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/5 rounded-3xl" />
          </motion.div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Beverage
                <span className="block text-primary">Connect</span>
              </h2>
              <p className="text-xl text-accent font-medium mb-6">
                Expert Assignments & Interim Support
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
                We bridge the gap between permanent staff and external consultants by deploying senior industry professionals for critical project phases.
              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-6 mb-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-slate-700">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
