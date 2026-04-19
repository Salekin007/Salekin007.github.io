const projects = [
  {
    id: 'his',
    type: 'Enterprise Healthcare Platform',
    title: 'Hospital Information System (HIS)',
    shortDescription: 'Comprehensive hospital management system',
    description: 'Led QA for a multi-module healthcare platform serving 50,000+ patients daily. Implemented comprehensive test automation framework reducing regression testing time by 70%.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: 'fa-hospital',
    isFeatured: true,
    hasTestPlan: true,

    // SQA Specific Metrics
    metrics: {
      testCoverage: '92%',
      automationRate: '78%',
      bugsFound: '340+',
      timeSaved: '70%',
      modules: '6 modules'
    },

    // Technologies & Tools
    techStack: ['Selenium', 'Java', 'TestNG', 'Jenkins', 'Appium', 'Postman', 'JIRA'],

    // Key Achievements
    achievements: [
      'Built test automation framework from scratch',
      'Reduced release cycle from 2 weeks to 3 days',
      'Implemented CI/CD pipeline with 95% success rate',
      'Trained team of 8 QA engineers'
    ],

    // Project Timeline
    duration: '18 months',
      teamSize: '15 members',
      role: 'Lead QA Engineer',

    // Challenge & Solution
    challenge: 'Manual testing took 2 weeks for each release with frequent production bugs',
    solution: 'Implemented hybrid automation framework integrating API, UI, and performance testing'
  },
  {
    id: 'lms',
    type: 'EdTech Platform',
    title: 'Learning Management System (LMS)',
    shortDescription: 'Online learning platform',
    description: 'Developed quality strategy for virtual classroom platform supporting 10,000+ concurrent users. Established performance testing baseline and improved system reliability by 85%.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: 'fa-graduation-cap',
    hasTestPlan: true,

    metrics: {
      testCoverage: '88%',
      automationRate: '65%',
      bugsFound: '180+',
      performanceImprovement: '85%',
      users: '10K+ concurrent'
    },

    techStack: ['Cypress', 'JavaScript', 'JMeter', 'GitHub Actions', 'Mocha', 'Chrome DevTools'],

    achievements: [
      'Established performance testing framework',
      'Reduced page load time by 60%',
      'Implemented automated visual regression testing',
      'Created comprehensive test documentation'
    ],

    duration: '12 months',
    teamSize: '8 members',
    role: 'Senior SQA Engineer',

    challenge: 'Platform experienced frequent crashes during peak usage hours',
    solution: 'Implemented comprehensive performance testing and load testing strategies'
  },
  {
    id: 'ieims',
    type: 'Government Platform | Nationwide Deployment',
    title: 'Integrated Education Information Management System (IEIMS)',
    shortDescription: 'Nationwide education platform',
    description: 'Spearheaded quality assurance for nationwide government education platform. Achieved 99.9% uptime and zero critical bugs in production for 2+ years.',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: 'fa-chalkboard-user',
    isFeatured: true,
    hasTestPlan: true,

    metrics: {
      testCoverage: '95%',
      automationRate: '85%',
      bugsFound: '520+',
      uptime: '99.9%',
      institutions: '650+'
    },

    techStack: ['Playwright', 'TypeScript', 'Docker', 'Kubernetes', 'GitLab CI', 'Selenium Grid'],

    achievements: [
      'Built scalable test automation infrastructure',
      'Implemented shift-left testing approach',
      'Achieved zero critical bugs in production',
      'Reduced testing costs by 60%'
    ],

    duration: '24 months',
    teamSize: '20 members',
    role: 'QA Lead / Architect',

    challenge: 'Complex nationwide system with multiple stakeholders and strict compliance requirements',
    solution: 'Designed comprehensive test strategy with automated compliance checking and multi-environment testing'
  },
];

export default function Projects({ onViewTestPlan }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Demonstrating impact through data-driven quality engineering
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.isFeatured ? 'featured' : ''}`}>
              {/* Project Header */}
              <div className="project-header">
                <div className="project-image" style={{ background: project.gradient }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
                {project.isFeatured && (
                  <div className="project-badge featured-badge">
                    <i className="fas fa-star"></i> Featured Case Study
                  </div>
                )}
                {project.hasTestPlan && (
                  <span className="test-plan-badge">
                    <i className="fas fa-clipboard-check"></i> Test Plan Available
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDescription}</p>
                <p className="project-description">{project.description}</p>

                {/* Key Metrics */}
                <div className="project-metrics">
                  <div className="metric-item">
                    <i className="fas fa-chart-pie"></i>
                    <span className="metric-label">Test Coverage</span>
                    <span className="metric-value">{project.metrics.testCoverage}</span>
                  </div>
                  <div className="metric-item">
                    <i className="fas fa-robot"></i>
                    <span className="metric-label">Automation</span>
                    <span className="metric-value">{project.metrics.automationRate}</span>
                  </div>
                  {project.isFeatured && (
                    <>
                      <div className="metric-item">
                        <i className="fas fa-bug"></i>
                        <span className="metric-label">Bugs Found</span>
                        <span className="metric-value">{project.metrics.bugsFound}</span>
                      </div>
                      <div className="metric-item">
                        <i className="fas fa-clock"></i>
                        <span className="metric-label">Time Saved</span>
                        <span className="metric-value">{project.metrics.timeSaved || project.metrics.performanceImprovement}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="project-tech">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Project Meta */}
                <div className="project-meta">
                  <span><i className="fas fa-calendar"></i> {project.duration}</span>
                  <span><i className="fas fa-users"></i> {project.teamSize}</span>
                  <span><i className="fas fa-user-tie"></i> {project.role}</span>
                </div>

                {/* Challenge & Solution */}
                {project.isFeatured && (
                  <div className="project-challenge">
                    <div className="challenge-item">
                      <i className="fas fa-exclamation-triangle"></i>
                      <div>
                        <strong>Challenge:</strong> {project.challenge}
                      </div>
                    </div>
                    <div className="solution-item">
                      <i className="fas fa-lightbulb"></i>
                      <div>
                        <strong>Solution:</strong> {project.solution}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="project-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => onViewTestPlan(project.id)}
                  >
                    <i className="fas fa-file-alt"></i>
                    View Case Study
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => onViewTestPlan(project.id)}
                  >
                    <i className="fas fa-vial"></i>
                    Test Plan Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>Interested in Collaboration?</h3>
          <p>Let's discuss how I can bring quality engineering excellence to your projects</p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
