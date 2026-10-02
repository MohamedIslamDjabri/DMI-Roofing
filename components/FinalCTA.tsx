import React from 'react';
import { finalCta } from '@/constants/data';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#00050e] text-white py-24 relative overflow-hidden">
      {/* Blueprint grid effect */}
      <div 
        className="absolute inset-0 opacity-15 bg-[radial-gradient(#dae3f1_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center text-center gap-6">
        <span className="text-xs font-mono font-bold text-[#ffb95f] uppercase tracking-widest">
          {finalCta.badge}
        </span>

        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white max-w-3xl tracking-tight leading-[1.15] text-balance">
          {finalCta.heading}
        </h2>

        <p className="text-base sm:text-lg text-[#b5c8e3] max-w-2xl leading-relaxed">
          {finalCta.text}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={finalCta.buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] font-headline font-extrabold text-sm sm:text-base rounded-lg transition-all shadow-[0_4px_20px_rgba(255,185,95,0.4)] active:scale-[0.98]"
          >
            <span>{finalCta.buttonLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
