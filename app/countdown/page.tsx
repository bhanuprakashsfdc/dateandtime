import type { Metadata } from 'next'
import CountdownClient from '@/components/countdown-client'

export const metadata: Metadata = {
  title: 'Countdown Timer - Set Custom Timers & Alarms',
  description: 'Create countdown timers for any occasion. Set presets, custom durations, and track time remaining with beautiful visual display.',
  keywords: ['countdown timer', 'online timer', 'stopwatch', 'alarm', 'pomodoro', 'timer app'],
  openGraph: {
    title: 'Countdown Timer - Set Custom Timers & Alarms',
    description: 'Beautiful countdown timers for any purpose. Presets, custom durations, and smooth visual countdown.',
    url: 'https://timex.live/countdown',
  },
}

export default function CountdownPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Countdown Timer</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Set beautiful countdown timers for any event. From quick kitchen timers to hour-long sessions, our timer keeps you on track.
          </p>
        </div>

        {/* Timer Tool */}
        <CountdownClient />

        {/* SEO Content */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            Why Use a Countdown Timer?
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Countdown timers are essential tools for time management, productivity, and daily life. They help you allocate specific time blocks to tasks, preventing overrun and ensuring you stay focused. Our online timer provides a beautiful, distraction-free interface that works on any device.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Popular Timer Uses
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pomodoro Technique:</strong> 25-minute work sessions with 5-minute breaks</li>
              <li><strong>Cooking:</strong> Perfect for timing recipes without managing kitchen gadgets</li>
              <li><strong>Study & exams:</strong> Allocate study time and simulate test conditions</li>
              <li><strong>Fitness:</strong> Time workouts, HIIT intervals, and rest periods</li>
              <li><strong>Meetings:</strong> Keep presentations and meetings on schedule</li>
              <li><strong>Events:</strong> Count down to birthdays, holidays, New Year's, product launches</li>
              <li><strong>Children:</strong> Help kids understand time limits for activities</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mt-6">
              Timer Best Practices
            </h3>
            <p>
              For maximum effectiveness, be specific about what you're timing. Instead of "work," label it "write report introduction." This creates intention and makes the timer feel more important. Also, respect the timer—if it goes off, either stop or acknowledge that you need to extend. This builds time awareness and discipline over time.
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
              question="Can I use this timer on my phone?"
              answer="Yes! TimeX is fully responsive and works on mobile browsers. Add it to your home screen for quick access like an app."
            />
            <FAQItem
              question="Does the timer have sound alerts?"
              answer="Audio notifications are planned. Currently, the timer displays a prominent 'Time's Up!' message. Sound alerts will be added in a future update."
            />
            <FAQItem
              question="Can I set multiple timers?"
              answer="Our basic timer supports one at a time. Multi-timer functionality with stacking and labels is in our development roadmap."
            />
            <FAQItem
              question="Will the timer keep running if I switch tabs?"
              answer="Yes! The timer continues counting in the background even if you switch to another tab or minimize your browser (as long as it remains open)."
            />
            <FAQItem
              question="What's the Pomodoro technique?"
              answer="The Pomodoro Technique is a time management method where you work for 25 minutes, take a 5-minute break, and repeat four times before taking a longer 15-30 minute break. It promotes sustained focus with regular rest periods."
            />
            <FAQItem
              question="Can I save custom timer durations?"
              answer="You can use any minute value in the custom input. Preset durations are provided for quick access. Persistent user preferences with saved presets may be added in future updates."
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">
            More Time Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/date-calculator" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-text-primary mb-1">Date Calculator</h3>
              <p className="text-sm text-text-secondary">Calculate durations & add days</p>
            </a>
            <a href="/world-clock" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold text-text-primary mb-1">World Clock</h3>
              <p className="text-sm text-text-secondary">Check time worldwide</p>
            </a>
            <a href="/time-zone-converter" className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-text-primary mb-1">Time Converter</h3>
              <p className="text-sm text-text-secondary">Convert between timezones</p>
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
