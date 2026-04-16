import { Link } from 'react-scroll';

const metrics = [
  { icon: 'fa-users', value: '15+', label: 'Team Members Led' },
  { icon: 'fa-chart-line', value: '70%', label: 'Automation Coverage' },
  { icon: 'fa-project-diagram', value: '20+', label: 'Enterprise Projects' },
  { icon: 'fa-bug', value: '5000+', label: 'Defects Prevented' },
];

const badges = [
  { src: 'https://img.shields.io/badge/ISTQB-Certified%20Tester-success?style=flat-square', alt: 'ISTQB Certified' },
  { src: 'https://img.shields.io/badge/Agile-CSM%20Certified-blue?style=flat-square', alt: 'Agile CSM' },
  { src: 'https://img.shields.io/badge/Python-Playwright%20Expert-yellow?style=flat-square', alt: 'Python Expert' },
  { src: 'https://github.com/Salekin007/Salekin007.github.io/actions/workflows/playwright.yml/badge.svg', alt: 'Playwright CI', isCI: true },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="particle"></span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for Lead SQA Opportunities</span>
            <span className="badge-pulse"></span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Md. Sirajus Salekin</span>
          <span className="hero-role">Lead SQA Engineer</span>
        </h1>

        <p className="hero-subtitle">
          Transforming Quality Engineering through Strategic Leadership, Automation Architecture, & Process Excellence
        </p>

        <p className="hero-description">
          Senior Quality Assurance Leader with 4+ years of experience building high-performing QA teams,
          designing scalable test automation frameworks, and driving quality culture across organizations.
          Passionate about shift-left testing, CI/CD integration, and delivering exceptional user experiences.
        </p>

        <div className="hero-metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">
                <i className={`fas ${metric.icon}`}></i>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-primary">
            <span>Start Conversation</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-secondary">
            <span>View Case Studies</span>
            <i className="fas fa-eye"></i>
          </Link>
          <a href="/assets/NewCV.pdf" className="btn btn-outline" download>
            <span>Download Resume</span>
            <i className="fas fa-download"></i>
          </a>
        </div>

        <div className="hero-social-proof">
          {badges.map((badge, index) => (
            <div key={index} className={`social-proof-item ${badge.isCI ? 'ci-badge-wrapper' : ''}`}>
              <img
                className={badge.isCI ? 'ci-badge' : ''}
                src={badge.src}
                alt={badge.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>

      <div className="floating-card card-1">
        <i className="fas fa-robot"></i>
        <span>Automation</span>
      </div>
      <div className="floating-card card-2">
        <i className="fas fa-shield-alt"></i>
        <span>Quality</span>
      </div>
      <div className="floating-card card-3">
        <i className="fas fa-code-branch"></i>
        <span>CI/CD</span>
      </div>
    </section>
  );
}
