import Image from 'next/image';

export default function HeroOption4() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-[#F7F5F3] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-2.png"
          alt="Industrial Facility"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 container-width py-20">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D3748] leading-tight mb-6">
            Structure. Confidence. Results.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#4A5568] font-semibold mb-4">
            Consultant engineers for complex projects and contracts.
          </p>

          {/* Description */}
          <p className="text-base text-[#4A5568] leading-relaxed mb-8 max-w-xl">
            We provide independent expertise in engineering contract management, and finance to ensure your projects are built efficiently, safely, and profitably.
          </p>

          {/* CTA Button */}
          <button className="border border-[#2D3748] text-[#2D3748] hover:bg-[#2D3748] hover:text-white px-8 py-3 text-sm font-medium transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
