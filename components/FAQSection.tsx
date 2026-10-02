'use client';

import React, { useState } from 'react';
import { faq } from '@/constants/data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#396285]">
            <HelpCircle className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
              Common Questions
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
            Everything you need to know about working remotely with DMI Web Development.
          </p>
        </div>

        {/* 6 FAQ Accordion / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#dae3f1] shadow-xs hover:border-[#396285]/30 transition-all overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:bg-[#eef4ff] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-headline text-base sm:text-lg font-bold text-[#00050e] leading-snug">
                    {item.question}
                  </h3>
                  <div
                    className={`p-1 rounded-md bg-[#eef4ff] text-[#396285] transition-transform duration-200 shrink-0 mt-0.5 ${
                      isOpen ? 'rotate-180 bg-[#ffb95f] text-[#00050e]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#44474c] leading-relaxed border-t border-[#dae3f1]/50 bg-[#f8f9ff]/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
