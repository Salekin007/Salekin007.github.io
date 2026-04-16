export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>SS</span>
            </div>
            <h3>Md. Sirajus Salekin</h3>
            <p>SQA Engineer | Quality Engineering Leader</p>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/Salekin007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/salekin007/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:salekinsirajus0@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Md. Sirajus Salekin. All rights reserved.</p>
          <p>Built with passion for quality excellence</p>
        </div>
      </div>
    </footer>
  );
}
