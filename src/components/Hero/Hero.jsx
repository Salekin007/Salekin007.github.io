import { Link } from 'react-scroll';

const metrics = [
  { icon: 'fa-bolt', value: '60%', label: 'Regression Time Reduced' },
  { icon: 'fa-chart-line', value: '1000+', label: 'Users Load Tested' },
  { icon: 'fa-bug', value: '1000+', label: 'Critical Bugs Prevented' },
  { icon: 'fa-rocket', value: '99.9%', label: 'Production Uptime' },
];

const badges = [
  { src: 'https://img.shields.io/badge/TypeScript-Playwright%20Expert-blue?style=flat-square', alt: 'TS Playwright Expert' },
  { src: 'https://img.shields.io/badge/Claude-AI%20Expert-purple?style=flat-square&logo=anthropic', alt: 'Claude AI Expert' },
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
            <i className="fas fa-briefcase"></i>
            <span>Available for SQA Opportunities</span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting"><b color='Red'>As-salamu alaykum</b>, I'm</span>
          <span className="hero-name">Md. Sirajus Salekin</span>
          <span className="hero-role">Automation Architect | Quality Engineering Lead</span>
        </h1>

        <p className="hero-subtitle">
          Reduced Regression Time by 60% | Scaled Systems for Millions of Users | Zero Critical Releases
        </p>

        <p className="hero-description">
          Automation Architect specializing in building scalable test frameworks, implementing CI/CD quality gates,
          and leading QA teams to deliver production-ready software. Expert in Playwright, k6 performance testing,
          and AI-assisted test generation. Proven track record of reducing release cycles from 2 weeks to 3 days
          while maintaining 99.9% uptime across enterprise platforms serving 50,000+ daily users.
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
        <i className="fas fa-brain"></i>
        <span>AI Powered</span>
      </div>
      <div className="floating-card card-2">
        <i className="fas fa-robot"></i>
        <span>Automation</span>
      </div>
      <div className="floating-card card-3">
        <i className="fas fa-shield-alt"></i>
        <span>Quality</span>
      </div>
    </section>
  );
}
