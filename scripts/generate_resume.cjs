const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'letter'
});

const pageWidth = doc.internal.pageSize.getWidth(); // 612
const pageHeight = doc.internal.pageSize.getHeight(); // 792
const margin = 42;
const contentWidth = pageWidth - margin * 2; // 528
let y = 42;

// ----------------------------------------------------
// HEADER
// ----------------------------------------------------
doc.setFont('helvetica', 'bold');
doc.setFontSize(16);
doc.setTextColor(15, 23, 42);
doc.text('Alejandro Garcia Lopez', pageWidth / 2, y, { align: 'center' });

y += 16;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(30, 41, 59);

// Construct subheader items with clickable hyperlinks
const subheaderParts = [
  { text: '420 S Broad St • Winston-Salem, NC 27101 • ' },
  { text: 'garciaa_3@carolinau.edu', url: 'mailto:garciaa_3@carolinau.edu' },
  { text: ' • ' },
  { text: '+1 (336)898-1767', url: 'tel:+13368981767' },
  { text: ' • ' },
  { text: 'GitHub', url: 'https://github.com/aleeeg8002' },
  { text: ' • ' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/alejandro-garcia-a10b7138a/' }
];

const totalSubheaderWidth = subheaderParts.reduce((acc, part) => acc + doc.getTextWidth(part.text), 0);
let currentX = (pageWidth - totalSubheaderWidth) / 2;

subheaderParts.forEach(part => {
  const partWidth = doc.getTextWidth(part.text);
  if (part.url) {
    doc.setTextColor(15, 23, 42);
    doc.text(part.text, currentX, y);
    doc.link(currentX, y - 7, partWidth, 9, { url: part.url });
  } else {
    doc.setTextColor(30, 41, 59);
    doc.text(part.text, currentX, y);
  }
  currentX += partWidth;
});

y += 10;
doc.setDrawColor(20, 20, 20);
doc.setLineWidth(0.85);
doc.line(margin, y, pageWidth - margin, y);
y += 18;

// ----------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------
function renderSectionTitle(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(title, pageWidth / 2, y, { align: 'center' });
  y += 12;
}

function renderEntryHeader(institution, location, role, dates) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(institution, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text(location, pageWidth - margin, y, { align: 'right' });
  y += 11;

  if (role || dates) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    if (role) doc.text(role, margin, y);
    if (dates) doc.text(dates, pageWidth - margin, y, { align: 'right' });
    y += 12;
  }
}

function renderBullets(bullets) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.7);
  doc.setTextColor(30, 41, 59);

  bullets.forEach(b => {
    const bulletSymbol = '• ';
    const symbolWidth = doc.getTextWidth(bulletSymbol);
    const textWidth = contentWidth - 14;
    const lines = doc.splitTextToSize(b, textWidth);

    doc.text(bulletSymbol, margin + 6, y);
    doc.text(lines, margin + 6 + symbolWidth, y);
    y += lines.length * 10.8 + 2.5;
  });
}

// ----------------------------------------------------
// 1. EDUCATION
// ----------------------------------------------------
renderSectionTitle('Education');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Carolina University', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Winston-Salem, NC', pageWidth - margin, y, { align: 'right' });
y += 11;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(30, 41, 59);
doc.text('B.S. Computer Science. GPA: 3.96/4.0', margin, y);
doc.text('May 2028', pageWidth - margin, y, { align: 'right' });
y += 11;

doc.text('Awards & Honors: Dean’s List (x3)', margin, y);
y += 18;

// ----------------------------------------------------
// 2. EXPERIENCE
// ----------------------------------------------------
renderSectionTitle('Experience');

// Role 1
renderEntryHeader('Something ELSE Studios LLC', 'Winston-Salem, NC', 'Junior Engineer | Mentorship', 'Sep 2026 – Present');
renderBullets([
  'Documented technical decisions and system issues across a cloud infrastructure migration from Replit to Railway in real-time, maintaining a structured log of blockers, resolutions, and configuration changes to support a development team building a React + Vite and PostgreSQL full-stack digital campus platform.',
  'Executed comprehensive regression testing and staging verification for WebSocket connections, social group chats, voting mechanisms, and QuizPop socket handlers.'
]);
y += 3;

// Role 2
renderEntryHeader('Carolina University', 'Winston-Salem, NC', 'IT Support Technician', 'Jun 2026 – Present');
renderBullets([
  'Improved first-contact resolution for 200+ end users by triaging and resolving Tier 1 hardware, software, and Microsoft 365 support tickets through Freshdesk, 8x8 calls, and walk-in service, reducing repeat escalations and maximizing system uptime.',
  'Secured campus access by leading a full building access control migration provisioning and managing user credentials through the Sifely Smart Lock App and reprogramming 17 Sifely Smart Locks to replace legacy biometric scanners with NFC authentication.',
  'Restored stable Wi-Fi and ethernet connectivity for 60+ residents by diagnosing a switch-level network loop and migrating port configurations to a new VLAN.'
]);
y += 6;

// ----------------------------------------------------
// 3. LEADERSHIP & ACTIVITIES
// ----------------------------------------------------
renderSectionTitle('Leadership & Activities');

// Activity 1
renderEntryHeader('Carolina University', 'Winston-Salem, NC', 'Computer Science Club | President', 'May 2026 – Present');
renderBullets([
  'Grew club membership by 70% and led hands-on technical workshops in preparation for a regional Capture-The-Flag (CTF) cybersecurity competition.',
  'Published fortnightly career roadmap guides to map out progression in diverse roles amongst the Computer Science field, such as a Full-Stack Developer or IT Systems Administrator.'
]);
y += 3;

// Activity 2
renderEntryHeader('Carolina University', 'Winston-Salem, NC', 'Office of Campus Life | Resident Assistant', 'May 2026 – Aug 2026');
renderBullets([
  'Served as the primary point of contact for 14+ residents by fielding requests, escalating issues to facilities management, and communicating policy updates clearly.'
]);
y += 6;

// ----------------------------------------------------
// 4. SKILLS & INTERESTS
// ----------------------------------------------------
renderSectionTitle('Skills & Interests');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Technical: ', margin, y);
const techLabelWidth = doc.getTextWidth('Technical: ');

doc.setFont('helvetica', 'normal');
doc.setTextColor(30, 41, 59);
const technicalText = 'Windows 10/11, Microsoft 365, AWS, Freshdesk, Asana, Google Workspace, HTML/CSS, JavaScript, Python, C++';
const techLines = doc.splitTextToSize(technicalText, contentWidth - techLabelWidth);
doc.text(techLines, margin + techLabelWidth, y);
y += techLines.length * 11 + 2;

doc.setFont('helvetica', 'bold');
doc.setTextColor(15, 23, 42);
doc.text('Language: ', margin, y);
const langLabelWidth = doc.getTextWidth('Language: ');

doc.setFont('helvetica', 'normal');
doc.setTextColor(30, 41, 59);
doc.text('Fluent in English & Spanish', margin + langLabelWidth, y);
y += 18;

// ----------------------------------------------------
// 5. CERTIFICATIONS
// ----------------------------------------------------
renderSectionTitle('Certifications');

const certList = [
  {
    name: 'Google IT Support Professional Certificate — Google Career Certificates',
    date: 'Completed Oct 2026'
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification — DeepLearning.AI',
    date: 'Completed Jul 2026'
  },
  {
    name: 'AWS Academy Cloud Foundations — Amazon Web Services',
    date: 'Completed Jun 2026'
  },
  {
    name: 'IBM Full-Stack Developer — IBM',
    date: 'In Progress - Course 5 of 15 (2026)'
  }
];

certList.forEach(c => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(30, 41, 59);

  // Cert name and provider
  doc.text(c.name, margin, y);
  // Date on the right
  doc.text(c.date, pageWidth - margin, y, { align: 'right' });
  y += 12;
});

// Output to public and dist
const publicDir = path.join(__dirname, '..', 'public');
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

const outPathPublic = path.join(publicDir, 'Alejandro_Garcia_Resume.pdf');
fs.writeFileSync(outPathPublic, pdfBuffer);
console.log(`[Resume Generator] Generated resume at ${outPathPublic} (${pdfBuffer.length} bytes, total pages: ${doc.internal.getNumberOfPages()})`);

if (fs.existsSync(distDir)) {
  const outPathDist = path.join(distDir, 'Alejandro_Garcia_Resume.pdf');
  fs.writeFileSync(outPathDist, pdfBuffer);
  console.log(`[Resume Generator] Copied resume to ${outPathDist}`);
}
