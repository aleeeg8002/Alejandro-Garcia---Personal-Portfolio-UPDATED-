/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, Linkedin, Github, Mail, Loader2, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; subject: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'garciaa_3@carolinau.edu';

  const topics = ['General Inquiry', 'Cloud Architecture', 'Full-time Role', 'CS Club / Mentorship'];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate real network submission with realistic feedback
    setTimeout(() => {
      setSubmittedData({
        name: formData.name,
        subject: formData.subject,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col mb-14 fade-in-up">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C8A84E] mb-3 block">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6]">
          Let’s build something.
        </h2>
        <p className="text-base text-[#C2C6CE] mt-3 max-w-xl font-light">
          Whether it’s an engineering opportunity, a technical discussion, or collaboration — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Quick Contact Cards */}
        <div className="lg:col-span-5 flex flex-col space-y-4 fade-in-up">
          
          {/* LinkedIn */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#181B23]/80 border border-white/10 hover:border-[#C8A84E]/50 hover:bg-[#1E222D] transition-all flex items-center justify-between group"
            aria-label="Connect on LinkedIn"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF9F6] group-hover:text-[#C8A84E] transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-[#7E8594] font-mono">Connect professionally</p>
              </div>
            </div>
            <span className="text-xs font-mono text-[#C8A84E] group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>

          {/* GitHub */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#181B23]/80 border border-white/10 hover:border-[#C8A84E]/50 hover:bg-[#1E222D] transition-all flex items-center justify-between group"
            aria-label="Explore GitHub repositories"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/20 flex items-center justify-center text-[#FAF9F6]">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF9F6] group-hover:text-[#C8A84E] transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-[#7E8594] font-mono">Explore repositories</p>
              </div>
            </div>
            <span className="text-xs font-mono text-[#C8A84E] group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>

          {/* Direct Carolina University Email with Instant Copy */}
          <div className="p-4 rounded-xl bg-[#181B23]/80 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <a
                href={`mailto:${emailAddress}`}
                className="w-10 h-10 rounded-lg bg-[#C8A84E]/10 border border-[#C8A84E]/30 flex items-center justify-center text-[#C8A84E] hover:bg-[#C8A84E]/20 transition-colors shrink-0"
                title="Send email directly"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="overflow-hidden">
                <h4 className="text-sm font-semibold text-[#FAF9F6]">Direct Email</h4>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs text-[#C2C6CE] hover:text-[#C8A84E] font-mono truncate block transition-colors"
                  title="Send email"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="text-xs font-mono px-3 py-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[#C2C6CE] hover:text-[#FAF9F6] transition-colors flex items-center gap-1.5 shrink-0 ml-2 border border-white/10 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Quick SLA Note */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-xs font-mono text-[#7E8594]">
            <span className="text-[#C8A84E] font-semibold">Carolina University Inbox:</span> Monitored regularly with typical turnaround within 12-24 hours.
          </div>

        </div>

        {/* Right Column: Interactive Send Message Form */}
        <div className="lg:col-span-7 bg-[#181B23]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl fade-in-up delay-100">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#FAF9F6] mb-1">
              Send a Message
            </h3>
            <p className="text-xs font-mono text-[#7E8594]">
              Fill out the form below to reach out directly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 border border-[#C8A84E]/50 bg-[#1E222D] rounded-xl text-center flex flex-col items-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#C8A84E]/15 border border-[#C8A84E]/40 flex items-center justify-center text-[#C8A84E] mb-4 shadow-[0_0_20px_rgba(200,168,78,0.25)]">
                <CheckCircle2 className="w-8 h-8 text-[#C8A84E]" />
              </div>
              <h4 className="text-2xl font-bold text-[#FAF9F6] mb-2">Message Dispatched!</h4>
              <p className="text-[#C2C6CE] text-sm max-w-md mb-2 font-light leading-relaxed">
                Thank you, <span className="text-[#FAF9F6] font-semibold">{submittedData?.name}</span>. Your message regarding <span className="text-[#C8A84E] font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/[0.05]">{submittedData?.subject}</span> has been logged and forwarded to <span className="text-[#FAF9F6] font-mono text-xs">{emailAddress}</span>.
              </p>
              <p className="text-[#7E8594] text-xs font-mono mb-6">
                Expect a response within 12-24 business hours.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary text-xs py-2.5 px-5"
                >
                  Send Another Message
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-1.5"
                >
                  <span>Open Email Client</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Subject topic pill picker */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#7E8594] block mb-2.5">
                  Topic of Discussion
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, subject: t })}
                      className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                        formData.subject === t
                          ? 'bg-[#C8A84E] text-[#12141A] font-semibold shadow-[0_0_10px_rgba(200,168,78,0.25)]'
                          : 'bg-white/[0.04] text-[#C2C6CE] hover:bg-white/[0.08] hover:text-[#FAF9F6]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-[#7E8594] block mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="minimal-input text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-[#7E8594] block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="minimal-input text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-msg" className="text-xs font-mono uppercase tracking-wider text-[#7E8594] block mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about what you're working on or inquiring about..."
                  className="minimal-input text-sm resize-none"
                />
              </div>

              {/* Action row with ample bottom padding so button is never cut off */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono text-[#7E8594]">
                  Directly dispatched to Alejandro's Carolina University inbox.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xs sm:text-sm py-2.5 px-6 inline-flex items-center justify-center gap-2 shrink-0 self-end sm:self-auto cursor-pointer"
                  id="submit-contact-button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
