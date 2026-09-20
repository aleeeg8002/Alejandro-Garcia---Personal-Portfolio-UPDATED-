/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="w-full pt-10 pb-12 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E9CAE]">
          <p>
            &copy; 2026 Alejandro Garcia. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors"
              aria-label="Alejandro Garcia on GitHub"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors"
              aria-label="Alejandro Garcia on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
