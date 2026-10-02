import React from 'react';
import { problems } from '@/constants/data';
import { 
  AlertTriangle, 
  Smartphone, 
  FileText, 
  Layers, 
  Clock, 
  ShieldAlert,
  MonitorX
} from 'lucide-react';

const problemIcons: Record<string, React.ElementType> = {
  devices_off: MonitorX,
  smartphone: Smartphone,
  request_quote: FileText,
  layers_clear: Layers,
  timer_off: Clock,
  gpp_bad: ShieldAlert,
};

export default function ProblemsSection() {
  return (
    <section className="w-full bg-[#f8f9ff] py-20 border-b border-[#dae3f1]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header Block */}
        <div className="max-w-3xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#396285]">
            <AlertTriangle className="w-4 h-4 text-[#ffb95f]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#396285]">
              The Core Friction
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#00050e] tracking-tight">
            Your Website Should Bring You Roofing Leads
          </h2>

          <p className="text-base sm:text-lg text-[#44474c] leading-relaxed">
            Most roofing contractors lose high-ticket residential replacements and commercial contracts due to an outdated web presence. Here is what holds companies back:
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => {
            const IconComponent = problemIcons[prob.icon] || AlertTriangle;
            return (
              <div
                key={prob.number}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#dae3f1] shadow-xs hover:shadow-md hover:border-[#396285]/30 transition-all flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#eef4ff] border border-[#dae3f1] flex items-center justify-center text-[#396285] group-hover:bg-[#0b1f33] group-hover:text-[#ffb95f] transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#ffb95f]">
                      {prob.number}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-[#00050e]">
                      {prob.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#44474c] leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
