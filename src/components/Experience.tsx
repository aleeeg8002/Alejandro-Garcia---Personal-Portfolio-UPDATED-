/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES_DATA[0].id);

  const activeExperience = EXPERIENCES_DATA.find((e) => e.id === activeExpId) || EXPERIENCES_DATA[0];

  return (
    <section id="experience" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col mb-12 fade-in-up">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
          Experience &amp; Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6]">
          Where I’ve worked.
        </h2>
      </div>

      {/* Interactive Experience Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Role Navigation Buttons */}
        <div className="lg:col-span-5 flex flex-col space-y-3 fade-in-up">
          {EXPERIENCES_DATA.map((item) => {
            const isActive = activeExpId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveExpId(item.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group flex items-start justify-between ${
                  isActive
                    ? 'bg-[#1E222D] border-[#C8A84E]/60 shadow-[0_4px_20px_rgba(200,168,78,0.1)]'
                    : 'bg-[#181B23]/70 border-white/[0.07] hover:border-white/20 hover:bg-[#1C202A]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isActive
                        ? 'bg-[#C8A84E] text-[#12141A]'
                        : 'bg-white/[0.05] text-[#7E8594] group-hover:text-[#FAF9F6]'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className={`text-sm sm:text-base font-semibold transition-colors ${
                          isActive ? 'text-[#FAF9F6]' : 'text-[#C2C6CE] group-hover:text-[#FAF9F6]'
                        }`}
                      >
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-xs text-[#7E8594] font-medium line-clamp-1">
                      {item.company}
                    </p>
                    <span className="text-[11px] font-mono text-[#7E8594]/70 mt-1 block">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 mt-1 transition-transform shrink-0 ${
                    isActive ? 'text-[#C8A84E] translate-x-1' : 'text-[#7E8594]/40 group-hover:text-[#C2C6CE]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Active Role Pane with Rich Details */}
        <div className="lg:col-span-7 bg-[#181B23]/90 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative fade-in-up delay-100 min-h-[420px] flex flex-col justify-between">
          
          <div>
            {/* Top metadata row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08] mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl sm:text-2xl font-bold text-[#FAF9F6]">
                    {activeExperience.role}
                  </span>
                  <span className="text-[#C8A84E] font-semibold text-lg sm:text-xl">
                    @ {activeExperience.company.split('—')[0].trim()}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7E8594] mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A84E]" />
                    <span>{activeExperience.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A84E]" />
                    <span>{activeExperience.location}</span>
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#C8A84E]/10 text-[#C8A84E] border border-[#C8A84E]/30">
                {activeExperience.category}
              </span>
            </div>

            {/* Role Overview */}
            <p className="text-sm sm:text-base text-[#C2C6CE] leading-relaxed mb-6 font-light">
              {activeExperience.description}
            </p>

            {/* Achievements Bullet List */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7E8594]">
                Key Deliverables &amp; Impact
              </h4>
              {activeExperience.achievements.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#C2C6CE] leading-relaxed">
                  <span className="text-[#C8A84E] mt-1 shrink-0 font-bold">&bull;</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#7E8594] block mb-3 uppercase tracking-wider">
              Technologies &amp; Core Tools
            </span>
            <div className="flex flex-wrap gap-2">
              {activeExperience.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#12141A] text-[#C2C6CE] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
