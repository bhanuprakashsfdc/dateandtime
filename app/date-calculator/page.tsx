import type { Metadata } from 'next'
import DateCalculatorClient from '@/components/date-calculator-client'

export const metadata: Metadata = {
  title: 'Date Calculator - Duration, Add Days, Age & More',
  description: 'Calculate date differences, add/subtract days, find day of week, calculate age, compute business days. Powerful date calculator with intuitive interface.',
  keywords: ['date calculator', 'date difference', 'add days', 'age calculator', 'day of week', 'date duration', 'business days'],
  openGraph: {
    title: 'Date Calculator - Duration, Add Days, Age & More',
    description: 'All-in-one date calculator for durations, date arithmetic, day of week, and age calculations.',
    url: 'https://timex.live/date-calculator',
  },
}

export default function DateCalculatorPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Date Calculator</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Powerful date calculations: find durations, add/subtract time, get the day of week, calculate age, and more.
          </p>
        </div>

        {/* Calculator Tool */}
        <DateCalculatorClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            What Is a Date Calculator?
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              A date calculator is a tool that performs arithmetic and comparisons on calendar dates. Unlike a standard calculator which works with numbers, a date calculator understands calendar concepts like days, weeks, months, years, weekends, and holidays. It answers time-based questions with precision.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Common Date Calculations
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duration between dates:</strong> How many days, weeks, months, or years between two dates?</li>
              <li><strong>Add/subtract time:</strong> What date is X days/weeks/months/years from now?</li>
              <li><strong>Day of week:</strong> What day of the week is a specific date?</li>
              <li><strong>Age calculation:</strong> How old am I in years, months, and days?</li>
              <li><strong>Day of year:</strong> Which day number is this in the year?</li>
              <li><strong>Week number:</strong> What week of the year is it?</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Practical Applications
            </h3>
            <p>
              Use date calculators for project planning (duration between milestones), personal planning (countdown to events), legal/medical forms (age verification), billing cycles (payment due dates), travel planning (visa validity periods), historical research, and event scheduling. Businesses use them for contract deadlines, shipping ETA calculations, and financial period analysis.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Date Arithmetic Explained
            </h3>
            <p>
              Adding months vs days produces different results due to varying month lengths. For instance, adding one month to January 31 gives February 28/29, whereas adding 30 days gives March 2 (non-leap) or March 1 (leap). Choosing the appropriate unit depends on whether you're working on a calendar schedule (use months) or a fixed duration (use days).
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
              question="Does this calculator account for leap years?"
              answer="Yes. Our date calculations correctly handle leap years, including February 29. Duration and age calculations are accurate regardless of leap years."
            />
            <FAQItem
              question="How are months calculated when they have different lengths?"
              answer="Months are calculated based on calendar months, not a fixed number of days. For example, adding 1 month to January 31 results in February 28 (or 29 in leap years), not February 30. This is called 'month arithmetic' and is typically what people want when planning calendar events."
            />
            <FAQItem
              question="Can I calculate business days between dates?"
              answer="For business day calculations, we recommend our Business Days Calculator (coming soon). It will exclude weekends and optionally include holiday exclusion based on country."
            />
            <FAQItem
              question="What's the valid date range I can use?"
              answer="Our calculator supports dates from approximately year 1000 to 9999. Extremely old or far future dates may have limitations due to calendar reform differences."
            />
            <FAQItem
              question="Does the age calculator account for exact time of birth?"
              answer="The age calculator uses dates only, not times of day. It calculates completed years, months, and days. For precise age down to the hour/minute, you'd need a more specialized tool."
            />
            <FAQItem
              question="Can I calculate the day of week for a future date?"
              answer="Absolutely. Enter any future date to determine what day of the week it will fall on. This is useful for planning events and understanding calendar patterns."
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            More Useful Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/calendar" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold text-text-primary mb-1">Calendar</h3>
              <p className="text-sm text-text-secondary">Interactive date picker</p>
            </a>
            <a href="/countdown" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-semibold text-text-primary mb-1">Countdown Timer</h3>
              <p className="text-sm text-text-secondary">Count down to events</p>
            </a>
            <a href="/time-zone-converter" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-text-primary mb-1">Time Converter</h3>
              <p className="text-sm text-text-secondary">Convert time between zones</p>
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
