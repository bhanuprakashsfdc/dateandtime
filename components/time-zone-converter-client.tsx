'use client'

import { useState, useEffect } from 'react'
import { getCommonTimezones, getTimeZoneOffsetMinutes, formatOffset } from '@/lib/timeUtils'

export default function TimeZoneConverterClient() {
  const [sourceTz, setSourceTz] = useState('America/New_York')
  const [targetTz, setTargetTz] = useState('Europe/London')
  const [date, setDate] = useState(new Date())
  const [sourceTime, setSourceTime] = useState('')

  const timezones = getCommonTimezones()

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: sourceTz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }
    setSourceTime(new Intl.DateTimeFormat('en-US', options).format(date))
  }, [date, sourceTz])

  const getConvertedTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: targetTz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  const swapTimezones = () => {
    setSourceTz(targetTz)
    setTargetTz(sourceTz)
  }

  function formatTimezone(timezone: string) {
    return timezone.split('/').pop()?.replace('_', ' ') || timezone
  }

  function getFlag(countryCode: string) {
    return String.fromCodePoint(...countryCode?.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)) || '🌐')
  }

  function WorkingHoursBar({ label, timezone, color = 'bg-accent-primary' }: {
    label: string
    timezone: string
    color?: string
  }) {
    return (
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-secondary">{label} Working Hours</span>
          <span className="text-text-muted">09:00 - 17:00</span>
        </div>
        <div className="h-12 bg-bg-tertiary/30 rounded-xl overflow-hidden relative">
          <div
            className={`absolute top-0 bottom-0 ${color}/20 border-y border-${color}/40`}
            style={{ left: '37.5%', right: '12.5%' }}
          />
          <div className="absolute inset-0 flex items-center px-4 text-sm text-text-muted">
            {timezone}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Controls */}
      <div className="card">
        <h2 className="text-xl font-bold mb-6 text-text-primary">Convert Time</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Source */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-text-secondary">
              Source Timezone
            </label>
            <select
              value={sourceTz}
              onChange={(e) => setSourceTz(e.target.value)}
              className="input"
            >
              {timezones.map(({ timezone, city, country }) => (
                <option key={timezone} value={timezone}>
                  {city} ({formatTimezone(timezone)})
                </option>
              ))}
            </select>

            <div className="p-6 bg-bg-tertiary/50 rounded-xl border border-accent-primary/10">
              <div className="text-sm text-text-muted mb-1">Current Time</div>
              <div className="font-mono text-3xl font-bold text-accent-primary">
                {sourceTime}
              </div>
              <div className="text-sm text-text-secondary mt-2">
                {date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </div>
          </div>

          {/* Swap button */}
          <div className="flex items-end justify-center pb-2">
            <button
              onClick={swapTimezones}
              className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors"
              aria-label="Swap timezones"
            >
              <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          {/* Target */}
          <div className="space-y-3 md:col-start-2">
            <label className="block text-sm font-medium text-text-secondary">
              Target Timezone
            </label>
            <select
              value={targetTz}
              onChange={(e) => setTargetTz(e.target.value)}
              className="input"
            >
              {timezones.map(({ timezone, city, country }) => (
                <option key={timezone} value={timezone}>
                  {city} ({formatTimezone(timezone)})
                </option>
              ))}
            </select>

            <div className="p-6 bg-bg-tertiary/50 rounded-xl border border-accent-primary/10">
              <div className="text-sm text-text-muted mb-1">Converted Time</div>
              <div className="font-mono text-3xl font-bold text-accent-secondary">
                {getConvertedTime()}
              </div>
              <div className="text-sm text-text-secondary mt-2">
                {date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working Hours Comparison */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 text-text-primary">
          Working Hours Comparison
        </h3>
        <div className="space-y-4">
          <WorkingHoursBar label="Source" timezone={sourceTz} color="bg-accent-primary" />
          <WorkingHoursBar label="Target" timezone={targetTz} color="bg-accent-secondary" />
        </div>
        <p className="text-sm text-text-muted mt-4">
          Overlapping working hours are shown in purple. Best meeting times typically fall within these overlaps.
        </p>
      </div>

      {/* Quick Reference Table */}
      <div className="card overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-text-primary">
          Quick Reference
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-accent-primary/10">
              <th className="text-left py-3 text-text-secondary">City</th>
              <th className="text-left py-3 text-text-secondary">Timezone</th>
              <th className="text-left py-3 text-text-secondary">Current Time</th>
              <th className="text-left py-3 text-text-secondary">Offset</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-accent-primary/5">
            {timezones.slice(0, 8).map(({ city, timezone, country }) => {
               const offset = formatOffset(getTimeZoneOffsetMinutes(timezone))
              const time = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
              }).format(new Date())
              const flag = getFlag(country)
              return (
                <tr key={city} className="hover:bg-bg-tertiary/30 transition-colors">
                  <td className="py-3">
                    <span className="mr-2">{flag}</span>
                    {city}
                  </td>
                  <td className="text-text-muted font-mono">{timezone}</td>
                  <td className="font-mono text-accent-primary">{time}</td>
                  <td className="text-text-muted">UTC{offset}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* SEO Content */}
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Understanding Timezone Conversion
        </h2>
        <div className="text-text-secondary space-y-4">
          <p>
            Timezone conversion is essential for coordinating across different regions. Our converter makes it easy to find corresponding times between any two locations worldwide. Simply select your source and target timezones, and see the converted time instantly.
          </p>
          <h3 className="text-lg font-semibold text-text-primary">How It Works</h3>
          <p>
            The tool uses the IANA timezone database, which contains accurate timezone information for locations globally. When you select timezones, we calculate the offset difference and apply it to the current time (or your selected time), displaying the precise corresponding time in the target zone.
          </p>
          <h3 className="text-lg font-semibold text-text-primary">Best Practices for Global Meetings</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always confirm timezones when scheduling international calls</li>
            <li>Use 24-hour format to avoid AM/PM confusion</li>
            <li>Send calendar invites with timezone explicitly stated</li>
            <li>Consider working hours and avoid scheduling too early or too late</li>
            <li>Double-check daylight saving time changes, as they can shift meeting times unexpectedly</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto pt-8 border-t border-accent-primary/10">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="What is a timezone offset?"
            answer="A timezone offset is the difference in hours and minutes from Coordinated Universal Time (UTC). For example, New York is UTC-5 during standard time, meaning it's 5 hours behind UTC."
          />
          <FAQItem
            question="How does daylight saving time affect conversion?"
            answer="Daylight saving time shifts clocks forward by 1 hour in spring and backward in fall. Our converter automatically accounts for DST based on current dates and timezone rules."
          />
          <FAQItem
            question="Can I convert times for specific dates?"
            answer="Currently, our converter shows current time conversion. For historical or future dates, use our Date Calculator tool which can handle specific date arithmetic."
          />
          <FAQItem
            question="Why might my converted time be off by an hour?"
            answer="This is usually due to daylight saving time transitions or incorrect timezone selection. Double-check that you've selected the correct city and be aware that some regions observe DST differently."
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
