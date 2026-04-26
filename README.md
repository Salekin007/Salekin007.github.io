# Md. Sirajus Salekin - Portfolio Website

A modern, responsive multi-page portfolio website built with React 19 and Vite, showcasing professional work and skills as an Automation Architect and Quality Engineering Lead.

## 🌟 Live Demo

**[https://salekin007.github.io](https://salekin007.github.io)**

## ✨ Features

- **Multi-Page Architecture** - Clean routing with React Router for better SEO and UX
- **Fully Responsive** - Optimized for all devices (Desktop, MacBook Air M1, Tablet, Mobile)
- **Dark/Light Mode** - Theme toggle with persistent preference
- **Smooth Animations** - Scroll animations, parallax effects, and transitions
- **Interactive Components** - Modals, cards, hover effects, and dynamic content
- **Performance Optimized** - Built with Vite for lightning-fast development and production builds
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation support
- **SEO Friendly** - Multi-page structure for better search engine indexing
- **Visitor Analytics** - Integrated visitor count tracking

## 🚀 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Frontend** | React | 19.2.4 |
| **Routing** | React Router DOM | 7.14.1 |
| **Build Tool** | Vite | 8.0.4 |
| **Language** | JavaScript | ES6+ |
| **Styling** | CSS3 | Custom |
| **Icons** | Font Awesome | 6.5.1 |
| **Fonts** | Inter | Google Fonts |
| **Testing** | Playwright | 1.38.0 |

## 📦 Installation

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Salekin007/Salekin007.github.io.git
   cd Salekin007.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run test` | Run Playwright end-to-end tests |
| `npm run test:headed` | Run tests in headed mode |
| `npm run test:report` | View test reports |

## 📁 Project Structure

```
Salekin007.github.io/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── profile.jpg
│   └── test-plans/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── style.css          # Global styles (5000+ lines)
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Layout.jsx         # Main layout wrapper
│   │   ├── Header/
│   │   │   └── Header.jsx         # Navigation header
│   │   ├── Footer/
│   │   │   └── Footer.jsx         # Site footer
│   │   ├── Hero/
│   │   │   └── Hero.jsx           # Landing section
│   │   ├── About/
│   │   │   └── About.jsx          # About me section
│   │   ├── Impact/
│   │   │   └── Impact.jsx         # Impact metrics
│   │   ├── Expertise/
│   │   │   └── Expertise.jsx      # Technical expertise
│   │   ├── Projects/
│   │   │   └── Projects.jsx       # Project portfolio
│   │   ├── QA/
│   │   │   └── QA.jsx             # QA services
│   │   ├── Skills/
│   │   │   └── Skills.jsx         # Skills showcase
│   │   ├── Experience/
│   │   │   └── Experience.jsx     # Work history
│   │   ├── LiveProof/
│   │   │   └── LiveProof.jsx      # Live demos section
│   │   ├── Certifications/
│   │   │   └── Certifications.jsx # Certifications
│   │   ├── Contact/
│   │   │   └── Contact.jsx        # Contact form
│   │   ├── Modals/
│   │   │   └── Modals.jsx         # Modal dialogs
│   │   └── Loading/
│   │       └── Loading.jsx        # Loading screen
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Impact/
│   │   ├── Expertise/
│   │   ├── Projects/
│   │   ├── QA/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── LiveProof/
│   │   ├── Certifications/
│   │   └── Contact/               # Page components
│   ├── hooks/
│   │   └── useScrollAnimations.js # Custom animation hooks
│   ├── utils/
│   │   └── inspectionProtection.js # Security utilities
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🎨 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with introduction |
| `/about` | About | Professional background and philosophy |
| `/impact` | Impact | Key metrics and achievements |
| `/expertise` | Expertise | Technical capabilities |
| `/projects` | Projects | Featured case studies |
| `/qa` | QA | Quality assurance services |
| `/skills` | Skills | Technical skills overview |
| `/experience` | Experience | Work history timeline |
| `/live-proof` | Live Proof | Test reports and dashboards |
| `/certifications` | Certifications | Professional certifications |
| `/contact` | Contact | Contact information and form |

## 🌐 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages via GitHub Actions.

**Manual deployment:**
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
gh-pages -d dist
```

### Environment Variables

No environment variables required for basic functionality.

### Build Configuration

The `vite.config.js` is configured for optimal production builds:

- Code splitting
- Tree shaking
- Asset optimization
- CSS minification
- Source maps (dev mode)

## 🧪 Testing

End-to-end tests are written with Playwright:

```bash
# Run all tests
npm run test

# Run tests in headed mode
npm run test:headed

# View test report
npm run test:report
```

## 📱 Responsive Breakpoints

| Device | Screen Width | Layout |
|--------|--------------|--------|
| Extra Large Desktop | 1600px+ | Full navigation |
| Large Desktop | 1400-1599px | Hidden: Impact, Live Proof |
| Medium Desktop (MacBook Air) | 1200-1399px | Hamburger menu |
| Tablet | 1024-1199px | Mobile menu |
| Mobile | <1024px | Full mobile experience |

## 🔧 Customization

### Update Profile Information

1. **Personal Info**: Edit `/src/components/Header/Header.jsx` and `/src/components/Footer/Footer.jsx`
2. **Hero Section**: Modify `/src/components/Hero/Hero.jsx`
3. **Contact Info**: Update `/src/pages/Contact/Contact.jsx`

### Add New Projects

Edit `/src/components/Projects/Projects.jsx` and add new project objects to the `projects` array.

### Change Theme Colors

Update CSS variables in `/src/assets/styles/style.css`:

```css
:root {
  --primary: #7b42bc;
  --primary-dark: #5a2e8a;
  --primary-light: #9b5cd6;
  /* ... other variables */
}
```

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: <1s
- **Time to Interactive**: <2s
- **Build Size**: <500KB (gzipped)

## 📄 License

© 2026 Md. Sirajus Salekin. All rights reserved.

## 👨‍💻 Author

**Md. Sirajus Salekin**
- **Email**: salekinsirajus0@gmail.com
- **LinkedIn**: [linkedin.com/in/salekin007](https://www.linkedin.com/in/salekin007/)
- **GitHub**: [github.com/Salekin007](https://github.com/Salekin007)
- **Location**: Dhaka, Bangladesh

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Font Awesome** - For beautiful icons
- **HashiCorp** - Design system inspiration

---

**Made with ❤️ and ☕ by Md. Sirajus Salekin**
