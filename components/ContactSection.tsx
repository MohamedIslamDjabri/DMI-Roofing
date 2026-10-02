'use client';

import React, { useState } from 'react';
import { auditCta, contact, siteConfig } from '@/constants/data';
import { 
  Send, 
  Check, 
  Clock, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    scope: 'new',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto link with all form parameters
    const subject = encodeURIComponent(`[Roofing Website Audit Request] — ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hello Mohamed,\n\nI would like to request a website audit for my roofing business.\n\n` +
      `Contact Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Current Website: ${formData.website || 'None / Not launched yet'}\n` +
      `Project Scope: ${formData.scope}\n\n` +
      `Goals / Notes:\n${formData.notes || 'Looking to generate more local calls and quote requests.'}\n\n` +
      `Best regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="audit-form" className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(11,31,51,0.08)] border border-[#dae3f1] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Callout Box: Navy Theme */}
            <div className="lg:col-span-5 bg-[#0b1f33] p-6 sm:p-10 md:p-12 text-white flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
                  <span className="text-[11px] font-bold text-[#ffb95f] uppercase tracking-wider">
                    {auditCta.badge}
                  </span>
                </div>

                <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {auditCta.heading}
                </h2>

                <p className="text-sm text-[#b5c8e3] leading-relaxed">
                  {auditCta.description}
                </p>

                {/* Audit Checklist */}
                <div className="flex flex-col gap-3 pt-2">
                  {auditCta.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#ffb95f] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-white font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Turnaround Pill */}
              <div className="p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/10 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#ffb95f] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {auditCta.turnaround}
                  </span>
                  <span className="text-[11px] text-[#b5c8e3]">
                    {auditCta.turnaroundSub} • Direct with Mohamed Islam D.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Box */}
            <div id="contact" className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#00050e]">
                  Submit Your Website Details
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b]">
                  Fill out the form below. It opens directly to email Mohamed Islam D. with your project specifications.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#eef4ff] rounded-xl border border-[#396285]/30 flex flex-col items-center text-center gap-4 my-auto animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#ffb95f] flex items-center justify-center text-[#00050e]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline text-lg font-bold text-[#00050e]">
                      Email Ready To Send!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#44474c] max-w-md leading-relaxed">
                      Your default mail program was opened with your audit details. If it did not launch automatically, you can send an email directly to{' '}
                      <strong className="text-[#00050e]">{siteConfig.email}</strong>.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="px-4 py-2 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Directly</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-white text-[#131c26] border border-[#dae3f1] text-xs font-bold rounded-lg hover:bg-[#f8f9ff] transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#131c26]" htmlFor="client-name">
                        Your Full Name *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#131c26]" htmlFor="company-name">
                        Roofing Company Name *
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Miller Roofing & Restoration"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#131c26]" htmlFor="client-email">
                        Email Address *
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@millerroofing.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#131c26]" htmlFor="website-url">
                        Current Website URL (Optional)
                      </label>
                      <input
                        id="website-url"
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="www.millerroofing.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#131c26]" htmlFor="project-type">
                      Project Scope / Primary Need
                    </label>
                    <select
                      id="project-type"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                    >
                      <option value="new">Brand New Roofing Website</option>
                      <option value="redesign">Full Redesign of Outdated Website</option>
                      <option value="funnel">Quote Request & Lead Funnel Optimization</option>
                      <option value="speed">Speed & Mobile Performance Fix</option>
                      <option value="maintenance">Ongoing Website Maintenance</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#131c26]" htmlFor="project-notes">
                      Your Business Goals / Pain Points
                    </label>
                    <textarea
                      id="project-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell me about your services, local city market, or what you'd like to improve..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9ff] border border-[#dae3f1] text-sm text-[#131c26] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#396285]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#ffb95f] hover:bg-[#ffddb8] text-[#00050e] font-headline font-extrabold text-sm rounded-lg transition-all shadow-[0_4px_16px_rgba(255,185,95,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Request My Free Audit</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
