'use client'

import { useState, useEffect, useRef } from 'react'

const presets = [
  { label: '1 Minute', seconds: 60 },
  { label: '5 Minutes', seconds: 300 },
  { label: '10 Minutes', seconds: 600 },
  { label: '25 Minutes', seconds: 1500 }, // Pomodoro
  { label: '1 Hour', seconds: 3600 },
  { label: '1 Day', seconds: 86400 },
]

export default function CountdownClient() {
  const [duration, setDuration] = useState(60) // in seconds
  const [timeLeft, setTimeLeft] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [label, setLabel] = useState('')

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, timeLeft])

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true)
    }
  }

  const handlePause = () => {
    setIsRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleReset = () => {
    setIsRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setTimeLeft(duration)
  }

  const handlePreset = (seconds: number, presetLabel: string) => {
    setDuration(seconds)
    setTimeLeft(seconds)
    setIsRunning(false)
    setLabel(presetLabel)
  }

  const handleCustomTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(e.target.value) || 0
    const seconds = minutes * 60
    setDuration(seconds)
    setTimeLeft(seconds)
    setIsRunning(false)
    setLabel('')
  }

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / 86400)
    totalSeconds %= 86400
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    if (days > 0) {
      return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = ((duration - timeLeft) / duration) * 100

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Timer Display */}
      <div className="card">
        <div className="flex flex-col items-center">
          {/* Circular Progress */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-bg-tertiary"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-1000 ease-linear"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-accent-primary)" />
                  <stop offset="100%" stopColor="var(--color-accent-secondary)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Time Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-mono text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                {formatTime(timeLeft)}
              </div>
              {isRunning && (
                <div className="text-sm text-accent-secondary mt-2 animate-pulse">
                  Running...
                </div>
              )}
              {timeLeft === 0 && (
                <div className="text-sm text-success mt-2 font-semibold">
                  Time's Up!
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {!isRunning ? (
              <button onClick={handleStart} className="btn-primary text-lg px-8 py-3">
                Start
              </button>
            ) : (
              <button onClick={handlePause} className="btn-secondary text-lg px-8 py-3">
                Pause
              </button>
            )}
            <button onClick={handleReset} className="btn-secondary text-lg px-8 py-3">
              Reset
            </button>
          </div>

          {label && (
            <p className="text-sm text-text-muted mt-4">
              {label} timer
            </p>
          )}
        </div>
      </div>

      {/* Preset Timers */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 text-text-primary">Quick Presets</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {presets.map(({ label, seconds }) => (
            <button
              key={label}
              onClick={() => handlePreset(seconds, label)}
              className="py-3 px-4 rounded-xl bg-bg-tertiary/50 border border-accent-primary/10 text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Timer */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 text-text-primary">Custom Duration</h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            placeholder="Minutes"
            onChange={handleCustomTime}
            className="input w-40"
            min="1"
            max="9999"
          />
          <span className="text-text-secondary">minutes</span>
        </div>
        <p className="text-sm text-text-muted mt-2">
          Enter a duration in minutes. The timer will count down from that value.
        </p>
      </div>

      {/* SEO Content */}
      <div className="glass rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          About Countdown Timers
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Countdown timers help you track time remaining until an important event. Whether you're timing a workout, cooking, waiting for a sale, or counting down to a celebration, our timer provides accurate, beautiful countdowns that you can customize to your needs.
          </p>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Common Uses for Countdown Timers
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cooking & baking:</strong> Set timers for recipes without leaving your phone on the counter</li>
            <li><strong>Study sessions:</strong> Use Pomodoro technique (25 min work, 5 min break)</li>
            <li><strong>Workouts:</strong> Time exercises, rest periods, and intervals</li>
            <li><strong>Presentations:</strong> Keep track of speaking time</li>
            <li><strong>Events:</strong> Count down to birthdays, holidays, vacations, or deadlines</li>
            <li><strong>Gaming:</strong> Time-limited challenges and speedruns</li>
            <li><strong>Children:</strong> Teach time awareness with visual countdowns</li>
          </ul>

          <h3 className="text-lg font-semibold text-text-primary mt-6">
            Tips for Effective Timer Use
          </h3>
          <p>
            Place your timer where you can see it. Use descriptive labels so you remember what you're timing. For longer timers, consider setting multiple reminders. When the timer ends, make sure your notification volume is on so you don't miss the alert. Our timer also displays a 'Time's Up!' message when finished.
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
            question="Does the timer continue if I close the browser?"
            answer="Currently, the timer runs in your browser session and will stop if you close the tab. Persistent timers with server-side tracking are planned for a future update."
          />
          <FAQItem
            question="Can I have multiple timers running at once?"
            answer="Our current version supports a single active timer. Multi-timer support is on our roadmap for advanced scheduling needs."
          />
          <FAQItem
            question="Does the timer make a sound when it finishes?"
            answer="Currently, the timer displays a visual 'Time's Up!' message. Audio notifications are in development for future releases."
          />
          <FAQItem
            question="What's the maximum timer duration?"
            answer="You can set timers up to 9999 minutes (approximately 166 hours or nearly a week) in the current version."
          />
          <FAQItem
            question="Can I customize the timer appearance?"
            answer="The timer uses our standard beautiful dark theme. Custom themes and colors are planned for future updates."
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
