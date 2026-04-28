import Link from 'next/link'

const tools = [
  {
    title: 'World Clock',
    description: 'Check current time in cities worldwide with real-time updates, timezone offsets, and day/night indicators.',
    href: '/world-clock',
    icon: '🌍',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Time Zone Converter',
    description: 'Instantly convert time between timezones. Perfect for scheduling international meetings and calls.',
    href: '/time-zone-converter',
    icon: '🔄',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Calendar',
    description: 'Interactive calendar with holidays, events, and date navigation. Plan your schedule visually.',
    href: '/calendar',
    icon: '📅',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Holidays',
    description: 'Browse global holidays by country, month, or religion. Never miss an important date.',
    href: '/holidays',
    icon: '🎉',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Countdown Timer',
    description: 'Create countdown timers for any event. Customizable, shareable, and beautiful.',
    href: '/countdown',
    icon: '⏱️',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Date Calculator',
    description: 'Calculate duration between dates, add/subtract days, find day of week, and more.',
    href: '/date-calculator',
    icon: '🧮',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="card group relative overflow-hidden hover:-translate-y-1"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity rounded-full -translate-y-1/2 translate-x-1/2"
            style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
          />

          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl mb-4 shadow-lg"
              style={{ backgroundColor: 'var(--tw-gradient-from)' }}>
              {tool.icon}
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-2">
              {tool.title}
            </h3>

            <p className="text-text-secondary leading-relaxed">
              {tool.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-accent-primary font-medium">
              Try it now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
