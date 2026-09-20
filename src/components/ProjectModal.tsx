/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Server, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-[#121620] border border-[#D4AF37]/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8E9CAE] hover:text-[#F8FAFC] p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Tag & Title */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-semibold">
            {project.badge || 'Featured Engineering Project'}
          </span>
          {project.metrics && (
            <span className="text-xs font-mono text-[#06B6D4] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </span>
          )}
        </div>

        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
          {project.title}
        </h2>

        {/* Preview Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#0B0E14]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Deep Overview */}
        <div className="space-y-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6 p-5 rounded-xl bg-[#181D2A] border border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold mb-3 flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>System Architecture &amp; Implementation Details</span>
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E9CAE] mb-2.5">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-md bg-[#0B0E14] text-[#CBD5E1] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-2 px-4 inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2 px-4 inline-flex items-center gap-2"
              >
                <span>Live View / Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#8E9CAE] hover:text-[#F8FAFC] underline underline-offset-4"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
