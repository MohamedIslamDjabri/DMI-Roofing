import React from 'react';
import { whyDMI, credibilityBanner } from '@/constants/data';
import { 
  Home, 
  PhoneCall, 
  Code2, 
  Smartphone, 
  MessagesSquare, 
  Handshake, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ThumbsUp
} from 'lucide-react';

const differentiatorIcons: Record<string, React.ElementType> = {
  roofing: Home,
  call: PhoneCall,
  code: Code2,
  smartphone: Smartphone,
  forum: MessagesSquare,
  handshake: Handshake,
};

export default function WhyDMI() {
  return (
    <section className="w-full bg-[#eef4ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#396285]">
            <ThumbsUp className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
              Competitive Edge
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
            Why Roofing Contractors Choose DMI
          </h2>

          <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
            The difference between an expensive brochure and an inbound sales generator.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyDMI.map((item, idx) => {
            const IconComponent = differentiatorIcons[item.icon] || CheckCircle2;

            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#dae3f1] shadow-xs hover:shadow-md hover:border-[#396285]/30 transition-all flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#eef4ff] border border-[#dae3f1] flex items-center justify-center text-[#396285] group-hover:bg-[#0b1f33] group-hover:text-[#ffb95f] transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="font-headline text-lg font-bold text-[#00050e]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#44474c] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest Credibility & Client Feedback Banner */}
        <div className="bg-[#e0e9f7] p-6 sm:p-8 rounded-xl border border-[#dae3f1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffb95f] flex items-center justify-center text-[#00050e] shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-headline text-base sm:text-lg font-bold text-[#00050e]">
                {credibilityBanner.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#44474c] max-w-2xl leading-relaxed">
                {credibilityBanner.description}
              </p>
            </div>
          </div>

          <a
            href={credibilityBanner.ctaUrl}
            className="px-5 py-2.5 bg-[#00050e] hover:bg-[#396285] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shadow-xs self-start md:self-auto flex items-center gap-1.5"
          >
            <span>{credibilityBanner.ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ffb95f]" />
          </a>
        </div>
      </div>
    </section>
  );
}
