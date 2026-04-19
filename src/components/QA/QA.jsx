const qaProjects = [
  {
    id: 'his',
    title: 'Hospital Information System (HIS)',
    description: 'Enterprise healthcare platform — high availability, high security, complex workflows.',
  },
  {
    id: 'lms',
    title: 'Learning Management System (LMS)',
    description: 'EdTech platform with live classes, assessments, and mobile apps.',
  },
  {
    id: 'ieims',
    title: 'Integrated Education Information Management System (IEIMS)',
    description: 'Secure, large-scale government education platform designed for nationwide academic data management and reporting.',
  },
];

export default function QA({ onViewTestPlan }) {
  return (
    <section id="qa" className="section qa">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">QA Hub</span>
          <h2 className="section-title">Project Test Plans & QA Artifacts</h2>
          <p className="section-subtitle">
            Concise SQA overview, downloadable test plans, and links to artifacts for each featured project.
          </p>
        </div>

        <div className="qa-grid">
          {qaProjects.map(project => (
            <div key={project.id} className="qa-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="qa-actions">
                <button
                  className="btn btn-outline view-testplan"
                  onClick={() => onViewTestPlan(project.id)}
                  aria-controls={`modal-${project.id}`}
                >
                  Open Test Plan
                </button>
                <a
                  href={`/test-plans/${project.id}-test-plan.md`}
                  className="btn btn-secondary"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
