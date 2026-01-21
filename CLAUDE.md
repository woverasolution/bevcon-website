# BevCon Website

## Project Overview

BevCon is a corporate website for a beverage industry consulting and construction company. The site showcases their services which span the entire lifecycle of beverage plant projects: Concept, Construction, Contracts, Confidence, Consulting, Control, and Connect.

The website is designed as a modern, visually-rich single-page marketing site with smooth scroll-based animations and an industrial aesthetic.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Utilities**: clsx, tailwind-merge
- **Additional Libraries**:
  - embla-carousel-react (carousels)
  - react-countup (animated counters)
  - react-intersection-observer (scroll-based triggers)
  - recharts (data visualizations)

## Project Structure

```
app/
├── components/           # React components
│   ├── home/            # Home page specific components
│   │   └── HeroSection/ # Hero section subcomponents
│   ├── ui/              # Reusable UI primitives
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroLightAnimated.tsx
│   ├── WhatWeDo.tsx
│   ├── BeverageConcept.tsx
│   ├── BeverageConstruction.tsx
│   ├── BeverageContracts.tsx
│   ├── BeverageConfidence.tsx
│   ├── BeverageConsulting.tsx
│   ├── BeverageControl.tsx
│   ├── BeverageConnect.tsx
│   └── CTASection.tsx
├── lib/                 # Utilities and hooks
│   ├── hooks/           # Custom React hooks
│   ├── animations.ts    # Animation presets
│   ├── utils.ts         # General utilities
│   └── network-data.ts  # Network/partner data
├── network/             # Network pages (dynamic routes)
├── globals.css          # Global styles and CSS utilities
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

## Design System

### Colors

- **Primary**: `#455660` (Industrial Slate)
- **Secondary**: `#9a9a9a` (Steel Grey)
- **Accent**: `#ffbb3a` (Safety Amber)
- **Background**: White (light) / `#0a0a0a` (dark)

### Typography

- **Primary Font**: Titillium Web (sans-serif)
- **Monospace Font**: Geist Mono

### Custom CSS Utilities

The project defines several custom utility classes in `globals.css`:

- `.container-width` - Consistent max-width container with responsive padding
- `.btn-primary` - Primary button styling
- `.section-padding` - Consistent section vertical padding
- `.heading-xl`, `.heading-lg` - Typography presets
- `.gradient-*` - Various gradient backgrounds
- `.shadow-*` - Enhanced shadow utilities
- `.glass`, `.glass-dark` - Glassmorphism effects
- `.animate-*` - Custom animation classes

## Responsiveness

**Responsiveness must be considered in every design decision.**

Key responsive patterns used throughout the codebase:

1. **Mobile-first approach**: Base styles target mobile, with `sm:`, `md:`, `lg:` breakpoints for larger screens
2. **Flexible grids**: Components use Tailwind's grid system with responsive column counts (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
3. **Responsive typography**: Font sizes scale with viewport (e.g., `text-3xl md:text-4xl lg:text-5xl`)
4. **Responsive spacing**: Padding and margins adjust per breakpoint (e.g., `py-20 md:py-28`)
5. **Hidden/visible elements**: Some elements show/hide based on screen size (e.g., `hidden lg:flex`)
6. **Touch-friendly interactions**: Horizontal scroll containers with navigation buttons for mobile
7. **Reduced motion support**: Respects `prefers-reduced-motion` for accessibility

### Breakpoints (Tailwind defaults)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Animation Guidelines

- Use Framer Motion for scroll-based and interaction animations
- Leverage `useInView` and `useScroll` hooks for scroll-triggered effects
- Respect reduced motion preferences via the `useReducedMotion` hook
- Keep animations subtle and purposeful - they should enhance, not distract

## Development Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint            # Run ESLint
npm run optimize-images # Optimize images in public/images and public/portraits
npm run optimize-videos # Optimize videos in public/videos (requires ffmpeg)
```

## Key Conventions

1. All components use the `"use client"` directive when they need client-side features (hooks, event handlers)
2. Images use Next.js `Image` component for optimization
3. Sections follow a consistent pattern: full-width background with `.container-width` inner content
4. Each service section (Beverage*) is a self-contained component with its own animations and styling
