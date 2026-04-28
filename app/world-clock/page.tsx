import type { Metadata } from 'next'
import WorldClockClient from '@/components/world-clock-client'

export const metadata: Metadata = {
  title: 'World Clock - Check Time in Cities Worldwide',
  description: 'View current time in major cities around the world. Real-time world clock with timezone offsets, day/night indicators, and beautiful interface.',
  keywords: ['world clock', 'current time', 'timezone', 'international time', 'global time', 'city time'],
  openGraph: {
    title: 'World Clock - Check Time in Cities Worldwide',
    description: 'View current time in major cities around the world with real-time updates and beautiful design.',
    url: 'https://timex.live/world-clock',
  },
}

export default function WorldClockPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">World Clock</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Keep track of time across the globe. See what time it is in major cities with real-time updates.
          </p>
        </div>

        {/* Interactive Clock Component */}
        <WorldClockClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Why Use a World Clock?
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              A world clock is an essential tool for anyone working with international teams, traveling frequently, or maintaining connections across different regions. With TimeX's world clock, you can instantly see the current time in multiple cities around the world, making it easy to schedule meetings, plan calls, and coordinate activities without confusion.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Key Features of Our World Clock
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Real-time updates:</strong> Each clock ticks every second, showing accurate current time</li>
              <li><strong>Timezone offsets:</strong> Clear display of UTC offset for each location</li>
              <li><strong>Day/Night indicator:</strong> Visual gradient showing time of day in each location</li>
              <li><strong>Major cities:</strong> Comprehensive list covering all major timezones</li>
              <li><strong>Searchable:</strong> Quickly find any city in our database</li>
              <li><strong>Beautiful design:</strong> Modern, dark interface with glassmorphism effects</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Common Use Cases
            </h3>
            <p>
              Remote workers use world clocks to schedule meetings across timezones. Travelers check local times at destinations. Event planners coordinate global events. Families stay connected across continents. Businesses operate across borders efficiently. No matter your need, TimeX makes global time management simple and beautiful.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="How accurate is the world clock?"
              answer="Our world clock uses the WorldTimeAPI and your device's time settings to provide highly accurate time information. All times are synchronized with reliable time servers and updated every second for real-time precision."
            />
            <FAQItem
              question="Does the clock account for daylight saving time?"
              answer="Yes, automatically. All timezone offsets update based on each location's DST rules, so you always see the correct local time, including any seasonal time changes."
            />
            <FAQItem
              question="Can I add my own city?"
              answer="Yes! Use the search bar to find any city in our comprehensive timezone database. We support thousands of cities across all major timezones worldwide."
            />
            <FAQItem
              question="Why does time appear different from other clocks?"
              answer="Our clocks display time based on accurate timezone data. If you see a discrepancy, check that your device's time and timezone settings are correct, as these can affect displayed times."
            />
            <FAQItem
              question="Is this tool free to use?"
              answer="Absolutely. TimeX is completely free with no limits. Use all our time and date tools without any restrictions or required signup."
            />
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Related Tools You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/time-zone-converter"
              className="card p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-text-primary mb-1">Time Converter</h3>
              <p className="text-sm text-text-secondary">Convert between timezones</p>
            </a>
            <a
              href="/countdown"
              className="card p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-semibold text-text-primary mb-1">Countdown Timer</h3>
              <p className="text-sm text-text-secondary">Create beautiful countdowns</p>
            </a>
            <a
              href="/calendar"
              className="card p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold text-text-primary mb-1">Calendar</h3>
              <p className="text-sm text-text-secondary">View holidays and events</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-accent-primary/10 rounded-xl overflow-hidden">
      <h3 className="px-6 py-4 font-semibold text-text-primary bg-bg-tertiary/50">
        {question}
      </h3>
      <p className="px-6 py-4 text-text-secondary leading-relaxed">
        {answer}
      </p>
    </div>
  )
}
