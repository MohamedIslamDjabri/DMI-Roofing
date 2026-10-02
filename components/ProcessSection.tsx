import React from 'react';
import { processSteps } from '@/constants/data';
import { ListOrdered } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-[#eef4ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#396285]">
            <ListOrdered className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
              Execution Roadmap
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
            From Roofing Business to Website Launch
          </h2>

          <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
            A disciplined, 6-stage engineering process that guarantees clean code, exact contractor branding, and zero guesswork.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 sm:p-8 rounded-xl border border-[#dae3f1] shadow-xs hover:shadow-md hover:border-[#396285]/30 transition-all flex flex-col gap-3 group"
            >
              <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#396285] group-hover:text-[#ffb95f] transition-colors">
                {step.step}
              </span>

              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#00050e]">
                {step.title}
              </h3>

              <p className="text-sm text-[#44474c] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
