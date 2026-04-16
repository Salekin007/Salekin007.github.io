const philosophyCards = [
  {
    number: '01',
    title: "Quality is Everyone's Responsibility",
    description: 'Fostering a culture where quality is built in, not inspected in.',
  },
  {
    number: '02',
    title: 'Test Early, Test Often',
    description: 'Shift-left approach to catch defects when they are cheapest to fix.',
  },
  {
    number: '03',
    title: 'Automate the Repeatable',
    description: 'Strategic automation that maximizes ROI and accelerates delivery.',
  },
  {
    number: '04',
    title: 'Data-Driven Decisions',
    description: 'Using metrics and insights to drive continuous improvement.',
  },
];

const strengths = [
  { name: 'Leadership', percent: 95 },
  { name: 'Test Strategy', percent: 92 },
  { name: 'Automation', percent: 90 },
  { name: 'Communication', percent: 93 },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Quality Engineering Leader</h2>
          <p className="section-subtitle">
            Driving excellence in software quality through innovation, leadership, and technical expertise
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <div className="about-intro">
              <h3>
                <i className="fas fa-quote-left"></i> My Journey
              </h3>
              <p>
                I'm a <strong>Lead Software Quality Assurance Engineer</strong> with a passion for building world-class quality engineering organizations.
                With over 4 years of progressive experience from individual contributor to team lead, I specialize in transforming QA practices,
                building scalable automation frameworks, and fostering a culture of quality across organizations.
              </p>
              <p>
                My expertise spans <strong>test strategy design, automation architecture, team leadership, and DevOps integration</strong>.
                I've successfully led QA initiatives for enterprise systems serving millions of users, reducing time-to-market by 40% while
                improving product quality by 60% through innovative testing approaches.
              </p>
              <p>
                I believe in <strong>shift-left testing</strong>, <strong>continuous quality</strong>, and <strong>data-driven decision making</strong>.
                My approach combines technical excellence with strong leadership skills to mentor teams, drive process improvements,
                and deliver measurable business value.
              </p>
            </div>

            <div className="philosophy-cards">
              <h3>My Philosophy</h3>
              <div className="philosophy-grid">
                {philosophyCards.map((card, index) => (
                  <div key={index} className="philosophy-card">
                    <div className="philosophy-number">{card.number}</div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <span>SS</span>
                </div>
                <div className="profile-info">
                  <h3>Md. Sirajus Salekin</h3>
                  <p>Lead SQA Engineer</p>
                </div>
              </div>
              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="stat-label">Experience</span>
                  <span className="stat-value">4+ Years</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-label">Projects</span>
                  <span className="stat-value">20+ Delivered</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-label">Team Size</span>
                  <span className="stat-value">15+ Led</span>
                </div>
              </div>
              <div className="profile-badges">
                <span className="badge">
                  <i className="fas fa-certificate"></i> ISTQB
                </span>
                <span className="badge">
                  <i className="fas fa-award"></i> CSM
                </span>
                <span className="badge">
                  <i className="fas fa-graduation-cap"></i> B.Sc.
                </span>
              </div>
            </div>

            <div className="quick-info-card">
              <h3>Quick Info</h3>
              <div className="info-list">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Dhaka, Bangladesh</span>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-briefcase"></i>
                  <div>
                    <span className="info-label">Current Role</span>
                    <span className="info-value">SQA Engineer @ EATL</span>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <span className="info-label">Education</span>
                    <span className="info-value">B.Sc. Computer Science</span>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-language"></i>
                  <div>
                    <span className="info-label">Languages</span>
                    <span className="info-value">English, Bengali</span>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <span className="info-label">Availability</span>
                    <span className="info-value status-open">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="strengths-card">
              <h3>Core Strengths</h3>
              <div className="strengths-list">
                {strengths.map((strength, index) => (
                  <div key={index} className="strength-item">
                    <div className="strength-bar">
                      <span className="strength-name">{strength.name}</span>
                      <span className="strength-percent">{strength.percent}%</span>
                    </div>
                    <div className="strength-progress">
                      <div
                        className="progress-fill"
                        style={{ width: `${strength.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
