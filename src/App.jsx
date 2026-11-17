import { useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiTerminal,
  FiShield,
  FiGlobe,
  FiCpu,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiExternalLink,
  FiLock,
  FiActivity,
  FiBookOpen,
  FiLayers,
} from 'react-icons/fi'

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Learning', '#learning'],
  ['Contact', '#contact'],
]

const skillGroups = [
  {
    icon: FiGlobe,
    title: 'Web & Networking',
    level: 'Building foundations',
    items: ['HTTP / HTTPS', 'DNS', 'TCP/IP', 'Ports & services', 'Web requests'],
  },
  {
    icon: FiTerminal,
    title: 'Systems & Scripting',
    level: 'Learning by doing',
    items: ['Linux / WSL', 'Bash', 'Python', 'JavaScript', 'Git & GitHub'],
  },
  {
    icon: FiShield,
    title: 'Web Application Security',
    level: 'Studying in labs',
    items: ['XSS', 'SSRF', 'SQL Injection', 'IDOR', 'CSRF'],
  },
  {
    icon: FiCpu,
    title: 'Security Tooling',
    level: 'Hands-on practice',
    items: ['Burp Suite', 'Nmap', 'Subfinder', 'httpx', 'Naabu', 'Katana'],
  },
]

const projects = [
  {
    number: '01',
    type: 'PYTHON · IN PROGRESS',
    title: 'URL Parameter Filter',
    description:
      'A command-line learning project for filtering URLs by query parameters and removing duplicate entries from recon output.',
    tags: ['Python', 'CLI', 'URL parsing'],
    status: 'In progress',
  },
  {
    number: '02',
    type: 'PYTHON · PRACTICE',
    title: 'HTTP Proxy Tester',
    description:
      'A small script to send HTTP requests through a local testing proxy and inspect response status and connectivity.',
    tags: ['Python', 'Requests', 'Proxy'],
    status: 'Practice project',
  },
  {
    number: '03',
    type: 'RECON · LEARNING WORKFLOW',
    title: 'Web Recon Workflow',
    description:
      'A learning workflow combining subdomain discovery, HTTP probing and port/service enumeration for explicitly authorized targets.',
    tags: ['Subfinder', 'httpx', 'Nmap', 'Naabu'],
    status: 'Learning',
  },
]

const studyTopics = [
  {
    icon: FiLock,
    title: 'Web vulnerability fundamentals',
    description: 'Understand how common web vulnerabilities work, how to validate them safely in labs, and how to recommend fixes.',
    topics: 'XSS · SSRF · IDOR · SQLi',
  },
  {
    icon: FiActivity,
    title: 'Reconnaissance methodology',
    description: 'Learn asset discovery, HTTP service identification, content discovery and evidence-driven testing workflows.',
    topics: 'Scope · Discovery · Validation',
  },
  {
    icon: FiBookOpen,
    title: 'Write-ups & documentation',
    description: 'Build clear notes with reproduction steps, impact, evidence, remediation and responsible disclosure context.',
    topics: 'Methodology · Evidence · Remediation',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}<span className="accent">.</span></h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Vignesh home">
        <span className="brand-mark">V<span>.</span></span>
        <span>VIGNESH<span className="brand-muted"> / SECURITY</span></span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav id="primary-navigation" className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <FiArrowUpRight /></a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> LEARNING · BUILDING · TESTING IN LABS</div>
        <p className="hero-kicker">Hello, world. I'm</p>
        <h1>Vignesh<span className="accent">.</span><br /><span className="hero-role">Aspiring Security Researcher</span></h1>
        <p className="hero-description">
          Exploring web application security, bug bounty methodology and automation — one lab, one script and one lesson at a time.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight /></a>
          <a className="button button-ghost" href="#contact">Get in touch <FiArrowDownRight /></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com/vignesh8772" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/vignesh-a-a62b70264/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:vignesh8772@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>

      <div className="terminal-card" aria-label="Terminal-style introduction">
        <div className="terminal-topbar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>vignesh@security-lab: ~</span>
          <FiTerminal />
        </div>
        <div className="terminal-body">
          <p><span className="terminal-muted">┌──(</span><span className="terminal-green">vignesh㉿kali</span><span className="terminal-muted">)-[~]</span></p>
          <p><span className="terminal-green">└─$</span> whoami</p>
          <p className="terminal-output">aspiring_web_security_researcher</p>
          <p><span className="terminal-green">└─$</span> cat focus.txt</p>
          <ul className="terminal-list">
            <li>web_application_security</li>
            <li>bug_bounty_methodology</li>
            <li>python_automation</li>
            <li>continuous_learning</li>
          </ul>
          <p><span className="terminal-green">└─$</span> <span className="terminal-cursor" /></p>
        </div>
        <div className="terminal-footer"><span><span className="status-dot" /> SYSTEM ONLINE</span><span>LEARNING MODE</span></div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}

function About() {
  return (
    <section className="section-shell section-block" id="about">
      <SectionHeading eyebrow="01 / ABOUT ME" title="Curious by nature. Security by focus" />
      <div className="about-grid">
        <div className="about-main panel">
          <div className="panel-label"><FiTerminal /> WHOAMI</div>
          <h3>Learning to think like a defender — and test like a researcher.</h3>
          <p>
            I'm Vignesh, an aspiring web application security researcher with a background in full-stack web development. I'm currently strengthening my foundations in networking, Linux, Python and web security while practising in authorized environments.
          </p>
          <p>
            My development experience helps me understand how web applications are built. I'm using that knowledge to learn how they can fail, how vulnerabilities should be validated, and how developers can fix them.
          </p>
          <div className="about-note"><FiShield /><span>My rule: test only systems I own or have explicit permission to assess.</span></div>
        </div>
        <div className="about-side">
          <div className="stat-panel panel"><span className="stat-index">01</span><strong>Web security</strong><p>Primary learning focus</p></div>
          <div className="stat-panel panel"><span className="stat-index">02</span><strong>Python & Bash</strong><p>Automation foundations</p></div>
          <div className="stat-panel panel"><span className="stat-index">03</span><strong>Always learning</strong><p>Practice over claims</p></div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section-shell section-block" id="skills">
      <SectionHeading eyebrow="02 / TECH STACK" title="Skills & tools" description="A growing toolkit. These are learning areas and tools I'm actively exploring — not claims of expert-level proficiency." />
      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, title, level, items }) => (
          <article className="skill-card panel" key={title}>
            <div className="skill-card-top"><span className="skill-icon"><Icon /></span><span className="skill-level">{level}</span></div>
            <h3>{title}</h3>
            <div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section-shell section-block" id="projects">
      <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects & practice" description="Small tools and workflows that help me learn security concepts through practical work. More detailed repositories and write-ups will be added as they are completed." />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card panel" key={project.number}>
            <div className="project-card-head"><span>{project.number} / 03</span><span className="project-status">{project.status}</span></div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="project-foot"><span>CASE FILE / {project.number}</span><FiArrowUpRight /></div>
          </article>
        ))}
      </div>
      <div className="development-note panel">
        <FiLayers />
        <p><strong>Development background:</strong> I also have React and MERN practice projects, including an e-commerce app, chatbot UI and quiz app. They demonstrate the development foundation I'm bringing into application security.</p>
        <a href="https://github.com/vignesh8772" target="_blank" rel="noreferrer">View GitHub <FiExternalLink /></a>
      </div>
    </section>
  )
}

function Learning() {
  return (
    <section className="section-shell section-block" id="learning">
      <SectionHeading eyebrow="04 / CURRENT FOCUS" title="Research starts with learning" description="My current study path is focused on building repeatable methodology, understanding impact and documenting findings responsibly." />
      <div className="learning-grid">
        {studyTopics.map(({ icon: Icon, title, description, topics }, index) => (
          <article className="learning-card" key={title}>
            <div className="learning-number">0{index + 1}</div>
            <Icon className="learning-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{topics}</span>
          </article>
        ))}
      </div>
      <div className="learning-disclaimer"><FiShield /><p>All security practice is limited to intentionally vulnerable labs, owned systems or targets covered by explicit written authorization and program scope.</p></div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Let's connect<span className="accent">.</span></h2>
        <p>Interested in sharing learning resources, discussing web security or connecting with other people in cybersecurity? Feel free to reach out.</p>
        <a className="button button-primary" href="mailto:vignesh8772@gmail.com">Say hello <FiMail /></a>
        <div className="contact-links">
          <a href="https://github.com/vignesh8772" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiExternalLink /></a>
          <a href="https://www.linkedin.com/in/vignesh-a-a62b70264/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiExternalLink /></a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand" href="#home"><span className="brand-mark">V<span>.</span></span><span>VIGNESH<span className="brand-muted"> / SECURITY</span></span></a>
      <p>Built with curiosity, consistency & a terminal.</p>
      <span>© {new Date().getFullYear()} Vignesh. Learning in public.</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <div className="background-grid" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
