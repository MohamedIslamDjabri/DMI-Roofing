'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { navigation, siteConfig } from '@/constants/data';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navigation.map(item => item.href.replace('#', '')).filter(Boolean);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f8f9ff]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(11,31,51,0.06)] border-b border-[#dae3f1]'
          : 'bg-[#f8f9ff]/85 backdrop-blur-sm'
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Zone: Single lockup */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col group focus:outline-none"
        >
          <span className="font-headline text-2xl font-extrabold text-[#00050e] tracking-tight leading-none group-hover:text-[#396285] transition-colors">
            {siteConfig.brand}
          </span>
          <span className="text-[10px] font-bold text-[#396285] tracking-[0.2em] leading-none mt-1 uppercase">
            {siteConfig.tagline}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#e5effd] text-[#00050e] font-bold shadow-xs'
                    : 'text-[#44474c] hover:text-[#00050e] hover:bg-[#eef4ff]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Profile Area */}
        <div className="flex items-center gap-3">
          {/* Primary Action Button */}
          <a
            href="#audit-form"
            onClick={(e) => handleNavClick(e, '#audit-form')}
            className="hidden xs:inline-flex items-center gap-1.5 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-[0_2px_8px_rgba(255,185,95,0.25)] hover:shadow-[0_4px_12px_rgba(255,185,95,0.35)] active:scale-[0.98]"
          >
            <span>Free Website Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Profile Avatar Thumbnail */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#dae3f1] flex-shrink-0 bg-[#e0e9f7]">
            <Image
              src={siteConfig.heroProfileImage || siteConfig.profileImage}
              alt={siteConfig.name}
              fill
              sizes="32px"
              className="object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#00050e] hover:bg-[#eef4ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#396285]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f8f9ff] border-b border-[#dae3f1] shadow-xl px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#dae3f1]">
            <span className="text-xs font-bold text-[#00050e]">{siteConfig.brand}</span>
            <span className="text-xs text-[#64748b]">{siteConfig.location}</span>
          </div>

          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#131c26] hover:bg-[#e5effd] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#7587a0]" />
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#audit-form"
              onClick={(e) => handleNavClick(e, '#audit-form')}
              className="w-full py-3 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Get a Free Website Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
