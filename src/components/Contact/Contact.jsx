const contactCards = [
  {
    icon: 'fa-envelope',
    label: 'Email',
    value: 'salekinsirajus0@gmail.com',
    href: 'mailto:salekinsirajus0@gmail.com',
  },
  {
    icon: 'fa-phone',
    label: 'Phone',
    value: '+8801886280900',
    href: 'tel:+8801886280900',
  },
  {
    icon: 'fa-map-marker-alt',
    label: 'Location',
    value: 'Dhaka, Bangladesh',
  },
  {
    icon: 'fa-clock',
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
  },
  {
    name: 'GitHub',
    handle: '@Salekin007',
    href: 'https://github.com/Salekin007',
    icon: 'fab fa-github',
    className: 'github',
  },
  {
    name: 'Email',
    handle: 'Get in touch',
    href: 'mailto:salekinsirajus0@gmail.com',
    icon: 'fas fa-envelope',
    className: 'email',
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
                <div key={index} className="contact-card">
                  <div className="contact-icon">
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
                  className={`social-link ${link.className}`}
                >
                  <i className={link.icon}></i>
                  <div className="social-info">
                    <span className="social-name">{link.name}</span>
                    <span className="social-handle">{link.handle}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-cta">
              <h3>Download My Resume</h3>
              <p>Get a detailed overview of my experience, skills, and achievements</p>
              <a href="/assets/NewCV.pdf" className="btn btn-primary" download>
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
