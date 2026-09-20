/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, SkillCategory, LanguageItem, CertificationItem, StoryChapter, ProjectItem, MetricItem } from '../types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/aleeeg8002',
  linkedin: 'https://www.linkedin.com/in/alejandro-garcia-a10b7138a/'
};

export const HERO_DATA = {
  name: 'Alejandro Garcia',
  handle: '~/alejandro',
  status: 'Available for New Opportunities',
  title: 'IT Support & Web Development',
  bio: 'Computer Science student at Carolina University and President of the CS Club with experience in delivering hands-on technical support to empower campus technology and user operations. Actively expanding expertise in cloud infrastructure and web development through cloud migration and infrastructure documentation for the UniVerse digital campus platform.',
  quickStats: [
    { value: 'Tier 1', label: 'IT Support & Operations' },
    { value: '5+', label: 'Languages & Core Frameworks' },
    { value: '200+', label: 'Enterprise Users Supported' }
  ],
  roleBadges: [
    'President @ CS Club',
    'AWS & Cloud Systems',
    'Systems & IT Support',
    'Web Development'
  ]
};

export const ABOUT_DATA = {
  kicker: 'Background & Profile',
  heading: 'Building at the intersection of technical support & digital systems.',
  paragraph1: "Dean's List scholar and the President of the Computer Science Club at Carolina University, my primary background is rooted in hands-on IT support, user operations, and building practical full-stack digital tools.",
  paragraph2: 'Enterprise technology experience as an IT Support Technician at Carolina University, where I provide Tier 1 and occasional Tier 2 technical support, managing IT ticketing, troubleshooting hardware and network issues, and maintaining system documentation for campus users.',
  paragraph3: 'Contributing to software development projects like UniVerse, handling infrastructure documentation and cloud migration tasks to support a full-stack digital campus platform. I approach engineering with a practical, support-driven mindset: keeping systems reliable, accessible, and user-focused.'
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google Career Certificates',
    year: 'Completed Oct 2026',
    badgeCode: 'Completed Oct 2026',
    credentialUrl: 'https://coursera.org/verify/professional-cert'
  },
  {
    id: 'cert-2',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 'Completed Jul 2026',
    badgeCode: 'HUI23UGXVXLV',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/HUI23UGXVXLV'
  },
  {
    id: 'cert-3',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: 'Completed Jun 2026',
    badgeCode: '4878b32e-8d10-4a91-b791-f9ade055f419',
    credentialUrl: 'https://www.credly.com/badges/4878b32e-8d10-4a91-b791-f9ade055f419/linked_in_profile'
  },
  {
    id: 'cert-4',
    title: 'IBM Full-Stack Developer',
    issuer: 'IBM',
    year: 'In Progress (2026)',
    badgeCode: 'Course 5 of 15',
    credentialUrl: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer'
  }
];

export const EXPERIENCES_DATA: WorkExperience[] = [
  {
    id: 'software-dev',
    role: 'Junior Engineer | Mentorship',
    company: 'Something ELSE Studios LLC',
    category: 'Software Engineering',
    duration: 'Sep 2026 — Present',
    location: 'Winston-Salem, NC',
    type: 'Industry Experience',
    description: 'Document technical decisions and perform staging verification for a full-stack digital campus platform (React + Vite, PostgreSQL, WebSockets).',
    achievements: [
      'Documented technical decisions and system issues across a cloud infrastructure migration from Replit to Railway in real-time, maintaining a structured log of blockers, resolutions, and configuration changes to support a development team building a React + Vite and PostgreSQL full-stack digital campus platform.',
      'Executed comprehensive regression testing and staging verification for WebSocket connections, social group chats, voting mechanisms, and QuizPop socket handlers.'
    ],
    techStack: ['React + Vite', 'PostgreSQL', 'Railway', 'WebSockets', 'Regression Testing', 'Git/GitHub'],
    isPrimary: true
  },
  {
    id: 'it-specialist',
    role: 'IT Support Technician',
    company: 'Carolina University',
    category: 'IT Support & Systems',
    duration: 'Jun 2026 — Present',
    location: 'Winston-Salem, NC',
    type: 'University Employment',
    description: 'Diagnose and resolve Tier 1 hardware, software, networking, and system access issues for 200+ campus end users.',
    achievements: [
      'Improved first-contact resolution for 200+ end users by triaging and resolving Tier 1 hardware, software, and Microsoft 365 support tickets through Freshdesk, 8x8 calls, and walk-in service, reducing repeat escalations and maximizing system uptime.',
      'Secured campus access by leading a full building access control migration provisioning and managing user credentials through the Sifely Smart Lock App and reprogramming 17 Sifely Smart Locks to replace legacy biometric scanners with NFC authentication.',
      'Restored stable Wi-Fi and ethernet connectivity for 60+ residents by diagnosing a switch-level network loop and migrating port configurations to a new VLAN.'
    ],
    techStack: ['Freshdesk', 'Microsoft 365', '8x8', 'Sifely Smart Lock (NFC)', 'VLAN & Networking', 'Windows 10/11']
  },
  {
    id: 'cs-president',
    role: 'Computer Science Club | President',
    company: 'Carolina University',
    category: 'Leadership & Community',
    duration: 'May 2026 — Present',
    location: 'Winston-Salem, NC',
    type: 'Leadership & Activities',
    description: 'Direct club operations, technical curriculum, and CTF cybersecurity competition preparations for student technologists.',
    achievements: [
      'Grew club membership by 70% and led hands-on technical workshops in preparation for a regional Capture-The-Flag (CTF) cybersecurity competition.',
      'Published fortnightly career roadmap guides to map out progression in diverse roles amongst the Computer Science field, such as a Full-Stack Developer or IT Systems Administrator.'
    ],
    techStack: ['Capture-The-Flag (CTF)', 'Workshops', 'Technical Roadmaps', 'Community Mentorship']
  },
  {
    id: 'resident-assistant',
    role: 'Resident Assistant',
    company: 'Carolina University — Office of Campus Life',
    category: 'Student Leadership',
    duration: 'May 2026 — Aug 2026',
    location: 'Winston-Salem, NC',
    type: 'Leadership & Activities',
    description: 'Served as primary point of contact for campus residents, balancing incident response and facility operations.',
    achievements: [
      'Served as the primary point of contact for 14+ residents by fielding requests, escalating issues to facilities management, and communicating policy updates clearly.'
    ],
    techStack: ['Facilities Management', 'Policy Communication', 'Crisis Response', 'Operations']
  }
];

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'Amazon Web Services (AWS)', level: 'Proficient', highlight: true },
      { name: 'Docker & Docker Compose', level: 'Proficient', highlight: true },
      { name: 'CI/CD Pipelines', level: 'Proficient' }
    ]
  },
  {
    id: 'systems-infra',
    title: 'Systems & Infrastructure',
    iconName: 'Server',
    skills: [
      { name: 'TCP/IP Networking & DNS', level: 'Proficient' },
      { name: 'Powershell Scripting', level: 'Proficient', highlight: true },
      { name: 'Tier 2 Hardware Diagnostics', level: 'Intermediate' },
      { name: 'System Performance Tuning', level: 'Advanced' }
    ]
  },
  {
    id: 'programming-auto',
    title: 'Programming & Automation',
    iconName: 'Code2',
    skills: [
      { name: 'Python (OOP & Django Framework)', level: 'Proficient', highlight: true },
      { name: 'C++ (Data Structures & OOP)', level: 'Advanced' },
      { name: 'TypeScript & Modern JavaScript', level: 'Advanced', highlight: true },
      { name: 'SQL & Database Design', level: 'Proficient' },
      { name: 'Git & Version Control Workflows', level: 'Proficient' }
    ]
  },
  {
    id: 'web-ui',
    title: 'Full-Stack Web & Interfaces',
    iconName: 'Globe',
    skills: [
      { name: 'React & Vite', level: 'Proficient', highlight: true },
      { name: 'Tailwind CSS & Design Systems', level: 'Proficient' },
      { name: 'FLTK C++ GUI', level: 'Advanced' },
      { name: 'RESTful API Architecture', level: 'Proficient' },
      { name: 'Responsive Mobile-First UI/UX', level: 'Advanced' }
    ]
  },
  {
    id: 'leadership-collab',
    title: 'Leadership & Delivery',
    iconName: 'Award',
    skills: [
      { name: 'Club Presidency & Public Speaking', level: 'Expert', highlight: true },
      { name: 'Technical Workshop Instruction', level: 'Expert' },
      { name: 'Rapid Incident Escalation & Response', level: 'Expert', highlight: true }
    ]
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { language: 'English', code: 'EN', level: 'Full Professional / Fluent', flag: '🇺🇸' },
  { language: 'Spanish', code: 'ES', level: 'Native / Bilingual', flag: '🇪🇸' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'devops-datalogger',
    title: 'DevOps Datalogger Pipeline',
    category: 'cloud',
    badge: 'Featured Cloud Project',
    image: './images/project1.png',
    description:
      'Automated build pipeline deployed on an AWS EC2 instance. Configured Docker Compose, Nginx, Elasticsearch, and Kibana for robust system monitoring.',
    longDescription:
      'A production-style telemetry and logging infrastructure designed to ingest and parse distributed application metrics in real-time. Built entirely on an AWS EC2 instance, the architecture leverages Docker Compose to orchestrate multiple isolated service nodes, using Nginx as a reverse proxy with SSL termination and Kibana dashboards to visualize server health metrics.',
    architecture: [
      'AWS EC2 Ubuntu 22.04 Host running Docker & Docker Compose',
      'Elasticsearch container cluster storing structured JSON logs',
      'Logstash pipelines sanitizing application heartbeat streams',
      'Kibana dashboards providing real-time CPU, RAM, and network throughput charts',
      'Nginx SSL reverse proxy with rate limiting and automated certificate renewal'
    ],
    tags: ['AWS EC2', 'Docker Compose', 'Elasticsearch', 'Kibana', 'Nginx', 'Linux'],
    link: '#',
    github: 'https://github.com',
    metrics: '99.9% Uptime with Sub-Second Log Indexing'
  },
  {
    id: 'supermarket-inventory',
    title: 'Supermarket Inventory System',
    category: 'systems',
    badge: 'C++ Systems Architecture',
    image: './images/project2.png',
    description:
      'Custom graphical user interface application built entirely in C++, leveraging the Fast Light Toolkit (FLTK) for efficient, low-overhead inventory management.',
    longDescription:
      'An enterprise desktop utility crafted from scratch in C++ to address resource-constrained point-of-sale and warehouse environments. Utilizes the Fast Light Toolkit (FLTK) for sub-5MB binary footprints and instant boot times. Includes secure file persistence, binary search tree item indexation, transaction auditing, and low-latency barcode lookup routines.',
    architecture: [
      'C++17 standard with strict memory management & zero memory leaks',
      'Fast Light Toolkit (FLTK) custom GUI widgets and event loops',
      'Binary indexed tree for O(log n) product search and category filtering',
      'Atomic file serialization guaranteeing data persistence across unexpected power cuts'
    ],
    tags: ['C++17', 'FLTK GUI', 'Data Structures', 'Desktop Architecture', 'OOP'],
    link: '#',
    github: 'https://github.com',
    metrics: '< 5MB RAM Footprint & Instant Search'
  },
  {
    id: 'student-empowerment',
    title: 'The Student Empowerment Dashboard',
    category: 'web',
    badge: 'UX & Web Engineering',
    image: './images/project3.png',
    description:
      'A comprehensive UX case study and full-stack project designed to empower students through an intuitive, data-rich interface and semantic web design.',
    longDescription:
      'A human-centric academic hub engineered to consolidate schedules, assignment deadlines, campus resources, and peer study rooms into an accessible single pane of glass. Adheres strictly to WCAG AA accessibility standards, featuring high-contrast themes, keyboard-navigable widgets, and responsive layouts.',
    architecture: [
      'Modular client architecture with semantic HTML5 and responsive CSS grid',
      'Interactive task prioritizer utilizing local storage state persistence',
      'Custom SVG data visualizers showing academic progress without external heavy bloatware',
      'Thorough accessibility audit ensuring full screen-reader compliance'
    ],
    tags: ['TypeScript', 'Tailwind CSS', 'UI/UX Design', 'WCAG AA', 'Web Standards'],
    link: '#',
    github: 'https://github.com',
    metrics: '100 Lighthouse Accessibility Score'
  },
  {
    id: 'cloud-automation-toolkit',
    title: 'Cloud Sentinel: Infrastructure Auditor',
    category: 'cloud',
    badge: 'Security & Automation',
    image: './images/project1.png',
    description:
      'Automated Python & Bash utility suite auditing AWS cloud configurations for open security groups, unencrypted storage volumes, and dangling IP addresses.',
    longDescription:
      'Developed as an internal tooling project to evaluate campus and lab cloud resources. Scans AWS environments via boto3 SDK, flags misconfigured firewall rules, generates formatted markdown audit reports, and sends proactive notifications upon detecting policy violations.',
    architecture: [
      'Python 3 with Boto3 SDK for AWS resource introspection',
      'Configurable security policy rules engine (IAM, S3, EC2, VPC)',
      'Automated cron evaluation producing compliance reports in Markdown & JSON'
    ],
    tags: ['Python', 'AWS Boto3', 'Cloud Security', 'Bash', 'DevOps'],
    link: '#',
    github: 'https://github.com',
    metrics: 'Over 50+ Cloud Security Rules Enforced'
  }
];

export const STORY_METADATA = {
  title: 'Sparks of Curiosity: The Making of a Technologist',
  subtitle: 'From facing early personal challenges and finding an anchor in academics, my journey has been shaped by resilience, curiosity, community leadership, and a passion for technology.'
};

export const STORY_CHAPTERS_DATA: StoryChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 'chapter_01',
    title: 'Sparks of Curiosity',
    period: 'Early Curiosity',
    content: [
      'In 1st grade, watching videos about robots during science class ignited a lifelong fascination with technology. As I grew older, watching computer assembly and performance videos on YouTube introduced me to Computer Science, setting the course for my future.'
    ]
  },
  {
    id: 'chapter-2',
    chapterNumber: 'chapter_02',
    title: 'Adjusting My Sails',
    period: 'Resilience',
    content: [
      'Navigating personal challenges and early setbacks taught me a vital lesson: while you cannot control the obstacles thrown at you, you can always adjust how you respond. I channeled my energy into academics, pushing into gifted programs and earning enough credits to accelerate my education.'
    ]
  },
  {
    id: 'chapter-3',
    chapterNumber: 'chapter_03',
    title: 'Studying at Carolina University',
    period: 'Academic Foundations',
    content: [
      'As an undergraduate Computer Science student at Carolina University, I built a strong foundation in data structures, algorithms, and systems engineering while connecting with like-minded peers and embracing the continuous process of "becoming".'
    ]
  },
  {
    id: 'chapter-4',
    chapterNumber: 'chapter_04',
    title: 'Leading the Computer Science Community',
    period: 'Community Leadership',
    content: [
      'Serving as President of the Computer Science Club, I lead technical workshops, organize coding initiatives, and foster collaborative environments to help fellow students grow their technical paths.'
    ]
  },
  {
    id: 'chapter-5',
    chapterNumber: 'chapter_05',
    title: 'Enterprise Technology & Support',
    period: 'IT Support & Operations',
    content: [
      'Working as an IT Support Technician, I gained hands-on experience managing Tier 1 and Tier 2 operations, resolving critical networking and hardware issues, and maintaining resilient system infrastructure for campus users.'
    ]
  },
  {
    id: 'chapter-6',
    chapterNumber: 'chapter_06',
    title: 'Building Software Systems',
    period: 'Software Development',
    content: [
      'Expanding into software and full-stack development, I contribute to projects like the UniVerse digital campus platform, handling cloud migration documentation, system tracking, and real-time feature testing.'
    ]
  },
  {
    id: 'chapter-7',
    chapterNumber: 'chapter_07',
    title: 'The Vision Ahead',
    period: 'Future Vision',
    content: [
      'Driven by curiosity, resilience, and a commitment to making technology accessible and impactful, I look toward a future combining software engineering, cloud systems, and IT Systems Administration.'
    ]
  }
];
