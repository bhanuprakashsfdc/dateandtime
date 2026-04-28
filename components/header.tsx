'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from './navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-accent-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-primary/30 group-hover:scale-105 transition-transform">
              <span className="text-2xl">⏰</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              TimeX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Navigation />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <button
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary/50 border border-accent-primary/10 text-sm text-text-secondary hover:text-text-primary transition-all"
              onClick={() => {}}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search tools...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-bg-primary/50 border border-accent-primary/20">
                <span>⌘</span>K
              </kbd>
            </button>

            {/* CTA Button */}
            <Link
              href="/world-clock"
              className="btn-primary hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-accent-primary/10 animate-in slide-in-from-top-2 duration-200">
            <Navigation className="flex-col items-start gap-1" />
            <div className="mt-4 flex gap-2">
              <button className="btn-primary w-full justify-center">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
