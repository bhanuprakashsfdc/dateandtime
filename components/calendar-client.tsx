'use client'

import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth,
  eachDayOfInterval, isSameMonth, isSameDay, isToday,
  getDay
} from 'date-fns'

interface Event {
  date: Date
  title: string
  color?: string
}

const sampleEvents: Event[] = [
  { date: new Date(), title: 'Team Meeting', color: 'bg-accent-primary/20' },
  { date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), title: 'Project Deadline', color: 'bg-warning/20' },
  { date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), title: 'Sprint Retrospective', color: 'bg-success/20' },
  { date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), title: 'Sprint Planning', color: 'bg-accent-secondary/20' },
  { date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), title: 'Release Day', color: 'bg-accent-tertiary/20' },
]

export default function CalendarClient() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events] = useState<Event[]>(sampleEvents)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day))
  }

  // Pad with empty cells for days before month starts
  const startingDayOfWeek = getDay(monthStart)
  const paddedDays = Array(startingDayOfWeek).fill(null)
  const allDays = [...paddedDays, ...monthDays]

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Calendar Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="btn-secondary py-2 px-4">
              Previous
            </button>
            <button onClick={() => setCurrentMonth(new Date())} className="btn-secondary py-2 px-4">
              Today
            </button>
            <button onClick={nextMonth} className="btn-secondary py-2 px-4">
              Next
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-text-muted py-2">
              {day}
            </div>
          ))}
          {allDays.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="h-24" />
            }

            const dayEvents = getEventsForDay(day)
            const isCurrentMonth = isSameMonth(day, currentMonth)
            const isSelected = isSameDay(day, selectedDate)
            const isTodayDate = isToday(day)

            return (
              <div
                key={day.toISOString()}
                onClick={() => setSelectedDate(day)}
                className={`
                  h-24 p-2 rounded-xl border transition-all cursor-pointer
                  ${isCurrentMonth ? 'bg-bg-secondary/30' : 'bg-bg-tertiary/20 opacity-50'}
                  ${isSelected ? 'border-accent-primary ring-2 ring-accent-primary/30' : 'border-accent-primary/10'}
                  ${isTodayDate ? 'ring-2 ring-accent-secondary/30' : ''}
                  hover:bg-bg-tertiary/50
                `}
              >
                <div className="text-sm font-medium text-text-secondary mb-1">
                  {format(day, 'd')}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded truncate ${event.color} text-text-primary`}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-text-muted px-2">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Selected Date Events */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 text-text-primary">
          Events on {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        {getEventsForDay(selectedDate).length > 0 ? (
          <div className="space-y-3">
            {getEventsForDay(selectedDate).map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-bg-tertiary/30 rounded-xl border border-accent-primary/5"
              >
                <div className={`w-1 h-10 rounded-full ${event.color?.replace('20', '')}`} />
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary">{event.title}</h4>
                  <p className="text-sm text-text-muted">
                    {format(selectedDate, 'h:mm a')}
                  </p>
                </div>
                <button className="text-accent-primary text-sm hover:underline">
                  Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-secondary">
            No events scheduled for this day.
          </p>
        )}
      </div>

      {/* SEO Content */}
      <div className="glass rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          About Our Calendar Tool
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Our calendar tool provides an intuitive way to view, manage, and plan events across dates. With a beautiful dark interface and smooth interactions, planning your schedule becomes a pleasant experience.
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
            question="Can I add my own events?"
            answer="Event creation coming soon! We're working on allowing you to add, edit, and delete events directly in the calendar with persistent storage."
          />
          <FAQItem
            question="Does the calendar sync with Google Calendar or Outlook?"
            answer="Calendar integration is in our roadmap. Future versions will support syncing with Google Calendar, Outlook, Apple Calendar, and other popular services."
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
