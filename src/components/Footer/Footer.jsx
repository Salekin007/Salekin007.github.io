export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'expertise', label: 'Expertise', icon: 'fa-star' },
    { id: 'projects', label: 'Projects', icon: 'fa-rocket' },
  ];

  const services = [
    { label: 'Test Automation', icon: 'fa-robot' },
    { label: 'Performance Testing', icon: 'fa-tachometer-alt' },
    { label: 'API Testing', icon: 'fa-plug' },
    { label: 'Mobile Testing', icon: 'fa-mobile-alt' },
    { label: 'CI/CD Integration', icon: 'fa-code-branch' },
  ];

  const contactInfo = [
    { icon: 'fa-envelope', text: 'salekinsirajus0@gmail.com', link: 'mailto:salekinsirajus0@gmail.com' },
    { icon: 'fa-map-marker-alt', text: 'Dhaka, Bangladesh', link: null },
    { icon: 'fa-clock', text: 'Available for Opportunities', link: null },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Salekin007', color: '#333' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/salekin007/', color: '#0077b5' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:salekinsirajus0@gmail.com', color: '#ea4335' }
  ];

  const techStack = [
    'Playwright', 'Jenkins', 'GitHub Actions',
    'Appium 2.0', 'Postman', 'JIRA', 'Python', 'TypeScript'
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-column footer-brand-column">
            <div className="footer-logo">
              <img src="/profile.jpg" alt="Profile" className="footer-logo-img" />
            </div>
            <h3 className="footer-title">Md. Sirajus Salekin</h3>
            <p className="footer-tagline">SQA Engineer | Quality Engineering Leader</p>
            <p className="footer-description">
              Passionate about ensuring software quality through innovative testing strategies,
              automation frameworks, and continuous improvement practices.
            </p>

            {/* Tech Stack Tags */}
            <div className="footer-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer-link">
                    <i className={`fas ${link.icon}`}></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Expertise</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-service">
                    <i className={`fas ${service.icon}`}></i>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Get In Touch</h4>
            <div className="footer-contact">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <i className={`fas ${item.icon}`}></i>
                  {item.link ? (
                    <a href={item.link}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="footer-social-section">
              <h4>Connect With Me</h4>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© {currentYear} Md. Sirajus Salekin. All rights reserved.</p>
              <p className="footer-tagline-small">Built with passion for quality excellence 🚀</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#home">Back to Top <i className="fas fa-arrow-up"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>
      </div>
    </footer>
  );
}
