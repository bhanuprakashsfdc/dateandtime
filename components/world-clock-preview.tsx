'use client'

import { useState, useEffect } from 'react'

const popularCities = [
  { city: 'New York', timezone: 'America/New_York', flag: '🇺🇸' },
  { city: 'London', timezone: 'Europe/London', flag: '🇬🇧' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
  { city: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺' },
  { city: 'Paris', timezone: 'Europe/Paris', flag: '🇫🇷' },
  { city: 'Dubai', timezone: 'Asia/Dubai', flag: '🇦🇪' },
]

export default function WorldClockPreview() {
  const [times, setTimes] = useState<Record<string, string>>({})

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {}
      popularCities.forEach(({ city, timezone }) => {
        const date = new Date()
        const options: Intl.DateTimeFormatOptions = {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }
        newTimes[city] = new Intl.DateTimeFormat('en-US', options).format(date)
      })
      setTimes(newTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {popularCities.map(({ city, timezone, flag }) => (
        <div
          key={city}
          className="card p-4 text-center hover:scale-[1.02] transition-transform duration-200"
        >
          <div className="text-3xl mb-2">{flag}</div>
          <h4 className="font-semibold text-text-primary mb-1">{city}</h4>
          <div className="text-sm text-text-secondary mb-1">{timezone}</div>
          <div className="font-mono text-lg font-bold text-accent-primary">
            {times[city] || '--:--:--'}
          </div>
        </div>
      ))}
    </div>
  )
}
