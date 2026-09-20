/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({
  isOpen,
  onClose,
  code,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alejandro-garcia-portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#23252E] border border-white/10 rounded-xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#282A34]">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-[#B5A642]" />
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-[#FDFDFD]">
                Standalone Single-File Code (HTML + CSS + Vanilla JS)
              </h3>
              <p className="text-xs text-[#C0C0C0]">
                Fully self-contained, responsive, and ready to deploy as a single file.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-[#B5A642] text-[#23252E] hover:bg-[#c5b64c] transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-white/10 text-[#FDFDFD] hover:bg-white/20 transition-colors"
              title="Download standalone HTML file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#C0C0C0] hover:text-[#FDFDFD] rounded hover:bg-white/5 transition-colors ml-2"
              aria-label="Close code modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 flex-1 overflow-auto bg-[#1a1c23]">
          <pre className="text-xs font-mono text-[#C0C0C0] leading-relaxed select-all whitespace-pre-wrap">
            {code}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#282A34] flex items-center justify-between text-xs text-[#C0C0C0]">
          <span>Includes complete CSS Grid, Flexbox, micro-interactions, and IntersectionObserver.</span>
          <button
            onClick={onClose}
            className="text-xs text-[#B5A642] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
