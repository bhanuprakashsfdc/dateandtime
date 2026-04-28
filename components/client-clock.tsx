'use client'

import { useState, useEffect } from 'react'

export default function ClientClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <div className="space-y-6">
      <div className="clock-ticks text-4xl md:text-6xl tracking-tight font-mono">
        {formatTime(time)}
      </div>
      <div className="text-lg md:text-xl text-text-secondary">
        {formatDate(time)}
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-sm text-accent-primary">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        {timezone}
      </div>
    </div>
  )
}
