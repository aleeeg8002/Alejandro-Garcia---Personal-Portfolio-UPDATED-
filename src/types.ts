/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  category: 'cloud' | 'systems' | 'web' | 'featured';
  badge?: string;
  description: string;
  longDescription?: string;
  architecture?: string[];
  tags: string[];
  link?: string;
  github?: string;
  metrics?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface NavItem {
  label: string;
  id: string;
  isPage?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  category: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface LanguageItem {
  language: string;
  code: string;
  level: string;
  flag: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeCode: string;
  credentialUrl?: string;
}

export interface StoryChapter {
  id: string;
  chapterNumber: string;
  title: string;
  period: string;
  content: string[];
  takeaway?: string;
  tag?: string;
  metricsOrHighlight?: string;
}

export type BackgroundStyle = 'cyber-grid' | 'deep-slate' | 'mesh-aurora' | 'graphite-dots';
