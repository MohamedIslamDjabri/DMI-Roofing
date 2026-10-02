import React from 'react';
import { services } from '@/constants/data';
import { 
  Compass, 
  Wand2, 
  Calculator, 
  CloudLightning, 
  Gauge, 
  LifeBuoy, 
  CheckCircle2, 
  Hammer 
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  architecture: Compass,
  auto_fix_high: Wand2,
  price_change: Calculator,
  thunderstorm: CloudLightning,
  speed: Gauge,
  support_agent: LifeBuoy,
};

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#396285]">
            <Hammer className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
              Specialized Offerings
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
            Roofing Website Solutions
          </h2>

          <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
            Complete digital infrastructure tailored specifically to the American, Canadian, and UK roofing contractor markets.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => {
            const IconComponent = serviceIcons[srv.icon] || Compass;

            return (
              <div
                key={srv.number}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#dae3f1] shadow-xs hover:shadow-lg hover:border-[#396285]/30 transition-all flex flex-col justify-between gap-5 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#eef4ff] border border-[#dae3f1] flex items-center justify-center text-[#396285] group-hover:bg-[#0b1f33] group-hover:text-[#ffb95f] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748b]">
                      {srv.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline text-lg font-bold text-[#00050e] leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-[#44474c] leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <ul className="flex flex-col gap-1.5 pt-2 border-t border-[#dae3f1]/60">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#36485e]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ffb95f] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#dae3f1]">
                  <span className="text-[11px] font-bold text-[#396285] uppercase tracking-wider block">
                    {srv.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
