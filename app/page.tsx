import type { Metadata } from 'next'
import { Suspense } from 'react'
import ClientClock from '@/components/client-clock'
import ToolsGrid from '@/components/tools-grid'
import WorldClockPreview from '@/components/world-clock-preview'
import CovidBox from '@/components/seo-content-box'

export const metadata: Metadata = {
  title: 'TimeX - Modern Time & Date Tools',
  description: 'A beautiful, modern alternative to timeanddate.com. World clocks, timezone converter, calendar, countdown timers, and date calculators with stunning dark UI and lightning-fast performance.',
  keywords: ['world clock', 'timezone converter', 'time and date', 'countdown timer', 'date calculator', 'calendar', 'holidays', 'time zone tool'],
  openGraph: {
    title: 'TimeX - Beautiful Time & Date Tools',
    description: 'Modern time and date tools with a stunning dark interface',
    url: 'https://timex.live',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text block">Time, Reimagined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Beautifully designed time and date tools for the modern world. World clocks, timezone converters, calendars, countdowns, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/world-clock" className="btn-primary text-lg px-8 py-4 shadow-lg glow-indigo">
                Explore Tools
              </a>
              <a href="#tools" className="btn-secondary text-lg px-8 py-4">
                See All Features
              </a>
            </div>

            {/* Live Clock */}
            <div className="glass rounded-3xl p-8 md:p-12 glow max-w-2xl mx-auto">
              <Suspense fallback={
                <div className="skeleton h-24 w-full rounded-xl" />
              }>
                <ClientClock />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16 md:py-24 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Tools, <span className="gradient-text">Beautiful Interface</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to manage time across timezones, plan events, and stay organized.
            </p>
          </div>
          <ToolsGrid />
        </div>
      </section>

      {/* World Clock Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Track Time Across the <span className="gradient-text">Globe</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See what time it is in major cities around the world with beautiful, real-time clocks.
            </p>
          </div>
          <WorldClockPreview />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CovidBox
            title="The Ultimate Time & Date Platform"
            content={`
              <p>TimeX is a comprehensive time and date platform designed to help individuals and teams manage time across different timezones, plan events, and calculate date differences with precision and style.</p>

              <h3>Why Choose TimeX?</h3>
              <p>Unlike traditional time websites, TimeX offers a modern, intuitive interface with real-time updates, making time management an engaging experience. Our tools are perfect for remote workers, frequent travelers, project managers, and anyone who needs to coordinate across timezones.</p>

              <h3>World Clock & Timezone Management</h3>
              <p>Our world clock displays multiple cities simultaneously with real-time updates. Each clock shows the current time, timezone offset, and even day/night indicators based on actual sunrise and sunset times. The timezone converter lets you instantly find corresponding times across different regions, making it easy to schedule meetings without confusion.</p>

              <h3>Calendar & Event Planning</h3>
              <p>Plan your schedule with our integrated calendar that shows holidays from around the world. Whether you're coordinating international team meetings or planning a global event, our calendar helps you avoid conflicts and respect cultural observances.</p>

              <h3>Countdown Timers & Date Calculators</h3>
              <p>From counting down to a specific date to calculating business days between two dates, our tools are designed for accuracy and ease of use. Create multiple timers, set custom messages, and share countdowns with others.</p>

              <h3>SEO-Optimized & Fast</h3>
              <p>Built with Next.js and optimized for Core Web Vitals, TimeX loads instantly on any device. Our static generation ensures maximum performance, while our responsive design works seamlessly on desktop, tablet, and mobile.</p>
            `}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master <span className="gradient-text">Time?</span>
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Start using TimeX today. No signup required, completely free, and designed to make time management beautiful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/world-clock" className="btn-primary text-lg px-8 py-4">
              Start Exploring
            </a>
            <a href="/date-calculator" className="btn-secondary text-lg px-8 py-4">
              Try Date Calculator
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
