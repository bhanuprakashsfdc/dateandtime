'use client'

import { useState } from 'react'
import { format, differenceInDays, addDays, subDays, addWeeks, subWeeks,
  addMonths, subMonths, addYears, subYears, parseISO, isValid } from 'date-fns'

type CalculatorMode = 'duration' | 'add' | 'dayOfWeek' | 'age'

export default function DateCalculatorClient() {
  const [mode, setMode] = useState<CalculatorMode>('duration')
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [addValue, setAddValue] = useState('')
  const [addUnit, setAddUnit] = useState<'days' | 'weeks' | 'months' | 'years'>('days')
  const [checkDate, setCheckDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [birthDate, setBirthDate] = useState(format(new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'))

  const renderDurationCalculator = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input"
          />
        </div>
      </div>

      {startDate && endDate && isValid(parseISO(startDate)) && isValid(parseISO(endDate)) && (
        <div className="card bg-bg-tertiary/30">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Result</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ResultCard
              label="Total Days"
              value={differenceInDays(parseISO(endDate), parseISO(startDate)).toString()}
            />
            <ResultCard
              label="Weeks"
              value={Math.floor(differenceInDays(parseISO(endDate), parseISO(startDate)) / 7).toString()}
            />
            <ResultCard
              label="Months (approx)"
              value={Math.floor(differenceInDays(parseISO(endDate), parseISO(startDate)) / 30.44).toString()}
            />
            <ResultCard
              label="Years (approx)"
              value={Math.floor(differenceInDays(parseISO(endDate), parseISO(startDate)) / 365.25).toString()}
            />
          </div>
          <div className="mt-4 pt-4 border-t border-accent-primary/10 text-sm text-text-muted">
            Duration from {format(parseISO(startDate), 'MMM d, yyyy')} to {format(parseISO(endDate), 'MMM d, yyyy')}
          </div>
        </div>
      )}
    </div>
  )

  const renderAddSubtract = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Start Date
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input w-full md:w-auto"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Amount
          </label>
          <input
            type="number"
            value={addValue}
            onChange={(e) => setAddValue(e.target.value)}
            placeholder="10"
            className="input"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Unit
          </label>
          <select
            value={addUnit}
            onChange={(e) => setAddUnit(e.target.value as any)}
            className="input"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button
            onClick={() => {/* Add logic */}}
            disabled={!addValue}
            className="btn-primary flex-1"
          >
            Add
          </button>
          <button
            onClick={() => {/* Subtract logic */}}
            disabled={!addValue}
            className="btn-secondary flex-1"
          >
            Subtract
          </button>
        </div>
      </div>

      {addValue && startDate && isValid(parseISO(startDate)) && (
        <div className="card bg-bg-tertiary/30">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              label="Add"
              value={calculateDate(startDate, parseInt(addValue), addUnit, true)}
            />
            <ResultCard
              label="Subtract"
              value={calculateDate(startDate, parseInt(addValue), addUnit, false)}
            />
          </div>
        </div>
      )}
    </div>
  )

  const renderDayOfWeek = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Select Date
        </label>
        <input
          type="date"
          value={checkDate}
          onChange={(e) => setCheckDate(e.target.value)}
          className="input w-full md:w-auto"
        />
      </div>

      {checkDate && isValid(parseISO(checkDate)) && (
        <div className="card bg-bg-tertiary/30">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Result</h3>
          <div className="space-y-2">
            <ResultCard
              label="Day of Week"
              value={format(parseISO(checkDate), 'EEEE')}
            />
            <ResultCard
              label="Day of Year"
              value={parseInt(format(parseISO(checkDate), 'DDD')).toString()}
            />
            <ResultCard
              label="Week of Year"
              value={parseInt(format(parseISO(checkDate), 'ww')).toString()}
            />
            <ResultCard
              label="Is Weekend?"
              value={['Saturday', 'Sunday'].includes(format(parseISO(checkDate), 'EEEE')) ? 'Yes' : 'No'}
            />
          </div>
        </div>
      )}
    </div>
  )

  const renderAgeCalculator = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Birth Date
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="input w-full md:w-auto"
        />
      </div>

      {birthDate && isValid(parseISO(birthDate)) && (
        <div className="card bg-bg-tertiado/30">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Your Age</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ResultCard
              label="Years"
              value={calculateAge(birthDate).years.toString()}
            />
            <ResultCard
              label="Months"
              value={calculateAge(birthDate).months.toString()}
            />
            <ResultCard
              label="Days"
              value={calculateAge(birthDate).days.toString()}
            />
            <ResultCard
              label="Total Days"
              value={calculateAge(birthDate).totalDays.toString()}
            />
          </div>
          <p className="text-sm text-text-muted mt-4">
            As of {format(new Date(), 'MMM d, yyyy')}
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Mode Tabs */}
      <div className="card">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'duration', label: 'Date Duration', icon: '📊' },
            { key: 'add', label: 'Add/Subtract', icon: '➕' },
            { key: 'dayOfWeek', label: 'Day of Week', icon: '📆' },
            { key: 'age', label: 'Age Calculator', icon: '🎂' },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setMode(key as CalculatorMode)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                mode === key
                  ? 'bg-accent-primary text-white shadow-lg'
                  : 'bg-bg-tertiary/50 text-text-secondary hover:text-accent-primary border border-accent-primary/10'
              }`}
            >
              <span>{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Content */}
      <div className="card">
        {mode === 'duration' && renderDurationCalculator()}
        {mode === 'add' && renderAddSubtract()}
        {mode === 'dayOfWeek' && renderDayOfWeek()}
        {mode === 'age' && renderAgeCalculator()}
      </div>

      {/* SEO Content */}
      <div className="glass rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Date Calculator Guide
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Our date calculator helps you perform various date-based calculations with ease. Whether you need to find the number of days between two dates, add or subtract time, determine the day of the week for a specific date, or calculate age, this tool provides instant, accurate results.
          </p>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Available Calculations
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Date Duration:</strong> Find the exact number of days, weeks, months, or years between any two dates</li>
            <li><strong>Add/Subtract:</strong> Add or subtract days, weeks, months, or years from a given date</li>
            <li><strong>Day of Week:</strong> Determine what day of the week any date falls on, plus day of year and week number</li>
            <li><strong>Age Calculator:</strong> Calculate precise age in years, months, and days from birth date</li>
          </ul>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Use Cases
          </h3>
          <p>
            Common applications include project deadline planning, counting down to events, determining age for legal or medical forms, calculating billing cycles, scheduling recurring tasks, historical research, and travel planning. The add/subtract feature is particularly useful for project managers computing end dates based on start date and duration.
          </p>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Accuracy Notes
          </h3>
          <p>
            Our calculator uses standard calendar systems (Gregorian). Month calculations are approximate (30.44 days average) since months vary in length. Week calculations assume 7-day weeks. Year calculations account for leap years with 365.25-day average. For precise business days, use a dedicated business day calculator that considers weekends and holidays.
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
            question="How are months calculated in the duration?"
            answer="We use an approximate month length of 30.44 days (365.25 / 12) for month calculations, as calendar months vary from 28-31 days. For precise month differences, consider a specialized date diff tool."
          />
          <FAQItem
            question="Does this account for leap years?"
            answer="Yes. All calculations correctly handle leap years, which have 366 days. Age calculations and duration computations account for February 29 in leap years."
          />
          <FAQItem
            question="Can I calculate business days between dates?"
            answer="For business day calculations, use our Business Days Calculator (coming soon). It will exclude weekends and optionally account for holidays based on selected countries."
          />
          <FAQItem
            question="What's the difference between adding months vs days?"
            answer="Adding months respects calendar boundaries (e.g., adding 1 month to Jan 31 gives Feb 28/29), while adding 30 days gives a fixed 30-day increment. Month arithmetic is usually what you want for calendar planning."
          />
          <FAQItem
            question="How accurate is the age calculator?"
            answer="The age calculator provides precise age broken into years, months, and days based on birth date and current date. It correctly handles month length variations and leap years."
          />
        </div>
      </div>
    </div>
  )
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-secondary/50 rounded-xl p-4 border border-accent-primary/10">
      <div className="text-sm text-text-muted mb-1">{label}</div>
      <div className="text-2xl font-bold font-mono text-accent-primary">
        {value}
      </div>
    </div>
  )
}

function calculateDate(dateStr: string, value: number, unit: string, adding: boolean) {
  const date = parseISO(dateStr)
  if (!isValid(date)) return 'Invalid date'

  let result: Date
  switch (unit) {
    case 'days':
      result = adding ? addDays(date, value) : subDays(date, value)
      break
    case 'weeks':
      result = adding ? addWeeks(date, value) : subWeeks(date, value)
      break
    case 'months':
      result = adding ? addMonths(date, value) : subMonths(date, value)
      break
    case 'years':
      result = adding ? addYears(date, value) : subYears(date, value)
      break
    default:
      return 'Invalid'
  }

  return format(result, 'MMM d, yyyy')
}

function calculateAge(birthDateStr: string) {
  const birth = parseISO(birthDateStr)
  const today = new Date()

  let years = today.getFullYear() - birth.getFullYear()
  let months = today.getMonth() - birth.getMonth()
  let days = today.getDate() - birth.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    days += daysInMonth(prevMonth)
  }

  if (months < 0) {
    years--
    months += 12
  }

  const totalDays = differenceInDays(today, birth)

  return { years, months, days, totalDays }
}

function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-accent-primary/10 rounded-xl p-4 max-w-4xl mx-auto">
      <h3 className="font-semibold text-text-primary mb-2">{question}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
    </div>
  )
}
