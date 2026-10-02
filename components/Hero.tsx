'use client';

import React from 'react';
import Image from 'next/image';
import { hero, siteConfig } from '@/constants/data';
import { ArrowRight, LayoutGrid, CheckCircle2, PhoneCall, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#eef4ff] overflow-hidden pt-28 pb-16 md:py-32">
      {/* Blueprint / Architectural Drafting Grid Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#dae3f1_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Ambient background soft glow */}
      <div 
        className="absolute top-1/4 right-10 w-96 h-96 bg-[#cee5ff]/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-5 z-10">
            {/* Display Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#00050e] tracking-tight leading-[1.12] text-balance">
              {hero.headline}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#44474c] max-w-2xl leading-relaxed font-normal">
              {hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={hero.primaryCta.url}
                onClick={(e) => handleScrollTo(e, hero.primaryCta.url)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] font-bold text-sm rounded-lg transition-all shadow-[0_4px_16px_rgba(255,185,95,0.35)] hover:shadow-[0_6px_20px_rgba(255,185,95,0.45)] active:scale-[0.98]"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={hero.secondaryCta.url}
                onClick={(e) => handleScrollTo(e, hero.secondaryCta.url)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#eef4ff] text-[#131c26] border border-[#dae3f1] font-bold text-sm rounded-lg transition-all shadow-xs hover:border-[#396285]/40"
              >
                <LayoutGrid className="w-4 h-4 text-[#396285]" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Tech & Capabilities Trust Line */}
            <div className="flex items-center gap-2 pt-2 text-[#44474c]">
              <ShieldCheck className="w-4 h-4 text-[#396285] shrink-0" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                {hero.techLine}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Composition with Hero Studio Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Base Contractor Mockup Card */}
            <div className="relative bg-white rounded-xl shadow-[0_12px_36px_rgba(11,31,51,0.08)] border border-[#dae3f1] p-4 sm:p-5 flex flex-col gap-4">
              {/* Mockup Window Bar */}
              <div className="flex items-center justify-between pb-2 bg-[#f8f9ff] px-3 py-1.5 rounded-lg border border-[#e5effd]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb95f]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#396285]"></span>
                </div>
                <span className="text-[11px] font-mono text-[#64748b]">
                  {hero.mockup.domain}
                </span>
                <span className="text-[10px] text-[#64748b] bg-white px-1.5 py-0.5 rounded border border-[#dae3f1]">
                  SSL Secured
                </span>
              </div>

              {/* Mockup Content Banner: Deep Navy Container */}
              <div className="relative rounded-lg overflow-hidden bg-[#0b1f33] text-white p-4 sm:p-5 flex flex-col gap-3 shadow-inner">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-white">
                    {hero.mockup.company}
                  </span>
                  <span className="px-2 py-0.5 bg-[#ffb95f] text-[#00050e] text-[10px] font-extrabold uppercase rounded tracking-wider">
                    {hero.mockup.badge}
                  </span>
                </div>

                <p className="text-xs text-[#b5c8e3] leading-relaxed">
                  {hero.mockup.serviceSubtitle}
                </p>

                {/* Spec Indicators */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2.5 text-center border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-[#ffb95f] block tracking-wider">
                      {hero.mockup.metric1Label}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {hero.mockup.metric1Val}
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2.5 text-center border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-[#ffb95f] block tracking-wider">
                      {hero.mockup.metric2Label}
                    </span>
                    <span className="text-sm font-bold text-white flex items-center justify-center gap-1">
                      {hero.mockup.metric2Val}
                    </span>
                  </div>
                </div>

                {/* Instant Quote / Call Row */}
                <div className="pt-2 flex items-center justify-between bg-white/10 px-3 py-2 rounded-lg border border-white/10 mt-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <PhoneCall className="w-3.5 h-3.5 text-[#ffb95f]" />
                    <span className="text-xs font-semibold tracking-wider font-mono">
                      {hero.mockup.phone}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#ffb95f] text-[#00050e] px-2 py-0.5 rounded shadow-xs uppercase">
                    {hero.mockup.buttonLabel}
                  </span>
                </div>
              </div>

              {/* Overlaid Developer Profile Card with Real Identity */}
              <div className="bg-[#e0e9f7] rounded-lg p-3 sm:p-3.5 flex items-center gap-3.5 border border-[#dae3f1] shadow-sm">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-white shadow-sm bg-slate-300">
                  <Image
                    src={siteConfig.heroProfileImage || siteConfig.profileImage}
                    alt={siteConfig.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb95f] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb95f]"></span>
                    </span>
                    <span className="text-[10px] font-extrabold text-[#396285] uppercase tracking-wider">
                      {siteConfig.availability}
                    </span>
                  </div>
                  <h4 className="font-headline text-sm sm:text-base text-[#00050e] font-bold truncate">
                    {siteConfig.name}
                  </h4>
                  <p className="text-xs text-[#44474c] truncate">
                    {siteConfig.title} at {siteConfig.brand} • {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
