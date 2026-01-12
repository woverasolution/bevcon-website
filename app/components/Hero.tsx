import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png"
          alt="BevCon Industrial Facility"
          fill
          className="object-cover object-center blur-[2px]"
          priority
        />
        
        {/* Dark Overlay for maximum text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container-width text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="heading-xl text-white drop-shadow-2xl">
            NEXT GENERATION<br />
            <span className="text-primary block mt-2">BEVERAGE SOLUTIONS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
            BevCon partners with investors to plan, structure, and deliver beverage projects worldwide.
          </p>
          
          <div className="pt-8">
            <Link href="#contact" className="btn-primary inline-block min-w-[200px] text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
