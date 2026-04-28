'use client'

import { useState, useEffect } from 'react'
import { getCommonTimezones, getTimeZoneOffsetMinutes, formatOffset } from '@/lib/timeUtils'

export default function WorldClockClient() {
  const [cities] = useState(getCommonTimezones())
  const [search, setSearch] = useState('')
  const [times, setTimes] = useState<Record<string, string>>({})
  const [offsets, setOffsets] = useState<Record<string, string>>({})

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      const newTimes: Record<string, string> = {}
      const newOffsets: Record<string, string> = {}

      cities.forEach(({ city, timezone }) => {
        // Get time for timezone
        const formattedTime = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
        newTimes[city] = formattedTime

        // Get offset
        const offset = getTimeZoneOffsetMinutes(timezone, now)
        newOffsets[city] = formatOffset(offset)
      })

      setTimes(newTimes)
      setOffsets(newOffsets)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [cities])

  const filteredCities = cities.filter(city =>
    city.city.toLowerCase().includes(search.toLowerCase()) ||
    city.timezone.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search city or timezone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input pl-12"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCities.map(({ city, timezone, country }) => {
          // Get flag
          const flag = country
            ? String.fromCodePoint(...country.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)))
            : '🌐'

          return (
            <div
              key={city}
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-text-primary text-lg">{city}</h3>
                  <p className="text-xs text-text-muted">{timezone}</p>
                </div>
                <span className="text-3xl">{flag}</span>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-2xl md:text-3xl font-bold text-accent-primary tracking-tight">
                  {times[city] || '--:--:--'}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-text-muted">
                  <span className="px-2 py-1 rounded-md bg-bg-tertiary/50 border border-accent-primary/10">
                    UTC{offsets[city] || '--:--'}
                  </span>
                  <span className="text-xs">Timezone Offset</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredCities.length === 0 && (
        <div className="text-center py-12 text-text-secondary">
          No cities found matching "{search}"
        </div>
      )}
    </div>
  )
}
