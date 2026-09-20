/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA, ABOUT_DATA } from '../data/portfolioData';

interface AboutAndCertificationsProps {
  onNavigateStory: () => void;
}

export const AboutAndCertifications: React.FC<AboutAndCertificationsProps> = ({ onNavigateStory }) => {
  return (
    <section id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Background & Profile */}
        <div className="lg:col-span-7 flex flex-col fade-in-up">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
            {ABOUT_DATA.kicker}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6 leading-tight">
            {ABOUT_DATA.heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#C2C6CE] leading-relaxed font-light">
            <p>
              {ABOUT_DATA.paragraph1}
            </p>
            <p>
              {ABOUT_DATA.paragraph2}
            </p>
            {ABOUT_DATA.paragraph3 && (
              <p>
                {ABOUT_DATA.paragraph3}
              </p>
            )}
          </div>

          {/* Interactive Story Callout */}
          <div className="mt-8 p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#C8A84E]/40 transition-all group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8A84E] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deep Dive</span>
              </div>
              <p className="text-sm text-[#FAF9F6] font-medium">
                Want to know how I got here and what drives my engineering?
              </p>
            </div>
            <button
              onClick={onNavigateStory}
              className="text-xs font-mono text-[#12141A] bg-[#C8A84E] hover:bg-[#D8B95E] font-semibold px-4 py-2 rounded-md transition-all shadow-[0_0_12px_rgba(200,168,78,0.25)] whitespace-nowrap"
            >
              Read My Story &rarr;
            </button>
          </div>
        </div>

        {/* Right Column: Credentials & Certifications */}
        <div className="lg:col-span-5 flex flex-col fade-in-up delay-100">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
            Certifications
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F6] mb-6">
            Industry Credentials
          </h3>

          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[#181B23]/80 border border-white/[0.08] hover:border-[#C8A84E]/50 hover:bg-[#1E222D] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#C8A84E]/10 border border-[#C8A84E]/30 flex items-center justify-center text-[#C8A84E]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF9F6] group-hover:text-[#C8A84E] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#7E8594] font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#C2C6CE] border border-white/10 shrink-0">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06] text-xs font-mono">
                  <span className="text-[#7E8594]">
                    ID: <span className="text-[#C2C6CE]">{cert.badgeCode}</span>
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C8A84E] hover:text-[#D8B95E] transition-colors inline-flex items-center gap-1 group/link"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Key Attribute Pills */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-[#C2C6CE]">
              <CheckCircle className="w-3 h-3 text-[#C8A84E]" />
              Cloud Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-[#C2C6CE]">
              <CheckCircle className="w-3 h-3 text-[#C8A84E]" />
              IT System Administration
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-[#C2C6CE]">
              <CheckCircle className="w-3 h-3 text-[#C8A84E]" />
              Incident Escalation
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
