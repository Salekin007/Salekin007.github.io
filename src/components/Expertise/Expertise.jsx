const expertiseAreas = [
  {
    icon: 'fa-sitemap',
    title: 'Test Strategy & Architecture',
    description: 'Designing comprehensive test strategies aligned with business goals, building scalable test automation frameworks, and defining quality metrics that matter.',
    items: [
      'Test Strategy Development',
      'Automation Framework Design',
      'Test Pyramid Implementation',
      'Risk-Based Testing',
      'Quality Metrics & Reporting',
    ],
    isFeatured: true,
    stats: [
      { number: '70%', text: 'Avg. Automation Coverage' },
      { number: '40%', text: 'Time-to-Market Reduced' },
    ],
  },
  {
    icon: 'fa-users-cog',
    title: 'Team Leadership',
    description: 'Building and mentoring high-performing QA teams, fostering collaboration, and driving continuous improvement in quality practices.',
    items: [
      'Team Building & Hiring',
      'Mentoring & Training',
      'Performance Management',
      'Resource Planning',
      'Stakeholder Management',
    ],
  },
  {
    icon: 'fa-code-branch',
    title: 'CI/CD & DevOps',
    description: 'Integrating testing into CI/CD pipelines, implementing continuous quality gates, and enabling faster, more reliable deployments.',
    items: [
      'Pipeline Design',
      'Test Environment Setup',
      'Quality Gates',
      'Jenkins/GitLab CI',
      'Container & Cloud Testing',
    ],
  },
  {
    icon: 'fa-vial',
    title: 'Test Automation',
    description: 'Building robust automation frameworks using Playwright, Python, and industry best practices for maintainable, scalable test suites.',
    items: [
      'Framework Architecture',
      'Playwright & Python',
      'API Automation',
      'Mobile Testing',
      'Page Object Model',
    ],
  },
  {
    icon: 'fa-bolt',
    title: 'Performance Testing',
    description: 'Ensuring systems scale and perform under load through comprehensive performance testing and bottleneck analysis.',
    items: [
      'Load Testing (JMeter, k6)',
      'Stress Testing',
      'Performance Profiling',
      'Benchmarking',
      'Capacity Planning',
    ],
  },
  {
    icon: 'fa-shield-alt',
    title: 'API Testing',
    description: 'Comprehensive API testing with Postman, automated test suites, and integration testing for RESTful services.',
    items: [
      'REST API Testing',
      'Postman Collections',
      'Contract Testing',
      'API Documentation',
      'Mock Services',
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-subtitle">
            Comprehensive quality engineering capabilities across the software development lifecycle
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className={`expertise-card ${area.isFeatured ? 'featured' : ''}`}>
              <div className="expertise-header">
                <div className="expertise-icon">
                  <i className={`fas ${area.icon}`}></i>
                </div>
                {area.isFeatured && <div className="expertise-badge">Core</div>}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="expertise-list">
                {area.items.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i> {item}
                  </li>
                ))}
              </ul>
              {area.stats && (
                <div className="expertise-stats">
                  {area.stats.map((stat, i) => (
                    <div key={i} className="expertise-stat">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-text">{stat.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
