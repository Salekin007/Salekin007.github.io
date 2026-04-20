const contactCards = [
  {
    icon: 'fa-envelope',
    iconBg: 'linear-gradient(135deg, #7b42bc 0%, #9b5cd6 100%)',
    label: 'Email',
    value: 'salekinsirajus0@gmail.com',
    href: 'mailto:salekinsirajus0@gmail.com',
  },
  {
    icon: 'fa-phone',
    iconBg: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
    label: 'Phone',
    value: '+8801886280900',
    href: 'tel:+8801886280900',
  },
  {
    icon: 'fa-map-marker-alt',
    iconBg: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    label: 'Location',
    value: 'Dhaka, Bangladesh',
  },
  {
    icon: 'fa-clock',
    iconBg: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    label: 'Availability',
    value: 'Open to Opportunities',
    status: 'status-open',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: '@salekin007',
    href: 'https://www.linkedin.com/in/salekin007/',
    icon: 'fab fa-linkedin-in',
    className: 'linkedin',
    iconBg: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)',
  },
  {
    name: 'GitHub',
    handle: '@Salekin007',
    href: 'https://github.com/Salekin007',
    icon: 'fab fa-github',
    className: 'github',
    iconBg: 'linear-gradient(135deg, #24292e 0%, #374151 100%)',
  },
  {
    name: 'Email',
    handle: 'Get in touch',
    href: 'mailto:salekinsirajus0@gmail.com',
    icon: 'fas fa-envelope',
    className: 'email',
    iconBg: 'linear-gradient(135deg, #7b42bc 0%, #9b5cd6 100%)',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project or leadership opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-cards">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="contact-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="contact-icon"
                    style={{ background: card.iconBg }}
                  >
                    <i className={`fas ${card.icon}`}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{card.label}</span>
                    {card.href ? (
                      <a href={card.href}>{card.value}</a>
                    ) : (
                      <span className={card.status}>{card.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-social">
            <h3>Connect With Me</h3>
            <p className="contact-subtitle">Follow my professional journey</p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${link.className} fade-in`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <i className={link.icon}></i>
                  <div className="social-info">
                    <span className="social-name">{link.name}</span>
                    <span className="social-handle">{link.handle}</span>
                  </div>
                  <i className="fas fa-arrow-right social-arrow"></i>
                </a>
              ))}
            </div>

            <div className="contact-cta fade-in" style={{ animationDelay: '0.6s' }}>
              <h3>Download My Resume</h3>
              <p>Get a detailed overview of my experience, skills, and achievements</p>
              <a href="/assets/MD_Salekin_Sirajus.pdf" className="btn btn-primary" download>
                <i className="fas fa-download"></i>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
