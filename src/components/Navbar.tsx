/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'portfolio' | 'story';
  onNavigatePage: (page: 'portfolio' | 'story', targetSection?: string) => void;
  onOpenSourceCode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigatePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'portfolio') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', /* 'projects', */ 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'portfolio') {
      onNavigatePage('portfolio', sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="glass-nav" id="navbar">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Alejandro Garcia Brand Title */}
        <button
          onClick={() => onNavigatePage('portfolio', 'home')}
          className="text-lg sm:text-xl font-semibold tracking-tight text-[#FAF9F6] hover:text-[#C8A84E] transition-colors duration-200 select-none flex items-center gap-2 focus:outline-none"
          aria-label="Alejandro Garcia Portfolio Home"
        >
          <span className="font-bold">Alejandro Garcia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84E]"></span>
        </button>

        {/* Center/Right: Navigation links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('about')}
            className={`nav-link ${currentPage === 'portfolio' && activeSection === 'about' ? 'active text-[#FAF9F6]' : ''}`}
          >
            About
          </button>

          {/* Dedicated Story Page link */}
          <button
            onClick={() => onNavigatePage('story')}
            className={`nav-link flex items-center gap-1.5 ${
              currentPage === 'story' ? 'active text-[#C8A84E] font-semibold' : ''
            }`}
          >
            <span>My Story</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84E]"></span>
          </button>

          <button
            onClick={() => handleNavClick('experience')}
            className={`nav-link ${currentPage === 'portfolio' && activeSection === 'experience' ? 'active text-[#FAF9F6]' : ''}`}
          >
            Experience
          </button>

          <button
            onClick={() => handleNavClick('skills')}
            className={`nav-link ${currentPage === 'portfolio' && activeSection === 'skills' ? 'active text-[#FAF9F6]' : ''}`}
          >
            Skills
          </button>

          {/* Projects Link (Temporarily commented out until real projects are added - DO NOT DELETE) */}
          {/*
          <button
            onClick={() => handleNavClick('projects')}
            className={`nav-link ${currentPage === 'portfolio' && activeSection === 'projects' ? 'active text-[#FAF9F6]' : ''}`}
          >
            Projects
          </button>
          */}

          {/* Contact button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-1.5 rounded-md border border-[#C8A84E]/50 hover:border-[#C8A84E] text-[#FAF9F6] hover:text-[#C8A84E] bg-[#C8A84E]/10 transition-all duration-200 font-mono text-xs"
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#C2C6CE] hover:text-[#FAF9F6] focus:outline-none p-1.5"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="md:hidden bg-[#12141A]/98 border-b border-white/10 px-6 py-6 transition-all duration-300 backdrop-blur-2xl"
        >
          <nav className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => {
                onNavigatePage('portfolio', 'home');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[#C2C6CE] hover:text-[#C8A84E] py-1"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-[#C2C6CE] hover:text-[#C8A84E] py-1"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigatePage('story');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[#C8A84E] font-semibold py-1 flex items-center gap-2"
            >
              <span>My Story</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84E]"></span>
            </button>
            <button
              onClick={() => handleNavClick('experience')}
              className="text-left text-[#C2C6CE] hover:text-[#C8A84E] py-1"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="text-left text-[#C2C6CE] hover:text-[#C8A84E] py-1"
            >
              Skills
            </button>
            {/* Mobile Projects link (Temporarily commented out - DO NOT DELETE) */}
            {/*
            <button
              onClick={() => handleNavClick('projects')}
              className="text-left text-[#C2C6CE] hover:text-[#C8A84E] py-1"
            >
              Projects
            </button>
            */}
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-[#C8A84E] font-semibold py-1"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
