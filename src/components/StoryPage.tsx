/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Clock, Sparkles, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { STORY_CHAPTERS_DATA, STORY_METADATA } from '../data/portfolioData';

interface StoryPageProps {
  onBackToPortfolio: () => void;
  onNavigateContact: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({
  onBackToPortfolio,
  onNavigateContact,
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(STORY_CHAPTERS_DATA[0].id);

  const scrollToChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-32 max-w-5xl mx-auto px-6 sm:px-8">
      
      {/* Top Back Navigation Bar */}
      <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
        <button
          onClick={onBackToPortfolio}
          className="text-xs font-mono text-[#C2C6CE] hover:text-[#C8A84E] transition-colors flex items-center gap-2 group"
          aria-label="Return to portfolio home"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-4 text-xs font-mono text-[#7E8594]">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8A84E]" />
            <span>~3 min read</span>
          </span>
          <span>&bull;</span>
          <span>{STORY_CHAPTERS_DATA.length} Chapters</span>
        </div>
      </div>

      {/* Header Narrative Lead */}
      <div className="mb-14 fade-in-up">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
          My Story
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F6] mb-6 leading-[1.08]">
          {STORY_METADATA.title}
        </h1>
        <p className="text-base sm:text-lg text-[#C2C6CE] leading-relaxed max-w-3xl font-light">
          {STORY_METADATA.subtitle}
        </p>
      </div>

      {/* Quick Chapter Jump Bar */}
      <div className="mb-16 p-4 rounded-xl bg-[#181B23]/70 border border-white/[0.08] backdrop-blur-md sticky top-20 z-30 shadow-xl">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8594] block mb-2.5">
          Jump to Chapter
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {STORY_CHAPTERS_DATA.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeChapterId === ch.id
                  ? 'bg-[#C8A84E] text-[#12141A] font-bold shadow-[0_0_12px_rgba(200,168,78,0.25)]'
                  : 'bg-white/[0.04] text-[#C2C6CE] hover:text-[#FAF9F6] hover:bg-white/[0.08]'
              }`}
            >
              <span>{`0${idx + 1}.`}</span>
              <span>{ch.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stories Layout */}
      <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
        
        {STORY_CHAPTERS_DATA.map((chapter, idx) => (
          <article
            key={chapter.id}
            id={chapter.id}
            className="relative scroll-mt-36 fade-in-up"
          >
            {/* Timeline Marker Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#12141A] border-2 border-[#C8A84E] flex items-center justify-center shadow-[0_0_12px_rgba(200,168,78,0.4)]">
              <span className="w-2 h-2 rounded-full bg-[#C8A84E]" />
            </div>

            {/* Chapter Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C8A84E] font-semibold">
                  {`Chapter 0${idx + 1}`}
                </span>
                {chapter.period && (
                  <>
                    <span className="text-xs font-mono text-[#7E8594]">&bull;</span>
                    <span className="text-xs font-mono text-[#7E8594]">{chapter.period}</span>
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF9F6] mb-4">
              {chapter.title}
            </h2>

            {/* Body Narrative Content */}
            <div className="text-base text-[#C2C6CE] leading-relaxed font-light space-y-4 mb-6">
              {chapter.content.map((para: string, pIdx: number) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Expandable Key Takeaway / Lesson Learned Card (if provided) */}
            {chapter.takeaway && (
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-[#C8A84E]/30 hover:border-[#C8A84E]/60 transition-colors flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#C8A84E]/10 border border-[#C8A84E]/30 flex items-center justify-center shrink-0 text-[#C8A84E] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C8A84E] font-semibold mb-1">
                    Key Lesson &amp; Engineering Principle
                  </h4>
                  <p className="text-sm text-[#FAF9F6] font-medium leading-normal">
                    {chapter.takeaway}
                  </p>
                </div>
              </div>
            )}
          </article>
        ))}

      </div>

      {/* Narrative Epilogue CTA */}
      <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1E222D] to-[#181B23] border border-[#C8A84E]/40 text-center flex flex-col items-center">
        <Sparkles className="w-8 h-8 text-[#C8A84E] mb-3" />
        <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF9F6] mb-3">
          Let’s write the next chapter together.
        </h3>
        <p className="text-base text-[#C2C6CE] max-w-xl font-light mb-8">
          Whether you have a software role, a cloud challenge, or an open-source initiative, I’m excited to bring systems-level dedication to your team.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onNavigateContact}
            className="btn-primary"
          >
            <span>Start a Conversation</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onBackToPortfolio}
            className="btn-secondary"
          >
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>

    </div>
  );
};
