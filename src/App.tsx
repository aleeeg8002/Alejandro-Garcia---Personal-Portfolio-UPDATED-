/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndCertifications } from './components/AboutAndCertifications';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StoryPage } from './components/StoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'story'>('portfolio');

  // Intersection Observer for graceful scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentPage]);

  const handleNavigatePage = useCallback((page: 'portfolio' | 'story', targetSection?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'portfolio' && targetSection && targetSection !== 'home') {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'story' ? (
          <StoryPage
            onBackToPortfolio={() => handleNavigatePage('portfolio')}
            onNavigateContact={() => handleNavigatePage('portfolio', 'contact')}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onNavigateStory={() => handleNavigatePage('story')}
            />

            <div className="section-divider" role="separator" />

            {/* About & Certifications Section */}
            <AboutAndCertifications
              onNavigateStory={() => handleNavigatePage('story')}
            />

            <div className="section-divider" role="separator" />

            {/* Work Experience Section */}
            <Experience />

            <div className="section-divider" role="separator" />

            {/* Skills & What I Work With */}
            <SkillsMatrix />

            <div className="section-divider" role="separator" />

            {/* Selected Works / Projects — Temporarily commented out until real projects are added (DO NOT DELETE) */}
            {/*
            <Projects />
            <div className="section-divider" role="separator" />
            */}

            {/* Contact Section */}
            <Contact />
          </>
        )}
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
