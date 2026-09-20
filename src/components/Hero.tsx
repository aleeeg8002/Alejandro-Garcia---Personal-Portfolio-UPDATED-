/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Mail, BookOpen, Download, Github, Linkedin } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../data/portfolioData';
import profilePhoto from '../assets/images/Provisional_Professional_Photo-removebg-preview.png';

interface HeroProps {
  onNavigateStory?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateStory }) => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-20 md:pt-32 md:pb-28 max-w-6xl mx-auto px-6 sm:px-8"
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography, Badges & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left fade-in-up">
          
          {/* Clean Minimalist Category Kicker */}
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
            {HERO_DATA.title}
          </span>

          {/* Large Name */}
          <h1 
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF9F6] leading-[1.06] mb-4"
          >
            {HERO_DATA.name}
          </h1>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {HERO_DATA.roleBadges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#C2C6CE] border border-white/10 hover:border-[#C8A84E]/50 hover:text-[#FAF9F6] transition-colors cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Descriptive Lead */}
          <p className="text-base sm:text-lg text-[#C2C6CE] leading-relaxed max-w-xl mb-8 font-light">
            {HERO_DATA.bio}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mb-10" id="hero-actions">
            <a 
              href="#contact" 
              className="btn-primary group"
              aria-label="Contact Me"
              id="hero-contact-btn"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Contact Me</span>
            </a>

 <a 
  href={`${import.meta.env.BASE_URL}Alejandro_Garcia_Resume.pdf`} 
  target="_blank"
  rel="noopener noreferrer"
  download="Alejandro_Garcia_Resume.pdf"
  className="btn-secondary group inline-flex items-center"
  aria-label="View and Download PDF Resume"
  id="hero-download-resume-btn"
>
  <Download className="w-4 h-4 mr-2 text-[#C8A84E]" />
  <span>Resume (PDF)</span>
</a>
              <Download className="w-4 h-4 mr-2 text-[#C8A84E]" />
              <span>Resume (PDF)</span>
            </a>

            <a 
              href="#projects" 
              className="btn-secondary group"
              aria-label="View My Work"
              id="hero-view-work-btn"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {onNavigateStory && (
              <button
                onClick={onNavigateStory}
                className="text-xs font-mono text-[#C2C6CE] hover:text-[#C8A84E] border border-white/10 hover:border-[#C8A84E]/40 px-3.5 py-2.5 rounded-md transition-all flex items-center gap-1.5 bg-white/[0.02]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C8A84E]" />
                <span>My Story</span>
              </button>
            )}

            {/* Direct GitHub & LinkedIn Profiles */}
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-white/10 hover:border-[#C8A84E]/50 hover:bg-white/[0.04] text-[#C2C6CE] hover:text-[#FAF9F6] transition-all flex items-center justify-center"
                aria-label="GitHub Profile"
                title="GitHub - @aleeeg8002"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-white/10 hover:border-[#0077B5]/50 hover:bg-white/[0.04] text-[#C2C6CE] hover:text-[#0077B5] transition-all flex items-center justify-center"
                aria-label="LinkedIn Profile"
                title="LinkedIn - Alejandro Garcia"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar at bottom of Hero */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            {HERO_DATA.quickStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-[#C8A84E] font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#7E8594] leading-tight mt-1 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Circular Profile Image with Accent Border */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end fade-in-up delay-100">
          <div className="relative">
            {/* Circular Profile Photo Wrapper */}
            <div 
              className="profile-photo-wrapper group"
              title={`${HERO_DATA.name} - ${HERO_DATA.title}`}
            >
              <img 
                src={profilePhoto} 
                alt="Alejandro Garcia profile portrait" 
                className="profile-img"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/images/profile.png') {
                    target.src = '/images/profile.png';
                  }
                }}
              />

              {/* Status Indicator Dot */}
              <div 
                className="status-dot-accent"
                id="status-indicator-dot"
                aria-label="Status: Available for New Projects"
                role="status"
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-5 p-2.5 rounded-full bg-[#181B23]/90 border border-white/10 shadow-lg flex items-center justify-center gap-2.5 text-xs text-[#C2C6CE] tracking-wide font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              <span>Available for New Projects</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
