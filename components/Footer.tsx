import React from 'react';
import { footer, navigation, socialLinks, siteConfig } from '@/constants/data';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1f33] text-[#7587a0] border-t border-[#1f4a6c]/40">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-extrabold text-white tracking-tight leading-none">
                {footer.brand}
              </span>
              <span className="text-[10px] font-bold text-[#ffb95f] tracking-[0.2em] leading-none mt-1 uppercase">
                {footer.tagline}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#b5c8e3] leading-relaxed">
              {footer.developerCredit}
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-[#ffb95f] animate-pulse"></span>
              <span className="text-[11px] font-bold text-[#ffb95f] uppercase tracking-wider">
                {footer.statusText}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-headline text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs sm:text-sm text-[#b5c8e3] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Core Stack */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-headline text-sm font-bold text-white uppercase tracking-wider">
              Core Stack & Standards
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['WordPress', 'React', 'Next.js 14', 'Tailwind CSS', 'Web Performance', 'Semantic SEO'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/10 text-white rounded text-[11px] font-semibold border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Channels */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline text-sm font-bold text-white uppercase tracking-wider">
              Channels
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((item) => {
                const isMailto = item.url.startsWith('mailto:');
                const href = isMailto || item.url.startsWith('http')
                  ? item.url
                  : `https://${item.url}`;
                const isExternal = href.startsWith('http') && !item.url.includes('YOUR_');

                return (
                  <a
                    key={item.name}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-xs sm:text-sm text-[#b5c8e3] hover:text-[#ffb95f] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7587a0] text-center md:text-left">
            {footer.copyright}
          </p>
          <span className="text-[11px] font-mono font-bold text-[#b5c8e3] tracking-widest uppercase">
            {footer.tagBadge}
          </span>
        </div>
      </div>
    </footer>
  );
}
