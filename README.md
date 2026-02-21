# GSAP Section - Team Reveal

A stunning team showcase section featuring fluid animations and staggered reveal effects. The team member cards are orchestrated with a reversible GSAP Timeline, complete with smooth scroll integration and elegant appear-on-scroll transitions.

## Overview

This project showcases a modern team reveal section with advanced animations powered by **GSAP** (GreenSock Animation Platform). The section system includes:

- **Reversible GSAP Timeline**: Smooth animations with staggered card reveals
- **Scroll-Triggered Reveals**: Team members appear as users scroll into view
- **Smooth Scroll Integration**: Enhanced scrolling experience with Lenis library
- **Fluid Card Animations**: Staggered entrance animations with elegant transitions
- **Responsive Design**: Adapts layout and animations to all screen sizes

## Features

✨ **Advanced Animations**

- GSAP timeline-based orchestration
- Staggered card reveal sequences
- Smooth scroll interactions with Lenis
- Power easing curves for natural motion
- Scroll-triggered animations

🎨 **Modern Design**

- Clean, minimalist team card layout
- Elegant color palette
- Smooth visual hierarchy
- Responsive team grid

⚡ **Performance Optimized**

- Vite build tool with Rolldown bundler
- Minimal JavaScript footprint
- Efficient DOM manipulation
- GPU-accelerated animations

🛠️ **Developer Experience**

- ESLint with modern config (Antfu preset)
- Hot Module Replacement (HMR)
- Module-based architecture
- Clean, maintainable code

## Tech Stack

- **Animation**: [GSAP](https://gsap.com/) v3.14.2
- **Scroll**: [Lenis](https://lenis.darkroom.engineering/) v1.3.17
- **Build Tool**: [Vite](https://vitejs.dev/) with Rolldown
- **Linting**: ESLint 9.x with @antfu/eslint-config
- **Package Manager**: pnpm
- **Module System**: ES Modules

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── src/
│   ├── scripts/
│   │   └── main.js         # GSAP timeline and scroll logic
│   ├── styles/
│   │   └── style.css       # Main stylesheet
│   └── assets/
│       └── img/            # Project images
├── public/                 # Static assets
├── package.json            # Project dependencies
├── eslint.config.mjs       # ESLint configuration
├── pnpm-lock.yaml          # Dependency lock file
├── LICENSE                 # MIT License
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ (or latest LTS)
- pnpm 8+ (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jmarellanes/gsap__section--team-reveal.git
cd gsap__section--team-reveal
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Scripts

| Script          | Purpose                           |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start development server with HMR |
| `pnpm build`    | Create production-optimized build |
| `pnpm preview`  | Preview production build locally  |
| `pnpm lint`     | Run ESLint to check code quality  |
| `pnpm lint:fix` | Auto-fix ESLint issues            |

## How It Works

### Animation Flow

The project uses GSAP timelines to orchestrate the team reveal sequence triggered by scroll:

1. **Page Load**
   - Lenis smooth scroll initialized
   - Initial state set for team cards

2. **Scroll Into View**
   - Team cards detect when they enter viewport
   - GSAP timeline triggers card reveal

3. **Staggered Card Reveals**
   - Team member cards appear in sequence
   - Each card follows with a consistent delay
   - Smooth fade and scale transitions

4. **Interactive Elements**
   - Hover states for team cards
   - Smooth interactions powered by GSAP
   - Responsive adjustments

### Key Components

**HTML**

- Team member cards with image, name, and details
- Semantic HTML structure
- Accessible markup for better SEO

**CSS**

- Responsive grid layout
- Transform and opacity animations
- Mobile-first design approach
- Smooth transitions

**JavaScript**

- GSAP timeline orchestration
- Lenis scroll listener integration
- Scroll trigger logic
- Class management for animation states

## Customization

### Team Members

Edit the team members in `index.html`:

```html
<div class="team-member">
  <img src="assets/img/member.jpg" alt="Team Member Name" />
  <h3>Team Member Name</h3>
  <p class="role">Position/Role</p>
</div>
```

### Colors

Edit CSS variables in `src/styles/style.css`:

```css
:root {
  --primary-color: /* your color */;
  --secondary-color: /* your color */;
  --text-color: /* your color */;
  --card-bg: /* your color */;
}
```

### Animations

Modify animation timing and easing in `src/scripts/main.js`:

- Duration values (in seconds)
- Stagger values
- Easing functions (e.g., `power4.inOut`, `power2.out`)
- Scroll trigger points

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

## Performance Tips

- GSAP uses GPU acceleration for smooth animations
- Lenis provides efficient smooth scrolling
- Vite's code splitting minimizes initial bundle size
- Images are optimized for quick loading

## Troubleshooting

**Animations not triggering?**

- Check browser console for JavaScript errors
- Ensure GSAP and Lenis are properly imported
- Verify DOM element selectors match the HTML structure
- Check scroll position in DevTools

**Animations feel sluggish?**

- Check if animations are overlapping
- Adjust easing functions for better feel
- Monitor performance in DevTools
- Reduce animation duration if needed

**Build failing?**

- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check pnpm version: `pnpm --version`
- Review ESLint errors: `pnpm lint`

**Scroll not smooth?**

- Verify Lenis is initialized in main.js
- Check for conflicting CSS (overflow: hidden on body)
- Ensure Lenis script runs before other scroll listeners

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Last Updated**: February 2026
