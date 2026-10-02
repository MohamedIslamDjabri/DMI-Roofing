import React from 'react';
import Image from 'next/image';
import { ExternalLink, Hammer, Shield } from 'lucide-react';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  engineBadge?: string;
  specSummary?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#dae3f1] shadow-xs hover:shadow-xl hover:border-[#396285]/40 transition-all duration-300 flex flex-col group overflow-hidden">
      {/* 
        CRITICAL REQUIREMENT:
        When a visitor clicks the project image, it MUST open project.url!
        The project image itself is wrapped in an anchor with target="_blank" and rel="noopener noreferrer".
      */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-52 sm:h-56 w-full overflow-hidden bg-[#0b1f33] focus:outline-none focus:ring-2 focus:ring-[#ffb95f]"
        aria-label={`Preview ${project.title} live demo website`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Scrim for Contrast & Trade Badging */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/90 via-[#0b1f33]/30 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded bg-[#ffb95f] text-[#00050e] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
            Concept / Demo
          </span>
          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium border border-white/20">
            {project.engineBadge || project.technologies[0]}
          </span>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col">
          <span className="text-[#ffb95f] text-[10px] font-mono font-bold tracking-widest uppercase">
            Project {project.number}
          </span>
          <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
            {project.title}
          </h3>
        </div>

        {/* Hover Click Affordance Indicator */}
        <div className="absolute inset-0 bg-[#0b1f33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#00050e] text-xs font-bold shadow-lg">
            <span>Open Demo URL</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#396285]" />
          </span>
        </div>
      </a>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-2.5">
          {/* Category */}
          <div className="flex items-center gap-1.5 text-[#396285]">
            <Hammer className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.features.slice(0, 4).map((feat, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#eef4ff] text-[#396285] text-[11px] font-semibold rounded border border-[#dae3f1]"
              >
                {feat}
              </span>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#64748b]">
            <span className="font-bold text-[#131c26]">Stack:</span>
            <span>{project.technologies.join(' • ')}</span>
          </div>
        </div>

        {/* 
          CRITICAL REQUIREMENT:
          Preview Project button MUST ALSO open project.url with target="_blank"
        */}
        <div className="pt-2 border-t border-[#dae3f1]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#e0e9f7] hover:bg-[#0b1f33] text-[#00050e] hover:text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 group/btn shadow-2xs"
          >
            <span>Preview Project Demo</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#396285] group-hover/btn:text-[#ffb95f] transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
