/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Standalone Single-File Portfolio HTML representation for user export/inspection
export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alejandro Garcia — Software Developer &amp; Cloud Technologist</title>
  <meta name="description" content="High-end, minimalist personal portfolio for Alejandro Garcia, Software Developer & Cloud Technologist.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-graphite: #23252E;
      --bg-card: #282A34;
      --text-warm-white: #FDFDFD;
      --text-light-silver: #C0C0C0;
      --accent-gold: #B5A642;
      --accent-gold-hover: #c5b64c;
      --accent-cyan: #00FFFF;
      --divider-line: rgba(255, 255, 255, 0.2);
      --gold-glow: 0 0 22px rgba(181, 166, 66, 0.4);
      --card-hover-shadow: 0 14px 34px rgba(181, 166, 66, 0.14), 0 4px 12px rgba(0, 0, 0, 0.45);
      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html {
      scroll-behavior: smooth;
      background-color: var(--bg-graphite);
      color: var(--text-warm-white);
      font-family: 'Inter', system-ui, sans-serif;
      line-height: 1.6;
    }
    body { background-color: var(--bg-graphite); color: var(--text-warm-white); overflow-x: hidden; }
    .container { width: 100%; max-width: 1160px; margin: 0 auto; padding: 0 2rem; }
    .section-divider { width: 100%; height: 1px; background-color: var(--divider-line); border: none; }
    .fade-in-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.85s var(--ease-out-expo), transform 0.85s var(--ease-out-expo);
      will-change: opacity, transform;
    }
    .fade-in-up.is-visible { opacity: 1; transform: translateY(0); }
    .delay-1 { transition-delay: 0.1s; }
    .delay-2 { transition-delay: 0.2s; }
    .delay-3 { transition-delay: 0.3s; }
    .navbar {
      position: sticky; top: 0; z-index: 1000;
      background-color: rgba(35, 37, 46, 0.85);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      height: 80px; display: flex; align-items: center;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
    .logo { font-size: 1.6rem; font-weight: 800; color: var(--text-warm-white); display: flex; align-items: center; gap: 0.35rem; }
    .logo-dot { width: 6px; height: 6px; background-color: var(--accent-gold); border-radius: 50%; }
    .nav-links { display: flex; align-items: center; gap: 2.5rem; list-style: none; }
    .nav-link {
      position: relative; color: var(--text-light-silver); font-size: 0.95rem; font-weight: 500;
      padding: 0.4rem 0; text-decoration: none; transition: color 0.25s;
    }
    .nav-link::after {
      content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 2px;
      background-color: var(--accent-gold); transition: width 0.3s var(--ease-out-expo);
    }
    .nav-link:hover, .nav-link.active { color: var(--text-warm-white); }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.85rem 2rem; background-color: var(--accent-gold); color: var(--bg-graphite);
      font-size: 0.95rem; font-weight: 600; border-radius: 4px; border: 1px solid var(--accent-gold);
      cursor: pointer; text-decoration: none; transition: transform 0.25s var(--ease-out-expo), box-shadow 0.25s;
    }
    .btn-primary:hover { transform: scale(1.05); background-color: var(--accent-gold-hover); box-shadow: var(--gold-glow); }
    .btn-secondary {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.85rem 2rem; background-color: transparent; color: var(--text-warm-white);
      font-size: 0.95rem; font-weight: 500; border-radius: 4px; border: 1px solid var(--text-warm-white);
      cursor: pointer; text-decoration: none; transition: transform 0.25s var(--ease-out-expo), background-color 0.25s, color 0.25s, box-shadow 0.25s;
    }
    .btn-secondary:hover { transform: scale(1.05); background-color: var(--text-warm-white); color: var(--bg-graphite); box-shadow: 0 0 20px rgba(253, 253, 253, 0.25); }
    .hero-section { padding: 6.5rem 0 7.5rem; }
    .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; align-items: center; gap: 3.5rem; }
    .hero-greeting { color: var(--accent-gold); font-size: 0.95rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem; }
    .hero-title { font-size: clamp(2.75rem, 5vw, 4.5rem); line-height: 1.08; margin-bottom: 1rem; color: var(--text-warm-white); }
    .hero-subtitle { font-size: clamp(1.2rem, 2.5vw, 1.75rem); font-weight: 500; color: var(--text-light-silver); margin-bottom: 1.5rem; }
    .hero-description { font-size: 1.1rem; line-height: 1.7; color: var(--text-light-silver); max-width: 520px; margin-bottom: 2.5rem; }
    .hero-actions { display: flex; gap: 1.25rem; flex-wrap: wrap; }
    .hero-media { display: flex; justify-content: flex-end; }
    .profile-photo-box {
      position: relative; width: 320px; height: 320px; border-radius: 50%;
      border: 2px solid var(--accent-gold); box-shadow: 0 0 28px rgba(181, 166, 66, 0.28);
      transition: box-shadow 0.4s ease;
    }
    .profile-photo-box:hover { box-shadow: 0 0 38px rgba(181, 166, 66, 0.45); }
    .profile-photo { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
    .cyan-status-dot {
      position: absolute; bottom: 14px; right: 14px; width: 18px; height: 18px;
      background-color: var(--accent-cyan); border-radius: 50%; border: 3px solid var(--bg-graphite);
      box-shadow: 0 0 12px var(--accent-cyan);
    }
    .cyan-status-dot::after {
      content: ''; position: absolute; inset: -3px; border-radius: 50%; border: 2px solid var(--accent-cyan);
      animation: pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.9; } 70%, 100% { transform: scale(2.4); opacity: 0; } }
    .status-caption { margin-top: 1.25rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-light-silver); font-family: monospace; }
    .journey-section { padding: 6.5rem 0 7.5rem; }
    .journey-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: flex-start; }
    .section-eyebrow { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem; }
    .section-eyebrow-line { width: 24px; height: 1px; background-color: var(--accent-gold); }
    .section-eyebrow-text { color: var(--accent-gold); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
    .journey-heading { font-size: 2.4rem; margin-bottom: 1.5rem; }
    .journey-text { font-size: 1.1rem; line-height: 1.8; color: var(--text-light-silver); }
    .skills-container { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; }
    .skill-pill {
      display: inline-flex; align-items: center; padding: 0.7rem 1.4rem; border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.12); background-color: rgba(255, 255, 255, 0.03);
      color: var(--text-warm-white); font-size: 0.95rem; font-weight: 500;
      transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s var(--ease-out-expo), background-color 0.3s;
      user-select: none;
    }
    .skill-pill:hover {
      border-color: rgba(181, 166, 66, 0.7); box-shadow: 0 0 18px rgba(181, 166, 66, 0.28);
      background-color: rgba(181, 166, 66, 0.07); transform: translateY(-2px);
    }
    .works-section { padding: 6.5rem 0 7.5rem; }
    .works-heading { font-size: 2.4rem; margin-bottom: 3.5rem; }
    .works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
    .portfolio-card {
      background-color: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;
      transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s var(--ease-out-expo);
    }
    .portfolio-card:hover {
      border-color: rgba(181, 166, 66, 0.45); box-shadow: var(--card-hover-shadow); transform: translateY(-5px);
    }
    .card-media-wrapper { width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: #1c1e24; }
    .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease-out-expo); }
    .portfolio-card:hover .card-img { transform: scale(1.05); }
    .card-content { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
    .card-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--text-warm-white); }
    .card-description { font-size: 0.95rem; color: var(--text-light-silver); line-height: 1.6; margin-bottom: 1.5rem; }
    .card-footer { padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .card-tag {
      font-size: 0.75rem; font-family: monospace; padding: 0.3rem 0.65rem; background: var(--bg-graphite);
      color: var(--text-light-silver); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 4px;
    }
    .metrics-section { padding: 5.5rem 0 6.5rem; }
    .metrics-flex-row { display: flex; align-items: center; justify-content: space-between; gap: 2rem; text-align: center; }
    .metric-item { flex: 1; display: flex; flex-direction: column; align-items: center; padding: 1rem; }
    .metric-value { font-size: clamp(3rem, 5.5vw, 4.5rem); font-weight: 700; color: var(--accent-gold); margin-bottom: 0.5rem; }
    .metric-label { font-size: 1rem; color: var(--text-light-silver); max-width: 250px; }
    .contact-section { padding: 6.5rem 0 6rem; max-width: 780px; margin: 0 auto; }
    .contact-header { text-align: center; margin-bottom: 3.5rem; }
    .contact-title { font-size: clamp(2.2rem, 4vw, 3.2rem); color: var(--text-warm-white); margin-bottom: 0.75rem; }
    .contact-subtitle { font-size: 1.05rem; color: var(--text-light-silver); }
    .contact-form { display: flex; flex-direction: column; gap: 2.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
    .form-field { display: flex; flex-direction: column; gap: 0.5rem; }
    .field-label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-light-silver); }
    .minimal-input {
      width: 100%; background: transparent; border: none; border-bottom: 1px solid var(--text-light-silver);
      padding: 0.85rem 0; color: var(--text-warm-white); font-size: 1.05rem; outline: none; transition: border-color 0.25s;
    }
    .minimal-input:focus { border-bottom-color: var(--accent-gold); box-shadow: 0 1px 0 0 var(--accent-gold); }
    .form-submit-row { display: flex; justify-content: flex-end; }
    .site-footer { padding: 2.5rem 0 3.5rem; background-color: var(--bg-graphite); }
    .footer-flex { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; color: var(--text-light-silver); font-size: 0.95rem; }
    .footer-links { display: flex; gap: 2rem; list-style: none; }
    .footer-link { color: var(--text-light-silver); text-decoration: none; }
    .footer-link:hover { color: var(--accent-gold); }
    @media (max-width: 992px) {
      .hero-grid { grid-template-columns: 1fr; text-align: center; }
      .hero-actions, .hero-media { justify-content: center; }
      .journey-grid { grid-template-columns: 1fr; }
      .works-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .works-grid { grid-template-columns: 1fr; }
      .metrics-flex-row, .form-row { flex-direction: column; grid-template-columns: 1fr; }
      .footer-flex { flex-direction: column; text-align: center; }
      .nav-links { display: none; }
    }
  </style>
</head>
<body>
  <header class="navbar" id="navbar">
    <div class="container nav-inner">
      <a href="#home" class="logo"><span>AG</span><span class="logo-dot"></span></a>
      <ul class="nav-links">
        <li><a href="#home" class="nav-link active">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </header>
  <main>
    <section class="hero-section" id="home">
      <div class="container hero-grid">
        <div class="fade-in-up">
          <p class="hero-greeting">Hello, my name is</p>
          <h1 class="hero-title">Alejandro Garcia</h1>
          <h2 class="hero-subtitle">Software Developer &amp; Cloud Technologist</h2>
          <p class="hero-description">Building robust full-stack applications, automated cloud pipelines, and efficient system architectures.</p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div class="hero-media fade-in-up delay-1">
          <div>
            <div class="profile-photo-box">
              <img src="./images/profile.jpg" alt="Alejandro Garcia portrait" class="profile-photo">
              <div class="cyan-status-dot" role="status" aria-label="Available for New Projects"></div>
            </div>
            <div class="status-caption"><span style="color: #00FFFF;">●</span><span>Available for New Projects</span></div>
          </div>
        </div>
      </div>
    </section>
    <hr class="section-divider">
    <section class="journey-section" id="about">
      <div class="container journey-grid">
        <div class="fade-in-up">
          <div class="section-eyebrow"><span class="section-eyebrow-line"></span><span class="section-eyebrow-text">Background</span></div>
          <h2 class="journey-heading">The Journey</h2>
          <p class="journey-text">Currently studying Computer Science at Carolina University. Blending a strong academic foundation in data structures and algorithms with hands-on experience in cloud infrastructure, system monitoring, and IT support. Serving as President of the Computer Science Club to foster technical growth and community.</p>
        </div>
        <div class="fade-in-up delay-1">
          <div class="section-eyebrow"><span class="section-eyebrow-line"></span><span class="section-eyebrow-text">Competencies</span></div>
          <p style="margin-bottom: 1.25rem;">Core engineering specialties, toolchains, and cloud environments:</p>
          <div class="skills-container">
            <span class="skill-pill">C++ &amp; Python</span>
            <span class="skill-pill">AWS &amp; DevOps</span>
            <span class="skill-pill">Docker &amp; ELK Stack</span>
            <span class="skill-pill">Full-Stack Web</span>
            <span class="skill-pill">UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="section-divider">
    <section class="works-section" id="projects">
      <div class="container">
        <div class="fade-in-up">
          <div class="section-eyebrow"><span class="section-eyebrow-line"></span><span class="section-eyebrow-text">Featured Work</span></div>
          <h2 class="works-heading">Selected Works</h2>
        </div>
        <div class="works-grid">
          <article class="portfolio-card fade-in-up delay-1">
            <div class="card-media-wrapper"><img src="./images/project1.png" alt="DevOps Datalogger Pipeline" class="card-img"></div>
            <div class="card-content">
              <div>
                <h3 class="card-title">DevOps Datalogger Pipeline</h3>
                <p class="card-description">Automated build pipeline deployed on an AWS EC2 instance. Configured Docker Compose, Nginx, Elasticsearch, and Kibana for robust system monitoring.</p>
              </div>
              <div class="card-footer"><span class="card-tag">AWS</span><span class="card-tag">Docker</span><span class="card-tag">ELK</span></div>
            </div>
          </article>
          <article class="portfolio-card fade-in-up delay-2">
            <div class="card-media-wrapper"><img src="./images/project2.png" alt="Supermarket Inventory System" class="card-img"></div>
            <div class="card-content">
              <div>
                <h3 class="card-title">Supermarket Inventory System</h3>
                <p class="card-description">Custom graphical user interface application built entirely in C++, leveraging the Fast Light Toolkit (FLTK) for efficient, low-overhead inventory management.</p>
              </div>
              <div class="card-footer"><span class="card-tag">C++</span><span class="card-tag">FLTK</span></div>
            </div>
          </article>
          <article class="portfolio-card fade-in-up delay-3">
            <div class="card-media-wrapper"><img src="./images/project3.png" alt="The Student Empowerment Dashboard" class="card-img"></div>
            <div class="card-content">
              <div>
                <h3 class="card-title">The Student Empowerment Dashboard</h3>
                <p class="card-description">A comprehensive UX case study and full-stack project designed to empower students through an intuitive, data-rich interface and semantic web design.</p>
              </div>
              <div class="card-footer"><span class="card-tag">HTML/CSS/JS</span><span class="card-tag">UI/UX</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <hr class="section-divider">
    <section class="metrics-section" id="experience">
      <div class="container">
        <div class="metrics-flex-row">
          <div class="metric-item fade-in-up delay-1">
            <span class="metric-value">Tier 2</span>
            <span class="metric-label">IT Support &amp; Troubleshooting</span>
          </div>
          <div class="metric-item fade-in-up delay-2">
            <span class="metric-value">7+</span>
            <span class="metric-label">Programming Languages &amp; Frameworks</span>
          </div>
          <div class="metric-item fade-in-up delay-3">
            <span class="metric-value">60+</span>
            <span class="metric-label">Users Recovered in Rapid Network Resolution</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="section-divider">
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-header fade-in-up">
          <div class="section-eyebrow" style="justify-content: center;"><span class="section-eyebrow-line"></span><span class="section-eyebrow-text">Get in Touch</span><span class="section-eyebrow-line"></span></div>
          <h2 class="contact-title">Let's Collaborate.</h2>
          <p class="contact-subtitle">Initiate a dialogue for engineering roles, technical advisory, or cloud systems development.</p>
        </div>
        <form class="contact-form fade-in-up delay-1" id="inquiry-form" onsubmit="event.preventDefault(); alert('Thank you! Inquiry transmitted.');">
          <div class="form-row">
            <div class="form-field">
              <label for="name" class="field-label">Name</label>
              <input type="text" id="name" name="name" class="minimal-input" placeholder="e.g. Elena Rostova" required>
            </div>
            <div class="form-field">
              <label for="email" class="field-label">Email</label>
              <input type="email" id="email" name="email" class="minimal-input" placeholder="e.g. elena@company.com" required>
            </div>
          </div>
          <div class="form-field">
            <label for="message" class="field-label">Message</label>
            <textarea id="message" name="message" rows="4" class="minimal-input" placeholder="Provide a brief overview of your inquiry..." required></textarea>
          </div>
          <div class="form-submit-row">
            <button type="submit" class="btn-primary">Send Inquiry</button>
          </div>
        </form>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-flex">
        <p>&copy; 2026 Alejandro Garcia. Built with precision.</p>
        <ul class="footer-links">
          <li><a href="https://github.com/aleeeg8002" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/alejandro-garcia-a10b7138a/" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a></li>
          <li><a href="mailto:garciaa_3@carolinau.edu" class="footer-link">Email</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Intersection Observer for scroll reveal animations
      const animatedElements = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      animatedElements.forEach(el => observer.observe(el));
    });
  </script>
</body>
</html>`;
