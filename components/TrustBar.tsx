import React from 'react';
import { trustItems } from '@/constants/data';
import { Hammer, Globe, Flame, Code2, Gauge, MapPin } from 'lucide-react';

const icons = [Hammer, Globe, Flame, Code2, Gauge, MapPin];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#0b1f33] text-white py-4 overflow-x-auto shadow-inner border-y border-[#1f4a6c]/30">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-6 whitespace-nowrap min-w-max">
        {trustItems.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <React.Fragment key={item}>
              <div className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 text-[#ffb95f]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#dae3f1]">
                  {item}
                </span>
              </div>
              {index < trustItems.length - 1 && (
                <span className="text-[#36485e] select-none">•</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
