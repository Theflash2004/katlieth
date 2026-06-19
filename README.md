# YouTube Channel — Design System

Black & white design system with Kurzgesagt-inspired flat geometry and animation, built for science storytelling on YouTube.

## Structure

```
├── index.html                  ← Design system documentation
├── pages/
│   └── post.html               ← "Do Animals Feel Pain?" post template
├── tokens/
│   └── design-tokens.css       ← All CSS custom properties (colors, type, spacing, motion)
├── animations/
│   └── keyframes.css           ← Named keyframes + utility animation classes
├── components/
│   └── components.css          ← Full component library
└── assets/
    └── icons/
        └── icons.svg           ← SVG icon sprite
```

## Design Principles

- **Black & white only** — contrast does the heavy lifting, no color distractions
- **Geometric + flat** — circles, hexagons, sharp rectangles; no gradients except subtle radial glows
- **Motion with purpose** — every animation communicates something (nerve signals travel, shapes float, elements reveal on scroll)
- **Science-forward typography** — Space Grotesk display, Inter body, JetBrains Mono for data

## Components

| Component | Class |
|-----------|-------|
| Buttons | `.btn .btn-primary / .btn-outline / .btn-ghost` |
| Cards | `.card .card-elevated .card-glass` |
| Badges | `.badge .badge-outline .badge-filled` |
| Progress | `.progress-track .progress-fill` |
| Navigation | `.nav .nav-link` |
| Script blocks | `.script-block .animation-note` |
| Timeline | `.timeline .timeline-item` |
| Stats | `.stat-block .stat-number` |

## Animation classes

```css
.animate-fade-up     /* entrance from below */
.animate-fade-in     /* simple fade */
.animate-slide-left  /* slide from left */
.animate-pop         /* spring scale entrance */
.animate-float       /* continuous gentle float */
.animate-pulse-glow  /* box-shadow pulse */
.animate-spin-slow   /* slow continuous rotation */
.reveal              /* scroll-triggered reveal (add .visible via JS) */
.delay-100 … .delay-1100  /* animation-delay helpers */
```

## Usage

Open `index.html` in a browser to explore the design system, then `pages/post.html` to see the full YouTube post template.
