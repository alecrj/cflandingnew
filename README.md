# ClientFlow Landing Page

A premium, conversion-optimized landing page for ClientFlow - an AI receptionist service for HVAC companies. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Stripe/Linear-inspired minimalist aesthetic
- **High Performance**: Optimized for <2s load times, 90+ Lighthouse scores
- **Mobile-First**: Fully responsive with mobile-specific optimizations
- **Interactive Components**:
  - Real-time ROI calculator with animated counters
  - Custom audio players for demo calls
  - Smooth FAQ accordion
  - Exit-intent popup
  - Sticky mobile CTA bar
- **Premium Animations**: Framer Motion scroll animations and micro-interactions
- **Conversion-Optimized**: Designed for 14.9%+ conversion rates

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Project Structure

```
clientflow-landing/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── StickyCTA.tsx   # Mobile sticky CTA bar
│   │   ├── ExitPopup.tsx   # Exit-intent modal
│   │   └── index.ts
│   ├── sections/            # Landing page sections
│   │   ├── Hero.tsx         # Above-the-fold hero
│   │   ├── LiveDemo.tsx     # Demo phone + audio players
│   │   ├── Problem.tsx      # Problem/agitation
│   │   ├── Solution.tsx     # Product introduction
│   │   ├── HowItWorks.tsx   # 3-step process
│   │   ├── Features.tsx     # Feature grid
│   │   ├── Pricing.tsx      # Pricing tiers
│   │   ├── ROICalculator.tsx # Interactive calculator
│   │   ├── Technology.tsx   # Tech specs + integrations
│   │   ├── FAQ.tsx          # Accordion FAQ
│   │   ├── RiskReversal.tsx # Guarantees
│   │   ├── FinalCTA.tsx     # Bottom CTA
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles + Tailwind
│   └── main.tsx             # Entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or navigate to the repository:
```bash
cd clientflow-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors

- **Primary**: Deep navy (#0F172A) - trust, professionalism
- **Accent**: Electric blue (#0066FF) - innovation, energy
- **Success**: Emerald (#10B981) - positive metrics, ROI
- **Warning**: Amber (#F59E0B) - urgency
- **Error**: Red (#EF4444) - danger, loss

### Typography

- **Font**: Inter (system font for performance)
- **Hero**: 64px desktop / 40px mobile
- **Section**: 48px desktop / 32px mobile
- **Body**: 18px
- **Caption**: 14px

### Spacing

- Section padding: 128px vertical (desktop) / 64px (mobile)
- Component spacing: 48px between major elements
- Base unit: 8px

### Animations

- Duration: 200ms (micro) / 300ms (hover) / 600ms (page)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- GPU-accelerated transforms only

## Key Components

### Hero Section
- Headline with animated subheadline
- Primary CTA with subtext
- Click-to-call link (mobile optimized)
- Animated process illustration

### Live Demo Section
- Large, prominent demo phone number
- Custom audio players with waveform-style UI
- Mobile click-to-call integration

### ROI Calculator
- Real-time calculations with animated numbers
- Interactive sliders and inputs
- Green highlighting for positive metrics
- Large, colorful output displays

### Exit-Intent Popup
- Triggers on mouse leave (desktop)
- 45-second inactivity timer (mobile)
- Shows once per session
- Email capture alternative

### Sticky CTA Bar
- Mobile-only
- Appears after scrolling past hero
- Hides on scroll up
- Semi-transparent backdrop

## Performance Optimizations

- Lazy loading for below-fold content
- GPU-accelerated animations
- System fonts for instant loading
- Minimal dependencies
- Code splitting via Vite
- Optimized bundle size (~380KB JS, ~22KB CSS)

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to any static host

Build the project and upload the `dist/` folder:

```bash
npm run build
```

## Customization

### Update Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#0066FF', // Change this
        hover: '#0052CC',   // And this
      }
    }
  }
}
```

### Update Content

All content is in the `src/sections/` directory. Each section is a self-contained component.

### Update Phone Numbers

Search and replace `5551234822` with your actual phone number throughout the codebase.

### Update Email

Replace `hello@clientflow.ai` with your email in `Footer.tsx`.

## Performance Metrics

- **Build time**: ~2 seconds
- **Bundle size**:
  - JS: 378KB (116KB gzipped)
  - CSS: 22KB (4.8KB gzipped)
- **Target Lighthouse scores**: 90+ across all metrics

## Development

The landing page is fully built and ready to use. To start developing:

```bash
npm run dev
```

All sections are modular and can be easily customized or reordered in `src/App.tsx`.

## License

All rights reserved.

## Support

For questions or issues, contact hello@clientflow.ai

---

Built with precision, elegance, and conversion in mind.
