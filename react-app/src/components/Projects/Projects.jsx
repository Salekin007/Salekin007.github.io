const projects = [
  {
    id: 'his',
    type: 'Enterprise Healthcare Platform',
    title: 'Hospital Information System (HIS)',
    description: 'Comprehensive hospital management system covering OPD, IPD, Billing, EMR, LIS, and Pharmacy modules serving 50,000+ patients daily.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: 'fa-hospital',
    isFeatured: true,
    hasTestPlan: true,
  },
  {
    id: 'lms',
    type: 'EdTech Platform',
    title: 'Learning Management System (LMS)',
    description: 'Online learning platform featuring virtual classrooms, real-time assessments, progress tracking, and certification management.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: 'fa-graduation-cap',
    hasTestPlan: true,
  },
  {
    id: 'ieims',
    type: 'Government Platform | Nationwide Deployment',
    title: 'Integrated Education Information Management System (IEIMS)',
    description: 'Nationwide government education platform supporting academic operations, institutional reporting, user management, and data-driven decision-making.',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: 'fa-chalkboard-user',
    isFeatured: true,
    hasTestPlan: true,
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
            Showcasing impact-driven quality engineering initiatives
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.isFeatured ? 'featured' : ''}`}>
              <div className="project-header">
                <div className="project-image" style={{ background: project.gradient }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
                {project.isFeatured && (
                  <div className="project-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                )}
                {project.hasTestPlan && (
                  <span className="test-badge" title="Test plan available">
                    Test Plan
                  </span>
                )}
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <button
                    className="btn btn-outline view-testplan"
                    onClick={() => onViewTestPlan(project.id)}
                    aria-controls={`modal-${project.id}`}
                    aria-expanded="false"
                  >
                    View Test Plan
                  </button>
                  <a
                    href={`/test-plans/${project.id}-test-plan.md`}
                    className="btn btn-secondary"
                    download
                  >
                    Download Test Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
