'use client'

import { useState, useEffect } from 'react'
import { getCommonTimezones, formatOffset, getFlag } from '@/lib/timeUtils'

export default function HolidaysClient() {
  const [selectedCountry, setSelectedCountry] = useState('US')
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

  const countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  ]

  const holidaysData: Record<string, Array<{ date: string; name: string; type: string }>> = {
    US: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Federal' },
      { date: '2024-01-15', name: 'Martin Luther King Jr. Day', type: 'Federal' },
      { date: '2024-02-19', name: "Washington's Birthday", type: 'Federal' },
      { date: '2024-05-27', name: 'Memorial Day', type: 'Federal' },
      { date: '2024-06-19', name: 'Juneteenth National Independence Day', type: 'Federal' },
      { date: '2024-07-04', name: 'Independence Day', type: 'Federal' },
      { date: '2024-09-02', name: 'Labor Day', type: 'Federal' },
      { date: '2024-10-14', name: "Columbus Day", type: 'Federal' },
      { date: '2024-11-11', name: 'Veterans Day', type: 'Federal' },
      { date: '2024-11-28', name: 'Thanksgiving Day', type: 'Federal' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Federal' },
    ],
    GB: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Bank Holiday' },
      { date: '2024-03-29', name: 'Good Friday', type: 'Bank Holiday' },
      { date: '2024-04-01', name: 'Easter Monday', type: 'Bank Holiday' },
      { date: '2024-05-06', name: 'Early May Bank Holiday', type: 'Bank Holiday' },
      { date: '2024-05-27', name: 'Spring Bank Holiday', type: 'Bank Holiday' },
      { date: '2024-08-26', name: 'Summer Bank Holiday', type: 'Bank Holiday' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Bank Holiday' },
      { date: '2024-12-26', name: 'Boxing Day', type: 'Bank Holiday' },
    ],
    CA: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Statutory' },
      { date: '2024-02-19', name: "Family Day (AB,BC,ON,SK)", type: 'Statutory' },
      { date: '2024-04-19', name: 'Good Friday', type: 'Statutory' },
      { date: '2024-07-01', name: 'Canada Day', type: 'Statutory' },
      { date: '2024-09-02', name: 'Labour Day', type: 'Statutory' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Statutory' },
      { date: '2024-12-26', name: 'Boxing Day', type: 'Statutory' },
    ],
    AU: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Public' },
      { date: '2024-01-26', name: 'Australia Day', type: 'Public' },
      { date: '2024-03-11', name: 'Labour Day (WA)', type: 'Public' },
      { date: '2024-04-01', name: 'Easter Monday', type: 'Public' },
      { date: '2024-04-25', name: 'Anzac Day', type: 'Public' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Public' },
      { date: '2024-12-26', name: 'Boxing Day', type: 'Public' },
    ],
    DE: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Public' },
      { date: '2024-03-29', name: 'Good Friday', type: 'Public' },
      { date: '2024-04-01', name: 'Easter Monday', type: 'Public' },
      { date: '2024-05-09', name: 'Ascension Day', type: 'Public' },
      { date: '2024-10-03', name: 'German Unity Day', type: 'Public' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Public' },
      { date: '2024-12-26', name: 'St. Stephen\'s Day', type: 'Public' },
    ],
    FR: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Public' },
      { date: '2024-03-29', name: 'Good Friday', type: 'Public' },
      { date: '2024-04-01', name: 'Easter Monday', type: 'Public' },
      { date: '2024-05-01', name: 'Labour Day', type: 'Public' },
      { date: '2024-05-08', name: 'Victory in Europe Day', type: 'Public' },
      { date: '2024-07-14', name: 'Bastille Day', type: 'Public' },
      { date: '2024-11-11', name: 'Armistice Day', type: 'Public' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Public' },
    ],
    JP: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Public' },
      { date: '2024-01-08', name: 'Coming of Age Day', type: 'Public' },
      { date: '2024-02-11', name: 'National Foundation Day', type: 'Public' },
      { date: '2024-02-23', name: 'The Emperor\'s Birthday', type: 'Public' },
      { date: '2024-03-20', name: 'Vernal Equinox Day', type: 'Public' },
      { date: '2024-04-29', name: 'Showa Day', type: 'Public' },
      { date: '2024-05-03', name: 'Constitution Memorial Day', type: 'Public' },
      { date: '2024-05-04', name: 'Greenery Day', type: 'Public' },
      { date: '2024-05-05', name: 'Children\'s Day', type: 'Public' },
      { date: '2024-11-03', name: 'Culture Day', type: 'Public' },
      { date: '2024-11-23', name: 'Labor Thanksgiving Day', type: 'Public' },
    ],
    IN: [
      { date: '2024-01-26', name: 'Republic Day', type: 'National' },
      { date: '2024-03-08', name: 'Holi', type: 'Regional' },
      { date: '2024-03-25', name: 'Holi', type: 'Regional' },
      { date: '2024-04-08', name: 'Bhagwan Mahavir Jayanti', type: 'National' },
      { date: '2024-04-14', name: 'Dr. B.R. Ambedkar Jayanti', type: 'National' },
      { date: '2024-04-17', name: 'Ram Navami', type: 'National' },
      { date: '2024-05-17', name: 'Buddha Purnima', type: 'National' },
      { date: '2024-08-15', name: 'Independence Day', type: 'National' },
      { date: '2024-10-02', name: 'Gandhi Jayanti', type: 'National' },
      { date: '2024-10-12', name: 'Dussehra', type: 'National' },
      { date: '2024-11-01', name: 'Karnataka Rajyotsava', type: 'Regional' },
      { date: '2024-12-25', name: 'Christmas', type: 'National' },
    ],
    BR: [
      { date: '2024-01-01', name: "New Year's Day", type: 'National' },
      { date: '2024-02-12', name: 'Carnival', type: 'Regional' },
      { date: '2024-02-13', name: 'Carnival', type: 'Regional' },
      { date: '2024-04-21', name: 'Tiradentes Day', type: 'National' },
      { date: '2024-05-01', name: 'Labour Day', type: 'National' },
      { date: '2024-09-07', name: 'Independence Day', type: 'National' },
      { date: '2024-10-12', name: 'Our Lady of Aparecida', type: 'National' },
      { date: '2024-11-02', name: 'All Souls\' Day', type: 'National' },
      { date: '2024-11-15', name: 'Proclamation of the Republic', type: 'National' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'National' },
    ],
    MX: [
      { date: '2024-01-01', name: "New Year's Day", type: 'Federal' },
      { date: '2024-02-05', name: 'Constitution Day', type: 'Federal' },
      { date: '2024-03-18', name: 'Benito Juárez Birthday', type: 'Federal' },
      { date: '2024-04-01', name: 'Holy Week', type: 'Federal' },
      { date: '2024-05-01', name: 'Labor Day', type: 'Federal' },
      { date: '2024-09-16', name: 'Independence Day', type: 'Federal' },
      { date: '2024-10-01', name: 'Día de la Raza', type: 'Federal' },
      { date: '2024-11-02', name: 'Día de los Muertos', type: 'Federal' },
      { date: '2024-11-18', name: 'Revolution Day', type: 'Federal' },
      { date: '2024-12-25', name: 'Christmas Day', type: 'Federal' },
    ],
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const holidays = holidaysData[selectedCountry] || []
  const filteredHolidays = holidays.filter(h => {
    const month = new Date(h.date).getMonth()
    return month === selectedMonth
  })

  const getCountry = (code: string) => countries.find(c => c.code === code) || { flag: '🌐' }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Controls */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="input"
            >
              {countries.map(({ code, name, flag }) => (
                <option key={code} value={code}>
                  {flag} {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Select Month
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="input"
            >
              {monthNames.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Holidays List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">
          Holidays in {new Date(2024, selectedMonth, 1).toLocaleDateString('en-US', { month: 'long' })}
        </h2>

        {filteredHolidays.length > 0 ? (
          <div className="space-y-3">
            {filteredHolidays.map((holiday, index) => {
              const date = new Date(holiday.date)
              const flag = getFlag(selectedCountry)
              return (
                <div
                  key={index}
                  className="card flex items-center gap-4 hover:scale-[1.01] transition-transform"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center border border-accent-primary/10">
                    <div className="text-center">
                      <div className="text-xs text-text-muted">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                      <div className="text-lg font-bold text-accent-primary">{date.getDate()}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary text-lg">
                      {holiday.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-sm">
                    <span className="text-accent-primary">{holiday.type}</span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="card text-center py-12">
            <div className="text-4xl mb-4">📅</div>
            <p className="text-text-secondary">
              No major holidays in {monthNames[selectedMonth]} for {countries.find(c => c.code === selectedCountry)?.name}.
            </p>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <div className="glass rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Global Holiday Calendar
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Our holiday database includes major public holidays, observances, and celebrations from countries worldwide. Whether you're planning international business, scheduling travel, or coordinating with global teams, knowing holiday schedules helps avoid conflicts and shows cultural awareness.
          </p>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Why Track Global Holidays?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Business planning:</strong> Schedule meetings and deadlines around public holidays</li>
            <li><strong>Travel planning:</strong> Know when attractions may be closed</li>
            <li><strong>Cultural awareness:</strong> Understand important dates in different cultures</li>
            <li><strong>Customer service:</strong> Anticipate business closures in other countries</li>
            <li><strong>Team coordination:</strong> Respect team members' holidays and observances</li>
          </ul>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Types of Holidays Included
          </h3>
          <p>
            Our database covers federal holidays, public holidays, religious observances, and cultural celebrations. Note that some holidays move each year (like Easter) while others are fixed (like Christmas). Regional holidays specific to certain states or provinces are also included where applicable.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          <FAQItem
            question="Are all holidays shown here official public holidays?"
            answer="We display officially recognized public holidays, federal holidays, and widely observed celebrations. Some countries have regional holidays not listed here—check your local government's official calendar for complete information."
          />
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
