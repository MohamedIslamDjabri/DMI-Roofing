import React from 'react';
import { leadFunnel } from '@/constants/data';
import { 
  Filter, 
  Search, 
  Zap, 
  Home, 
  CheckCircle2, 
  ClipboardList, 
  PhoneCall 
} from 'lucide-react';

const stageIcons: Record<string, React.ElementType> = {
  travel_explore: Search,
  bolt: Zap,
  roofing: Home,
  verified: CheckCircle2,
  format_list_bulleted: ClipboardList,
  phone_in_talk: PhoneCall,
};

export default function LeadGenerationSection() {
  return (
    <section className="w-full bg-[#0b1f33] text-white py-20 border-b border-[#1f4a6c]/30">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header Block */}
        <div className="max-w-3xl flex flex-col gap-3 text-left">
          <div className="inline-flex items-center gap-2 text-[#ffb95f]">
            <Filter className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb95f]">
              {leadFunnel.badge}
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {leadFunnel.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#b5c8e3] leading-relaxed">
            {leadFunnel.subheadline}
          </p>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 items-stretch">
          {leadFunnel.stages.map((stage, idx) => {
            const IconComponent = stageIcons[stage.icon] || Zap;
            const isHighlight = stage.highlight;

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl flex flex-col justify-between gap-4 transition-transform hover:-translate-y-1 ${
                  isHighlight
                    ? 'bg-[#ffb95f] text-[#00050e] shadow-[0_8px_24px_rgba(255,185,95,0.3)]'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-black tracking-wider uppercase ${
                      isHighlight ? 'text-[#00050e]' : 'text-[#ffb95f]'
                    }`}
                  >
                    {stage.stage}
                  </span>
                  <IconComponent
                    className={`w-4 h-4 ${
                      isHighlight ? 'text-[#00050e]' : 'text-[#a3cbf3]'
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-1.5 my-auto py-2">
                  <h4
                    className={`font-headline text-sm font-bold leading-tight ${
                      isHighlight ? 'text-[#00050e]' : 'text-white'
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      isHighlight ? 'text-[#131c26]' : 'text-[#b5c8e3]'
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>

                <div
                  className={`pt-2 text-[10px] font-bold uppercase tracking-wider ${
                    isHighlight ? 'text-[#00050e]/80 border-t border-black/10' : 'text-[#7587a0] border-t border-white/10'
                  }`}
                >
                  Step 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
