import type { Metadata } from 'next'
import HolidaysClient from '@/components/holidays-client'

export const metadata: Metadata = {
  title: 'Holidays - Global Holiday Calendar by Country',
  description: 'Browse public holidays worldwide by country and month. Plan meetings, travel, and events with our comprehensive holiday database.',
  keywords: ['holidays', 'public holidays', 'global holidays', 'holiday calendar', 'bank holidays', 'festivals'],
  openGraph: {
    title: 'Holidays - Global Holiday Calendar',
    description: 'View public holidays by country and month. Essential for international planning and travel.',
    url: 'https://timex.live/holidays',
  },
}

export default function HolidaysPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Global Holidays</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore public holidays worldwide by country. Essential for international business, travel planning, and cultural awareness.
          </p>
        </div>

        {/* Holidays Tool */}
        <HolidaysClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Understanding Global Holidays
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Holidays vary widely across countries and cultures. Our global holiday database helps you navigate these differences, whether you're scheduling international meetings, planning business trips, or simply learning about different cultures.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Types of Holidays
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Federal/National holidays:</strong> Official government-observed days (e.g., Independence Day, Christmas)</li>
              <li><strong>Religious holidays:</strong> Celebrations based on religious calendars (e.g., Eid, Diwali, Easter)</li>
              <li><strong>Bank holidays:</strong> Days when banks and many businesses are closed</li>
              <li><strong>Regional holidays:</strong> State- or province-specific observances</li>
              <li><strong>Cultural festivals:</strong> Traditional celebrations with cultural significance</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Planning Around Holidays
            </h3>
            <p>
              When scheduling international activities, always check public holidays for all involved parties. A meeting planned for a holiday in one country may fall on a regular workday in another. Use our holiday browser alongside our World Clock to coordinate effectively across timezones and holiday periods.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Holiday Date Variations
            </h3>
            <p>
              Some holidays are fixed (always on the same date), while others are floating (based on lunar cycles or weekday rules). Examples: Easter (first Sunday after first full moon after March 21), Thanksgiving (fourth Thursday in November), Chinese New Year (second new moon after winter solstice). Our database accounts for these variations.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto pt-8">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="How accurate are holiday dates?"
              answer="Our holiday data is sourced from official government publications and established calendars. Dates are accurate for the current year. We update annually to reflect any changes or newly declared holidays."
            />
            <FAQItem
              question="Can I use this data for commercial purposes?"
              answer="Our holiday data is provided for informational use. For commercial integration (apps, websites), we recommend verifying dates with official government sources."
            />
            <FAQItem
              question="Are state/provincial holidays included?"
              answer="We include major regional holidays for larger countries when widely observed. For precise local holidays, consult your local government's official calendar."
            />
            <FAQItem
              question="Why is a certain holiday missing?"
              answer="We aim for comprehensive coverage but may miss less-widely-observed holidays. If you notice an omission, please let us know and we'll consider adding it."
            />
            <FAQItem
              question="Do you include school holidays?"
              answer="We focus on public and federal holidays rather than academic calendars, as school breaks vary by district and institution. Educational institutions should consult their specific academic schedules."
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Related Time Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/calendar" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold text-text-primary mb-1">Calendar</h3>
              <p className="text-sm text-text-secondary">Interactive calendar with events</p>
            </a>
            <a href="/world-clock" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold text-text-primary mb-1">World Clock</h3>
              <p className="text-sm text-text-secondary">Time in cities worldwide</p>
            </a>
            <a href="/time-zone-converter" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-text-primary mb-1">Time Converter</h3>
              <p className="text-sm text-text-secondary">Convert between timezones</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-accent-primary/10 rounded-xl p-4">
      <h3 className="font-semibold text-text-primary mb-2">{question}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
    </div>
  )
}
