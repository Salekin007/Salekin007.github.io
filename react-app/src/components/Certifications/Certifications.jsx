const certifications = [
  {
    icon: 'fa-certificate',
    title: 'CI/CD for Test Automation: Jenkins & GitHub Actions',
    detail: 'Credential ID: UC-87513b7a-6417-436d-b830-673d962ae9cd',
    issuer: 'Udemy',
    year: 'Issued Oct 2025',
  },
  {
    icon: 'fa-award',
    title: 'MasterClass Software Testing with Jira & Agile - Be a QA Lead',
    issuer: 'Udemy',
    year: 'Issued Dec 2024',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Software Testing Tutorial',
    detail: 'Course Completion Certificate',
    issuer: 'Great Learning',
    year: 'Issued Oct 2024',
  },
  {
    icon: 'fa-certificate',
    title: 'Playwright Python Automation Testing - From Zero to Expert',
    detail: 'Automation Testing Specialization',
    issuer: 'Udemy',
    year: 'Credential Available',
  },
  {
    icon: 'fa-university',
    title: 'Bachelor of Science',
    detail: 'Computer Science & Engineering',
    issuer: 'American International University-Bangladesh (AIUB)',
    year: 'Graduated',
  },
];

export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Education</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <i className={`fas ${cert.icon}`}></i>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                {cert.detail && <p className="cert-detail">{cert.detail}</p>}
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
