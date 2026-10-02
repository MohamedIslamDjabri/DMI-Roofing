import React from 'react';
import Image from 'next/image';
import { about, skills, siteConfig } from '@/constants/data';
import { User, Globe, CheckCircle2, Shield, Code2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-[#dae3f1] shadow-[0_12px_36px_rgba(11,31,51,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Profile Imagery Column using IMAGE_1 */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-center text-center">
              <div className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md ring-4 ring-[#e5effd] bg-slate-200">
                <Image
                  src={about.profileImage || siteConfig.profileImage}
                  alt={about.name}
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col items-center gap-1">
                <h3 className="font-headline text-xl font-extrabold text-[#00050e]">
                  {about.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] font-medium">
                  {about.role}
                </p>
                <div className="flex items-center gap-1.5 mt-1 bg-[#eef4ff] px-3 py-1 rounded-full border border-[#dae3f1]">
                  <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
                  <span className="text-[11px] font-bold text-[#396285] uppercase tracking-wider">
                    {about.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Credentials Column */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-[#396285]">
                <User className="w-4 h-4 text-[#ffb95f]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
                  About The Developer
                </span>
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00050e] tracking-tight leading-snug">
                {about.subheading}
              </h2>

              <p className="text-sm sm:text-base text-[#44474c] leading-relaxed">
                {about.bioParagraph1}
              </p>

              <p className="text-sm sm:text-base text-[#44474c] leading-relaxed">
                {about.bioParagraph2}
              </p>

              {/* Technical Stack Badges */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs uppercase font-extrabold text-[#131c26] tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#396285]" />
                  <span>Core Technical Stack</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.slice(0, 4).concat(skills.cms.slice(0, 2)).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#eef4ff] text-[#00050e] text-xs rounded-md font-semibold border border-[#dae3f1]"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-[#ffb95f] text-[#00050e] text-xs rounded-md font-extrabold shadow-2xs">
                    Core Web Vitals 95+
                  </span>
                </div>
              </div>

              {/* Remote Markets Indicator */}
              <div className="p-4 bg-[#eef4ff] rounded-xl border border-[#dae3f1] flex items-center gap-3 mt-1">
                <Globe className="w-5 h-5 text-[#396285] shrink-0" />
                <span className="text-xs sm:text-sm text-[#131c26] leading-relaxed">
                  Serving roofing &amp; exterior contractors across the <strong>USA, Canada, United Kingdom, Australia &amp; UAE</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
