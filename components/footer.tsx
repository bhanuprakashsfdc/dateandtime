import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-accent-primary/10 bg-bg-secondary/30 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <span className="text-xl font-bold gradient-text">TimeX</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xs">
              Beautiful, modern time and date tools for a connected world.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-bg-tertiary/50 flex items-center justify-center hover:bg-accent-primary/20 transition-colors text-sm">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-bg-tertiary/50 flex items-center justify-center hover:bg-accent-primary/20 transition-colors text-sm">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/world-clock" className="text-text-secondary hover:text-accent-primary transition-colors">World Clock</Link></li>
              <li><Link href="/time-zone-converter" className="text-text-secondary hover:text-accent-primary transition-colors">Time Converter</Link></li>
              <li><Link href="/calendar" className="text-text-secondary hover:text-accent-primary transition-colors">Calendar</Link></li>
              <li><Link href="/countdown" className="text-text-secondary hover:text-accent-primary transition-colors">Countdown Timer</Link></li>
              <li><Link href="/date-calculator" className="text-text-secondary hover:text-accent-primary transition-colors">Date Calculator</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/holidays" className="text-text-secondary hover:text-accent-primary transition-colors">Holidays</Link></li>
              <li><Link href="/api" className="text-text-secondary hover:text-accent-primary transition-colors">API</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-accent-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-accent-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-text-secondary hover:text-accent-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-text-secondary hover:text-accent-primary transition-colors">Terms</Link></li>
              <li><Link href="/cookies" className="text-text-secondary hover:text-accent-primary transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-primary/10 text-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} TimeX. All rights reserved. Built with ❤️ for time enthusiasts.</p>
        </div>
      </div>
    </footer>
  )
}
