/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'systems' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  const featuredProject = PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 fade-in-up">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6]">
            Things I’ve built.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-lg bg-[#181B23] border border-white/10">
          {(['all', 'cloud', 'systems', 'web'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono capitalize transition-all duration-200 ${
                filter === category
                  ? 'bg-[#C8A84E] text-[#12141A] font-semibold shadow-[0_0_12px_rgba(200,168,78,0.25)]'
                  : 'text-[#C2C6CE] hover:text-[#FAF9F6] hover:bg-white/[0.05]'
              }`}
            >
              {category === 'all' ? 'All Works' : category === 'cloud' ? 'Cloud & DevOps' : category === 'systems' ? 'Systems & C++' : 'Web & UX'}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Primary Project Spotlight Card */}
      {filter === 'all' && (
        <div className="mb-14 p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#1E222D] to-[#181B23] border border-[#C8A84E]/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)] fade-in-up relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A84E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#C8A84E]/20 text-[#C8A84E] border border-[#C8A84E]/40">
                  Featured Architecture
                </span>
                <span className="text-xs font-mono text-[#C2C6CE] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A84E]" />
                  <span>AWS EC2 + Docker</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF9F6] mb-4 group-hover:text-[#C8A84E] transition-colors">
                {featuredProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#C2C6CE] leading-relaxed mb-6 font-light">
                {featuredProject.longDescription || featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#12141A] text-[#C2C6CE] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="btn-primary text-xs sm:text-sm py-2 px-5 inline-flex items-center gap-2"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => setSelectedProject(featuredProject)}
                className="cursor-pointer relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#12141A] group-hover:border-[#C8A84E]/50 transition-all shadow-xl"
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-3 right-3 bg-[#12141A]/90 px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-mono text-[#C8A84E] flex items-center gap-1.5">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="interactive-card flex flex-col justify-between overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div>
              {/* Image Container with Zoom & Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#12141A] border-b border-white/[0.08]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B23] via-transparent to-transparent opacity-80 pointer-events-none" />
                
                {project.badge && (
                  <span className="absolute top-3 left-3 text-[11px] font-mono px-2 py-0.5 rounded bg-[#12141A]/90 text-[#C8A84E] border border-[#C8A84E]/30 backdrop-blur-sm">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FAF9F6] mb-2.5 group-hover:text-[#C8A84E] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#C2C6CE] leading-relaxed mb-4 line-clamp-3 font-light">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Footer with Tags and Details CTA */}
            <div className="px-6 pb-6 pt-2">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#12141A] text-[#7E8594] border border-white/[0.07]"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-[#7E8594]">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono text-[#7E8594] group-hover:text-[#C8A84E] transition-colors">
                <span>View details &rarr;</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
