'use client';

import React, { useState } from 'react';
import { projects } from '@/constants/data';
import ProjectCard, { ProjectItem } from './ProjectCard';
import { FolderGit2, MessageSquare, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Emergency/Storm' | 'Commercial' | 'Multi-Location'>('All');

  const filteredProjects = projects.filter((item: ProjectItem) => {
    if (filter === 'All') return true;
    return item.type === filter;
  });

  return (
    <section id="work" className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-[#396285]">
              <FolderGit2 className="w-4 h-4 text-[#ffb95f]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
              Selected Roofing Projects
            </h2>

            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
              Modern website concepts &amp; showcase prototypes designed specifically for roofing contractors and exterior service companies.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#e0e9f7] px-3.5 py-1.5 rounded-full border border-[#dae3f1] self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
            <span className="text-xs font-bold text-[#00050e] uppercase tracking-wider">
              {projects.length} Demo Concepts Live
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#dae3f1] pb-4">
          {(['All', 'Residential', 'Emergency/Storm', 'Commercial', 'Multi-Location'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#0b1f33] text-white shadow-xs'
                  : 'bg-[#eef4ff] text-[#44474c] hover:bg-[#e5effd] hover:text-[#00050e]'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project as ProjectItem} />
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <div className="p-4 bg-[#eef4ff] rounded-xl border border-[#dae3f1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffb95f] shrink-0"></div>
            <p className="text-xs text-[#44474c] leading-relaxed">
              <strong>Honest Portrayal:</strong> These six roofing websites are active concept prototypes demonstrating layout speed, high-ticket contractor presentation, and mobile lead funnels until replaced with client projects.
            </p>
          </div>
          <a
            href="#audit-form"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00050e] hover:bg-[#396285] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Discuss Custom Build</span>
            <MessageSquare className="w-3.5 h-3.5 text-[#ffb95f]" />
          </a>
        </div>
      </div>
    </section>
  );
}
