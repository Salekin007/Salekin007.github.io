const experiences = [
  {
    id: 1,
    date: '2021 - Present',
    title: 'Senior SQA Engineer',
    company: 'Ethics Advanced Technology Ltd (EATL)',
    location: 'Dhaka, Bangladesh',
    summary: 'Leading QA initiatives for enterprise systems, managing a team of QA engineers, and driving quality excellence across products.',
    isCurrent: true,
    highlights: [
      { icon: 'fa-users', text: 'Leading team of 15 QA engineers' },
      { icon: 'fa-chart-line', text: 'Achieved 70% automation coverage' },
      { icon: 'fa-bug', text: 'Reduced production defects by 40%' },
    ],
    responsibilities: [
      'Designed and implemented comprehensive test automation framework using Playwright with Python, achieving 70% test coverage across critical business flows',
      'Lead and mentored a team of 15 QA engineers, establishing best practices, conducting code reviews, and fostering continuous learning culture',
      'Architected and executed API testing strategy using Postman, validating 200+ REST endpoints with automated test suites and integrating into CI/CD pipeline',
      'Performed performance testing using JMeter and k6, identifying critical bottlenecks and helping achieve 10x improvement in system capacity',
      'Collaborated with development teams to implement shift-left testing practices, reducing defect leakage and improving time-to-market by 40%',
      'Established QA metrics and dashboards, providing visibility into quality metrics and enabling data-driven decision making',
      'Created comprehensive test plans, test strategies, and quality reports for executive stakeholders',
    ],
    achievements: [
      'QA Team of the Year 2024',
      '70% Automation Coverage',
      '40% Defect Reduction',
      '200+ APIs Automated',
      '10x Performance Improvement',
    ],
  },
  {
    id: 2,
    date: '2019 - 2020',
    title: 'SQA Engineer',
    company: 'One Information & Communications Technology Ltd.',
    location: 'Dhaka, Bangladesh',
    summary: 'Responsible for manual and automation testing for web and mobile applications, ensuring high-quality deliverables.',
    isCurrent: false,
    responsibilities: [
      'Executed comprehensive manual testing for web and mobile applications across multiple releases',
      'Developed and maintained automated test scripts using Playwright with Python',
      'Performed functional, regression, and exploratory testing with detailed defect reporting',
      'Collaborated with developers in Agile ceremonies, contributing to sprint planning and retrospectives',
      'Created and maintained test documentation including test plans, test cases, and test reports',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A track record of delivering quality excellence across organizations
          </p>
        </div>

        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className={`timeline-item ${exp.isCurrent ? 'current' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                  </span>
                </div>
                <p className="job-summary">{exp.summary}</p>

                {exp.highlights && (
                  <div className="job-highlights">
                    {exp.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <i className={`fas ${highlight.icon}`}></i>
                        <span>{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="job-responsibilities">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>

                {exp.achievements && (
                  <div className="job-achievements">
                    <h4>Key Achievements</h4>
                    <div className="achievement-tags">
                      {exp.achievements.map((achievement, index) => (
                        <span key={index} className="tag">
                          <i className="fas fa-trophy"></i> {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
