const liveProofs = [
  {
    id: 'allure',
    title: 'Allure Test Reports',
    description: 'Comprehensive test execution reports with detailed analytics, screenshots, and historical trends',
    icon: 'fa-chart-bar',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    status: 'live',
    badges: ['Automation', 'Analytics', 'CI/CD'],
    features: [
      'Detailed test execution history',
      'Screenshot attachments for failures',
      'Trend analysis over time',
      'Environment comparison'
    ],
    ctaText: 'View Sample Report',
    placeholder: true
  },
  {
    id: 'k6',
    title: 'k6 Performance Dashboard',
    description: 'Real-time load testing metrics and performance analysis for 1000+ concurrent user scenarios',
    icon: 'fa-tachometer-alt',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    status: 'live',
    badges: ['Performance', 'Load Testing', 'Metrics'],
    features: [
      'Virtual user simulation',
      'Response time analysis',
      'Throughput monitoring',
      'Bottleneck identification'
    ],
    ctaText: 'View Dashboard',
    placeholder: true
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipeline',
    description: 'Automated quality gates integrated into deployment pipeline with 95%+ success rate',
    icon: 'fa-infinity',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    status: 'live',
    badges: ['GitHub Actions', 'Automation', 'DevOps'],
    features: [
      'Automated test execution',
      'Parallel test distribution',
      'Slack/Email notifications',
      'Deployment quality gates'
    ],
    ctaText: 'View Pipeline',
    placeholder: true
  },
  {
    id: 'coverage',
    title: 'Test Coverage Reports',
    description: 'Code coverage analysis ensuring comprehensive test coverage across all critical paths',
    icon: 'fa-code-branch',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    status: 'updated',
    badges: ['Coverage', 'Quality Metrics', 'Reports'],
    features: [
      'Branch coverage analysis',
      'Line coverage tracking',
      'Trend monitoring',
      'Risk assessment'
    ],
    ctaText: 'View Coverage',
    placeholder: true
  }
];

const placeholderNote = {
  title: '📊 Live Proof Section',
  message: 'This section showcases real artifacts from my work. Update the placeholder links below with your actual report URLs, dashboard screenshots, and pipeline runs.',
  tip: 'Tip: Host Allure reports on GitHub Pages, k6 dashboards on Grafana Cloud, and share pipeline run links from your repositories.'
};

export default function LiveProof() {
  return (
    <section id="live-proof" className="section live-proof-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Live Proof</span>
          <h2 className="section-title">📊 Test Reports & Dashboards</h2>
          <p className="section-subtitle">
            Real artifacts demonstrating quality engineering in action
          </p>
        </div>

        {/* Admin Note - Remove in production */}
        <div className="admin-note">
          <div className="admin-note-content">
            <h3>{placeholderNote.title}</h3>
            <p>{placeholderNote.message}</p>
            <p className="admin-tip"><i className="fas fa-lightbulb"></i> {placeholderNote.tip}</p>
          </div>
        </div>

        {/* Live Proof Grid */}
        <div className="live-proof-grid">
          {liveProofs.map((proof) => (
            <div key={proof.id} className="live-proof-card">
              {/* Card Header */}
              <div className="proof-header" style={{ background: proof.gradient }}>
                <div className="proof-icon">
                  <i className={`fas ${proof.icon}`}></i>
                </div>
                <div className="proof-status">
                  <span className={`status-badge ${proof.status}`}>
                    <i className="fas fa-circle"></i>
                    {proof.status === 'live' ? 'Live' : 'Updated'}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="proof-content">
                <h3 className="proof-title">{proof.title}</h3>
                <p className="proof-description">{proof.description}</p>

                {/* Badges */}
                <div className="proof-badges">
                  {proof.badges.map((badge, index) => (
                    <span key={index} className="proof-badge">{badge}</span>
                  ))}
                </div>

                {/* Features */}
                <div className="proof-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {proof.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placeholder Notice */}
                {proof.placeholder && (
                  <div className="placeholder-notice">
                    <i className="fas fa-link"></i>
                    <span>Add your {proof.title.toLowerCase()} link here</span>
                  </div>
                )}

                {/* CTA Button */}
                <button className="btn btn-outline proof-cta" disabled={proof.placeholder}>
                  <i className="fas fa-external-link-alt"></i>
                  {proof.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="live-proof-cta">
          <p>
            Want to dive deeper into my testing approach and see more detailed reports?
          </p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Request Full Access
          </a>
        </div>
      </div>
    </section>
  );
}
