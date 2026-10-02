'use client';

import React, { useState } from 'react';
import { solutions } from '@/constants/data';
import { 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  Wrench, 
  CloudLightning, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const serviceIcons = [Home, Wrench, CloudLightning, Building2];

export default function SolutionSection() {
  const [selectedService, setSelectedService] = useState(0);
  const [zipInput, setZipInput] = useState('Dallas, TX 75201 (Hail Impact Zone)');
  const [stepConfirmed, setStepConfirmed] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStepConfirmed(true);
    setTimeout(() => {
      const auditForm = document.getElementById('audit-form');
      if (auditForm) {
        auditForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <section className="w-full bg-[#eef4ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Interactive Roofing Quote Flow Preview Mockup */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl shadow-[0_12px_36px_rgba(11,31,51,0.06)] border border-[#dae3f1] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#dae3f1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffb95f]"></span>
                <span className="font-headline text-base sm:text-lg font-bold text-[#00050e]">
                  {solutions.quoteCalculatorPreview.title}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#396285] tracking-wider uppercase bg-[#e5effd] px-2 py-0.5 rounded">
                {solutions.quoteCalculatorPreview.step}
              </span>
            </div>

            <form onSubmit={handleContinue} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#131c26]">
                  Select Your Service Need
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {solutions.quoteCalculatorPreview.serviceOptions.map((opt, idx) => {
                    const IconComponent = serviceIcons[idx % serviceIcons.length];
                    const isSelected = selectedService === idx;
                    return (
                      <button
                        type="button"
                        key={opt.name}
                        onClick={() => setSelectedService(idx)}
                        className={`p-3 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#e5effd] border-[#396285] text-[#00050e] shadow-xs'
                            : 'bg-[#f8f9ff] border-[#dae3f1] text-[#44474c] hover:bg-white hover:border-[#396285]/40'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#396285]' : 'text-[#7587a0]'}`} />
                        <span className="text-xs font-bold tracking-tight">
                          {opt.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#131c26]">
                  Address / Zip Code
                </label>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] focus-within:border-[#396285] focus-within:ring-2 focus-within:ring-[#396285]/20">
                  <MapPin className="w-4 h-4 text-[#396285] shrink-0" />
                  <input
                    type="text"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-[#131c26] font-medium focus:outline-none"
                    placeholder="Enter street or postal code..."
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-[#e0e9f7] rounded-lg border border-[#dae3f1]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#396285] shrink-0" />
                  <span className="text-xs font-bold text-[#00050e]">
                    {solutions.quoteCalculatorPreview.guarantee}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] text-xs font-bold rounded shadow-xs transition-colors whitespace-nowrap"
                >
                  {stepConfirmed ? 'Redirecting to Audit...' : solutions.quoteCalculatorPreview.buttonLabel}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Value Breakdown */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#396285]">
              <CheckCircle2 className="w-4 h-4 text-[#ffb95f]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
                {solutions.badge}
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
              {solutions.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
              {solutions.description}
            </p>

            <ul className="flex flex-col gap-4">
              {solutions.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#ffb95f] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-sm sm:text-base font-bold text-[#00050e]">
                      {benefit.title}
                    </strong>
                    <p className="text-sm text-[#44474c] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-[#396285] hover:text-[#00050e] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>See Our 6-Step Process</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
