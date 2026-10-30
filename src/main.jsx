import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, ArrowUpRight, Download, Menu, Code2, Database, Smartphone, BrainCircuit } from 'lucide-react';
import './styles.css';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'PHP', 'MySQL',
  'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'Database Integration', 'Problem Solving'
];

const projects = [
  {
    title: 'Women Training Management System',
    description: 'A web application for managing women’s training programs, including user registration and login, course management, trainee management, an admin dashboard, and database integration.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    image: '/project-training.svg',
    code: 'https://github.com/IshimweHonorine',
    label: 'View GitHub'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive personal website to introduce my background, showcase technical skills, and share selected software development projects.',
    tags: ['React.js', 'CSS', 'JavaScript'],
    image: '/project-portfolio.svg',
    code: 'https://github.com/IshimweHonorine',
    label: 'View GitHub'
  },
  {
    title: 'Business Website Concept',
    description: 'A concept for a small-business website focused on clear navigation, responsive layouts, and presenting services in a professional way.',
    tags: ['Web Design', 'Responsive UI', 'CSS'],
    image: '/project-business.svg',
    code: 'https://github.com/IshimweHonorine',
    label: 'View GitHub'
  }
];

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home"><span className="brand-mark">H</span><span>Honorine Ishimwe</span></a>
          <div className="nav-links">
            <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </div>
          <a className="button button-small" href="/Honorine_Ishimwe_CV.pdf" download><Download size={16}/> Download CV</a>
          <button className="mobile-menu" aria-label="Open navigation" onClick={() => document.querySelector('.nav-links').classList.toggle('open')}><Menu /></button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Hello, I'm</p>
              <h1>Honorine <span>Ishimwe</span></h1>
              <h2>Web Developer <b>|</b> Front-End Developer</h2>
              <p className="hero-description">I build responsive, user-friendly websites and web applications using modern web technologies. I enjoy clean code, thoughtful design, and solving real problems through technology.</p>
              <div className="hero-actions">
                <a className="button" href="#projects">View My Projects <ArrowUpRight size={17}/></a>
                <a className="button button-outline" href="#contact">Contact Me</a>
              </div>
              <div className="socials">
                <a href="https://github.com/IshimweHonorine" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="mailto:ishimwehonorine64@gmail.com" aria-label="Email"><Mail /></a>
              </div>
            </div>
            <div className="hero-photo-wrap"><div className="photo-glow"></div><img className="hero-photo" src="/honorine-portrait.png" alt="Portrait of Honorine Ishimwe" /></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div>
              <div className="section-kicker"></div><h2 className="section-title">About Me</h2>
              <p>I am an Information Technology graduate from Adventist University of Central Africa (AUCA), with a background in Software Engineering. I have knowledge of front-end and back-end web development using HTML, CSS, JavaScript, React.js, Node.js, PHP, MySQL, Bootstrap, and Tailwind CSS.</p>
              <p>My Women Training Management System project includes user registration and login, course management, trainee management, an admin dashboard, and database integration.</p>
              <p>I am eager to contribute to useful digital products, learn new tools, and collaborate on challenging web projects.</p>
              <a className="button" href="/Honorine_Ishimwe_CV.pdf" download><Download size={16}/> Download CV</a>
            </div>
            <aside className="details-card">
              <div className="detail-row"><GraduationCap/><div><strong>Education</strong><span>Bachelor's degree in IT / Software Engineering</span><span>Adventist University of Central Africa (AUCA)</span><span>Graduated: 2023</span></div></div>
              <div className="detail-row"><MapPin/><div><strong>Location</strong><span>Kigali, Rwanda</span></div></div>
              <div className="detail-row"><Mail/><div><strong>Email</strong><a href="mailto:ishimwehonorine64@gmail.com">ishimwehonorine64@gmail.com</a></div></div>
              <div className="detail-row"><Phone/><div><strong>Phone</strong><a href="tel:+250787378508">0787378508</a></div></div>
              <div className="detail-row"><Github/><div><strong>GitHub</strong><a href="https://github.com/IshimweHonorine" target="_blank" rel="noreferrer">github.com/IshimweHonorine</a></div></div>
            </aside>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-kicker"></div><h2 className="section-title">My Skills</h2>
            <p className="section-intro">Tools and technologies I have worked with.</p>
            <div className="skills-grid">{skills.map((skill, i) => <div className="skill-pill" key={skill}><span className="skill-icon">{i < 4 ? <Code2 size={18}/> : i === 6 || i === 10 ? <Database size={18}/> : i === 9 ? <Smartphone size={18}/> : <BrainCircuit size={18}/>}</span>{skill}</div>)}</div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker"></div><h2 className="section-title">My Projects</h2></div><a className="text-link" href="https://github.com/IshimweHonorine" target="_blank" rel="noreferrer">View GitHub Profile <ArrowUpRight size={16}/></a></div>
            <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}>
              <img src={project.image} alt="" className="project-image"/>
              <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.code} target="_blank" rel="noreferrer"><Github size={16}/>{project.label}<ArrowUpRight size={14}/></a></div>
            </article>)}</div>
            <p className="project-note">Project cards are editable starter content. Replace the links and preview images with your actual repositories and screenshots before sharing this portfolio.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner"><div><div className="section-kicker"></div><h2>Let's work together</h2><p>Have a website or web application project in mind? I'd be happy to hear from you.</p></div><a className="button" href="mailto:ishimwehonorine64@gmail.com">Get in touch <Mail size={17}/></a></div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-inner"><div><strong>Honorine Ishimwe</strong><span>Web Developer | Front-End Developer</span></div><div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="https://github.com/IshimweHonorine" aria-label="GitHub"><Github/></a><a href="mailto:ishimwehonorine64@gmail.com" aria-label="Email"><Mail/></a></div></div><p className="copyright">© {new Date().getFullYear()} Honorine Ishimwe. All rights reserved.</p></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
