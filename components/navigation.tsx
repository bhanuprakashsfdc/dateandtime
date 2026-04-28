'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Dashboard', icon: '🏠' },
  { href: '/world-clock', label: 'World Clock', icon: '🌍' },
  { href: '/time-zone-converter', label: 'Time Converter', icon: '🔄' },
  { href: '/calendar', label: 'Calendar', icon: '📅' },
  { href: '/holidays', label: 'Holidays', icon: '🎉' },
  { href: '/countdown', label: 'Countdown', icon: '⏱️' },
  { href: '/date-calculator', label: 'Date Calculator', icon: '🧮' },
]

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {navItems.map((item) => {
        const isActive = pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'nav-link flex items-center gap-2 px-4 py-2.5 rounded-xl',
              'text-sm font-medium transition-all duration-200',
              isActive
                ? 'active text-accent-primary bg-accent-primary/15'
                : 'text-text-secondary hover:text-text-primary hover:bg-accent-primary/10'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
