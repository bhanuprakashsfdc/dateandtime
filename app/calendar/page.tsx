import type { Metadata } from 'next'
import CalendarClient from '@/components/calendar-client'

export const metadata: Metadata = {
  title: 'Calendar - Interactive Calendar with Holidays & Events',
  description: 'Beautiful interactive calendar with event scheduling, holiday displays, and month navigation. Plan your schedule with style.',
  keywords: ['calendar', 'online calendar', 'event planner', 'schedule', 'holidays', 'date picker'],
  openGraph: {
    title: 'Calendar - Interactive Calendar with Holidays & Events',
    description: 'Plan your schedule with our beautiful interactive calendar. View events, track holidays, and stay organized.',
    url: 'https://timex.live/calendar',
  },
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Interactive Calendar</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Plan your schedule with a beautiful, easy-to-use calendar. View events, track holidays, and stay organized.
          </p>
        </div>

        {/* Calendar Tool */}
        <CalendarClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Why Use an Online Calendar?
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              An online calendar helps you stay organized, remember important dates, and manage your time effectively. Unlike paper planners, digital calendars can automatically display holidays, recurring events, and provide instant navigation between months and years.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Benefits of Digital Calendars
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Always accessible:</strong> View your calendar from any device with internet</li>
              <li><strong>Automatic updates:</strong> Holidays and events can be synced automatically</li>
              <li><strong>Searchable:</strong> Quickly find specific dates or events</li>
              <li><strong>Shareable:</strong> Share schedules with teams, family, or friends</li>
              <li><strong>Reminders:</strong> Get notifications before important events (coming soon)</li>
              <li><strong>Color coding:</strong> Categorize events by type or priority</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Tips for Effective Calendar Use
            </h3>
            <p>
              Make the most of your calendar by: blocking time for focused work, setting recurring events for regular meetings, adding travel time before and after appointments, using color categories for different life areas (work, personal, health), and reviewing your calendar weekly to plan ahead.
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
              question="How do I add events to the calendar?"
              answer="Event creation is coming soon! We're building a full event management system that will let you add, edit, and delete events with reminders and notifications."
            />
            <FAQItem
              question="Does this sync with Google Calendar?"
              answer="Calendar sync is on our roadmap. Future releases will integrate with Google Calendar, Outlook, Apple Calendar, and other popular services."
            />
            <FAQItem
              question="Can I export my calendar?"
              answer="ICS export functionality is planned, allowing you to import your TimeX calendar into other applications."
            />
            <FAQItem
              question="Are public holidays automatically included?"
              answer="We're integrating global holiday data. Soon, the calendar will automatically display public holidays based on your selected country."
            />
            <FAQItem
              question="Can I share my calendar with others?"
              answer="Calendar sharing features are in development, enabling you to share schedules with teams, families, or publicly."
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Complementary Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/holidays" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🎉</div>
              <h3 className="font-semibold text-text-primary mb-1">Holidays</h3>
              <p className="text-sm text-text-secondary">Browse global holidays</p>
            </a>
            <a href="/date-calculator" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-text-primary mb-1">Date Calculator</h3>
              <p className="text-sm text-text-secondary">Calculate date differences</p>
            </a>
            <a href="/countdown" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-semibold text-text-primary mb-1">Countdown Timer</h3>
              <p className="text-sm text-text-secondary">Create event countdowns</p>
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
