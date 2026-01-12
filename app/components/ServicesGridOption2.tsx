import { 
  Lightbulb, 
  Factory, 
  FileText, 
  ShieldCheck, 
  Briefcase, 
  BarChart3, 
  Users 
} from 'lucide-react';
import { Playfair_Display, Lato } from 'next/font/google';

// Option 2 Font Pairing: Playfair Display (Serif) + Lato (Sans)
// Color Palette: Navy Blue (#0A2647) & Soft Teal (#2C74B3)

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const services = [
  {
    suffix: "CEPT",
    title: "Concept",
    description: "Commercial and technical feasibility studies for greenfield and brownfield projects.",
    icon: Lightbulb
  },
  {
    suffix: "STRUCTION",
    title: "Construction",
    description: "Project development, tender management, supervision, testing, and final acceptance.",
    icon: Factory
  },
  {
    suffix: "TRACTS",
    title: "Contracts",
    description: "FIDIC-based contracts optimized for the beverage industry.",
    icon: FileText
  },
  {
    suffix: "FIDENCE",
    title: "Confidence",
    description: "Technical and commercial operational support for stable production.",
    icon: ShieldCheck
  },
  {
    suffix: "SULTING",
    title: "Consulting",
    description: "Independent technical audits and expert advisory services.",
    icon: Briefcase
  },
  {
    suffix: "TROL",
    title: "Control",
    description: "Project and operational controlling, reporting, and OPEX optimization.",
    icon: BarChart3
  },
  {
    suffix: "NECT",
    title: "Connect",
    description: "Deployment of experienced experts for short- and long-term assignments.",
    icon: Users
  }
];

export default function ServicesGridOption2() {
  return (
    <section id="services" className={`section-padding bg-[#0A2647] ${playfair.variable} ${lato.variable}`}>
      <div className="container-width">
        <div className="text-center mb-20">
          <span className="text-[#2C74B3] font-[family-name:var(--font-lato)] tracking-widest uppercase text-sm mb-4 block font-bold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6">
            Integrated Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-lato)] leading-relaxed">
            A comprehensive suite of engineering and consulting services tailored for the beverage industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-[#144272] hover:bg-[#205295] rounded-none transition-all duration-300 ${index === services.length - 1 ? 'lg:col-start-2' : ''}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-[#2C74B3] group-hover:text-white transition-colors duration-300 mt-1">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold mb-3 text-white">
                    <span className="text-white/40 text-lg mr-1 font-[family-name:var(--font-lato)] uppercase tracking-wider">Bev</span>
                    <span className="text-[#2C74B3] group-hover:text-white transition-colors">Con</span>{service.suffix}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white/90 font-[family-name:var(--font-lato)] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2C74B3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
