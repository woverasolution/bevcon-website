"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProfilesByLevel, type ProfileLevel, type NetworkProfile } from "../lib/network-data";
import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "lucide-react";

function ProfileCard({ profile, index }: { profile: NetworkProfile; index: number }) {
  const hasImage = !!profile.image;
  const isAnonymous = profile.isAnonymous;
  const displayName = isAnonymous ? (profile.anonymousLabel || 'Network Expert') : profile.name;
  
  // Defaults to true unless explicitly set to false
  const isClickable = profile.clickable !== false;

  const CardContent = (
    <>
      {/* Circular Portrait */}
      <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-4 sm:mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffbb3a]/20 to-[#455660]/20 transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          {hasImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={profile.image}
              alt={displayName} 
              className="w-full h-full object-cover"
              style={{ objectPosition: profile.imagePosition || 'center 20%' }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <User className="w-16 h-16 sm:w-20 sm:h-20 text-slate-500" />
            </div>
          )}
        </div>
        {/* Accent ring on hover */}
        <div className={`absolute inset-0 rounded-full border-2 border-transparent ${isClickable ? 'group-hover:border-[#ffbb3a]/50' : ''} transition-colors duration-300`} />
      </div>
      
      {/* Name & Role */}
      <h3 className={`text-lg sm:text-xl font-bold text-slate-900 ${isClickable ? 'group-hover:text-[#455660]' : ''} transition-colors leading-tight`}>
        {displayName}
      </h3>
      <p className="text-sm sm:text-base font-medium text-slate-600 mt-1">
        {profile.role}
      </p>
      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed max-w-[280px] mx-auto">
        {profile.teaserServices}
      </p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
    >
      {isClickable ? (
        <Link 
          href={`/network/${profile.id}`}
          className="group block text-center"
        >
          {CardContent}
        </Link>
      ) : (
        <div className="group block text-center cursor-default">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
}

// Profiles temporarily hidden from display (data preserved for future use)
const HIDDEN_PROFILE_IDS: string[] = [];

const levelConfig = {
  A: {
    label: 'Leadership',
    title: 'Strategic Direction',
    description: 'Our leadership team combines deep industry expertise with strategic vision to guide complex beverage projects from inception to completion.',
  },
  B: {
    label: 'Senior Experts',
    title: 'Technical Excellence',
    description: 'Seasoned specialists who bring decades of hands-on experience in brewing, engineering, operations, and project delivery.',
  },
  C: {
    label: 'Execution / Site Roles',
    title: 'On-Ground Delivery',
    description: 'Skilled professionals who ensure precise execution and quality control where it matters most—on site.',
  },
};

function LevelSection({ level }: { level: ProfileLevel }) {
  const allProfiles = getProfilesByLevel(level);
  const profiles = allProfiles.filter(p => !HIDDEN_PROFILE_IDS.includes(p.id));
  const config = levelConfig[level];

  if (profiles.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-12 text-center"
      >
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#ffbb3a] block mb-3">
          {config.label}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {config.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {config.description}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </div>
    </section>
  );
}

// Network visualization SVG component
function NetworkVisualization() {
  return (
    <svg 
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.4">
        <line x1="100" y1="200" x2="250" y2="100" />
        <line x1="100" y1="200" x2="250" y2="300" />
        <line x1="250" y1="100" x2="400" y2="150" />
        <line x1="250" y1="300" x2="400" y2="250" />
        <line x1="400" y1="150" x2="400" y2="250" />
        <line x1="400" y1="150" x2="550" y2="100" />
        <line x1="400" y1="250" x2="550" y2="300" />
        <line x1="550" y1="100" x2="700" y2="200" />
        <line x1="550" y1="300" x2="700" y2="200" />
        <line x1="250" y1="100" x2="400" y2="250" />
        <line x1="250" y1="300" x2="400" y2="150" />
      </g>
      
      <g fill="#ffffff" opacity="0.3">
        <circle cx="100" cy="200" r="5" />
        <circle cx="250" cy="100" r="4" />
        <circle cx="250" cy="300" r="4" />
        <circle cx="400" cy="150" r="6" fill="#ffbb3a" opacity="1" />
        <circle cx="400" cy="250" r="6" fill="#ffbb3a" opacity="1" />
        <circle cx="550" cy="100" r="4" />
        <circle cx="550" cy="300" r="4" />
        <circle cx="700" cy="200" r="5" />
      </g>
    </svg>
  );
}

export default function NetworkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0B1120] py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]" />
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="hidden sm:block">
              <NetworkVisualization />
            </div>
            <div className="absolute top-[-10%] right-[5%] w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#ffbb3a]/10 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute bottom-[-15%] left-[10%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/5 rounded-full blur-[60px] sm:blur-[80px]" />
          </div>
          
          <div className="container-width relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
              >
                <span className="h-px w-6 sm:w-8 bg-[#ffbb3a]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#ffbb3a]">
                  Our Network
                </span>
              </motion.div>
              
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-tight leading-[1.15]"
              >
                The Experts Behind{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbb3a] to-[#e5a834]">
                  Every Project
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 sm:mb-10"
              >
                BevCon&apos;s leadership directs projects by collaborating with a carefully selected network of subject matter experts—proven engineers, operational leaders, and strategists deploying specific expertise exactly where your project requires it.
              </motion.p>
              
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-6 sm:gap-8 md:gap-10"
              >
                {[
                  { value: '500+', label: 'Years Combined Experience' },
                  { value: '25+', label: 'Countries Served' },
                  { value: '20+', label: 'Active Specialists' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section className="bg-white">
          <div className="container-width">
            <LevelSection level="A" />
            
            {/* Divider */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffbb3a]" />
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <LevelSection level="B" />
            
            {/* Divider */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffbb3a]" />
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <LevelSection level="C" />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#F7F4F0] py-12 sm:py-16 md:py-20">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-xl mx-auto px-4"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                Need specialized expertise?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
                Our network is ready to deploy the right specialists for your unique requirements.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-[#455660] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm hover:bg-[#3b4b53] transition-colors"
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
