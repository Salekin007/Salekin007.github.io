import { useState } from 'react';

const testingSkills = [
  { name: 'Manual Testing', percent: 95 },
  { name: 'API Testing', percent: 92 },
  { name: 'Performance Testing', percent: 88 },
  { name: 'Security Testing', percent: 75 },
  { name: 'Mobile Testing', percent: 85 },
  { name: 'Usability Testing', percent: 80 },
];

const automationSkills = [
  { name: 'Python', percent: 90 },
  { name: 'Playwright', percent: 92 },
  { name: 'JavaScript', percent: 70 },
  { name: 'SQL', percent: 80 },
  { name: 'Git', percent: 88 },
  { name: 'CI/CD', percent: 85 },
];

const tools = [
  { icon: 'fab fa-python', name: 'Python', description: 'Playwright Automation' },
  { icon: 'fas fa-bug', name: 'Postman', description: 'API Testing' },
  { icon: 'fas fa-bolt', name: 'JMeter', description: 'Performance Testing' },
  { icon: 'fas fa-fire', name: 'k6', description: 'Load Testing' },
  { icon: 'fab fa-jira', name: 'JIRA', description: 'Test Management' },
  { icon: 'fab fa-github', name: 'GitHub', description: 'Version Control' },
  { icon: 'fas fa-code-branch', name: 'Jenkins', description: 'CI/CD Pipeline' },
  { icon: 'fas fa-database', name: 'MySQL', description: 'Data Validation' },
  { icon: 'fab fa-linux', name: 'Linux', description: 'Command Line' },
  { icon: 'fab fa-docker', name: 'Docker', description: 'Container Testing' },
  { icon: 'fas fa-cloud', name: 'AWS', description: 'Cloud Testing' },
  { icon: 'fas fa-code', name: 'VS Code', description: 'IDE' },
];

const methodologies = [
  'Agile / Scrum',
  'Shift-Left Testing',
  'Risk-Based Testing',
  'Exploratory Testing',
  'Regression Testing',
  'UAT Support',
  'Smoke & Sanity',
  'Test-Driven Development',
  'Behavior-Driven Development',
  'Continuous Integration',
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('testing');

  const tabs = [
    { id: 'testing', label: 'Testing' },
    { id: 'automation', label: 'Automation' },
    { id: 'tools', label: 'Tools' },
    { id: 'methodologies', label: 'Methodologies' },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Comprehensive technical expertise across the quality engineering stack
          </p>
        </div>

        <div className="skills-tabs">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {activeTab === 'testing' && (
              <div className="tab-content active" id="testing">
                <div className="skills-grid">
                  {testingSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'automation' && (
              <div className="tab-content active" id="automation">
                <div className="skills-grid">
                  {automationSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="tab-content active" id="tools">
                <div className="tools-grid">
                  {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                      <div className="tool-icon">
                        <i className={tool.icon}></i>
                      </div>
                      <h4>{tool.name}</h4>
                      <p>{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'methodologies' && (
              <div className="tab-content active" id="methodologies">
                <div className="methodologies-grid">
                  {methodologies.map((method, index) => (
                    <div key={index} className="methodology-card">
                      <i className="fas fa-check-circle"></i>
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
