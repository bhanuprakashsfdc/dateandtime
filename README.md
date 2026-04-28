# TimeX Website

A modern, SEO-optimized alternative to timeanddate.com built with Next.js, featuring a beautiful dark UI inspired by gaming and fintech dashboards.

## 🚀 Features

- **World Clock** - Real-time clocks for major cities worldwide
- **Time Zone Converter** - Instantly convert between timezones
- **Interactive Calendar** - Month view with event tracking
- **Global Holidays** - Browse public holidays by country
- **Countdown Timer** - Set custom timers with presets
- **Date Calculator** - Calculate durations, add/subtract time, find day of week, and age

## 🎨 Design

Based on `design.md`, the design features:
- Dark mode with neon gradients (purple/blue/cyan)
- Glassmorphism cards with subtle glow
- Responsive, mobile-first layout
- Premium fintech/gaming dashboard aesthetic

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion (limited, where needed)
- **Date handling**: date-fns + Intl API
- **Performance**: Static generation, minimal client-side JS

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  /calendar            # Calendar page
  /countdown           # Countdown timer page
  /date-calculator     # Date calculator page
  /holidays            # Global holidays page
  /time-zone-converter # Timezone converter page
  /world-clock         # World clock page
  layout.tsx           # Root layout with SEO
  page.tsx             # Homepage
  globals.css          # Global styles & Tailwind

/components            # React components
  /ui                  # UI components (card, button, input)
  /tools               # Tool-specific client components
  header.tsx, footer.tsx, navigation.tsx

/lib                   # Utilities
  timeUtils.ts         # Time manipulation functions
  utils.ts             # General utilities (cn)
```

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📊 Performance

- **Static Generation**: All pages pre-rendered at build time
- **Minimal JS**: Only essential interactivity uses client-side code
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: ~97KB initial JS (excellent)

## ✅ SEO Features

- Dynamic metadata per page
- Semantic HTML structure
- Structured data (FAQ schema)
- Fast loading times
- Mobile-responsive

## 🎯 Key Pages

Each tool page includes:
- Interactive component (client-side)
- Detailed explanation content (300-800 words)
- FAQs section
- Internal linking to related tools
- SEO-optimized metadata

## 🎨 Design System

Colors defined in `tailwind.config.ts`:
- `bg-primary`: `#0A0B14` (deep space black)
- `accent-primary`: `#6366F1` (indigo)
- `accent-secondary`: `#06B6D4` (cyan)

Components styled with:
- Glassmorphism (backdrop-blur, transparency)
- Neon glow effects
- Smooth transitions
- Consistent border radius (16px)

## 📝 Content Strategy

Each page includes comprehensive, helpful content answering common user questions about time/date topics, ensuring strong SEO performance and user value.

## 🔧 Customization

- Design tokens in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Timezone data in `lib/timeUtils.ts`

## 📖 License

Open source - feel free to use and modify.

---

Built with ❤️ for time enthusiasts.
