"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProfilesByLevel, type ProfileLevel, type NetworkProfile } from "../lib/network-data";
import Link from "next/link";
import { FlippingCard } from "../components/ui/flipping-card";
import { motion } from "framer-motion";

// Generate a deterministic hash from a string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Generate unique visual parameters from name
function getVisualParams(name: string) {
  const hash = hashString(name);
  
  const palettes = [
    { bg: 'from-slate-800 via-slate-700 to-slate-900', accent: '#c9a227', secondary: '#8b7355' },
    { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: '#d4af37', secondary: '#9c8f5e' },
    { bg: 'from-zinc-800 via-zinc-700 to-zinc-900', accent: '#b8860b', secondary: '#7d6608' },
    { bg: 'from-neutral-800 via-neutral-700 to-neutral-900', accent: '#daa520', secondary: '#a67c00' },
    { bg: 'from-gray-800 via-gray-700 to-gray-900', accent: '#cfb53b', secondary: '#8b8000' },
  ];
  
  const palette = palettes[hash % palettes.length];
  const rotation = (hash % 360);
  const patternType = hash % 4;
  const shapeCount = 3 + (hash % 4);
  
  return { palette, rotation, patternType, shapeCount, hash };
}

function ProfileImagePlaceholder({ name }: { name: string }) {
  const { palette, rotation, patternType, shapeCount, hash } = getVisualParams(name);
  
  const shapes = Array.from({ length: shapeCount }, (_, i) => {
    const seed = hash + i * 1000;
    return {
      x: 10 + (seed % 80),
      y: 10 + ((seed * 7) % 80),
      size: 20 + (seed % 40),
      rotation: (seed * 13) % 360,
      opacity: 0.1 + (((seed * 3) % 15) / 100),
    };
  });

  return (
    <div className={`w-full h-full bg-gradient-to-br ${palette.bg} relative overflow-hidden`}>
      <svg 
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern 
            id={`grid-${hash}`} 
            width="10" 
            height="10" 
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${rotation % 45})`}
          >
            {patternType === 0 && (
              <>
                <line x1="0" y1="5" x2="10" y2="5" stroke={palette.accent} strokeWidth="0.3" />
                <line x1="5" y1="0" x2="5" y2="10" stroke={palette.accent} strokeWidth="0.3" />
              </>
            )}
            {patternType === 1 && (
              <circle cx="5" cy="5" r="1" fill={palette.accent} />
            )}
            {patternType === 2 && (
              <polygon points="5,0 10,10 0,10" fill="none" stroke={palette.accent} strokeWidth="0.3" />
            )}
            {patternType === 3 && (
              <rect x="2" y="2" width="6" height="6" fill="none" stroke={palette.accent} strokeWidth="0.3" transform="rotate(45 5 5)" />
            )}
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#grid-${hash})`} />
      </svg>

      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {shapes.map((shape, i) => (
          <g key={i} transform={`translate(${shape.x}, ${shape.y}) rotate(${shape.rotation})`}>
            {i % 3 === 0 && (
              <circle 
                r={shape.size / 4} 
                fill="none" 
                stroke={palette.accent} 
                strokeWidth="0.5"
                opacity={shape.opacity}
              />
            )}
            {i % 3 === 1 && (
              <rect 
                x={-shape.size / 4} 
                y={-shape.size / 4} 
                width={shape.size / 2} 
                height={shape.size / 2} 
                fill="none" 
                stroke={palette.accent} 
                strokeWidth="0.5"
                opacity={shape.opacity}
              />
            )}
            {i % 3 === 2 && (
              <polygon 
                points={`0,${-shape.size / 4} ${shape.size / 4},${shape.size / 4} ${-shape.size / 4},${shape.size / 4}`}
                fill="none" 
                stroke={palette.accent} 
                strokeWidth="0.5"
                opacity={shape.opacity}
              />
            )}
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div 
            className="absolute -inset-4 rounded-full border opacity-30"
            style={{ borderColor: palette.accent }}
          />
          <div 
            className="absolute -inset-8 rounded-full border opacity-15"
            style={{ borderColor: palette.accent }}
          />
          
          <div 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${palette.accent}15, ${palette.secondary}25)`,
              boxShadow: `0 0 40px ${palette.accent}20`
            }}
          >
            <svg 
              className="w-12 h-12 sm:w-14 sm:h-14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="8" r="4" fill={palette.accent} opacity="0.6" />
              <path 
                d="M4 20c0-4 4-6 8-6s8 2 8 6" 
                stroke={palette.accent} 
                strokeWidth="1.5" 
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle cx="12" cy="8" r="3" fill="none" stroke={palette.accent} strokeWidth="0.5" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20"
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${palette.accent} 50%)`,
        }}
      />
      
      <div 
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 h-px opacity-30"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}, transparent)` }}
      />
    </div>
  );
}

function NetworkProfileCard({ profile, index }: { profile: NetworkProfile; index: number }) {
  const hasImage = !!profile.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.24) }}
    >
    <FlippingCard
        className="w-full h-[340px] sm:h-[380px] md:h-[400px]"
        href={`/network/${profile.id}`}
      frontContent={
        <div className="flex flex-col h-full w-full">
          <div className="h-3/5 w-full relative overflow-hidden rounded-t-lg">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
            <img 
                  src={profile.image}
              alt={profile.name} 
              className="w-full h-full object-cover object-center" 
            />
              ) : (
                <ProfileImagePlaceholder name={profile.name} />
              )}
          </div>
            <div className="p-3 sm:p-4 flex flex-col justify-center flex-grow bg-slate-50 rounded-b-lg">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{profile.name}</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">{profile.role}</p>
          </div>
        </div>
      }
      backContent={
          <div className="flex flex-col h-full w-full p-4 sm:p-6 items-center justify-center text-center bg-slate-50 rounded-lg">
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-slate-700">
            {profile.teaserServices}
          </p>
          <Link
            href={`/network/${profile.id}`}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2 bg-slate-900 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      }
    />
    </motion.div>
  );
}

// Profiles temporarily hidden from display (data preserved for future use)
const HIDDEN_PROFILE_IDS = [
  'piet-sierens',
  'etienne-thabiso-rouge',
  'carlos-weinberger',
];

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
    <section className="py-10 sm:py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#ffbb3a] block mb-2">
          {config.label}
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
          {config.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {config.description}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {profiles.map((profile, index) => (
          <NetworkProfileCard key={profile.id} profile={profile} index={index} />
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
                  { value: '100+', label: 'Years Combined Experience' },
                  { value: '25+', label: 'Countries Served' },
                  { value: '15+', label: 'Active Specialists' },
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
