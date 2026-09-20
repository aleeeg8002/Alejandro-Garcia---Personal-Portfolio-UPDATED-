/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const skillPills = [
  'C++ & Python',
  'AWS & DevOps',
  'Docker & ELK Stack',
  'Full-Stack Web',
  'UI/UX Design',
];

export const Journey: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8"
      aria-labelledby="journey-heading"
    >
      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Academic/Leadership Narrative */}
        <div className="lg:col-span-6 flex flex-col fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#B5A642]"></span>
            <span className="text-xs uppercase tracking-widest text-[#B5A642] font-semibold">Background</span>
          </div>

          <h2 
            id="journey-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FDFDFD] mb-6"
          >
            The Journey
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0] leading-relaxed font-normal">
            Currently studying Computer Science at Carolina University. Blending a strong academic foundation in data structures and algorithms with hands-on experience in cloud infrastructure, system monitoring, and IT support. Serving as President of the Computer Science Club to foster technical growth and community.
          </p>
        </div>

        {/* Right Column: Pill-Shaped Expertise Tags with Subtle Gold Glow on Hover */}
        <div className="lg:col-span-6 flex flex-col justify-center fade-in-up delay-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-[#B5A642]"></span>
            <span className="text-xs uppercase tracking-widest text-[#B5A642] font-semibold">Technical Proficiencies</span>
          </div>

          <p className="text-sm text-[#C0C0C0]/80 mb-6">
            Core domains, cloud infrastructure frameworks, and development stacks:
          </p>

          <div className="flex flex-wrap gap-3.5 sm:gap-4" id="skill-tags-container">
            {skillPills.map((pill, idx) => (
              <span
                key={pill}
                id={`skill-tag-${idx}`}
                className="skill-pill cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
