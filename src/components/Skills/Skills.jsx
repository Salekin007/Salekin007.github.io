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
  { name: 'TypeScript', percent: 90 },
  { name: 'Playwright', percent: 92 },
  { name: 'JavaScript', percent: 75 },
  { name: 'Python', percent: 85 },
  { name: 'SQL', percent: 80 },
  { name: 'CI/CD', percent: 88 },
];

const tools = [
  {
    icon: 'fab fa-js',
    name: 'TypeScript',
    shortDesc: 'Playwright Automation',
    description: 'Primary language for building robust, type-safe test automation frameworks using Playwright. Expert in TypeScript for writing scalable, maintainable test suites.',
    example: 'Built a complete Playwright automation framework from scratch using TypeScript, implementing Page Object Model, custom reporters, and integration with CI/CD pipelines.',
    details: ['Type-Safe Test Code', 'Interface Design', 'Async/Await Patterns', 'Custom Hooks', 'Type Definitions'],
    realWorld: 'For an enterprise e-commerce platform, wrote 500+ TypeScript test cases covering user flows from product search to payment processing, achieving 85% code coverage and catching 50+ bugs before production.'
  },
  {
    icon: 'fas fa-brain',
    name: 'Claude AI',
    shortDesc: 'AI-Powered Testing',
    description: 'Leveraging Claude AI for intelligent test case generation, code review, test optimization, and automated bug detection. Expert in AI-assisted quality engineering practices.',
    example: 'Used Claude AI to generate comprehensive test scenarios for a complex authentication system, then had AI review my test code for potential improvements and edge cases I had missed.',
    details: ['AI Test Generation', 'Code Review Assistant', 'Test Optimization', 'Edge Case Detection', 'Documentation'],
    realWorld: 'For an API testing project with 50+ endpoints, used Claude AI to generate Postman test scripts, analyze response patterns, and identify edge cases like rate limiting and concurrent handling that weren\'t documented.'
  },
  {
    icon: 'fab fa-python',
    name: 'Python',
    shortDesc: 'Scripting & Tools',
    description: 'Proficient in Python for writing custom automation scripts, test data generation, utility tools, and backend testing. Experience with Python testing frameworks and automation utilities.',
    example: 'Created Python scripts to automate test data generation for a Learning Management System, generating 10,000+ realistic student records for load testing in seconds.',
    details: ['Script Automation', 'Data Generation', 'Utility Scripts', 'API Integration', 'Testing Tools'],
    realWorld: 'Built a custom Python tool to automate database seeding for a healthcare application, populating patient data while maintaining HIPAA compliance and data privacy requirements.'
  },
  {
    icon: 'fas fa-bug',
    name: 'Postman',
    shortDesc: 'API Testing',
    description: 'Expert in API testing using Postman for manual and automated API validation. Proficient in creating collections, environments, tests, and documentation for REST APIs.',
    example: 'Created comprehensive Postman collections for a hospital information system with 200+ API endpoints, including automated tests, pre-request scripts, and environment configurations.',
    details: ['Collection Management', 'Automated Tests', 'Environment Variables', 'Documentation', ' Newman CLI'],
    realWorld: 'For an e-commerce platform, set up Postman monitors to run API tests every 15 minutes, catching 3 critical integration issues before they affected users and reducing downtime by 90%.'
  },
  {
    icon: 'fas fa-bolt',
    name: 'JMeter',
    shortDesc: 'Performance Testing',
    description: 'Skilled in using Apache JMeter for performance and load testing. Experience creating test plans for various scenarios and analyzing performance bottlenecks.',
    example: 'Designed and executed JMeter load tests for an education platform, simulating 10,000 concurrent users during exam season and identifying database optimization opportunities.',
    details: ['Test Plans', 'Thread Groups', 'Listeners', 'Assertions', 'Report Analysis'],
    realWorld: 'For a government education portal, used JMeter to test system capacity and discovered the application could handle 5,000 concurrent users but needed database optimization for higher loads.'
  },
  {
    icon: 'fas fa-fire',
    name: 'k6',
    shortDesc: 'Load Testing',
    description: 'Expert in using k6 for modern load testing as code. Creating performance test scripts in JavaScript for CI/CD integration and real-time monitoring.',
    example: 'Implemented k6 load tests in CI/CD pipeline for a healthcare application, running smoke tests on every deployment and comprehensive tests nightly.',
    details: ['Script Development', 'Thresholds', 'Metrics Collection', 'HTML Reports', 'CI Integration'],
    realWorld: 'Created modular k6 tests that could be combined for different scenarios - smoke test in 2 minutes, full regression in 30 minutes, and stress test pushing system to failure point.'
  },
  {
    icon: 'fab fa-jira',
    name: 'JIRA',
    shortDesc: 'Test Management',
    description: 'Proficient in JIRA for test case management, defect tracking, sprint planning, and Agile testing workflows. Experience with JIRA X and integration with testing tools.',
    example: 'Implemented JIRA workflows for QA team including test case creation, bug reporting, and sprint retrospectives, improving team productivity by 40%.',
    details: ['Test Management', 'Bug Tracking', 'Workflow Automation', 'Reporting', 'Integration'],
    realWorld: 'For a healthcare project, created custom JIRA dashboards showing test coverage, defect trends, and sprint progress, providing real-time quality metrics to stakeholders.'
  },
  {
    icon: 'fab fa-github',
    name: 'GitHub',
    shortDesc: 'Version Control',
    description: 'Expert in Git/GitHub for version control, code collaboration, and CI/CD integration. Managing branches, pull requests, and code reviews for test automation projects.',
    example: 'Set up GitHub Actions workflows to run Playwright tests on every pull request, providing immediate feedback to developers and maintaining code quality standards.',
    details: ['Git Workflows', 'Pull Requests', 'Actions CI/CD', 'Issue Tracking', 'Code Review'],
    realWorld: 'Implemented branch protection rules and required status checks for test automation repository, ensuring all tests pass before code can be merged to main branch.'
  },
  {
    icon: 'fas fa-code-branch',
    name: 'Jenkins',
    shortDesc: 'CI/CD Pipeline',
    description: 'Skilled in Jenkins for continuous integration and deployment. Creating and maintaining pipelines for automated testing, code quality checks, and deployment automation.',
    example: 'Built Jenkins pipeline with multiple stages including build, test, deploy, and notify, running 200+ Playwright tests and providing detailed reports.',
    details: ['Pipeline Configuration', 'Freestyle Jobs', 'Pipeline as Code', 'Plugins', 'Notification Systems'],
    realWorld: 'Configured Jenkins to run smoke tests on every commit (5 minutes), full regression on pull requests (15 minutes), and comprehensive nightly tests, providing fast feedback while ensuring thorough testing.'
  },
  {
    icon: 'fas fa-database',
    name: 'MySQL',
    shortDesc: 'Data Validation',
    description: 'Proficient in SQL and MySQL for database testing, data validation, and test data management. Writing complex queries to verify data integrity and generate test reports.',
    example: 'Created SQL queries to validate data integrity in a Learning Management System, checking enrollment counts, grade calculations, and audit trail accuracy.',
    details: ['SQL Queries', 'Data Verification', 'Test Data Management', 'Database Inspection', 'Report Generation'],
    realWorld: 'For a hospital system, wrote SQL validation scripts to verify that patient records were correctly linked across multiple tables, ensuring referential integrity and data accuracy.'
  },
  {
    icon: 'fab fa-linux',
    name: 'Linux',
    shortDesc: 'Command Line',
    description: 'Experienced in Linux command line for test environment setup, server administration, and automation. Proficient in shell scripting for task automation.',
    example: 'Set up complete test environments on Linux servers, including installing dependencies, configuring databases, and deploying applications for end-to-end testing.',
    details: ['Command Line', 'Shell Scripting', 'Server Administration', 'Environment Setup', 'Process Management'],
    realWorld: 'Created bash scripts to automate daily database backups, test environment resets, and log file cleanup, reducing manual maintenance time by 80% in testing environments.'
  },
  {
    icon: 'fab fa-docker',
    name: 'Docker',
    shortDesc: 'Container Testing',
    description: 'Skilled in Docker for container-based testing, creating reproducible test environments, and testing containerized applications. Experience with Docker Compose for multi-service testing.',
    example: 'Used Docker to create isolated test environments for microservices architecture, allowing parallel testing without environment conflicts and improving test reliability.',
    details: ['Docker Images', 'Docker Compose', 'Container Networking', 'Volume Management', 'Multi-Service Testing'],
    realWorld: 'Built Docker Compose setup for testing a web application with frontend, backend, and database containers, enabling end-to-end testing in realistic containerized environment.'
  },
];

const methodologies = [
  {
    name: 'Agile / Scrum',
    icon: 'fa-users',
    description: 'Working within Agile methodologies and Scrum frameworks to deliver quality software through iterative development, sprint planning, and continuous collaboration with cross-functional teams.',
    example: 'In a 2-week sprint for an e-commerce checkout feature, I participate in sprint planning to define testable user stories, attend daily standups to report testing progress, and collaborate with developers to ensure quality is built into each story before moving to the next.',
    details: ['Sprint Planning', 'Daily Standups', 'Sprint Reviews', 'Retrospectives', 'Backlog Management'],
    realWorldExample: 'For a hospital information system, I worked with the product owner to break down complex patient management features into sprint-ready user stories, ensuring each had clear acceptance criteria that could be tested and verified within the sprint cycle.'
  },
  {
    name: 'AI-Assisted Testing',
    icon: 'fa-brain',
    description: 'Leveraging Claude AI and other AI tools to generate test cases, review code, optimize test coverage, and detect edge cases that might be missed in traditional testing approaches.',
    example: 'Using Claude AI, I generated comprehensive test scenarios for a user authentication flow by analyzing the requirements, then used AI to review my Playwright test code for potential improvements and edge cases I might have missed.',
    details: ['Test Generation', 'Code Review AI', 'Smart Test Selection', 'Anomaly Detection', 'Coverage Optimization'],
    realWorldExample: 'For an API testing project, I used Claude AI to generate Postman test scripts for 50+ endpoints, then asked AI to analyze the response patterns and identify potential edge cases like null handling, rate limiting scenarios, and concurrent request behaviors that weren\'t in the original documentation.'
  },
  {
    name: 'Shift-Left Testing',
    icon: 'fa-arrow-left',
    description: 'Implementing testing early in the development cycle to catch defects when they are cheaper to fix, integrating QA activities from requirements through design and coding phases.',
    example: 'During requirements review for a payment gateway feature, I identified missing error scenarios and worked with the BA to add them to the requirements before development started, preventing 15+ defects that would have been expensive to fix later.',
    details: ['Early Test Design', 'Requirement Review', 'Unit Test Support', 'TDD Practice', 'Preventive QA'],
    realWorldExample: 'For a Learning Management System, I reviewed the database schema design before implementation and identified potential performance issues with the quiz results table structure, suggesting optimizations that improved query performance by 60% before any code was written.'
  },
  {
    name: 'Risk-Based Testing',
    icon: 'fa-exclamation-triangle',
    description: 'Prioritizing testing efforts based on risk assessment, focusing on high-risk areas and critical business functions to optimize testing resources and maximize quality outcomes.',
    example: 'For a banking application, I created a risk matrix prioritizing payment processing (high risk), account management (medium risk), and profile settings (low risk), focusing 70% of testing effort on the 20% of functionality that handles financial transactions.',
    details: ['Risk Assessment', 'Priority Matrix', 'Impact Analysis', 'Mitigation Planning', 'Resource Optimization'],
    realWorldExample: 'During an education platform launch, I identified the exam submission feature as highest risk (affects grades, time-sensitive, high user volume) and prioritized comprehensive load testing, while deferring nice-to-have features like profile customization to lower risk testing cycles.'
  },
  {
    name: 'Exploratory Testing',
    icon: 'fa-compass',
    description: 'Ad-hoc testing approach where testers explore the application without predefined test cases, using creativity and domain knowledge to discover defects that scripted tests might miss.',
    example: 'During testing of a healthcare appointment booking system, I discovered a critical bug where selecting overlapping time slots would double-book appointments - this wasn\'t covered by scripted tests but found through exploratory testing mimicking real user behavior.',
    details: ['Session-Based Testing', 'Charter Creation', 'Mind Mapping', 'Heuristic Evaluation', 'Bug Hunting'],
    realWorldExample: 'For a telemedicine app, I conducted exploratory testing simulating poor network conditions and discovered that video calls would fail silently without notifying users, leading to improved error handling that increased successful connections by 40%.'
  },
  {
    name: 'Regression Testing',
    icon: 'fa-sync-alt',
    description: 'Systematic testing of existing functionality to ensure that recent changes have not adversely affected previously working features, using both automated and manual approaches.',
    example: 'After implementing a new discount coupon feature in an e-commerce site, I ran the full regression suite and discovered that the new coupon validation logic was inadvertently affecting the existing gift card functionality, which we caught and fixed before production release.',
    details: ['Automated Regression', 'Smoke Testing', 'Build Verification', 'Feature Validation', 'Stability Testing'],
    realWorldExample: 'For a hospital information system with 500+ test cases, I implemented a smoke test suite covering the 50 most critical user flows (patient registration, appointment booking, prescription management) that runs on every build, providing rapid feedback in under 5 minutes.'
  },
  {
    name: 'UAT Support',
    icon: 'fa-user-check',
    description: 'Supporting User Acceptance Testing by coordinating with stakeholders, preparing test scenarios, and facilitating smooth UAT processes to ensure business requirements are met.',
    example: 'For a government education portal, I coordinated UAT with 50+ users across 5 departments, creating user-specific test scenarios, conducting training sessions, and collecting feedback that resulted in 20 UI/UX improvements before the final launch.',
    details: ['UAT Planning', 'Test Scenario Design', 'Stakeholder Coordination', 'Sign-off Support', 'Feedback Collection'],
    realWorldExample: 'During UAT for a healthcare platform, I created video tutorials and step-by-step guides for elderly users, set up a dedicated support channel, and facilitated feedback sessions that helped identify accessibility issues we hadn\'t considered, leading to WCAG 2.1 AA compliance.'
  },
  {
    name: 'Smoke & Sanity',
    icon: 'fa-cloud',
    description: 'Quick validation testing to ensure critical functionality works before proceeding with detailed testing, saving time and resources by identifying major issues early.',
    example: 'When a new build of the Learning Management System was deployed, I ran a quick smoke test verifying that users could log in, view courses, and play videos - when the video player failed immediately, we rejected the build within 10 minutes instead of wasting 2 hours of full testing.',
    details: ['Build Verification', 'Critical Path Testing', 'Quick Health Check', 'Core Feature Validation', 'Early Rejection'],
    realWorldExample: 'For an e-commerce site during Black Friday preparation, I created a 5-minute smoke test covering: homepage load, product search, add to cart, checkout, and payment gateway - this allowed us to validate the system could handle the expected traffic surge before running expensive load tests.'
  },
  {
    name: 'Test-Driven Development',
    icon: 'fa-code',
    description: 'Development approach where tests are written before code, promoting better design, testability, and confidence in code changes through continuous test validation.',
    example: 'While developing a Playwright test framework helper library, I wrote tests first for the retry mechanism, then implemented the feature, ensuring it worked correctly from the start and had built-in documentation of expected behavior.',
    details: ['Test First Approach', 'Red-Green-Refactor', 'Unit Test Design', 'Continuous Validation', 'Code Confidence'],
    realWorldExample: 'For a custom API testing utility, I wrote failing tests for edge cases (timeout handling, retry logic, error parsing) before implementing any code - this prevented 8 potential bugs and made the code more maintainable since each function had clear test documentation.'
  },
  {
    name: 'Behavior-Driven Development',
    icon: 'fa-file-alt',
    description: 'Collaborative approach using Gherkin syntax to define behavior in plain language, bridging the gap between technical and business teams through shared understanding.',
    example: 'Using Gherkin syntax, I created scenarios for the appointment booking feature: "Given a patient is logged in, when they book an appointment with a specialist, then the appointment should be confirmed and an email notification sent" - this made requirements clear to both developers and business stakeholders.',
    details: ['Gherkin Syntax', 'Scenario Definition', 'Collaborative Examples', 'Living Documentation', 'Business Alignment'],
    realWorldExample: 'For an education platform assignment submission feature, I worked with business analysts to define BDD scenarios that became both test cases and living documentation, helping new team members understand the expected behavior without needing additional documentation.'
  },
  {
    name: 'Continuous Integration',
    icon: 'fa-infinity',
    description: 'Integrating automated tests into CI/CD pipelines to provide immediate feedback on code quality, enabling rapid iterations while maintaining high quality standards.',
    example: 'I set up a Jenkins pipeline that runs 200+ Playwright tests on every pull request, providing developers with feedback within 15 minutes - this caught 43 potential issues in pull requests before they were merged, maintaining code quality while enabling fast development.',
    details: ['Pipeline Integration', 'Automated Triggers', 'Test Reporting', 'Fast Feedback', 'Quality Gates'],
    realWorldExample: 'For a healthcare application, I configured GitHub Actions to run critical smoke tests on every commit, full regression on pull requests, and comprehensive tests nightly - this tiered approach provided quick feedback for developers while ensuring thorough testing before production deployment.'
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('testing');
  const [selectedMethodology, setSelectedMethodology] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);

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
            Comprehensive technical expertise across the quality engineering stack, including AI-assisted testing
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
                    <div
                      key={index}
                      className={`tool-card ${tool.name === 'Claude AI' ? 'claude-card' : ''}`}
                      onClick={() => setSelectedTool(tool)}
                    >
                      <div className="tool-icon">
                        <i className={tool.icon}></i>
                      </div>
                      <h4>{tool.name}</h4>
                      <p>{tool.shortDesc}</p>
                      <i className="fas fa-chevron-right tool-arrow"></i>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'methodologies' && (
              <div className="tab-content active" id="methodologies">
                <div className="methodologies-grid">
                  {methodologies.map((method, index) => (
                    <div
                      key={index}
                      className={`methodology-card ${method.name.includes('AI') ? 'ai-methodology' : ''}`}
                      onClick={() => setSelectedMethodology(method)}
                    >
                      <i className={`fas ${method.icon}`}></i>
                      <span>{method.name}</span>
                      <i className="fas fa-chevron-right methodology-arrow"></i>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Methodology Popup Modal */}
      {selectedMethodology && (
        <div
          className="methodology-modal-overlay"
          onClick={() => setSelectedMethodology(null)}
        >
          <div
            className="methodology-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMethodology(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <i className={`fas ${selectedMethodology.icon}`}></i>
              </div>
              <h3>{selectedMethodology.name}</h3>
            </div>

            <div className="modal-content">
              <div className="modal-example">
                <h4>
                  <i className="fas fa-lightbulb"></i>
                  How I Apply This
                </h4>
                <p>{selectedMethodology.example}</p>
              </div>

              <div className="modal-description">{selectedMethodology.description}</div>

              <div className="modal-details">
                <h4>Key Practices</h4>
                <ul>
                  {selectedMethodology.details.map((detail, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-real-world">
                <h4>
                  <i className="fas fa-globe"></i>
                  Real-World Example
                </h4>
                <p>{selectedMethodology.realWorldExample}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool Popup Modal */}
      {selectedTool && (
        <div
          className="methodology-modal-overlay"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="methodology-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTool(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="modal-icon tool-modal-icon">
                <i className={selectedTool.icon}></i>
              </div>
              <h3>{selectedTool.name}</h3>
            </div>

            <div className="modal-content">
              <div className="modal-example">
                <h4>
                  <i className="fas fa-lightbulb"></i>
                  How I Use This
                </h4>
                <p>{selectedTool.example}</p>
              </div>

              <div className="modal-description modal-tool-desc">
                <p>{selectedTool.description}</p>
              </div>

              <div className="modal-details">
                <h4>Key Skills</h4>
                <ul>
                  {selectedTool.details.map((detail, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-real-world">
                <h4>
                  <i className="fas fa-globe"></i>
                  Real-World Application
                </h4>
                <p>{selectedTool.realWorld}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
