const certifications = [
  {
    icon: 'fa-certificate',
    iconBg: 'linear-gradient(135deg, #7b42bc 0%, #9b5cd6 100%)',
    title: 'CI/CD for Test Automation: Jenkins & GitHub Actions',
    detail: 'Credential ID: UC-87513b7a-6417-436d-b830-673d962ae9cd',
    issuer: 'Udemy',
    year: 'Issued Oct 2025',
    type: 'cert',
  },
  {
    icon: 'fa-award',
    iconBg: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    title: 'MasterClass Software Testing with Jira & Agile - Be a QA Lead',
    issuer: 'Udemy',
    year: 'Issued Dec 2024',
    type: 'cert',
  },
  {
    icon: 'fa-scroll',
    iconBg: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
    title: 'Software Testing Tutorial',
    detail: 'Course Completion Certificate',
    issuer: 'Great Learning',
    year: 'Issued Oct 2024',
    type: 'cert',
  },
  {
    icon: 'fa-code',
    iconBg: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    title: 'Playwright Python Automation Testing - From Zero to Expert',
    detail: 'Automation Testing Specialization',
    issuer: 'Udemy',
    year: 'Credential Available',
    type: 'cert',
  },
  {
    icon: 'fa-graduation-cap',
    iconBg: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    title: 'Bachelor of Science',
    detail: 'Computer Science & Engineering',
    issuer: 'American International University-Bangladesh (AIUB)',
    year: 'Graduated',
    type: 'education',
  },
];

export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Education</h2>
          <p className="section-subtitle">
            Professional certifications and educational background in software quality assurance
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card ${cert.type === 'education' ? 'education-card' : ''} fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="cert-icon"
                style={{ background: cert.iconBg }}
              >
                <i className={`fas ${cert.icon}`}></i>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                {cert.detail && <span className="cert-detail">{cert.detail}</span>}
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">
                  <i className="far fa-calendar-alt"></i>
                  {cert.year}
                </span>
              </div>
              {cert.type === 'education' && (
                <div className="cert-badge">
                  <i className="fas fa-star"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
