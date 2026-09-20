/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  Code2, 
  Shield, 
  Globe, 
  Award, 
  ChevronDown, 
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES_DATA, LANGUAGES_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'cloud-devops': true,
    'systems-infra': true,
    'programming-auto': true,
    'security-monitoring': true,
    'web-ui': true,
    'leadership-collab': true,
  });

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const current = prev[id] !== undefined ? prev[id] : true;
      return {
        ...prev,
        [id]: !current,
      };
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#C8A84E]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#C8A84E]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#C8A84E]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#C8A84E]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#C8A84E]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C8A84E]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#C8A84E]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col mb-12 fade-in-up">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
          Technical Competencies
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6]">
          What I work with.
        </h2>
        <p className="text-base text-[#C2C6CE] mt-3 max-w-2xl font-light">
          A breakdown of technical proficiencies across cloud engineering, low-latency systems development, automation scripting, and enterprise IT infrastructure.
        </p>
      </div>

      {/* Grid of Expandable Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-start">
        {SKILL_CATEGORIES_DATA.map((cat) => {
          const isOpen = openCategories[cat.id] !== undefined ? openCategories[cat.id] : true;
          return (
            <motion.div
              layout
              key={cat.id}
              id={`skill-card-${cat.id}`}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="self-start h-fit bg-[#181B23]/80 border border-white/[0.08] rounded-xl overflow-hidden backdrop-blur-md transition-colors duration-300 hover:border-white/20"
            >
              {/* Category Header */}
              <button
                type="button"
                id={`toggle-skill-btn-${cat.id}`}
                onClick={() => toggleCategory(cat.id)}
                aria-expanded={isOpen}
                aria-controls={`skill-content-${cat.id}`}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#FAF9F6] group-hover:text-[#FAF9F6]">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono text-[#7E8594]">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Animated Arrow Toggle */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="text-[#7E8594] p-1.5 rounded-lg flex items-center justify-center group-hover:text-[#FAF9F6] group-hover:bg-white/[0.04] transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Collapsible Content with Smooth Animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${cat.id}`}
                    id={`skill-content-${cat.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                      <ul className="space-y-2.5">
                        {cat.skills.map((skill, sIdx) => (
                          <motion.li
                            key={sIdx}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: sIdx * 0.025 }}
                            className="flex items-center justify-between text-xs sm:text-sm py-1 px-2.5 rounded-md hover:bg-white/[0.03] transition-colors"
                          >
                            <div className="flex items-center gap-2 text-[#C2C6CE]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84E]"></span>
                              <span className={skill.highlight ? 'font-medium text-[#FAF9F6]' : ''}>
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-[11px] text-[#7E8594] bg-[#12141A] px-2 py-0.5 rounded border border-white/[0.06]">
                              {skill.level}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Languages Section */}
      <div className="fade-in-up">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-4 block">
          Languages Spoken
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LANGUAGES_DATA.map((item) => (
            <div
              key={item.code}
              className="p-4 rounded-xl bg-[#181B23]/70 border border-white/10 flex items-center justify-between hover:border-[#C8A84E]/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label={item.language}>
                  {item.flag}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#FAF9F6]">
                    {item.language}
                  </h4>
                  <p className="text-xs text-[#7E8594] font-mono">
                    {item.level}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#12141A] text-[#C8A84E] border border-[#C8A84E]/30 font-bold">
                {item.code}
              </span>
            </div>
          ))}

          {/* Communication Attribute */}
          <div className="p-4 rounded-xl bg-[#181B23]/40 border border-dashed border-white/15 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C8A84E] shrink-0" />
            <p className="text-xs text-[#C2C6CE] font-light leading-snug">
              Bilingual technical leadership across English &amp; Spanish documentation and engineering teams.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
