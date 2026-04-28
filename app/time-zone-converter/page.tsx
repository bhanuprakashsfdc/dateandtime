import type { Metadata } from 'next'
import TimeZoneConverterClient from '@/components/time-zone-converter-client'

export const metadata: Metadata = {
  title: 'Time Zone Converter - Convert Time Across Timezones',
  description: 'Instantly convert time between timezones. Find corresponding times in different cities, plan meetings, and schedule calls across the globe.',
  keywords: ['timezone converter', 'time converter', 'timezone', 'time conversion', 'world time', 'meeting planner'],
  openGraph: {
    title: 'Time Zone Converter - Convert Time Across Timezones',
    description: 'Instantly convert time between any two timezones worldwide.',
    url: 'https://timex.live/time-zone-converter',
  },
}

export default function TimeZoneConverterPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Time Zone Converter</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Convert any time between timezones instantly. Perfect for scheduling international meetings, calls, and events.
          </p>
        </div>

        {/* Converter Tool */}
        <TimeZoneConverterClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            What Is a Time Zone Converter?
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              A time zone converter is a tool that calculates the corresponding time in different parts of the world. Since Earth is divided into 24 time zones, a single moment can represent different hours of the day depending on your location. Our converter handles these calculations automatically.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              How to Use the Time Zone Converter
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select your source timezone (where the event is happening)</li>
              <li>Select your target timezone (where you want to know the time)</li>
              <li>The converted time appears instantly</li>
              <li>Click the swap button if you need to reverse the conversion</li>
            </ol>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Common Use Cases
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Scheduling international meetings:</strong> Find a time that works for participants in different countries</li>
              <li><strong>Travel planning:</strong> Know local time at your destination before you arrive</li>
              <li><strong>Global events:</strong> Stream events live at the correct time for your audience</li>
              <li><strong>Remote work coordination:</strong> Align team availability across distributed teams</li>
              <li><strong>Family calls:</strong> Call loved ones in other countries at reasonable hours</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Understanding Timezone Offsets
            </h3>
            <p>
              Timezone offsets are expressed as UTC+X or UTC-X, where X is the number of hours difference from Coordinated Universal Time. For example, UTC+8 is 8 hours ahead of UTC, while UTC-5 is 5 hours behind. Our converter displays these offsets to help you understand the relationship between timezones.
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
              question="How do timezones work?"
              answer="Timezones are regions that share the same local time, usually following longitude lines. The Earth is divided into 24 timezones, each one hour apart. Timezones are based on UTC (Coordinated Universal Time) with offsets like UTC+5 or UTC-8."
            />
            <FAQItem
              question="What is daylight saving time?"
              answer="Daylight saving time (DST) is the practice of advancing clocks by one hour during summer months to extend evening daylight. Not all countries observe DST, and start/end dates vary by region."
            />
            <FAQItem
              question="Why is time conversion important for remote teams?"
              answer="For distributed teams spanning multiple countries, knowing each other's working hours prevents scheduling conflicts and respects work-life balance. A time zone converter helps find overlapping hours for collaboration."
            />
            <FAQItem
              question="Can this converter handle historical dates?"
              answer="This tool shows current time conversion. For historical dates or future planning, use our Date Calculator, which can calculate times on specific dates accounting for DST changes."
            />
            <FAQItem
              question="Are timezone offsets always in whole hours?"
              answer="Most timezone offsets are in whole hours, but some are offset by 30 or 45 minutes, like Nepal (UTC+5:45) and parts of Australia. Our converter handles all offset variations accurately."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Need More Time Tools?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/world-clock" className="btn-secondary">
              View World Clock
            </a>
            <a href="/date-calculator" className="btn-secondary">
              Date Calculator
            </a>
            <a href="/countdown" className="btn-secondary">
              Create Countdown
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
