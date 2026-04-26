# Portfolio Website Design System

## Design Philosophy

This portfolio website is built on a **professional, modern design system** inspired by HashiCorp's enterprise-grade UI principles, adapted for a quality engineering professional's portfolio. The design emphasizes **credibility, technical expertise, and measurable impact** while maintaining excellent usability across all devices.

**Core Principles:**
- **Data-Driven**: Every design decision supports showcasing metrics, achievements, and technical capabilities
- **Professional Credibility**: Clean, enterprise-grade aesthetic that builds trust
- **Performance First**: Fast loading, smooth animations, optimal user experience
- **Accessibility**: WCAG AA compliant with semantic HTML and keyboard navigation
- **Responsive**: Seamless experience from mobile to ultra-wide displays

## 1. Visual Theme & Atmosphere

The design operates on a sophisticated dark/light theme system with a primary purple brand color (`#7b42bc`) that conveys technical expertise and creativity. The interface uses a clean, component-based architecture with generous whitespace, subtle animations, and purposeful color accents.

**Key Characteristics:**
- **HashiCorp-inspired purple** (`#7b42bc`) as primary brand color
- **Clean typography** using Inter font family with tight weight ranges (400-700)
- **Generous spacing** with 8px base unit for consistent rhythm
- **Subtle animations** that enhance, not distract from content
- **Card-based layouts** with three-layer shadow system
- **Gradient accents** for visual interest without overwhelming
- **Dark/Light mode** with persistent theme preference
- **Professional color palette** with semantic naming conventions

## 2. Color Palette & Roles

### Primary Brand Colors
```css
--primary: #7b42bc          /* Main brand purple - HashiCorp inspired */
--primary-dark: #5a2e8a     /* Darker purple for hover states */
--primary-light: #9b5cd6    /* Lighter purple for accents */
```

### Accent Colors
```css
--waypoint-cyan: #14c6cb    /* Secondary accent - technical/modern */
--vault-yellow: #ffcf25     /* Highlight color */
--consul-orange: #f7820e    /* Warning/alert accent */
--nomad-blue: #28bee7       /* Info accent */
--boundary-red: #ec2e48     /* Error/danger */
```

### Neutral Colors (Gray Scale)
```css
--white: #ffffff            /* Pure white */
--gray-50: #ffffff          /* Surface light */
--gray-100: #f1f2f4         /* Background light */
--gray-200: #e8e9eb         /* Border light */
--gray-300: #d5d7db         /* Border */
--gray-400: #b2b6bd         /* Text muted */
--gray-500: #858890         /* Text secondary */
--gray-600: #5e6169         /* Text secondary */
--gray-700: #3b3d45         /* Text primary */
--gray-800: #24262c         /* Surface dark */
--gray-900: #15181e         /* Background dark */
```

### Dark Mode Colors
```css
--surface-dark: #15181e     /* Dark background */
--surface-darker: #0d0e12   /* Darker background */
--text-dark: #efeff1        /* Dark text */
--text-dark-secondary: #d5d7db  /* Dark text secondary */
```

### Semantic Colors
```css
--success: #1cc29c          /* Packer teal - success */
--warning: #f7820e          /* Consul orange - warning */
--error: #ec2e48            /* Boundary red - error */
--info: #28bee7             /* Nomad blue - info */
```

## 3. Typography System

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Inter Font Characteristics:**
- Modern, geometric sans-serif
- Excellent readability at all sizes
- Supports 9 weights (100-900)
- Optimized for UI and screen display
- Professional, technical aesthetic

### Typography Scale

| Role | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| H1 | 3.5rem (56px) | 800-900 | 1.1 | Page titles, hero name |
| H2 | 2.5rem (40px) | 700-800 | 1.2 | Section headings |
| H3 | 2rem (32px) | 700 | 1.3 | Subsection headings |
| H4 | 1.5rem (24px) | 600 | 1.4 | Card titles |
| Body Large | 1.125rem (18px) | 500 | 1.5 | Emphasized content |
| Body | 1rem (16px) | 400-500 | 1.6 | Standard body text |
| Body Small | 0.875rem (14px) | 400-500 | 1.5 | Secondary text |
| Caption | 0.75rem (12px) | 500 | 1.4 | Labels, tags |
| Micro | 0.625rem (10px) | 600 | 1.3 | Tiny labels |

### Typography Principles
- **Weight hierarchy**: Use weight (400-700) more than size for emphasis
- **Line height**: 1.5-1.6 for body text, 1.1-1.3 for headings
- **Letter spacing**: Normal or slightly negative (-0.02em) for large headings
- **Case**: Sentence case for all UI elements (no ALL CAPS)
- **Max width**: 65-75 characters for optimal readability

## 4. Spacing System

### Base Unit & Scale
- **Base unit**: 8px (0.5rem)
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

### Spacing Tokens
```css
--space-xs: 0.25rem (4px)
--space-sm: 0.5rem (8px)
--space-md: 1rem (16px)
--space-lg: 1.5rem (24px)
--space-xl: 2rem (32px)
--space-2xl: 2.5rem (40px)
--space-3xl: 3rem (48px)
--space-4xl: 4rem (64px)
```

### Layout Spacing
- **Section padding**: 64px (4rem) vertical
- **Container padding**: 24px (1.5rem) horizontal
- **Card padding**: 24px (1.5rem)
- **Button padding**: 12px 24px (0.75rem 1.5rem)
- **Input padding**: 12px 16px (0.75rem 1rem)

### Whitespace Philosophy
- **Generous vertical spacing** between sections (64px+)
- **Consistent horizontal padding** in containers (24px)
- **Tight spacing** within related elements (4-8px)
- **Purposeful gaps** between unrelated elements (32px+)

## 5. Component Design

### Buttons

**Primary Button**
```css
background: var(--primary);
color: var(--white);
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
transition: all 0.2s ease;
```

**Secondary Button**
```css
background: transparent;
border: 2px solid var(--primary);
color: var(--primary);
padding: 10px 22px;
border-radius: 8px;
```

**Outline Button**
```css
background: transparent;
border: 1px solid var(--gray-300);
color: var(--gray-700);
padding: 10px 22px;
border-radius: 8px;
```

### Cards

**Standard Card**
```css
background: var(--white);
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;
```

**Hover Effect**
```css
transform: translateY(-4px);
box-shadow: 0 12px 40px rgba(123, 66, 188, 0.15);
```

### Inputs

**Text Input**
```css
padding: 12px 16px;
border: 1px solid var(--gray-300);
border-radius: 8px;
font-size: 1rem;
transition: border-color 0.2s;
```

**Focus State**
```css
border-color: var(--primary);
outline: none;
box-shadow: 0 0 0 3px rgba(123, 66, 188, 0.1);
```

### Badges & Tags

**Badge**
```css
padding: 4px 12px;
border-radius: 20px;
font-size: 0.875rem;
font-weight: 500;
background: var(--gray-100);
color: var(--gray-700);
```

**Tech Tag**
```css
padding: 6px 12px;
border-radius: 8px;
font-size: 0.875rem;
background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
color: var(--white);
```

## 6. Border Radius Scale

| Size | Value | Usage |
|------|-------|-------|
| Small | 4px | Small elements, tags |
| Medium | 8px | Buttons, inputs |
| Large | 12px | Cards, badges |
| XLarge | 16px | Large cards |
| XXLarge | 24px | Hero elements |
| Circle | 50% | Avatars, icons |

## 7. Shadows & Elevation

### Shadow System
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12)
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15)
```

### Card Shadow (Three-Layer)
```css
box-shadow:
  0 4px 20px rgba(0, 0, 0, 0.08),  /* Primary lift */
  0 0 0 1px rgba(123, 66, 188, 0.1), /* Subtle border */
  0 8px 40px rgba(123, 66, 188, 0.05); /* Colored glow */
```

### Hover Shadow
```css
box-shadow:
  0 12px 40px rgba(123, 66, 188, 0.15), /* Stronger lift */
  0 0 0 1px rgba(123, 66, 188, 0.2),   /* Stronger border */
  0 16px 60px rgba(123, 66, 188, 0.1); /* Colored glow */
```

## 8. Animations & Transitions

### Transition Timings
```css
--transition-fast: 150ms
--transition-base: 200ms
--transition-normal: 300ms
--transition-slow: 500ms
```

### Easing Functions
```css
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Animation Types

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale**
```css
@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Scroll Animations
- **Fade on scroll**: Elements fade in as they enter viewport
- **Slide up**: Content slides up from 20px below
- **Stagger**: Multiple elements animate with delays
- **Parallax**: Subtle background movement on scroll

## 9. Responsive Breakpoints

### Breakpoint Scale

| Name | Width | Device | Key Layout |
|------|-------|--------|------------|
| Mobile | <640px | Phones | Single column, hamburger menu |
| Tablet | 640-1024px | Tablets | 2-column grid, collapsible nav |
| Desktop | 1024-1280px | Laptops | 3-column grid, full nav |
| Desktop XL | 1280-1600px | Large laptops | 4-column grid |
| Desktop 2XL | >1600px | Desktop | 5-column grid, max width |

### Navigation Behavior
- **1600px+**: Full 11-item navigation + CTA
- **1400-1599px**: Hide Impact, Live Proof
- **1200-1399px**: Hide Impact, Live Proof, QA + hamburger
- **1024-1199px**: Full hamburger menu
- **<1024px**: Mobile menu with overlay

## 10. Layout Patterns

### Container System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Grid Systems

**Two Column**
```css
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
```

**Three Column**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
```

**Auto-fit**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 24px;
```

### Section Structure
```css
.section {
  padding: 64px 0;
  min-height: 400px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}
```

## 11. Icon System

### Font Awesome Integration
```css
.icon-sm { font-size: 0.875rem; }   /* 14px */
.icon-md { font-size: 1rem; }       /* 16px */
.icon-lg { font-size: 1.25rem; }    /* 20px */
.icon-xl { font-size: 1.5rem; }     /* 24px */
.icon-2xl { font-size: 2rem; }      /* 32px */
```

### Icon Usage Guidelines
- **Functional icons**: Navigation, actions (close, menu, search)
- **Decorative icons**: Section headers, feature highlights
- **Semantic icons**: Match icon meaning to context
- **Consistent sizing**: Use size tokens, not arbitrary values

## 12. Accessibility Standards

### WCAG AA Compliance
- **Color contrast**: Minimum 4.5:1 for text, 3:1 for large text
- **Focus indicators**: 2px outline with offset
- **Touch targets**: Minimum 44x44px for interactive elements
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA labels**: For icon-only buttons and interactive elements
- **Keyboard navigation**: All functionality accessible via keyboard
- **Screen reader support**: Descriptive text for complex components

### Focus Management
```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Skip Links
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

## 13. Dark Mode Implementation

### Theme Switching
- **Persistent preference**: Saved in localStorage
- **System preference**: Respects prefers-color-scheme
- **Smooth transitions**: 0.3s ease for theme changes
- **Component adaptation**: All components support both themes

### Dark Mode Colors
```css
[data-theme="dark"] {
  --bg-primary: var(--surface-dark);
  --bg-secondary: var(--surface-darker);
  --text-primary: var(--text-dark);
  --text-secondary: var(--text-dark-secondary);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

## 14. Performance Guidelines

### Optimizations
- **Code splitting**: Route-based chunks
- **Lazy loading**: Images and components
- **Tree shaking**: Unused code elimination
- **CSS optimization**: Critical CSS inline
- **Image optimization**: WebP format, responsive sizes
- **Font loading**: Font display: swap

### Budget Targets
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Time to Interactive**: <3.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 15. Component Examples

### Navigation Bar
```jsx
<nav className="navbar">
  <div className="nav-container">
    <Link to="/" className="nav-logo">
      <img src="/profile.jpg" alt="Profile" />
    </Link>
    <ul className="nav-menu">
      {navItems.map(item => (
        <li key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
    <div className="nav-actions">
      <button className="theme-toggle" />
      <button className="hamburger" />
    </div>
  </div>
</nav>
```

### Hero Section
```jsx
<section className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Your Name</h1>
    <p className="hero-subtitle">Your Role</p>
    <div className="hero-metrics">
      {/* Metric cards */}
    </div>
    <div className="hero-buttons">
      {/* CTA buttons */}
    </div>
  </div>
</section>
```

### Project Card
```jsx
<div className="project-card">
  <div className="project-header">
    <div className="project-icon" />
    <span className="project-badge">Featured</span>
  </div>
  <div className="project-content">
    <h3 className="project-title">Project Name</h3>
    <p className="project-description">Description</p>
    <div className="project-metrics">
      {/* Metrics */}
    </div>
    <div className="project-tech">
      {/* Tech tags */}
    </div>
  </div>
</div>
```

## 16. Do's and Don'ts

### Do
- Use semantic HTML (section, article, nav, etc.)
- Maintain consistent spacing using the 8px grid
- Test color contrast for accessibility
- Provide focus indicators for interactive elements
- Use meaningful alt text for images
- Implement proper heading hierarchy (h1-h6)
- Test on real devices and screen readers
- Optimize images for web (WebP, proper sizing)
- Use CSS custom properties for theming
- Implement proper error states and loading states

### Don't
- Don't use divs for everything (use semantic elements)
- Don't hardcode spacing values (use spacing tokens)
- Don't rely on color alone to convey information
- Don't use tiny touch targets (<44x44px)
- Don't skip heading levels
- Don't use auto-playing videos or animations
- Don't ignore keyboard navigation
- Don't use placeholder images permanently
- Don't use important! in CSS (use specificity)
- Don't forget mobile testing

## 17. Design Tokens Reference

### Quick Reference
```css
/* Colors */
--primary: #7b42bc
--text-primary: #3b3d45
--text-secondary: #5e6169
--border: #b2b6bd
--white: #ffffff
--black: #15181e

/* Spacing */
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 40px

/* Typography */
--font-sm: 0.875rem
--font-md: 1rem
--font-lg: 1.125rem
--font-xl: 1.5rem
--font-2xl: 2.5rem

/* Border Radius */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 16px
--radius-xl: 24px
--radius-full: 50%

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12)
```

---

**Design System Version**: 1.0.0
**Last Updated**: April 2026
**Maintained By**: Md. Sirajus Salekin

For design questions or component requests, please refer to this documentation or contact the design team.
