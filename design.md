# TimeX Design System

## 1. Product Overview

**What the product is**
TimeX is a next-generation time and date platform that replaces traditional informational websites with a dynamic, data-rich dashboard experience. It combines real-time world clocks, timezone management, calendar events, and time calculation tools into an interactive, visually engaging interface inspired by modern fintech and gaming dashboards.

**Target users**
- Remote workers and distributed teams
- Frequent travelers and digital nomads
- Project managers and event planners
- Financial traders and global businesses
- Gamers and content creators with international audiences

**Core value proposition**
- All time-related tools in one visually stunning dashboard
- Real-time global time visualization with instant conversions
- Personalized, widget-based interface that adapts to user needs
- Premium, futuristic experience that turns time management into an engaging activity

---

## 2. Design Philosophy

**UX principles**
1. **Dashboard-first**: No traditional pages; everything lives on a customizable main dashboard
2. **Data hierarchy**: Critical information (current time, upcoming events) prioritized visually
3. **Progressive disclosure**: Advanced tools revealed through interaction, not clutter
4. **Zero-latency perception**: Real-time animations and immediate feedback create sense of instant response

**Visual direction**
- Dark theme as foundation (reduces eye strain, enhances neon glow)
- Neon gradients (purple/blue/cyan) as primary visual language
- Glassmorphism for depth without heaviness
- 60-30-10 color rule: 60% deep backgrounds, 30% mid-tones, 10% neon accents
- Inspired by cryptocurrency trading interfaces and AAA game HUDs

**Interaction philosophy**
- Micro-interactions on every hoverable element (subtle glow, scale, color shift)
- Real-time data streams with smooth interpolation (no jarring jumps)
- Gesture-friendly on mobile with generous touch targets
- Kinematic animations (easing curves mimic physical movement)

---

## 3. Design System

### Colors

**Primary palette**
```
--color-bg-primary: #0A0B14        // Deep space black (main background)
--color-bg-secondary: #141625      // Slightly lighter for cards
--color-bg-tertiary: #1C1F33       // Card hover states
--color-accent-primary: #6366F1    // Indigo (primary buttons, highlights)
--color-accent-secondary: #06B6D4 // Cyan (secondary actions)
--color-accent-tertiary: #8B5CF6  // Violet (tertiary elements)
--color-accent-gradient-start: #6366F1
--color-accent-gradient-end: #06B6D4
--color-text-primary: #F8FAFC      // White for headings
--color-text-secondary: #94A3B8    // Light gray for body
--color-text-muted: #64748B        // Muted for secondary info
--color-success: #10B981           // Green for positive states
--color-warning: #F59E0B           // Amber for warnings
--color-error: #EF4444             // Red for errors
--color-border: rgba(99, 102, 241, 0.1)  // Subtle neon border
--color-glow: rgba(99, 102, 241, 0.3)    // Generic glow effect
```

**Neon glow classes**
```css
.glow-cyan { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
.glow-purple { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
.glow-indigo { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }
.neon-border { border: 1px solid rgba(99, 102, 241, 0.3); }
```

### Typography

**Font families**
- Headings: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Monospace: `JetBrains Mono, Fira Code, monospace` (for clocks, timers, code)
- Body: `Inter` (400, 500 weights)

**Type scale (rem units, base 16px)**
```
H1: 2.5rem / 40px (bold 700) - Dashboard title
H2: 2rem / 32px (semibold 600) - Section headers
H3: 1.5rem / 24px (semibold 600) - Card titles
H4: 1.25rem / 20px (medium 500) - Widget titles
Body: 1rem / 16px (regular 400) - General text
Body-small: 0.875rem / 14px (regular 400) - Secondary info
Label: 0.75rem / 12px (medium 500, uppercase tracking 0.1em) - UI labels
Digits: 1.25rem / 20px (bold 700, monospace) - Clocks, timers
```

### UI Components

**Cards**
```css
.card {
  background: rgba(20, 22, 37, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background: rgba(28, 31, 51, 0.8);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}
```

**Buttons**
```css
.btn-primary {
  background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
}
```

**Inputs**
```css
.input {
  background: rgba(28, 31, 51, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  color: #F8FAFC;
  font-size: 1rem;
  transition: all 0.2s ease;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: #6366F1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1),
              0 0 20px rgba(99, 102, 241, 0.2);
  background: rgba(28, 31, 51, 1);
}
```

**Navigation**
```css
.nav-item {
  padding: 10px 16px;
  border-radius: 10px;
  color: #94A3B8;
  transition: all 0.2s ease;
  font-weight: 500;
}

.nav-item:hover {
  color: #F8FAFC;
  background: rgba(99, 102, 241, 0.1);
}

.nav-item.active {
  color: #6366F1;
  background: rgba(99, 102, 241, 0.15);
  box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.3);
}
```

**Data display**
```css
.data-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #F8FAFC;
  letter-spacing: -0.02em;
}

.data-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748B;
  margin-bottom: 4px;
}
```

---

## 4. Layout & Navigation

### Information Architecture

**Dashboard hierarchy (single-page application)**
```
Main Dashboard
├─ Header [Logo, Search, User, Quick actions]
├─ Left Sidebar [Navigation, Widget toggle]
├─ Main Content Area [Grid of widgets]
│  ├─ Hero widget (Large time display)
│  ├─ World Clock grid (Dynamic cards)
│  ├─ Timezone converter
│  ├─ Upcoming events calendar
│  ├─ Timer/Countdown widgets
│  └─ Quick tools panel
└─ Right Panel (collapsible) [Weather, News, Favorites]
```

**Navigation sections**
1. Dashboard (Home)
2. World Clock
3. Time Zones
4. Calendar
5. Timers
6. Calculators
7. Settings

### Navigation system

**Desktop**
- Fixed left sidebar (240px width, collapsible to icons-only 64px)
- Top header bar with search spotlight and quick-add
- Main content area is responsive grid (Bento Grid layout)
- Right panel optional (shows/hides with shortcut)

**Mobile**
- Bottom tab bar (5 main tabs)
- Hamburger menu for secondary navigation
- Floating action button for quick actions
- Cards stack vertically, swipeable carousels for related content

---

## 5. Core Features & Screens

### Dashboard (Main Screen)

**Purpose**
The primary hub displaying all time-related information in a customizable widget grid. Users see at a glance their local time, important world clocks, upcoming events, and active timers.

**Key UI elements**
- Hero clock (large, animated time display with date)
- Search bar (global command palette activated with ⌘K)
- Quick-add button (floating, pulsating)
- World Clock mini-cards (city + time + timezone offset)
- Upcoming events (next 24h timeline)
- Active timers (expanding/collapsing panel)
- Weather widget (temperature + conditions)
- System status (sync indicator, connection health)

**Interaction behavior**
- Hero clock ticks smoothly (second hand sweeps, not ticks)
- World Clock cards pulse tiny glow when minute changes
- Quick-add expands modal with smart suggestions based on time of day
- Search opens full-screen overlay with fuzzy search across all features
- All widgets are draggable and resizable (grid layout persistence)

---

### World Clock

**Purpose**
Display multiple cities' times simultaneously with visual timezone comparison and day/night indicators.

**Key UI elements**
- Grid of city cards with:
  - City name + country flag
  - Large digital clock (HH:MM:SS)
  - Analog clock face (miniature, optional)
  - Timezone offset from local
  - Day/night gradient background (sunrise to sunset colors)
  - Current date in city
- Map view toggle (shows clock positions on world map)
- Search/add city modal
- Sort/filter controls (by region, by offset)

**Interaction behavior**
- Hovering city card expands to show more details (timezone name, DST info)
- Clicking a city opens detailed panel with weather, holidays, next business day
- Analog clocks rotate smoothly (second hand sweeps)
- Day/night background transitions in real-time based on actual solar position
- Map view: cities pulse on map with timezone boundary overlays

---

### Time Zone Converter

**Purpose**
Convert time between timezones with visual timeline comparison and meeting planner.

**Key UI elements**
- Source timezone selector (city or UTC offset)
- Target timezone selector
- Date/time picker (or "now" button)
- Dual timeline visualization (side-by-side bars)
- Working hours overlay (9am-5pm shaded regions)
- Best meeting time suggestions (overlap highlights)
- Result cards showing equivalent times in both zones

**Interaction behavior**
- Drag-and-drop timezone reordering
- Adjusting time updates all displays instantly
- Timeline scrubbing slider (drag to see hour-by-hour)
- Smart suggestions highlight optimal meeting windows
- Copy result button with notification
- Export to calendar (ICS generation)

---

### Calendar & Holidays

**Purpose**
View integrated calendar with global holidays, observances, and custom events.

**Key UI elements**
- Month view grid (with event dots)
- Upcoming events list (next 7/30 days)
- Holiday browser (by country, religion, type)
- Add event modal (with timezone auto-detection)
- Event detail cards (with RSVP, reminders)
- Shared calendars toggle (team, family, etc.)

**Interaction behavior**
- Day cell hover shows 3-line preview of events
- Drag to create new event (drag from empty area)
- Click event opens slide-over panel with details
- Holiday cards have "add to calendar" one-click
- Calendar sync indicator shows connected accounts
- Mini-map on event location (click to open maps)

---

### Timers & Countdown

**Purpose**
Multiple timer types: countdown, stopwatch, alarm, Pomodoro.

**Key UI elements**
- Active timers strip (top bar showing all running timers)
- Timer creation panel (preset templates)
- Large circular progress indicator (SVG-based)
- Digital display (days/hours/minutes/seconds)
- Control buttons (start/pause/reset/delete)
- Preset library (5-min break, 25-min work, 1-hour cooking, etc.)
- Sound/notification selector
- Title/description field

**Interaction behavior**
- Circular progress animates smoothly from 0 to 100%
- Pause shrinks progress indicator slightly
- Completed timer triggers confetti + sound
- Multiple timers overlay (tap to expand/collapse)
- Swipe to delete (mobile)
- Long-press for quick edit
- Persistent across page refresh (localStorage)

---

### Date Calculators

**Purpose**
Calculate date differences, add/subtract time, find day of week, etc.

**Key UI elements**
- Calculator tabs:
  1. Duration between dates
  2. Add/subtract days/weeks/months
  3. Day of week finder
  4. Age calculator
  5. Business days calculator
- Date pickers (with inline calendar)
- Input fields (days, hours, minutes)
- Result cards (large numbers with breakdown)
- History/Recent calculations list

**Interaction behavior**
- Real-time calculation as user types
- Copy result with one click
- Swap dates button (for difference calculator)
- "Common periods" shortcuts (1 week, 1 month, 1 year)
- Business day calculator includes holiday awareness

---

## 6. UI/UX Patterns

### Card-based layout system

**Card grid**
- Responsive grid using CSS Grid
- Desktop: 4-column grid, cards span 1-4 columns
- Tablet: 3-column grid
- Mobile: 1-column stack

**Card sizes (Spans)**
- Small (1x1): City clocks, simple stats
- Medium (2x1): Calendar widget, weather
- Large (2x2): Hero clock, map view
- Extra large (4x2): Full-width timeline, main dashboard

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.span-1 { grid-column: span 1; }
.span-2 { grid-column: span 2; }
.span-3 { grid-column: span 3; }
.span-4 { grid-column: span 4; }
```

### Grid usage
- Baseline grid: 8px rhythm
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px
- Container max-width: 1400px (desktop), 100% padding (mobile)
- Card internal padding: 24px (consistent)

### Spacing system
```
spacing-1: 4px
spacing-2: 8px
spacing-3: 12px
spacing-4: 16px (standard)
spacing-5: 24px (card padding)
spacing-6: 32px
spacing-7: 48px
spacing-8: 64px
```

### Responsiveness

**Breakpoints**
```
sm: 640px (mobile)
md: 768px (tablet)
lg: 1024px (small desktop)
xl: 1280px (standard desktop)
2xl: 1536px (large desktop)
```

**Layout changes**
- <768px: Single column, bottom nav, stacked cards
- 768-1024: 2-column grid, collapsible sidebar
- >1024: Full grid, full sidebar, right panel optional

---

## 7. Animations & Micro-interactions

### Hover effects

**Cards**
- Lift 2px on hover with stronger shadow
- Border color brightens (glow intensifies)
- Inner gradient overlay on hover

**Buttons**
- Scale 1.02 on hover
- Shadow expands
- Text letter-spacing increases slightly (+0.02em)

**Navigation**
- Active indicator slides smoothly
- Hover background fades in (0.15s)

### Transitions

**Global easing**
```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

**Transition durations**
- Fast (hover effects): 150ms
- Medium (panel slides): 300ms
- Slow (page transitions): 500ms
- Real-time (clock ticks): 1000ms (second hand)

### Real-time updates

**Clocks**
- Second hand: smooth sweep (not discrete ticks)
- Use `requestAnimationFrame` for butter-smooth motion
- Date changes at midnight with fade transition
- Timezone offset updates when DST changes (animated number flip)

**Live data**
- Active timers count down smoothly
- Meeting timer approaching deadline pulses red
- New event notification slides in from top-right

### Loading states

**Skeleton loaders**
- Pulse animation (opacity 0.4 → 0.7 → 0.4)
- Shimmer effect (gradient slide across)
- Card-shaped skeletons matching final card dimensions

**Spinner**
- Rotating neon ring with gradient border
- Glow effect animates in sync with rotation

---

## 8. Advanced Features (Innovation Layer)

### AI Meeting Planner

**Description**
Smart meeting scheduler that analyzes all participants' timezones, working hours, and calendar availability to suggest optimal meeting times.

**UI elements**
- "Plan with AI" button in converter
- Natural language input: "Schedule a 1-hour call with team at 2pm my time"
- AI-suggested time slots with confidence scores
- One-click "Send invite" with calendar integration
- Timezone conflict visualization (who's asleep?)

**Interaction**
- AI analyzes past meeting patterns to recommend best windows
- Shows impact on each participant (working hours, local time)
- Calendar sync (Google, Outlook, Apple) for real availability

### Smart Timezone Suggestions

**Description**
Automatically suggests relevant timezones based on usage patterns, frequent contacts, and upcoming events.

**UI elements**
- "Suggestions" section in World Clock
- "Add common timezones for your region"
- Team/Group timezone presets (Remote Team, Family, Clients)

**Interaction**
- Machine learning identifies frequent contacts' locations
- Event location detection (if event has location, suggest timezone)
- One-click add to world clock

### Visual Timeline Comparison

**Description**
Side-by-side visual comparison of two or more schedules over selected date range.

**UI elements**
- Select participants or timezones
- Choose date range (this week, next month, custom)
- Gantt-chart style horizontal bars showing:
  - Working hours (shaded)
  - Meetings (colored blocks)
  - Personal time (white space)
- Overlap visualization (where all are awake/working)

**Interaction**
- Hover bar shows details
- Drag to create meeting in overlap zone
- Export as PNG shareable image

### Personalized Dashboard

**Description**
Adaptive widget placement and visibility based on user behavior and preferences.

**UI elements**
- "Customize" mode (edit mode)
- Widget recommendations panel
- Usage statistics (which widgets you use most)
- Focus mode (hide everything except current priority)

**Interaction**
- Drag widgets to rearrange
- Pin/unpin widgets
- Smart reordering (auto-sort by usage frequency)
- Widget discovery carousel

---

## 9. Mobile Experience

### Layout adaptation

**Screen sizes**
- Small mobile (320-414px): Single column, touch-optimized
- Large mobile (415-768px): Slightly expanded grid, still single column dominant

**Component adaptations**
- Cards become full-width (100%)
- Font sizes scaled down slightly (by 0.5-1rem)
- Touch targets minimum 44px square
- Gestures for common actions:
  - Swipe left on world clock → delete
  - Swipe right on timer → quick pause
  - Long-press card → edit mode
  - Pull down on dashboard → sync

### Navigation changes

**Bottom tab bar (5 items)**
1. Dashboard (home icon)
2. World Clock (globe icon)
3. Calendar (calendar icon)
4. Timers (timer icon)
5. Tools (grid icon - converter, calculator)

**Actions**
- Floating action button (FAB) bottom-right: "+" opens quick add menu
- Swipe between tab categories (left/right)
- Pull to refresh
- Search bar in header (tap to focus)

### Touch interactions

- Tap target minimum 44×44px
- Active state feedback (color shift, scale 0.98)
- Swipeable carousels for related items
- Pinch to zoom on world map (if in map view)
- Haptic feedback for timer completions and important actions
- Pull-to-refresh with neon spinner

---

## 10. Tech Recommendations

### Frontend stack

**Core framework**
- React 18+ or Vue 3 with Composition API
- TypeScript for type safety
- Next.js 14 (App Router) for SSR, SEO, and fast navigation

**Styling**
- Tailwind CSS (utility-first, enables rapid iteration)
- CSS modules for component-scoped styles
- Global.css for design tokens and animations

**State management**
- Zustand (lightweight, simple)
- Or Recoil (if complex derived state needed)
- React Query / SWR for server state (weather, holidays)

**UI libraries**
- Framer Motion for animations
- React Hook Form for forms
- React Day Picker for date selection
- Custom Radix UI for accessible primitives (if needed)

### Animation libraries

- Framer Motion (primary)
  - Layout animations for card reordering
  - Gestures (drag, tap, hover)
  - SVG animations (analog clocks, progress circles)

- GSAP (optional for complex sequences)
  - Dashboard entrance animations
  - Timeline scrubbing in converter

- Lottie (for micro-interactions like confetti, success checkmarks)

### APIs required

**Core time APIs**
- WorldTimeAPI (free, no auth) or custom NTP sync
- Timezone database (IANA tz)
- Sunrise/sunset data ( sunrise-sunset.org API)

**Geolocation**
- Google Maps Geocoding API (for city search)
- OpenStreetMap Nominatim (free alternative)

**Calendar**
- Google Calendar API
- Microsoft Graph API (Outlook/Office 365)
- Apple Calendar (optional)

**Holidays**
- Calendarific API (or Google Public Holidays)
- Country-specific holiday calendars

**Weather**
- OpenWeatherMap API
- Or WeatherAPI.com

**AI (optional)**
- OpenAI GPT API (for meeting planner suggestions)
- Or build custom logic rule-based

**Push notifications**
- Service Workers + Firebase Cloud Messaging
- Or OneSignal

### Development recommendations

**Folder structure**
```
src/
├─ components/
│  ├─ ui/ (buttons, cards, inputs)
│  ├─ widgets/ (clock, calendar, timer)
│  ├─ layout/ (sidebar, header, grid)
│  └─ modals/ (quick-add, search)
├─ pages/
│  ├─ dashboard.tsx
│  ├─ world-clock.tsx
│  └─ ...
├─ hooks/ (useTimer, useClock, useTimezone)
├─ stores/ (Zustand stores)
├─ utils/ (timezones, date calculations)
├─ styles/
│  ├─ tokens.css (design tokens)
│  ├─ animations.css
│  └─ global.css
├─ types/ (TypeScript interfaces)
└─ data/ (static: cities, holidays, timezones)
```

**Performance considerations**
- Virtualize long lists (world city selector)
- Debounce search input
- Throttle real-time clock updates (only update when minute changes for secondary clocks)
- Lazy load widgets below the fold
- Service worker for offline support (cached world clock list)

**Accessibility**
- Keyboard navigation support
- Screen reader announcements for live time updates
- Color contrast compliance (WCAG AA)
- Focus management in modals
- Prefers-reduced-motion media query support

**Browser support**
- Modern browsers (last 2 versions)
- ES2020+
- CSS Grid, Flexbox, Backdrop-filter

---

**End of Design Document**
